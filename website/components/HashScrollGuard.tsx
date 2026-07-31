/**
 * Resolve the initial fragment once the page markup exists, then remove it
 * before hydration can re-apply the same jump. This script is rendered after
 * the page children, so the target is already available and no delayed scroll
 * correction can fight with a reader's first wheel or touch gesture.
 */
const GUARD = `(function(){
  var hash = window.location.hash;
  if (!hash) return;

  var id = hash.slice(1);
  try {
    id = decodeURIComponent(id);
  } catch (_) {
    // A malformed fragment has no valid target, but should still be released.
  }

  var target = document.getElementById(id);
  if (target) {
    target.scrollIntoView();
  }

  history.replaceState(
    history.state,
    "",
    window.location.pathname + window.location.search
  );
})();`;

export function HashScrollGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
