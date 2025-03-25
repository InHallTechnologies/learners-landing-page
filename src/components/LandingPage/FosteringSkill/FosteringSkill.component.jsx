import React from "react";
import Styles from "./FosteringSkill.module.css";


const FosteringSkill = () => {

    return(
        <div className={Styles.fosteringSkillContainer}>
            <div className={Styles.illustrationContainer}>
                <img className={Styles.fosteringSkillImage} alt="Narayana Murthy Sir Laying the Foundation Stone at Learners PU college" src="/fostering_skill_illus.png" />
            </div>

            <div className={Styles.contentContainer}>
                <h3 className={Styles.sectionTitle}>Nurturing Future-Ready Learners from Pre-KG to Pre-University</h3>
                <p className={Styles.contentParagraph}>At Learners Global School, we are committed to shaping well-rounded individuals by nurturing essential skills and strong character traits from Pre-KG through Pre-University. Aligned with the National Education Policy (NEP) 2020, our curriculum follows the transformative 5+3+3+4 academic structure. We offer age-appropriate, NEP-compliant admissions across four distinct educational stages to support every learner’s holistic growth.</p>
                <button className={Styles.learnMoreButton}>Learn More</button>
            </div>
        </div>
    )
}

export default FosteringSkill;