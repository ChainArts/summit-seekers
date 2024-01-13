import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll, cubicBezier } from "framer-motion";
import Lenis from '@studio-freight/lenis';
import PR_layer_1 from '../assets/par_bg_layer_1.webp';
import PR_layer_2 from '../assets/par_bg_layer_2.webp';
import PR_layer_3 from '../assets/par_bg_layer_3.webp';
import PR_layer_4 from '../assets/par_bg_layer_4.webp';
import PR_layer_5 from '../assets/par_bg_layer_5.webp';
import PR_layer_6 from '../assets/par_bg_layer_6.webp';
import PR_layer_7 from '../assets/par_bg_layer_7.webp';

const headerParallax = () => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end start']
    });
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

        <motion.div ref={containerRef} className="headerParallax">
            <motion.div src={PR_layer_1} className="parallax-layer" style={{ y: yRangeLayer1, zIndex: 1 }} >
                <img src={PR_layer_1} />
            </motion.div>
            <motion.div src={PR_layer_2} className="parallax-layer" style={{ y: yRangeLayer2, zIndex: 5 }} >
                <img src={PR_layer_2} />
            </motion.div>
            <motion.div className="parallax-layer" style={{ y: yRangeLayer3, zIndex: 3 }}>
                <img src={PR_layer_3} />
            </motion.div>
            <motion.span style={{ y: yRangeText, zIndex: 4 }} className="hero-text">Summit Seekers</motion.span>
            <motion.div className="parallax-layer" style={{ y: yRangeLayer4, zIndex: 5 }} >
                <img src={PR_layer_4} />
            </motion.div>
            
            <motion.div className="parallax-layer" style={{ y: yRangeLayer5, zIndex: 6 }} >
                <img src={PR_layer_5} style={{objectPosition: "center"}} />
            </motion.div>
            
            <motion.div className="parallax-layer" style={{ y: yRangeLayer6, zIndex: 7 }} >
                <img src={PR_layer_6} />
            </motion.div>
            <motion.div className="parallax-layer" style={{ y: yRangeLayer7, zIndex: 8, height: "auto", bottom: 0, top: "auto"}}>
                <img src={PR_layer_7}/>
            </motion.div>
            <motion.div className="hero-transition-gradient" style={{ y: yRangeTrans }}></motion.div>
        </motion.div>
    );
}

export default headerParallax;