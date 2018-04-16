if (
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('/static/sw.js')
    .then(function(reg) {})
    .catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
}
