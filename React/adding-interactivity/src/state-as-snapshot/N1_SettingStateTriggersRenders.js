import { useState } from "react";

export default function SettingStateTriggersRenders() {
  const [isSend, setIsSend] = useState(false);
  const [message, setMessage] = useState(`Hello, I'm eieikyaw.`);

  if (isSend) {
    return <h1>Now sending your message .....</h1>;
  }

  const handleOnMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSend(true);
    sendMessage();
  };

  function sendMessage() {
    console.log(`Message ... ${message}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Type Message"
        value={message}
        onChange={handleOnMessage}
      />
      <button>Send</button>
    </form>
  );
}
