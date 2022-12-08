import React from 'react'
import "./container.intro.css"













function introContainer() {
    return (
        <>
            <main id="pageMain">

                {/* <!-- Desktop controls --> */}
                <div className="ctrls" id="ctrlKeys">
                    <div className="ctrlIcon" id="ctrlIcoKeys"></div>
                    <div className="ctrlDesc">Car Controls</div>
                </div>
                <div className="ctrls" id="ctrlMouse">
                    <div className="ctrlIcon" id="ctrlIcoMouse"></div>
                    <div className="ctrlDesc">Drag camera</div>
                </div>
                <div className="ctrls" id="ctrlScroll">
                    <div className="ctrlIcon" id="ctrlIcoScroll"></div>
                    <div className="ctrlDesc">Scroll zoom</div>
                </div>

                {/* <!-- Mobile HUD --> */}
                <div className="mobileHUD" id="mobileHUDTilt">
                    <div className="mobileIcon" id="hudIcoTilt"></div>
                    <div className="ctrlDesc">Camera</div>
                </div>
                <div className="mobileHUD" id="mobileHUDTouch">
                    <div className="mobileIcon" id="hudIcoTouch"></div>
                    <div className="ctrlDesc">Car controls</div>
                </div>

                {/* <!-- Round Buttons --> */}
                <div id="btnCase">
                    <div className="btnBox" id="btnVR">
                        <div className="btnIcon"></div>
                        <div className="ctrlDesc">VR Mode</div>
                    </div>
                    <div className="btnBox" id="btnVRO">
                        <div className="btnIcon"></div>
                        <div className="ctrlDesc">VR Orbit</div>
                    </div>
                    <div className="btnBox" id="btnVREsc">
                        <div className="btnIcon"></div>
                        <div className="ctrlDesc">Exit VR</div>
                    </div>
                    <div className="btnBox" id="btnEnterFull">
                        <div className="btnIcon"></div>
                        <div className="ctrlDesc">Fullscreen</div>
                    </div>
                    <div className="btnBox" id="btnExitFull">
                        <div className="btnIcon"></div>
                        <div className="ctrlDesc">Exit</div>
                    </div>
                </div>

                {/* <!-- Joystick control --> */}
                <svg className="joyStick" id="joyOut">
                    <circle cx="60" cy="60" r="42" />
                    <polyline points="49 11 60 2 71 11" className="st1" />
                    <polyline points="11 49 2 60 11 71" className="st1" />
                    <polyline points="71 107 60 118 49 107" className="st1" />
                    <polyline points="107 71 118 60 107 49" className="st1" />
                </svg>
                <svg className="joyStick" id="joyIn">
                    <circle cx="34" cy="34" r="30" />
                </svg>

                {/* <!-- Preloader widget --> */}
                <div id="preloader">
                    <div id="preHeader">FF 91 VR Test Ride</div>
                    <div id="preBar">
                        <div id="preProg"></div>
                    </div>
                    <div id="preDetail"></div>
                    <div id="preLogo"></div>
                    <a href="https://www.ff.com/us/ff-91">
                        <div id="preButton">
                            <div id="preButText">GO TO FF 91 GALLERY</div>
                        </div>
                    </a>
                </div>

            </main>
        </>
    )
}

export default introContainer;