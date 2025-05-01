import {motion} from 'motion/react'

type RevealTextProps = {
    text: string
    revealed: boolean
}

export default function RevealText({text, revealed}: RevealTextProps) {

    return (
        <div className='absolute top-1/2 left-10 -translate-y-1/2 text-3xl'>
            {text.split('').map(letter => {
                return(
                    <motion.span
                        animate={{clipPath: revealed ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)'}}
                    >{letter}</motion.span>
                )
            })}
        </div>
    )
}