import React from "react";
import "../assets/pembicara.css";
import sp1 from "../assets/speaker1.jpg";
import sp2 from "../assets/speaker2.jpg";
import sp3 from "../assets/speaker3.jpg";
import sp4 from "../assets/speaker4.jpg";
import sp5 from "../assets/speaker5.jpg";

function Pembicara() {
  return (
    <>
      <h1 className="items-center flex justify-between max-w-[375px] m-auto tex f">Pembicara</h1>
      <div class="containers z-[2]">
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">UTIAN AYUBA 
            Security engineer at Akar Inti Data </h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img src={sp1} alt="" width="125" height="125" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">Dr. CHARLES LIM Swiss German University </h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img src={sp2} alt="" width="125" height="125" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">FANKY CHRISTIAN Sekretaris Jenderal APTIKNAS </h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img src={sp3} alt="" width="125" height="125" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">HARRY AGUSTIAN Autobahn Security</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img src={sp5} alt="" width="125" height="125" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">SUTEDJO TJAHJADI &nbsp;PT Datacomm Diangraha</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img src={sp4} alt="" width="125" height="125" />
            </div>
          </div>
        </div>
        {/* <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">RICHARDUS EKO Rektor Universitas Pradita</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img className="max-w-[125px]" src="https://yt3.googleusercontent.com/ytc/AL5GRJU_RZrranDsAHiBkO2UDtD8Q4UhUV43UEr7BJYkwOU=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
          </div>
        </div>
        <div class="cards">
          <div class="cards-unlocked">
            <h3 class="title">DR. AMIRUDDIN Politeknik Siber dan Sandi Negara</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="circle">
              <img className="max-w-[125px]" src="https://poltekssn.ac.id/wp-content/uploads/2022/08/a-150x150.jpg" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Pembicara;
