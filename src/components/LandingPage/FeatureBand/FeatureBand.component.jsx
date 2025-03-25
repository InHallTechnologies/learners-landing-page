import React from "react";
import Styles from "./FeatureBand.module.css";
import { DraftingCompass, University, GraduationCap } from 'lucide-react'

const FeatureBand  = () => {

    return(
        <div className={Styles.featureBandContainer}>
            <div className={Styles.featureBox}>
                <DraftingCompass color="white" size={40} />
                <h3 style={{marginTop:16}}>NEP-2020 Implemented School</h3>
                <p>Transforming the education system in India</p>
            </div>

            <div className={Styles.featureBox}>
                <University color="white" size={40} />
                <h3 style={{marginTop:16}}>Learners Methodology</h3>
                <p>Transforming the education system in India</p>
            </div>

            <div className={Styles.featureBox}>
                <GraduationCap color="white" size={40} />
                <h3 style={{marginTop:16}}>Pre-KG to Pre-University</h3>
                <p>5+3+3+4 Academic Structure</p>
            </div>
        </div>
    )
}

export default FeatureBand;