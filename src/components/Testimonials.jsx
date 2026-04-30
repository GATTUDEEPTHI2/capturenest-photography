import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anusha & Rahul",
    text: "CaptureNest beautifully captured our wedding memories.",
  },
  {
    name: "Priya",
    text: "Very professional team and quick delivery.",
  },
  {
    name: "Kiran",
    text: "Amazing pre-wedding photos and editing.",
  },
];

function Testimonials() {
  return (
    <motion.section
      className="testimonials"
      id="testimonials"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Client Love</p>
      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">
        {reviews.map((review) => (
          <div className="testimonial-card" key={review.name}>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Testimonials;