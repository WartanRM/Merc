import { useState } from 'react';

function Contact() {
  const [name, SetName] = useState("User");
  const [email, SetEmail] = useState("example@gmail.com");
  const [message, SetMessage] = useState("write your comment here...");

  function handleEmailChange(event) {
    SetEmail(event.target.value);
  }

  function handleNameChange(event) {
    SetName(event.target.value);
  }

  function handleCommentChange(event) {
    SetMessage(event.target.value);
  }

  return (
    <div className="Contact">
      <div>
        <p>Name: {name}</p>
        <input value={name} onChange={handleNameChange} />

        <p>Email: {email}</p>
        <input value={email} onChange={handleEmailChange} />

        <div className="comment-wrapper">
          <p>Comment: </p>
            <textarea value={message} onChange={handleCommentChange} className="comment"></textarea>
            <button className="commentButton">Submit</button>
          
        </div>
      </div>
      <div className="info">
        <p>Note: Please share your thoughts and complaints, as we are continuously working towards bettering our experience and services to the community.</p>
      </div>
    </div>
  );
}

export default Contact;
