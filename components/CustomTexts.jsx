import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    animate="show" // Changed `exited` to `animate`
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    animate="show" // Changed `entered` to `animate`
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export { TypingText, TitleText };
