import React from "react";
import "../assets/sponsor.css";
import sinarmas from "../assets/sinarmas1.png";
import { Row } from "react-bootstrap";

function Sponsor() {
  return (
    <>
      <div className="items-center max-w-[1000px] z-[2]">
        <h2 className=" text-white flicker">SUPPORTED BY</h2>
        <Row className="max-w-[1100px] pb-4 w-full h-full px-2 flex justify-center items-center" gap={40}>
          <li className="mb-10">
            <a href="https://poltekssn.ac.id/">
              <img src="https://poltekssn.ac.id/wp-content/uploads/2022/07/cropped-logo-small-1.png" alt="" width="100" className="grayscale-effect" />
            </a>
          </li>
          <li>
            <a href="https://www.banksinarmas.com/id/personal">
              <img src={sinarmas} alt="" width="300" className="grayscale-effect" />
            </a>
          </li>
        </Row>
      </div>
    </>
  );
}

export default Sponsor;
