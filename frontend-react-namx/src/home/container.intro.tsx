import React from 'react'
import HeroSlider, { Slide, SideNav, MenuNav, Nav } from "hero-slider";
import OverlayContainer from "hero-slider";
import Wrapper from "../components/global/UI/Wrapper/Wrapper";
import Title from "../components/global/UI/Title/Title";
import Subtitle from "../components/global/UI/Subtitle/Subtitle";
import video from "../assets/videoplayback.gif"




function introContainer() {
    // Images
    const kyoto = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";
    const tenryuJiTemple = "https://genesis-cdn.ff.com/faraday-future-gallery/ff-91/ff-91-gallery5.jpg";
    const hakone = "https://genesis-cdn.ff.com/faraday-future-ff-91/silver-faraday-future-ff-91-electric-car-exiting-driveway.jpg";
    const video = "../assets/videoplayback.gif";

    return (
        <>
            <div className='w-full h-auto z-0'>
                <HeroSlider
                    slidingAnimation="top_to_bottom"
                    orientation="horizontal"
                    initialSlide={1}
                    onBeforeChange={(previousSlide: any, nextSlide: any) =>
                        console.log("onBeforeChange", previousSlide, nextSlide)
                    }
                    onChange={(nextSlide: any) => console.log("onChange", nextSlide)}
                    onAfterChange={(nextSlide: any) => console.log("onAfterChange", nextSlide)}
                    style={{
                        backgroundColor: "#000"
                    }}
                    settings={{
                        slidingDuration: 500,
                        slidingDelay: 100,
                        shouldAutoplay: true,
                        shouldDisplayButtons: true,
                        autoplayDuration: 1000,
                    }}

                >

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: kyoto
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: tenryuJiTemple
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Slide
                        shouldRenderMask
                        background={{
                            backgroundImageSrc: hakone
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Slide
                        shouldRenderMask

                        background={{
                            backgroundImageSrc: video
                        }}
                    >
                        <Wrapper>
                            <Title>Basic Slider</Title>
                            <Subtitle>Slides' background attachment set to fixed</Subtitle>
                        </Wrapper>
                    </Slide>

                    <Nav

                    />
                </HeroSlider>
            </div>

        </>
    )
}

export default introContainer;