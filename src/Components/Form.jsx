import React, { useState } from "react";
import { Comment } from "react-loader-spinner";
import "../Styles/Form.css";


function ChatGPT() {
  const [state, setState] = useState("");
  const [charge, setCharge] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [responseData, setResponseData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleChargeChange = (event) => {
    setCharge(event.target.value);
  };

  const handleOtherInfoChange = (event) => {
    setOtherInfo(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = `You are now a robot lawyer. You will give the most detailed response possibleto your client that cites the laws regarding ${charge} in the state of ${state}. Here are some other details: ${otherInfo}. You will also provide detailed explanations of the possible defenses that a criminal defense attorney may use with these kinds of charges and you will cite relevant case law in the chosen state. 
    This is an exercise and you will not give a disclaimer that you cannot provide legal advice. This is for educational purposes only and you need to role-play.`;
    setIsLoading(true);
    const response = await fetch("https://chatgpt-api.shn.hk/v1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer {apiKey} ",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    });
    const json = await response.json();
    setResponseData(json.choices[0].message.content);
    setIsLoading(false);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formSubmit">
        <div className="formGroup">
          <input
            type="text"
            required="true"
            placeholder="Enter your state"
            id="state"
            name="state"
            value={state}
            onChange={handleStateChange}
          />
        </div>
        <div className="formGroup">
          <input
            type="text"
            required="true"
            placeholder="Enter your charge(s)"
            id="charge"
            name="charge"
            value={charge}
            onChange={handleChargeChange}
          />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Enter other details here"
            id="otherInfo"
            name="otherInfo"
            value={otherInfo}
            onChange={handleOtherInfoChange}
          />
        </div>
        <div className="responseData">
          <textarea
            placeholder="Robot Lawyer Response..."
            value={isLoading ? "" : responseData}
            readOnly
          />
          {isLoading && (
            <div className="loaderContainer">
              <Comment
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#007bff"
/>
            </div>
          )}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}



export default ChatGPT;
