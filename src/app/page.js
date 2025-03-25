import Navigation from "@/components/Navigation/Navigation.component";
import styles from "./page.module.css";
import HeroSpace from "@/components/LandingPage/HeroSpace/HeroSpace.component";
import FeatureBand from "@/components/LandingPage/FeatureBand/FeatureBand.component";
import FosteringSkill from "@/components/LandingPage/FosteringSkill/FosteringSkill.component";
import WhyLearners from "@/components/LandingPage/WhyLearners/WhyLearners.component";
import OurCampus from "@/components/LandingPage/OurCampus/OurCampus.component";
import WhyNEP from "@/components/LandingPage/WhyNEP/WhyNEP.component";

export default function Home() {
    return (
        <div>
            <div className={styles.schoolImage} />
            <div className={styles.sideGreenBar} />
            <Navigation />
            <HeroSpace />
            <FeatureBand />
            <FosteringSkill />
            <WhyLearners />
            <OurCampus />
            <WhyNEP />
        </div>
    );
}
