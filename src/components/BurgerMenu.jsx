import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.svg";


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? "menu-toggle-icon menu-toggle-open" : "menu-toggle-icon menu-toggle-closed"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="burger-styling">
                    <div className={`corner left-top ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner left-bottom ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner right-top ${isOpen ? "white" : ""}`}></div>
                    <div className={`corner right-bottom ${isOpen ? "white" : ""}`}></div>
                </div>
            </motion.div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.nav className="menu-overlay" initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{duration: 0.5, ease: [.14, .8, .4, 1], staggerChildren: 0.01}}>
                        <ul>
                            <li><a href="/#" onClick={() => setIsOpen(!isOpen)}><img src={ logo } alt="logo"/></a></li>
                            <li><a href="/#booking" onClick={()=> setIsOpen(!isOpen)}>Booking</a></li>
                            <li><a href="/#expeditions" onClick={()=> setIsOpen(!isOpen)}>Expeditions</a></li>
                            <li><a href="/#adventure" onClick={()=> setIsOpen(!isOpen)}>Adventure</a></li>
                            <li><a href="/#about" onClick={()=> setIsOpen(!isOpen)}>About</a></li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

export default BurgerMenu;