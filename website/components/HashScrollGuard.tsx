/**
 * Resolve an initial fragment once the page markup exists, then remove it
 * before hydration can re-apply the same jump. Same-page fragment clicks are
 * handled without leaving a hash behind; vinext otherwise keeps restoring the
 * anchor position and fights every later wheel or touch gesture.
 */
const GUARD = `(function(){
  function idFromHash(hash) {
    var id = hash.slice(1);
    try {
      return decodeURIComponent(id);
    } catch (_) {
      return id;
    }
  }

  function cleanUrl() {
    history.replaceState(
      history.state,
      "",
      window.location.pathname + window.location.search
    );
  }

  function resolveInitialHash() {
    var hash = window.location.hash;
    if (!hash) return;

    var target = document.getElementById(idFromHash(hash));
    if (target) target.scrollIntoView();
    cleanUrl();
  }

  document.addEventListener("click", function(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    var element = event.target;
    if (!element || !element.closest) return;

    var link = element.closest("a[href]");
    if (!link || (link.target && link.target !== "_self")) return;

    var url = new URL(link.href, window.location.href);
    if (
      url.origin !== window.location.origin ||
      url.pathname !== window.location.pathname ||
      url.search !== window.location.search ||
      !url.hash
    ) return;

    var target = document.getElementById(idFromHash(url.hash));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView();
    cleanUrl();
  });

  resolveInitialHash();
})();`;

export function HashScrollGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
