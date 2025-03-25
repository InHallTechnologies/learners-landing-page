import React from "react";
import Styles from "./WhyLearners.module.css";

const WhyLearners = () => {

    return (
        <div className={Styles.whyLearnersContainer}>
            <h2 className={Styles.title}>Why Choose <br />Learners Global School?</h2>
            <p className={Styles.content}>
                At Learners Global School, we don’t just teach—we empower. Our founder, Murali, has applied engineering principles to design a powerful and practical learning methodology that transforms students into independent, lifelong learners. This unique approach combines Study Technology, the 5W1H framework (What, Why, When, Where, Who, and How), and a Mind-Mapping tool to teach students how to learn—not just what to learn.
            </p>
            <p style={{ marginTop: 25 }}>Inspired by the timeless Zen philosophy:</p>
            <blockquote style={{ marginTop: 8, fontStyle: 'italic', marginLeft:'12px' }}>
                <strong>
                    -- Give a man a fish, you feed him for a day. Teach a man to fish, you feed him for a lifetime,
                </strong>
            </blockquote>
        </div>
    )
}

export default WhyLearners;