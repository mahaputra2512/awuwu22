import React from "react"
import '../assets/cube.scss';

function Cube() {
    return (
        <div class="container">
            <div class="scene">
                <div class="webpack-cube">
                    <div class="outer-cube">
                        <div class="face face-top"></div>
                        <div class="face face-bottom"></div>
                        <div class="face face-left"></div>
                        <div class="face face-right"></div>
                        <div class="face face-front"></div>
                        <div class="face face-back"></div>
                    </div>
                    <div class="inner-cube">
                        <div class="face face-top"></div>
                        <div class="face face-bottom"></div>
                        <div class="face face-left"></div>
                        <div class="face face-right"></div>
                        <div class="face face-front"></div>
                        <div class="face face-back"></div>
                    </div>
                </div>
                <div class="shadows-outer-container">
                    <div class="shadow-outer"></div>
                </div>
                <div class="shadows-inner-container">
                    <div class="shadow-inner"></div>
                </div>
            </div>
            {/* <footer class="Footer">
                <ul class="Footer-items">
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-twitter"></span>
                    </a>
                    </li>
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-google-plus"></span>
                    </a>
                    </li>
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-github"></span>
                    </a>
                    </li>
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-codepen"></span>
                    </a>
                    </li>
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-linkedin"></span>
                    </a>
                    </li>
                    <li class="Footer-item"><a target="_blank" href="" class="Footer-link">
                        <span class="Footer-icon fa fa-envelope"></span>
                    </a>
                    </li>
                </ul>
            </footer> */}
        </div>
    )
}

export default Cube;