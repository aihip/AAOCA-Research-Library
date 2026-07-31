/**
 * The router sets `history.scrollRestoration = "manual"` and then, when the
 * client bundle hydrates, scrolls back to `location.hash` unless it finds its
 * own scroll position in the history state. Hydration lands roughly a second
 * after paint, so anyone who starts reading before then gets yanked back to the
 * anchor.
 *
 * Dropping the hash on the first real scroll gesture makes that restore a no-op
 * while leaving the behaviour intact for a reader who has not scrolled: land on
 * /#primer and stay put, scroll away and stay where you scrolled to.
 *
 * `scroll` is deliberately not one of the trigger events — the browser's own
 * fragment jump fires it, which would clear the hash for everybody.
 */
const GUARD = `(function(){
  if (!window.location.hash) return;
  var events = ["wheel", "touchmove", "keydown"];
  function release() {
    events.forEach(function (name) {
      window.removeEventListener(name, release, true);
    });
    if (window.location.hash) {
      history.replaceState(
        history.state,
        "",
        window.location.pathname + window.location.search
      );
    }
  }
  events.forEach(function (name) {
    window.addEventListener(name, release, { capture: true, passive: true });
  });
})();`;

export function HashScrollGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
