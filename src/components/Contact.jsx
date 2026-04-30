import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Contact Us</p>
      <h2>Book Your Shoot Today</h2>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea
          placeholder="Event Details (Date, Location...)"
          required
        ></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;