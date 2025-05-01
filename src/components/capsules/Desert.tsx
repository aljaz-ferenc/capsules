import {motion, useTransform} from "motion/react";
import RevealText from "../shared/RevealText.tsx";
import {MotionValue} from "motion";
import OpenDetails from "../shared/OpenDetails.tsx";

type DesertProps = {
    scrollYProgress: MotionValue<number>
    isActive: boolean
}

export default function Desert({scrollYProgress, isActive}: DesertProps){
    const scale3img = useTransform(scrollYProgress, [0.7, 0.9], [1.3, 1]);
    const borderRadius3 = useTransform(scrollYProgress, [0.7, 1], [100, 50]);
    const y2 = useTransform(scrollYProgress, [0.7, 0.9], ['100vh', '0vh']);

    return (
        <motion.div
            style={{y: y2, borderRadius: borderRadius3}}
            className="absolute inset-0 z-10 overflow-hidden"
        >
            <motion.img
                style={{scale: scale3img}}
                src="desert.webp"
                className=" w-full h-full object-cover z-20"
            />
            <RevealText text='Terrace Capsule' revealed={isActive}/>
            <OpenDetails isVisible={isActive} text='With its striking architecture and upscale amenities, Desert
Capsule® offers an exclusive retreat in the heart of the desert.'/>
        </motion.div>
    )
}