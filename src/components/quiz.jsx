import React, { useState } from "react";
import "../assets/quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const downloadURL = "https://drive.google.com/file/d/1eFPFS4PEhEKfaJiU4Tb7TTbgmtlu1hWa/view?usp=sharing";
  const [isCorrect, setIsCorrect] = useState(null);
  const handleDownload = () => {
    // logic to track the download, such as sending an event to Google Analytics
    window.ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: 'click',
      eventLabel: 'Quiz File',
    });
  };

  const questions = [
    {
      question: "Get the flag after searching on my profile.",
      correctAnswer: "WRECKIT{7h4Nk5_F0r_J01n_1N_0u12_3v3Nt5_4N6_900D_LuCk}"
    },
    {
      question: "I have some secret key that encrypt with some rule, can you decrypt it??",
      correctAnswer: "wreckit{34sy_qu#35t10n_m4k3_712i4L_94m3_h3h3h3h3h3!!!}",
      paragraph:
        "Mw==***110101***IA==***110011***MQ==***100000***Mw==***110111***IA==***110011***NA==***100000***Mw==***110111***IA==***110011***OQ==***100000***Mw==***110001***IA==***110011***OQ==***100000***Mw==***111001***IA==***110011***Mw==***100000***Mw==***110010***IA==***110011***Nw==***100000***Mw==***111000***IA==***110011***MQ==***100000***Mw==***110000***IA==***110011***NQ==***100000***Mw==***110011***IA==***110011***OA==***100000***Mw==***110010***IA==***110011***OA==***100000***Mw==***110100***IA==***110011***MA==***100000***Mw==***110011***IA==***110011***NQ==***100000***Mw==***110011***IA==***110011***NQ==***100000***Mw==***110010***IA==***110011***OQ==***100000***Mw==***110100***IA==***110011***NQ==***100000***Mw==***110111***IA==***110011***OA==***100000***Mw==***110101***IA==***110011***MA==***100000***Mw==***110110***IA==***110011***OQ==***100000***Mw==***110110***IA==***110011***Ng==***100000***Mw==***110001***IA==***110011***OQ==***100000***Mw==***110010***IA==***110011***NA==***100000***Mw==***110101***IA==***110011***Ng==***100000***Mw==***110101***IA==***110011***Mw==***100000***Mw==***110110***IA==***110011***NA==***100000***Mw==***111001***IA==***110011***MQ==***100000***Mw==***110001***IA==***110011***OQ==***100000***Mw==***110001***IA==***110011***Mg==***100000***Mw==***110001***IA==***110011***NA==***100000***Mw==***110010***IA==***110011***Nw==***100000***Mw==***110001***IA==***110011***Mw==***100000***Mw==***111001***IA==***110011***MQ==***100000***Mw==***110101***IA==***110011***MA==***100000***Mw==***110000***IA==***110011***MA==***100000***Mw==***111000***IA==***110011***Mw==***100000***Mw==***110000***IA==***110011***Ng==***100000***Mw==***110100***IA==***110011***NQ==***100000***Mw==***110100***IA==***110011***Mw==***100000***Mw==***111001***IA==***110011***Mw==***100000***Mw==***110111***IA==***110011***OQ==***100000***Mw==***110100***IA==***110011***NA==***100000***Mw==***111001***IA==***110011***MQ==***100000***Mw==***110000***IA==***110011***OQ==***100000***Mw==***110111***IA==***110011***Mw==***100000***Mw==***110000***IA==***110011***NA==***100000***Mw==***110111***IA==***110011***NQ==***100000***Mw==***110011***IA==***110011***OQ==***100000***Mw==***110111***IA==***110011***OQ==***100000***Mw==***110111***IA==***110011***Nw==***100000***Mw==***110111***IA==***110011***NA==***100000***Mw==***110011***IA==***110011***MA==***100000***Mw==***110101***IA==***110011***Mg==***100000***Mw==***110010***IA==***110011***Mw==***100000***Mw==***110110***IA==***110011***Mw==***100000***Mw==***110101***IA==***110011***Ng==***100000***Mw==***110101***IA==***110011***OA==***100000***Mw==***110110***IA==***110011***NA==***100000***Mw==***110001***IA==***110011***MA==***100000***Mw==***110001***IA==***110011***OQ==***100000***Mw==***110011***IA==***110011***OQ==***100000***Mw==***110101***IA==***110011***OA==***100000***Mw==***111000***IA==***110011***NA==***100000***Mw==***110011***IA==***110011***OQ==***100000***Mw==***111000***IA==***110011***MQ==***100000***Mw==***110000***IA==***110011***NA==***100000***Mw==***110010***IA==***110011***OQ==***"
    },
    {
      question: "Check this out",
      correctAnswer: "wreckit{Ju57_Y0u_t0_l3412n1n9_Am4z1n9_R544==-0/._C0mpl3xx}",
      paragraph: <a href={downloadURL} download target="_blank" onClick={handleDownload}>Download</a>

    }
  ];

  const handleSubmit = event => {
    event.preventDefault();
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 10);
      setIsCorrect(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setAnswer("");
        setIsCorrect(null);
      }, 1000);
    } else {
      setIsCorrect(false);
    }

  };



  const handleParagraphToggle = () => {
    setShowParagraph(!showParagraph);
  };

  return (
  <div className="container-space">
    <div className="quiz-container">
      <div className="quiz-title">
        <h1 className="pt-[10%] text-white">
          MINI  <span className="text-[#01c8ef]"> CTF  </span>
        </h1>

      </div>
      <div className="easy-box">EASY</div>

      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="quiz-question">
          {questions[currentQuestion].question}
        </div>
        <input
          type="text"
          value={answer}
          onChange={event => setAnswer(event.target.value)}
          className="quiz-input"
        />
        {currentQuestion === 1 || currentQuestion === 2 ? (
          <div>
            <div onClick={handleParagraphToggle} className="quiz-paragraph-toggle">
              Show/Hide Information
            </div>
            {showParagraph && (
              <div className="quiz-paragraph">
                {questions[currentQuestion].paragraph}
              </div>
            )}
          </div>
        ) : null}
        <input type="submit" value="Submit" className="quiz-submit" />
        <div className="quiz-score">
          Score: {score}/30
        </div>
        {isCorrect === true && (
          <div className="quiz-correct">Correct!</div>
        )}
        {isCorrect === false && (
          <div className="quiz-incorrect">Incorrect.</div>
        )}
      </form>

    </div>
  </div>
    
  );
};

export default Quiz;
