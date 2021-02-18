import React from "react";
import Button from "react-bootstrap/esm/Button";
import FromControl from "react-bootstrap/esm/FormControl";
import ApplicationComponent from "../lib/applicationComponent";
import Socket from "../lib/stompWebSocket/webSocketUtil";

export default class WebSocketTester extends ApplicationComponent {
  socket = null;

  state = {
    ...this.state,
    inputMessage: "",
    messages: [],
  };

  componentDidMount() {
    this.connectWebScoket();
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <p>WebSocketTester</p>
        <ChatArea messages={messages} />
        <FromControl
          placeHolder="your msg"
          onChange={(event) => {
            const inputMessage = event.target.value;
            this.setState({ inputMessage });
          }}
          value={this.state.inputMessage}
        />
        <Button onClick={this.onClickSendMessage}>Send</Button>
      </div>
    );
  }

  connectWebScoket() {
    this.socket = new Socket("http://127.0.0.1:8082/web-socket/connect", "", [
      "/topic/public",
    ]);
    this.socket.connectWebSocket(() => {
      this.socket.subscribeChannel("/topic/public/", (response) => {
        const jsonResponse = JSON.parse(response.body);
        this.setState((state) => ({
          messages: [...state.messages, jsonResponse],
        }));
      });
    });
  }

  onClickSendMessage = () => {
    this.socket.sendMessageToChannel(
      "/web-socket/chat.public/",
      JSON.stringify({
        sender: "its me",
        content: this.state.inputMessage,
        type: "CHAT",
        time: "",
      })
    );
    this.setState({
      inputMessage: "",
    });
  };
}

function ChatArea({ messages }) {
  return messages.map((message) => <p>{message.content}</p>);
}
