import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-label">CaptureNest Photography</p>
        <h1>Turning Your Moments Into Timeless Memories</h1>
        <p className="hero-desc">
          Premium photography for weddings, birthdays, pre-wedding shoots,
          house warming events and celebrations.
        </p>

        <div className="hero-buttons">
          <a href="#portfolio" className="btn primary-btn">View Portfolio</a>
          <a href="#contact" className="btn outline-btn">Book Shoot</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
