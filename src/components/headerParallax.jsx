import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll, cubicBezier } from "framer-motion";
import Lenis from '@studio-freight/lenis';
import PR_layer_1 from '../assets/par_bg_layer_1._1920x.webp';
import PR_layer_2 from '../assets/par_bg_layer_2._1920x.webp';
import PR_layer_3 from '../assets/par_bg_layer_3._1920x.webp';
import PR_layer_4 from '../assets/par_bg_layer_4._1920x.webp';
import PR_layer_5 from '../assets/par_bg_layer_5._1920x.webp';
import PR_layer_6 from '../assets/par_bg_layer_6._1920x.webp';
import PR_layer_7 from '../assets/par_bg_layer_7._1920x.webp';

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
  const yRangeLayer1 = useTransform(scrollYProgress, [0, 1], [200, 0], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeLayer2 = useTransform(scrollYProgress, [0, .95], [1500, 0], {ease: cubicBezier(.14,.8,.4, 1)});
  const yRangeLayer3 = useTransform(scrollYProgress, [0, .85], [3000, 0], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeLayer4 = useTransform(scrollYProgress, [0, .75], [4500, 0], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeLayer5 = useTransform(scrollYProgress, [0, .7], [6000, 0], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeText = useTransform(scrollYProgress, [0, 1], [-400, 700], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeLayer6 = useTransform(scrollYProgress, [0, .6], [9000, 0], {ease: cubicBezier(.14,.8,.4,1)});
  const yRangeLayer7 = useTransform(scrollYProgress, [0, .5], [11500, 0], { ease: cubicBezier(.14, .8, .4, 1) });
  const yRangeTrans = useTransform(scrollYProgress, [.45, .9], [100, -100], {ease: cubicBezier(.14,.8,.4,1)});

  return (

    <motion.div ref={containerRef} className="headerParallax">
      <motion.img src={PR_layer_1} className="parallax-layer" style={{ y: yRangeLayer1, zIndex: 1 }} />
        <motion.img src={PR_layer_2} className="parallax-layer" style={{ y: yRangeLayer2, zIndex: 5 }} />
      <motion.img src={PR_layer_3} className="parallax-layer" style={{ y: yRangeLayer3, zIndex: 3 }} />
      <motion.span style={{ y: yRangeText, zIndex: 4 }} className="hero-text">Summit Seekers</motion.span>
      <motion.img src={PR_layer_4} className="parallax-layer" style={{ y: yRangeLayer4, zIndex: 5 }} />
        <motion.img src={PR_layer_5} className="parallax-layer" style={{ y: yRangeLayer5, zIndex: 6 }} />
        <motion.img src={PR_layer_6} className="parallax-layer" style={{ y: yRangeLayer6, zIndex: 7 }} />
        <motion.img src={PR_layer_7} className="parallax-layer" style={{ y: yRangeLayer7, zIndex: 8 }} />
      <motion.div className="hero-transition-gradient" style={{ y: yRangeTrans }}></motion.div>
    </motion.div>
      );
}

export default headerParallax;