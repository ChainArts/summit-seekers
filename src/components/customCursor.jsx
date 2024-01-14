import { useState, useEffect } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import useMousePos from './useMousePos';
import Lenis from '@studio-freight/lenis';


const enableLenisScroll = () => {
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, []);
}

const CustomCursor = () => {
    //Init as early as possible
    enableLenisScroll();

    const { x, y } = useMousePos();
    const [isHovered, setIsHovered] = useState(false); // State to track hover state

    const handleHoverStart = () => {
        setIsHovered(true);
        // Add logic to update cursor text when hovering starts
        document.getElementById('cursor-text').innerText = '>';
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        // Add logic to clear cursor text when hovering ends
        document.getElementById('cursor-text').innerText = '';
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            const anchors = document.querySelectorAll('a, .wp-block-button, .cursor-anchor');

            anchors.forEach((anchor) => {
                anchor.addEventListener('mouseenter', handleHoverStart);
                anchor.addEventListener('mouseleave', handleHoverEnd);
            });

            return () => {
                // Cleanup event listeners on unmount
                anchors.forEach((anchor) => {
                    anchor.removeEventListener('mouseenter', handleHoverStart);
                    anchor.removeEventListener('mouseleave', handleHoverEnd);
                });
            }
        }, 1000);
        return () => clearTimeout(delay);
    }, []);

    return (
        <motion.div className={`custom-cursor ${isHovered ? 'hovered' : ''}`}
            animate={{
                translateX: `${x}px`,
                translateY: `${y}px`
            }}
            transition={{
                type: "tween",
                ease: cubicBezier(.14, .8, .4, 1),
                duration: .4
            }}
        >
            <div className="cursor-bubble">
                <div className="cursor-box">
                    <div className="corner left-top"></div>
                    <div className="corner left-bottom"></div>
                    <div className="corner right-top"></div>
                    <div className="corner right-bottom"></div>

                </div>
                <div className="cursor-text" id="cursor-text"></div>
            </div>
        </motion.div>
    );
}

export default CustomCursor;