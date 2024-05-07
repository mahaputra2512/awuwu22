import React from "react"
import Navbar from "./Navbar"
import FormWebinar from "./formwebinar0"
import "../assets/quiz.css";

function Webinar() {
    return (
        <>
        <Navbar />
            <div id="home" className="pt-[5%] w-full h-screen text-center">
                <div className="quiz-container">
                    <div className="quiz-title">
                        <h1 className="text-white f">
                            Form <span className="text-[#01c8ef]"> Webinar</span>
                        </h1>
                    </div>
                    <FormWebinar/>
                </div>
            </div>
        </>
    )
}

export default Webinar;