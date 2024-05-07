import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sponsor from "./Sponsor";
import Organizer from "./ornaizer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import main from "../assets/main.gif";
import flag from "../assets/flag.png";
import webinar from "../assets/webinar.png";
// import Timeline from "./Timeline"
import Pembicara from "./Pembicara";
import Keynote from "./keynote";
// import Cube from "./Cube"
import Timeline1 from "./Timeline1";
import Bg from "./Bg";
import Countdown from "./countdown";

function Main() {
  // function Loading() {
  //   return (
  //     <div className="loading h-screen flex justify-center items-center">
  //       <div className="flex flex-col items-center">
  //         <img src={main} className="mb-10 mx-auto" alt="Main Title" />
  //         <h2>Loading...</h2>
  //       </div>
  //     </div>
  //   );
  // }

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Change this to the duration of your desired loading time
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Navbar />
      {/* <Background /> */}
      {/* <Cube /> */}
      <div id="home" className="w-full h-full text-center flex-col items-center z-[2] ">
        <div className="header w-full h-screen mx-auto py-20 tex flex justify-center items-center">
          <div className="h-full flex flex-col pt-[10%] my-auto">
            <div className="logo max-h-full">
              <img src={main} className="mb-10 mx-auto" alt="Main Title" />
            </div>
            <Sponsor />
          </div>

          {/* <div className="main-title2">
            <Sponsor />
          </div> */}
        </div>
        <div className="items-center flex justify-center max-w-[800px] m-auto py-20 tex ">
          
          <Link to="/webinar">
            <div className="b1 p-6 grid justify-items-center shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300 z-[2]">
              <img src={webinar} width="250" height="10" alt="" />
              {/* Register Webinar */}
              <button className="boxx">Initiate</button>
            </div>
          </Link>
        </div>
        <div className="login-box z-[2]">
          <form>
            <a href="https://drive.google.com/drive/folders/1xbIEg9X2IPyJWEHeRAw7t0ff33F-tAyo" target="_blank" rel="noopener noreferrer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              RULES
            </a>
          </form>
        </div>
        <div className="items-center flex justify-around max-w-[1100px] pt-20 m-auto tex">
          <div>
            <img src={require("../assets/silver.gif")} width="100" alt="" />
            {/* SILVER */}
          </div>
          <div>
            <img src={require("../assets/gold.gif")} width="150" alt="" />
            {/* GOLD */}
          </div>
          <div>
            <img src={require("../assets/bronze.gif")} width="100" alt="" />
            {/* BRONZE */}
          </div>
        </div>
        <div className="items-center text-center flex justify-around max-w-[1100px] m-auto tex">
          <div>
            <h2 className="max-w-[300px]">IDR 8.000.000</h2>
            <h3 className="pt-3">PIAGAM PENGHARGAAN</h3>
            <h3>MERCHANDISE</h3>
          </div>
          <div>
            <h2 className="max-w-[300px]">IDR 10.000.000</h2>
            <h3 className="pt-3">PIAGAM PENGHARGAAN</h3>
            <h3>MERCHANDISE</h3>
          </div>
          <div>
            <h2 className="max-w-[300px]">IDR 5.000.000</h2>
            <h3 className="pt-3">PIAGAM PENGHARGAAN</h3>
            <h3>MERCHANDISE</h3>
          </div>
        </div>
        <div className="pt-20 tex z-[2]">
          <Timeline1 />
        </div>
        <div>
          <Countdown />
        </div>
        <div className="pt-20 tex">
          <Keynote />
        </div>
        <div className="z-[2]">
          <Pembicara />
        </div>

        <div className="pt-60 z-[2]">
          <Organizer />
        </div>
        <div className="z-[2]">
          <Footer />
        </div>
      </div>
      <Bg />
    </>
  );
}

export default Main;
