import React from "react";
import Navbar from "./Navbar";
import "../assets/minictf.css";

function About() {
  return (
    <>
      <Navbar />
      {/* <Hexabg /> */}
      {/* <A /> */}
      {/* <Background /> */}
      <div className="w-full h-screen text-center p-4 ">
      <div className="w-full h-full px-2 py-8 flex justify-center">
          <div className="minictf-container">
            <h1 className="text-white font-bold">
              WHAT IS <span className="text-[#01c8ef]"> CTF? </span>
            </h1>
            <div className="py-5 desc-ctf text-justify max-w-[1200px]">
              Capture The Flag (CTF) is a type of computer security competition
              that challenges participants to find and exploit vulnerabilities
              in real-world scenarios. CTF competitions are designed to test
              participants' skills in various fields of computer security,
              including web security, cryptography, reverse engineering, binary
              exploitation, and more. In Jeopardy-style CTF competitions,
              participants are given challenges and required to obtain the
              flag, such as a string of characters, password, or key. To
              capture the flag, participants must use their knowledge and
              skills to find weaknesses and exploit them in systems and
              applications, then prove their control over the system by
              capturing the flag. CTF competitions are usually held for a
              period of time, ranging from a few hours to several days; 
              participants can be individuals or teams. CTF competitions 
              provide a fun and educational way for participants to learn 
              about computer security and apply their skills in a safe and 
              controlled environment. Overall, CTF competitions are a great 
              way to improve skills, network, and stay up-to-date on the latest 
              trends and challenges, especially in the field of computer security.
            </div>
            <div className="quiz-mini">
              <h1 className="text-white font-bold">
                MINI <span className="text-[#01c8ef]"> CTF </span>
              </h1>
              <iframe
                src="https://minictf.wreckit.id"
                title="External Website"
                width="100%"
                height="600px"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
