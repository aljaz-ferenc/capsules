import {useScroll, useTransform, motion} from "motion/react";
import {useRef} from "react";

export default function Welcome() {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({target: containerRef, offset: ["start start", "end start"]})
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

    return (
        <section className="w-screen h-screen relative text-[#F4EFE7] p-2.5" >
            <div className="rounded-[60px] w-full h-full overflow-hidden" ref={containerRef}>
            <motion.img
                src="cap1.jpg"
                alt="hero image"
                style={{scale}}
                className="z-10 rounded-[60px] object-cover h-full w-full"
            />
            </div>
            <div className="p-8 absolute top-0 h-full w-full z-20 flex flex-col justify-between">
                <h1 className="block text-[250px] leading-[1] tracking-[-8px]">Capsules</h1>
                <div className='flex justify-between w-full text-xl items-end pb-4'>
                    <span className='text-[50px] max-w-[13ch] leading-12'>Closer to Nature—Closer to Yourself</span>
                    <span className='max-w-[36ch] text-lg leading-6 font-bold mr-2 pb-4'>Spend unforgettable and remarkable time in the Californian desert with—Capsules.</span>
                </div>
            </div>
        </section>
    );
}
