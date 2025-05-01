import { motion } from 'motion/react';

type InfiniteScrollTextProps = {
    word: string,
    duration: number
    fontSize?: string
    className?: string
}

export default function InfiniteScrollText({ word, duration = 10, fontSize = '200px', className = '' }: InfiniteScrollTextProps) {
    const repeatedText = Array(8).fill(`${word}\u00A0`).join('');

    return (
        <div className={`relative w-full overflow-hidden h-[200px] flex items-center ${className}`}>
            <motion.div
                className="flex whitespace-nowrap"
                style={{ fontSize }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    duration,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                <span>{repeatedText}</span>
                <span>{repeatedText}</span>
            </motion.div>
        </div>
    );
}
