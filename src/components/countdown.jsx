import React, { useEffect, useState } from "react";
import "../assets/countdown.scss";

function Countdown() {
  const year = new Date().getFullYear();
  const fourthOfJuly = new Date(year,5, -12).getTime();
  const fourthOfJulyNextYear = new Date(year + 1, 1, 0).getTime();
  const month = new Date().getMonth();
  const [timerHtml, setTimerHtml] = useState('');

  useEffect(() => {
    let intervalId = setInterval(function () {
      // get today's date
      const today = new Date().getTime();

      // get the difference
      let diff;
      if (month > 6) {
        diff = fourthOfJulyNextYear - today;
      } else {
        diff = fourthOfJuly - today;
      }

      // math
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // display
      const timerHtml =
        `<div class="days"> \
        <div class="numbers">${days}</div>days</div> \
        <div class="hours"> \
        <div class="numbers">${hours}</div>hours</div> \
        <div class="minutes"> \
        <div class="numbers">${minutes}</div>minutes</div> \
        <div class="seconds"> \
        <div class="numbers">${seconds}</div>seconds</div> \
        </div>`;
      setTimerHtml(timerHtml);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [fourthOfJuly, fourthOfJulyNextYear, month]);

  return (
    <div className="container">
      {/* <h1>COUNTDOWN</h1> */}
      <div id="timer" dangerouslySetInnerHTML={{ __html: timerHtml }}></div>
    </div>
  );
}

export default Countdown;
