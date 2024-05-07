import React from "react";
import "../assets/question.css";
import "../assets/quiz.css";

function Question(){
  return (
  <div>
    <div>
      <iframe
        src="https://minictf.wreckit.id"
        title="External Website"
        width="100%"
        frameBorder="0"
        scrolling="auto"
        onLoad={(e) => {
          e.target.style.height = e.target.contentWindow.document.body.scrollHeight + "px";
        }}
      />
    </div>
  </div>
    
    
  );
};

export default Question;
