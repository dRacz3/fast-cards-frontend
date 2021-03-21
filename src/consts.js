const HOST_ADDRESS = window.location.hostname
const PORT = 8000
const WS_ADDRESS = `ws://${window.location.hostname}:${PORT}/ws`

export function get_full_ws_address(room, token) {
    return `${WS_ADDRESS}/${room}/${token}`
}

export default {
    HOST_ADDRESS, PORT, WS_ADDRESS
}