import { motion } from "framer-motion";

function Featured() {
  return (
    <motion.section
      className="featured"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Featured Moments</p>
      <h2>Stories We Captured Beautifully</h2>

      <div className="featured-layout">
        <img className="big-feature" src="/wedding/w1.jpg" alt="Wedding" />

        <div className="small-features">
          <img src="/birthday/b1.jpg" alt="Birthday" />
          <img src="/prewedding/p1.jpg" alt="Pre Wedding" />
          <img src="/anniversary/a1.jpg" alt="Anniversary" />
          <img src="/baby/bb1.jpg" alt="Baby Shoot" />
        </div>
      </div>
    </motion.section>
  );
}

export default Featured;