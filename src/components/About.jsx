import React from "react"
import Navbar from "./Navbar"
import "../assets/minictf.css";

function About() {
    return (
        <>
            <Navbar />
            {/* <Hexabg /> */}
            {/* <A /> */}
            {/* <Background /> */}
            <div className="w-full h-screen text-center">
                <div className="w-full h-full p-2 flex justify-center ">
                    <div class = "minictf-container">
                        <h1 className="text-white f">
                            ABOUT  <span className="text-[#01c8ef]"> US  </span>
                        </h1>
                        <div className="py-5 text-justify max-w-[900px] items-center">
                            WRECK-IT 4.0 merupakan kegiatan tahunan di bidang keamanan siber yang bekerjasama dengan Program Studi Rekayasa Keamanan Siber Politeknik Siber dan Sandi Negara. Pada tahun 2023, WRECK-IT 4.0 mengusung tema #EncouragingInnovation: Developing Younger Generation through Education and Technology. Kompetisi ini diadakan oleh <a href="https://korpstar-poltekssn.org/" className="text-[#FFFFFF] fontStyle: 'bold'">
                            Senat Korps Taruna Politeknik Siber dan Sandi Negara. </a>
                        </div>
                        <div className="flex items-center justify-center py-10">
                            <iframe height="360" width="640" src='https://www.youtube.com/embed/BIfiodooo7o'
                                frameborder='10'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                            />
                        </div>
                        <div className="py-5 text-justify max-w-[900px]">
                            Babak penyisihan dilaksanakan secara daring menggunakan sistem Jeopardy. Bagi sepuluh tim yang menyelesaikan soal dan mengumpulkan write-up dengan baik serta tidak melakukan pelanggaran maka berhak melanjutkan ke babak final.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;