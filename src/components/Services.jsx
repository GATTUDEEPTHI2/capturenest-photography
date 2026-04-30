import { motion } from "framer-motion";

const services = [
  "📸 Wedding Photography",
  "🎉 Birthday Photography",
  "💍 Pre-Wedding Shoots",
  "❤️ Anniversary Shoots",
  "🏠 House Warming Events",
  "👶 Baby & Maternity Shoots",
];

function Services() {
  return (
    <motion.section
      className="services"
      id="services"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">What We Do</p>
      <h2>Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-box" key={service}>
            {service}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;