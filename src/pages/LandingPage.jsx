import React, { useRef, useEffect } from 'react'
import BG from '../assets/images/bg.png'
import DOLLAR1 from '../assets/images/dollar1.png'
import DOLLAR2 from '../assets/images/dollar2.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    const videoContainerRef = useRef(null);

    useEffect(() => {
        // Initialize YouTube Player API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // Create YouTube player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-player', {
                videoId: 'IhGiOPkIoK0',
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    rel: 0,
                    showinfo: 0,
                    mute: 0,
                    modestbranding: 1
                },
                events: {
                    'onReady': (event) => {
                        // Optional: you can autoplay here if needed
                        // event.target.playVideo();
                    }
                }
            });
        };
    }, []);


    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".animated-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // when the top of the element hits 80% from the top of viewport
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className='scroll-section min-h-screen relative overflow-hidden bg-black w-full px-5'>

            {/* Background Image */}
            <div className='absolute inset-0 z-0 w-full h-full'>
                <img
                    src={BG}
                    alt="Background"
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='absolute top-[200px] right-[0px] animated-item'>
                <img src={DOLLAR1} alt="" className='' />
            </div>
            <div className='absolute bottom-[50px] left-[0px] animated-item'>
                <img src={DOLLAR2} alt="" className='' />
            </div>

            {/* Foreground Content */}
            <div className='relative z-10 flex flex-col gap-y-6 justify-center items-center'>

                <div className='flex flex-col items-center pt-10 gap-y-1 animated-item'>
                    <h1 className=' text-white text-4xl text-center' style={{ fontFamily: 'Minion Pro, serif' }}>
                        <span className='text-[#C1A875] font-bold text-5xl'>Get Up to $4M </span> in Fast, Reliable Funding for you and your customers
                    </h1>
                    <p className='text-white pt-2'>Select the funding you want</p>
                </div>

                {/* Video Container */}
                <div className='h-[305px] w-[305px] bg-[#C1A875] rounded-full mt-5 flex justify-center items-center animated-item'>
                    <div
                        ref={videoContainerRef}
                        className='h-[290px] w-[290px] rounded-full overflow-hidden video-rounded-div relative'
                        style={{
                            borderRadius: '100%',
                            overflow: 'hidden'
                        }}
                    >
                        {/* YouTube Player will be inserted here */}
                        <div
                            id="youtube-player"
                            className="absolute inset-0 scale-125"
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) scale(1.5)',
                                pointerEvents: 'auto'
                            }}
                        ></div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2 justify-center items-center pt-5' style={{ fontFamily: 'Montserrat, serif' }}>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px]   rounded-xl animated-item'><span className='font-bold'>No Doc Personal Funding </span>Up to <span className='font-bold'>$200,000</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl animated-item'><span className='font-bold'>Business Cash Loan Funding </span>Up to <span className='font-bold'> $3M </span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl animated-item'><span className='font-bold'>Financing For My Customers</span> up to <span className='font-bold'>$4M</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl animated-item'><span className='font-bold'>0% Business Credit Card Funding</span> & <span className='font-bold'>More</span></button>
                    <button className='bg-[#C1A875] text-sm h-14 w-[330px] lg:w-[350px] rounded-xl animated-item'><span className='font-bold'>Home Equity Line of Credit</span> up to <span className='font-bold'>$3M</span></button>
                </div>

                <div className='pb-14 pt-2 animated-item'>
                    <h1 className='text-white text-center'>
                        <span className='text-[#C1A875]'> Download FREE </span> "Ultimate Funding Qualifications Guide"
                    </h1>
                </div>
            </div>

            {/* CSS for circular video */}
            <style jsx>{`
                .video-rounded-div iframe {
                    border-radius: 50%; 
                    overflow: hidden;
                }
            `}</style>
        </section>
    )
}

export default LandingPage