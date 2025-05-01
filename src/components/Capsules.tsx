import {useScroll, useTransform, motion, useMotionValueEvent} from "motion/react";
import {useRef, useState} from "react";
import RevealText from "./RevealText.tsx";
import InfiniteScrollText from "./InfiniteScrollText.tsx";

export default function Capsules() {
    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({target: containerRef});
    const [showTerrace, setShowTerrace] = useState(false)
    const [showDesert, setShowDesert] = useState(false)

    const scale1 = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.8], [0.2, 1, 1, 0.9]);
    const scale2 = useTransform(scrollYProgress, [0.7, 1], [1, 0.9]);

    const brightness1 = useTransform(scrollYProgress, [0.35, 0.8], ['brightness(1)', 'brightness(0.3)']);
    const brightness2 = useTransform(scrollYProgress, [0.8, 1], ['brightness(1)', 'brightness(0.3)']);

    const borderRadius1 = useTransform(scrollYProgress, [0, 0.2], [400, 50]);
    const y1 = useTransform(scrollYProgress, [0.35, 0.65], ['100vh', '0vh']);
    const y2 = useTransform(scrollYProgress, [0.8, 1], ['100vh', '0vh']);

    useMotionValueEvent(scrollYProgress, 'change', latest => {
        if (latest > 0.65) setShowTerrace(true)
        else setShowTerrace(false)

        if (latest >= 1) setShowDesert(true)
        else setShowDesert(false)
    })

    return (
        <section>
            <div className="relative h-[400vh]" ref={containerRef}>
                <div className="sticky top-0 h-screen">
                    <InfiniteScrollText className='absolute top-1/2 right-0 -translate-y-1/2' word='Capsules' duration={50}/>
                    <motion.div
                        style={{scale: scale1, borderRadius: borderRadius1, filter: brightness1}}
                        className="absolute inset-0 z-10"
                    >
                        <img
                            alt='classic capsule'
                            src="classic.webp"
                            className='h-full w-full object-cover'
                        />

                    </motion.div>
                    <motion.div

                        style={{y: y1, scale: scale2, filter: brightness2}}
                        className="absolute w-full h-full z-20"
                    >
                        <motion.img
                            src="terrace.webp"
                            className=" w-full h-full object-cover z-20"
                        />
                        <RevealText text='Terrace Capsule' revealed={showTerrace}/>
                    </motion.div>
                    <motion.div
                        style={{y: y2}}
                        className="absolute w-full h-full z-20"
                    >
                        <motion.img
                            src="desert.webp"
                            className=" w-full h-full object-cover z-20"
                        />
                        <RevealText text='Desert Capsule' revealed={showDesert}/>
                    </motion.div>
                </div>
            </div>
                <div className='h-screen relative'>
                    <span className='text-4xl text-center absolute top-1/2 left-1/2 -translate-1/2'>
                    Our Capsules® are located
                    near Los Angeles with easy
                    access by road.
                    </span>
                </div>
        </section>
    );
}
