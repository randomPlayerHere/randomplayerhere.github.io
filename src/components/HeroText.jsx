import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"
import { RESUME_URL } from "../constants"

const HeroText = () => {
  const words = ["Agentic", "Grounded", "Reliable"]
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*Desktop view*/}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium text-text"
            variants = {variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}
            >Hi, I'm Khushal</motion.h1>
            <div className="flex flex-col items-start">
              <motion.p className="text-5xl font-medium text-text-muted"
              variants = {variants}
              initial="hidden"
              animate="visible"
              transition={{delay:1.2}}
              >
                An AI/ML Engineer <br/> Building
              </motion.p>
              <motion.div
              variants = {variants}
              initial="hidden"
              animate="visible"
              transition={{delay:1.5}}
              >
                <FlipWords words={words} className="font-black text-terminal text-8xl drop-shadow-[0_0_25px_rgba(74,222,128,0.4)]"/>
              </motion.div>
              <motion.p className="text-4xl font-medium text-text-muted"
              variants = {variants}
              initial="hidden"
              animate="visible"
              transition={{delay:1.8}}
              > 
              AI Systems</motion.p>
              <motion.div
              className="flex flex-col items-start gap-5 mt-8"
              variants = {variants}
              initial="hidden"
              animate="visible"
              transition={{delay:2.1}}
              >
                <Tagline className="text-lg"/>
                <ResumeButton/>
              </motion.div>
            </div>
        </div>
        {/*Mobile view*/}
        <div className="flex flex-col space-y-6 md:hidden">
          <motion.p className="text-4xl font-medium text-text"
          variants = {variants}
          initial="hidden"
          animate="visible"
          transition={{delay:1}}
          >Hi, I'm Khushal</motion.p>
          <div>
            <motion.p className="text-5xl font-black text-text-muted"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.2}}
            >Building</motion.p>
            <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.5}}
            >
              <FlipWords words={words} className="font-bold text-terminal text-7xl drop-shadow-[0_0_20px_rgba(74,222,128,0.4)]"/>
            </motion.div>
            <motion.p className="text-4xl font-black text-text-muted"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{delay:1.8}}
            > AI Systems</motion.p>
          </div>
          <motion.div
          className="flex flex-col items-center gap-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{delay:2.1}}
          >
            <Tagline className="text-base"/>
            <ResumeButton/>
          </motion.div>
        </div>
    </div>
  )
}

const Tagline = ({ className = "" }) => (
  <p className={`px-4 py-1.5 font-medium text-text rounded-full bg-midnight/70 backdrop-blur-sm border border-terminal/30 shadow-[0_0_15px_rgba(74,222,128,0.15)] ${className}`}>
    RAG pipelines <span className="text-terminal">·</span> LLM agents <span className="text-terminal">·</span> Deep learning
  </p>
)

const ResumeButton = () => (
  <a
    href={RESUME_URL}
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 text-lg font-medium text-white rounded-lg bg-gradient-to-r from-coral to-coral-dim hover:shadow-[0_0_25px_rgba(234,72,132,0.4)] transition-all duration-300"
  >
    View Resume
  </a>
)

export default HeroText