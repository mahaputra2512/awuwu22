import React from "react"
import Navbar from "./Navbar"
import Formregweb from "./formctf0"
import "../assets/quiz.css";

function Ctf() {
    return (
        <>
        <Navbar />
            <div id="home" className="pt-[5%] w-full h-screen text-center">
                <div className="quiz-container">
                    <div className="quiz-title">
                        <h1 className="text-white f">
                            Form <span className="text-[#01c8ef]"> CTF</span>
                        </h1>
                    </div>
                    <Formregweb />

                </div>
            </div>
        </>
    )
}

export default Ctf;