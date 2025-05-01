import {motion, useScroll, useTransform} from 'motion/react'

export default function Introduction() {
    const {scrollYProgress} = useScroll()
    const clipPath = useTransform(scrollYProgress, [0, 1.3], ['inset(0% 0% 0% 0%)', 'inset(100% 0% 0% 0%)'])

    return (
        <section>
            <div className='relative mb-50'>
                <motion.div
                    className='bg-[#181717] absolute inset-0 opacity-90'
                    style={{clipPath}}
                />
                <p className='text-[85.5px] leading-22'>
                    Welcome to a world of wild California
                    desert with Capsules®, where you willdesert with Capsules®, where you will
                    discover exquisite nature observing itdiscover exquisite nature observing it
                    from capsule houses, nestled in thefrom capsule houses, nestled in the
                    one of the most breathtakingone of the most breathtaking
                    destination on the United States.
                </p>
            </div>
            <div className='flex pb-50'>
                <img src="welcome-1.webp" alt="" className='rounded-full'/>
                <img src="welcome-2.webp" alt="" className='rounded-full'/>
            </div>
        </section>
    )
}