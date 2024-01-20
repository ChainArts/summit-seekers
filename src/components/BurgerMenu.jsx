import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.svg";
import useFetchMenu from "./useFetchMenu";


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { menu } = useFetchMenu("main");

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
                {isOpen && menu && (
                    <motion.nav className="menu-overlay" initial={{ x: "100vw" }} animate={{ x: 0 }} exit={{ x: "-100vw" }} transition={{ duration: 0.5, ease: [.14, .8, .4, 1] }}>
                        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: [.14, .8, .4, 1], staggerChildren: 0.1, delayChildren: 0.5 }}>
                            <motion.li key={5} initial={{ opacity: 0, x: "5rem" }} animate={{ opacity: 1, x: 0 }} transition={{ ease: [.14, .8, .4, 1] }}>
                                <a href="/#" onClick={() => setIsOpen(!isOpen)}><img src={logo} alt="logo" /></a>
                            </motion.li>
                            {menu.map((item) => (
                                <motion.li key={item.id} initial={{ opacity: 0, x: "5rem" }} animate={{ opacity: 1, x: 0 }} transition={{ease: [.14, .8, .4, 1] }}>
                                    <a href={item.url} onClick={() => setIsOpen(!isOpen)}>{item.title}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

export default BurgerMenu;