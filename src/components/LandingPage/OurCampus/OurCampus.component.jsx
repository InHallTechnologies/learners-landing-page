"use client"
import React, { useEffect, useRef, useState } from "react";
import Styles from "./OurCampus.module.css";
import { motion, useDragControls, useMotionValue, useTransform } from "motion/react";
import { animate } from "motion";

const OurCampus = () => {

    const [carouselWidth, setCarouselWidth] = useState(0)
    const carouselRef = useRef(null);
    const dragPosition = useMotionValue(0);
    const imageTitlesAnimation = useMotionValue(10)


    const imageList = [
        { url: "/photo_1.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { url: "/photo_2.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { url: "/photo_3.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { url: "/photo_1.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { url: "/photo_2.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { url: "/photo_3.jpg", title: "Bird Eye View", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ]



    useEffect(() => {

        dragPosition.on('animationComplete', () => {
            animate(imageTitlesAnimation, 10, { duration: 0.2 })
        })

        dragPosition.on("animationStart", () => {
            animate(imageTitlesAnimation, 0, { duration: 0.2 })
        })

        if (carouselRef.current) {
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, [])

    const handleResize = () => {
        const carouselWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        setCarouselWidth(carouselWidth)
    }

    const handleDragEnd = (event) => {
        console.log("Drag End")
    }






    return (
        <div className={Styles.ourCampusContainer}>
            <h2 className={Styles.sectionTitle}>Discover Our Campus</h2>
            <p style={{ marginTop: 16, lineHeight: '30px' }}>Step into the world of Learners Global School through our campus gallery. From vibrant classrooms and modern labs to lush green outdoor spaces and dynamic activity zones, every corner of our campus is designed to inspire learning and creativity. Explore how our thoughtfully crafted environment supports academic excellence, personal growth, and joyful learning at every stage—from Pre-KG to Pre-University.</p>
            <motion.div className={Styles.outerCarousel}>
                <motion.div  dragElastic={0.9} dragMomentum={true} onAnimationEnd={handleDragEnd} ref={carouselRef} drag="x" style={{ x: dragPosition }} dragConstraints={{ right: 0, left: -carouselWidth }} className={Styles.innerCarousel}>
                    {
                        imageList.map((item, index) => {
                            return <ImageItem key={index.toString()} item={item} index={index} imageTitlesAnimation={imageTitlesAnimation} />
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}


const ImageItem = ({item, index, imageTitlesAnimation}) => {

    const labelStyle =  {
        y: useTransform(imageTitlesAnimation, [10, 0], [0, -10]),
        opacity: useTransform(imageTitlesAnimation, [10, 0], [1, 0]),
    }

    return (
        <motion.div >
            <img draggable={false} className={Styles.carouselItemImage} src={item.url} />
            <motion.div style={labelStyle}>
                <p className={Styles.imageTitle}>{item.title}</p>
                <p className={Styles.imageSubTitle}>{item.content}</p>
            </motion.div>
        </motion.div>
    )
}

export default OurCampus;