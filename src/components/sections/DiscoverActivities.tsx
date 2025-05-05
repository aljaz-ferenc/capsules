import {motion, useScroll, useTransform, useInView} from "motion/react";
import {useRef} from "react";
import ActivitiesSlider from "./ActivitiesSlider.tsx";

const activityDifficulties = {
    easy: {
        duration: '3-5',
        progress: 45
    },
    medium: {
        duration: '8-12',
        progress: 80
    },
    hard: {
        duration: '24',
        progress: 62
    },
}

export default function DiscoverActivities() {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({target: containerRef})
    const activitiesRef = useRef<HTMLDivElement>(null)
    const activitiesInView = useInView(activitiesRef, {margin: '-30%'})

    const y = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])

    return (
        <div ref={containerRef} className=''>
            <p className='text-[14px]'>Ready for an adventure?</p>
            <motion.h2 className="text-[200px] leading-50" style={{y}}>
                {"Discover the desert activities".split("").map((letter, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <motion.span key={i} style={{y}}>
                        {letter}
                    </motion.span>
                ))}
            </motion.h2>

            <div className='flex text-muted gap-50 px-8'>
                <div className='w-full'>
                    <p className='text-[14px]'>Offered Capsules® activities have different levels of difficulty:</p>
                    <div className='flex flex-col gap-3' ref={activitiesRef}>
                        {Object.entries(activityDifficulties).map((diff) => (
                            <div key={diff[0]}>
                                <div className='flex justify-between'>
                                    <span className='text-[60px] capitalize'>{diff[0]} </span>
                                    <span className='text-[30px]'>{diff[1].duration}h duration</span>
                                </div>
                                <div className='relative h-px'>
                                    <div className={"h-full w-full absolute left-0 top-0 opacity-20 bg-muted z-10"}/>
                                    <motion.div
                                        className={"h-full w-full absolute left-0 top-0 z-20 bg-white origin-left"}
                                        animate={{scaleX: activitiesInView ? diff[1].progress / 100 : 0}}
                                        transition={{duration: 1, ease: 'easeInOut'}}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full text-[60px] leading-14'>We want to make sure your stay is exciting and enjoyable.
                    That’s why we
                    offer a variety of activities with different
                    levels of engagement. Whether you seek
                    thrills or tranquility, there’s something for
                    everyone to make your desert stay truly memorable.
                </div>
            </div>
            <ActivitiesSlider/>
        </div>
    )
}