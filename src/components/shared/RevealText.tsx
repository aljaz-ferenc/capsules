import {motion} from 'motion/react'

type RevealTextProps = {
    text: string
    revealed: boolean
}

export default function RevealText({text, revealed}: RevealTextProps) {

    return (
        <motion.div className='absolute top-1/2 left-7.5 -translate-y-1/2 text-3xl' animate={{x: revealed ? 0 : 50, transition: {duration: 0.5} }}>
            {text.split('').map(letter => {
                return(
                    <motion.span
                        className='text-[100px]'
                        animate={{ clipPath: revealed ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)'}}
                        transition={{duration: 0.5}}
                    >{letter}</motion.span>
                )
            })}
        </motion.div>
    )
}