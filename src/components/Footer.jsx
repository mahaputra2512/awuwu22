import React from "react";
import "../assets/footer.css";

function Footer() {
  return (
    <>
      <footer class="footer z-[2]">
        {/* <div class="waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div> */}
        <ul class="menu">
          <li class="menu__item">
            <a class="menu__link" href="https://www.youtube.com/@KorpsTarunaPOLTEKSSN">
              <span class="Footer-icon fa fa-youtube"></span>
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://www.instagram.com/wreckit.id/">
              <span class="Footer-icon fa fa-instagram"></span>
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://www.twitter.com/wreckit_id/">
              <span class="Footer-icon fa fa-twitter"></span>
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://www.linkedin.com/company/wreck-it?originalSubdomain=id">
              <span class="Footer-icon fa fa-linkedin"></span>
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://korpstar-poltekssn.org">
              <span class="Footer-icon fa fa-globe"></span>
            </a>
          </li>
          <li class="menu__item">
            <a class="menu__link" href="https://wa.me/6285756000350">
              <span class="Footer-icon fa fa-whatsapp"></span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
