import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default class WebSocketUtil {
  static _socket = null;
  static _stompClient = null;
  static _token = null;
  static _subscribes = [];

  constructor(requestUrl, token, subscribes) {
    this._socket = new SockJS(requestUrl);
    this._token = token;
    this._subscribes = subscribes;
    this._stompClient = Stomp.over(this.socket);
  }

  get socket() {
    return this._socket;
  }

  get stompClient() {
    return this._stompClient;
  }

  get subscribes() {
    return this._subscribes;
  }

  get token() {
    return this._token;
  }

  connectWebSocket(onConnectSuceed, onConnectError) {
    this.stompClient.connect({}, onConnectSuceed, onConnectError);
  }

  sendMessageToChannel(channelUrl, content) {
    this.stompClient.send(channelUrl, {}, content);
  }

  subscribeChannel(channel, onResponse) {
    this.stompClient.subscribe(channel, (response) => onResponse(response));
  }
}
