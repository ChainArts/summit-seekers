import React, { useEffect, useState, useRef } from "react";
import { motion, useTransform, useScroll, cubicBezier } from "framer-motion";

import PR_layer_1 from '../assets/par_bg_layer_1.webp';
import PR_layer_2 from '../assets/par_bg_layer_2.webp';
import PR_layer_3 from '../assets/par_bg_layer_3.webp';
import PR_layer_4 from '../assets/par_bg_layer_4.webp';
import PR_layer_5 from '../assets/par_bg_layer_5.webp';
import PR_layer_6 from '../assets/par_bg_layer_6.webp';
import PR_layer_7 from '../assets/par_bg_layer_7.webp';

const scrollIndicator = {
    animate: {
        scaleY: [1, 0.2],
        y: ["-4rem","4rem"],
        transition: {
            duration: 2,
            ease: "linear",
            repeat: "Infinity",
            repeatDelay: 0.25,
            times: [0, 1]
        }
    }
}

const HeroNav = () => {
    return (
        <div className="hero-nav">
            <ul>
                <li><a href="/#booking">Booking</a></li>
                <li><a href="/#expeditions">Expeditions</a></li>
                <li><a href="/#adventure">Adventure</a></li>
                <li><a href="/#about">About</a></li>
            </ul>
            <div className="hero-nav-styling">
                <div className="corner left-top"></div>
                <div className="corner left-bottom"></div>
                <div className="corner right-top"></div>
                <div className="corner right-bottom"></div>
            </div>
        </div>
    );
}

const ScrollMarquee = () => {
    return (
        <a className="scroll-marquee" href="/#booking">
            <motion.div className="scroll-indicator">
                <motion.div className="scroll-indicator-slider" variants={scrollIndicator} animate="animate" />
            </motion.div>
            <motion.span className="scroll-indicator-text" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5, duration: 0.3, ease: cubicBezier(.14, .8, .4, 1) }}>scroll to discover
                <div className="scroll-marquee-styling">
                <div className="corner left-top"></div>
                <div className="corner left-bottom"></div>
                <div className="corner right-top"></div>
                <div className="corner right-bottom"></div>
                </div>
            </motion.span>
        </a>
    );

}

const HeaderParallax = () => {

    const containerRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end start']
    });

    useEffect(() => {
        const imagesToLoad = [PR_layer_1, PR_layer_2, PR_layer_3, PR_layer_4, PR_layer_5, PR_layer_6, PR_layer_7];

        Promise.all(imagesToLoad.map(src => new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        })))
            .then(() => setImagesLoaded(true))
            .catch(error => console.error("Error loading images:", error));
    }, []);


    const yRangeLayer1 = useTransform(scrollYProgress, [0, 1], [-300, 100], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer2 = useTransform(scrollYProgress, [0, .95], [-300, 0], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer3 = useTransform(scrollYProgress, [0, 1], [300, 0], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer4 = useTransform(scrollYProgress, [0, 1], [800, 0], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer5 = useTransform(scrollYProgress, [0, .65], [2500, 0], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeText = useTransform(scrollYProgress, [0, 1], [-600, 800], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer6 = useTransform(scrollYProgress, [0, .7], [3000, 0], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeLayer7 = useTransform(scrollYProgress, [0, .8], [3000, -15], { ease: cubicBezier(.14, .8, .4, 1) });
    const yRangeTrans = useTransform(scrollYProgress, [.45, .9], [200, 75], { ease: cubicBezier(.14, .8, .4, 1) });

    return (
        <motion.div ref={containerRef} className="headerParallax" initial={{ filter: "blur(20px)" }} animate={{ filter: "blur(0px)" }} transition={{ delay: 0.4, duration: 0.8, ease: [.14, .8, .4, 1] }}>
            {imagesLoaded && (
                <>
                    <HeroNav />
                    <ScrollMarquee />
                    <motion.div className="parallax-layer" style={{ y: yRangeLayer1, zIndex: 1 }} >
                        <img src={PR_layer_1} />
                    </motion.div>
                    <motion.div className="parallax-layer" style={{ y: yRangeLayer2, zIndex: 5 }} >
                        <img src={PR_layer_2} />
                    </motion.div>
                    <motion.div className="parallax-layer" style={{ y: yRangeLayer3, zIndex: 3 }}>
                        <img src={PR_layer_3} />
                    </motion.div>
                    <motion.span style={{ y: yRangeText, zIndex: 4 }} className="hero-text" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1.3, ease: [.14, .8, .4, 1] }}>Summit Seekers</motion.span>
                    <motion.div className="parallax-layer" style={{ y: yRangeLayer4, zIndex: 5 }} >
                        <img src={PR_layer_4} />
                    </motion.div>

                    <motion.div className="parallax-layer" style={{ y: yRangeLayer5, zIndex: 6 }} >
                        <img src={PR_layer_5} style={{ objectPosition: "center" }} />
                    </motion.div>

                    <motion.div className="parallax-layer" style={{ y: yRangeLayer6, zIndex: 7 }} >
                        <img src={PR_layer_6} />
                    </motion.div>
                    <motion.div id="hero-layer" className="parallax-layer" style={{ y: yRangeLayer7, zIndex: 8, height: "auto", bottom: 0, top: "auto" }}>
                        <img src={PR_layer_7} />
                    </motion.div>
                </>)}
            <motion.div className="hero-transition-gradient" style={{ y: yRangeTrans }}></motion.div>

        </motion.div>
    );
}

export default HeaderParallax;