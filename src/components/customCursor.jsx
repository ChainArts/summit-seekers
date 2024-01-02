import { motion, cubicBezier } from 'framer-motion';
import useMousePos from './useMousePos';

const CustomCursor = () => {

  const { x, y } = useMousePos();
  return (
    <motion.div className="custom-cursor"
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