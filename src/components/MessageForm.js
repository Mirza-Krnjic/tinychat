import React from "react";
import Attachment from "./svg/Attachment";

function MessageForm({ handleSubmit, text, setText, setImg }) {
  return (
    <form className="message_form" onSubmit={handleSubmit}>
      <label htmlFor="img">
        <Attachment />
      </label>
      <input
        onChange={(e) => setImg(e.target.files[0])}
        type="file"
        id="img"
        accept="image/*"
        style={{ display: "none" }}
      />
      <div>
        <input
          style={{ borderRadius: "100px" }}
          type="text"
          placeholder="Enter message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <button
          className="btn"
          style={{
            backgroundColor: "transparent",
            borderRadius: "200px",
            padding: "8px 16px",
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
