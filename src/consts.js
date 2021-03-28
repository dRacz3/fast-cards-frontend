export function get_full_ws_address(room, token, host) {
  const WS_ADDRESS = `ws://${host}/ws`;
  return `${WS_ADDRESS}/${room}/${token}`;
}
