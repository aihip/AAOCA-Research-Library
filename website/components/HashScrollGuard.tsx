/**
 * The router sets `history.scrollRestoration = "manual"` and may restore
 * `location.hash` again during hydration. Keep the browser's initial fragment
 * jump, then remove the hash after the first layout has settled so a later
 * hydration pass cannot pull a reader back to the anchor.
 */
const GUARD = `(function(){
  if (!window.location.hash) return;
  function release() {
    if (window.location.hash) {
      history.replaceState(
        history.state,
        "",
        window.location.pathname + window.location.search
      );
    }
  }
  function releaseAfterInitialJump() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(release, 0);
      });
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", releaseAfterInitialJump, { once: true });
  } else {
    releaseAfterInitialJump();
  }
})();`;

export function HashScrollGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
