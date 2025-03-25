"use client"
import React from "react";
import Styles from "./HeroSpace.module.css";
import { MoveRight } from "lucide-react"
import { motion } from "motion/react"

const HeroSpace = () => {

    return (
        <div className={Styles.heroSpaceContainer}>
            <div className={Styles.contentContainer}>
                <p className={Styles.topTagline}>Explore Our Exceptional Academics</p>
                <h1 className={Styles.title}>Where Every <motion.p initial={{opacity:0.1, y:40, x:80}} transition={{duration:1.5}} animate={{opacity:1, y:0, x:0}} style={{ color: "#5BA332" }}>Learner</motion.p> Is a <motion.span style={{ color: "#2085F6" }}>Leader</motion.span> in the Making</h1>
                <p className={Styles.subTitle}>Excel in academics, ace competitive exams, and grow into tomorrow’s changemakers — all under one roof at Mysore’s trusted PU college.</p>
                <button className={Styles.applyNowButton}>Apply Now! <MoveRight /></button>
            </div>

            <div className={Styles.illustrationContainer}>
                <div className={Styles.illustrationWrapper}>
                    <img className={Styles.illustration} alt="Learners Students" src="intersect.png" />
                </div>            
            </div>
        </div>
    )
}

export default HeroSpace