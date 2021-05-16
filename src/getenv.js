/**
 * The main difference between prod and dev, is that
 * prod env is behind https and a webserver (like Nginx)
 *
 * @returns True, if production config is detected.
 */
export function isProduction() {
  if (window.location.protocol != 'https:') {
    return false;
  }
  return true;
}
