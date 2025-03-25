import React from "react";
import Styles from "./WhyNEP.module.css";

const WhyNEP = () => {

    return (
        <>
            <div className={Styles.whyNepContainer}>
                <div className={Styles.illustrationContainer}>
                    <img className={Styles.illustration} src="/portrait-teacher-work-educational-system.jpg" />
                </div>

                <div className={Styles.contentContainer}>
                    <h3 style={{ fontSize: '1.6rem' }}>Why Choose a NEP 2020 Implemented School?</h3>
                    <p style={{ marginTop: '20px', lineHeight: 2 }}>The National Education Policy (NEP) 2020 marks a revolutionary shift in India’s education system, focusing on holistic, flexible, and multidisciplinary learning. At Learners Global School, we embrace NEP 2020 to nurture curious minds, encourage critical thinking, and equip students with real-world skills from an early age. By implementing the 5+3+3+4 academic structure, we ensure age-appropriate, experiential learning that lays a strong foundation for academic excellence and lifelong success.</p>
                </div>
            </div>
        </>

    )
}

export default WhyNEP