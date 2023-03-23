import React, { useState } from "react";
import "../Styles/Form.css";

function ChatGPT() {
  const [inputMessage, setInputMessage] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://chatgpt-api.shn.hk/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: inputMessage }],
      }),
    });
    const json = await response.json();
    setResponseData(json.choices[0].message.content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formSubmit">
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      {responseData && (
        <div>
          <p>Response from API:</p>
          <p>{responseData}</p>
        </div>
      )}
    </div>
  );
}

export default ChatGPT;
