import React from "react";
import "../assets/keynote.css";
import kn1 from "../assets/keynote1.png";
import kn2 from "../assets/keynote2.png";
import kn3 from "../assets/keynote3.png";

function Keynote() {
  return (
    <>
      <div className="items-center flex justify-center max-w-[75%] m-auto">
        <h1 className="items-center f flex justify-between max-w-[300px] m-auto">Keynote</h1>
      </div>
      <div className="containersx items-center flex justify-around m-auto z-[2]">
        <div className="cardx">
          <p className="title2 f">Kepala BSSN</p>
          <p class="my-paragraph">Letnan Jenderal TNI (Purn.) Hinsa Siburian</p>
          <div className="circlex">
            <img src={kn1} alt="" width="200" />
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center mt-40 max-w-[75%] m-auto">
        <h1 className="items-center flex justify-between max-w-[400px] m-auto f">Welcoming Speech</h1>
      </div>
      <div className="containersx items-center flex justify-around m-auto z-[2]">
        <div className="cardx ">
          <p className="title2 f">Direktur POLTEK SSN</p>
          <p class="my-paragraph">Marsma TNI R. Tjahjo Khurniawan, S.T., M.Si.</p>
          <div className="circlex">
            <img src={kn2} alt="" width="200" />
          </div>
        </div>
        <div className="cardx">
          <p className="title2 f">Direktur BANK SINARMAS</p>
          <p class="my-paragraph">Soejanto Soetjijo</p>
          <div className="circlex">
            <img src={kn3} alt="" width="200" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Keynote;
