var env = process.env.NODE_ENV || 'development';

export function get_full_ws_address(room, token) {
  let WS_ADDRESS;
  if (env != 'development') {
    WS_ADDRESS = `wss://${window.location.hostname}/ws`;
  } else {
    const PORT = 8000;
    WS_ADDRESS = `ws://${window.location.hostname}:${PORT}/ws`;
  }

  return `${WS_ADDRESS}/${room}/${token}`;
}
