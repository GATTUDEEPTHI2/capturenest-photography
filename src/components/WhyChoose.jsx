import { motion } from "framer-motion";

function WhyChoose() {
  return (
    <motion.section
      className="why"
      id="why"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Why Choose Us</p>
      <h2>We Make Every Moment Special</h2>

      <div className="why-grid">
        <div>📸 Candid & Creative Photography</div>
        <div>⚡ Fast Delivery & Premium Editing</div>
        <div>❤️ Trusted by Happy Clients</div>
      </div>
    </motion.section>
  );
}

export default WhyChoose;