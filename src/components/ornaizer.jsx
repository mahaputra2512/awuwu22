import React from "react";
import "../assets/sponsor.css";
import senkorps from "../assets/senkorpstar.png";
import sinarmas from "../assets/sinarmas1.png";
import { Row } from "react-bootstrap";

function Organizer() {
  return (
    <>
      <div className="items-center max-w-[1000px] m-auto ">
        <Row className="max-w-[1000px] pb-4 w-full h-full mx-auto p-2 flex justify-evenly items-center">
          <div>
            <h2 className=" text-white flicker">SUPPORTED BY</h2>
            <Row className="max-w-[500px] pb-4 w-full h-full mx-auto p-2 flex justify-center items-center z-[2]">
              <div className="pt-10 z-[2]">
                <li>
                  <a href="https://poltekssn.ac.id/">
                    <img src="https://poltekssn.ac.id/wp-content/uploads/2022/07/cropped-logo-small-1.png" alt="" width="100" className="grayscale-effect" />
                    {/* <img src='https://radartasik.disway.id/upload/a76a7e2ea00ca238f7141f4bfd9a5a9c.jpg' className="grayscale-effect" /> */}
                  </a>
                </li>
              </div>
              <div className="pt-10 z-[2]">
                <li>
                  <a href="https://www.banksinarmas.com/id/personal">
                    <img src={sinarmas} alt="" width="200" className="grayscale-effect" />
                    {/* <img src='https://radartasik.disway.id/upload/a76a7e2ea00ca238f7141f4bfd9a5a9c.jpg' className="grayscale-effect" /> */}
                  </a>
                </li>
              </div>
            </Row>
          </div>
          <div>
            <h2 className=" text-white flicker">ORGANIZED BY</h2>
            <Row className="max-w-[500px] pb-4 w-full h-full mx-auto p-2 flex justify-center items-center z-[2]">
              <div className="pt-10 z-[2]">
                <li>
                  <a href="https://korpstar-poltekssn.org/">
                    <img src={senkorps} alt="" width="100" height="100" className="grayscale-effect" />
                    {/* <img src='https://radartasik.disway.id/upload/a76a7e2ea00ca238f7141f4bfd9a5a9c.jpg' className="grayscale-effect" /> */}
                  </a>
                </li>
              </div>
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Organizer;
