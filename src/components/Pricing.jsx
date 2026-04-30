import { motion } from "framer-motion";

function Pricing() {
  return (
    <motion.section
      className="pricing"
      id="pricing"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Packages</p>
      <h2>Simple & Transparent Pricing</h2>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>1 Event • Edited Photos • Online Delivery</p>
          <h4>₹4,999</h4>
        </div>

        <div className="pricing-card">
          <h3>Standard</h3>
          <p>Full Coverage • Highlight Reel • Edited Photos</p>
          <h4>₹9,999</h4>
        </div>

        <div className="pricing-card">
          <h3>Premium</h3>
          <p>Full Day • Cinematic Video • Album Design</p>
          <h4>₹19,999</h4>
        </div>
      </div>
    </motion.section>
  );
}

export default Pricing;