export class Message {
  constructor(sender, topic, content) {
    this.sender = sender;
    this.topic = topic;
    this.content = content;
  }
}

export class MessageListener {
  constructor(topic, listener_instance, callback) {
    this.topic = topic;
    this.listener_instance = listener_instance;
    this.callback = callback;
  }
}

export class SocketEvent {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}

export const SocketEventTypes = {
  SOCKET_ONOPEN: "SOCKET_ONOPEN",
  SOCKET_ONCLOSE: "SOCKET_ONCLOSE",
  SOCKET_ONERROR: "SOCKET_ONERROR",
  SOCKET_RECONNECT: "SOCKET_RECONNECT",
  SOCKET_RECONNECT_ERROR: "SOCKET_RECONNECT_ERROR"
};
