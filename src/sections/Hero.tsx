import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Sofia Cronström Frontendutvecklare</h1>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Jag skapar digitala gränssnitt med känsla för form och funktion.
      </motion.p>
    </section>
  )
}

export default Hero
