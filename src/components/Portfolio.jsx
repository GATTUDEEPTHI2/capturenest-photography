import { useState } from "react";
import { motion } from "framer-motion";

const data = {
  Birthdays: {
    cover: "/covers/birthday-cover.jpg",
    images: ["/birthday/b1.jpg", "/birthday/b2.jpg"],
  },
  Marriages: {
    cover: "/covers/wedding-cover.jpg",
    images: [
      "/wedding/haldi1.jpg",
      "/wedding/haldi2.jpg",
      "/wedding/sangeet.jpg",
      "/wedding/reception.jpg",
      "/wedding/w1.jpg",
      "/wedding/w2.jpg",
    ],
  },
  Anniversaries: {
    cover: "/covers/anniversary-cover.jpg",
    images: ["/anniversary/a1.jpg", "/anniversary/a2.jpg"],
  },
  "Pre-Wedding": {
    cover: "/covers/prewedding-cover.jpg",
    images: ["/prewedding/p1.jpg", "/prewedding/p2.jpg"],
  },
  "House Warming": {
    cover: "/covers/house-cover.jpg",
    images: ["/house/h1.jpg", "/house/h2.jpg"],
  },
  "Baby Shoots": {
    cover: "/covers/baby-cover.jpg",
    images: ["/baby/bb1.jpg", "/baby/bb2.jpg"],
  },
};

function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [preview, setPreview] = useState(null);

  return (
    <motion.section
      className="portfolio"
      id="portfolio"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p className="section-title">Our Portfolio</p>
      <h2>Explore Our Photo Stories</h2>

      {!selected && (
        <div className="portfolio-grid">
          {Object.keys(data).map((folder) => (
            <div
              className="portfolio-card"
              key={folder}
              style={{ backgroundImage: `url(${data[folder].cover})` }}
              onClick={() => setSelected(folder)}
            >
              <div className="card-content">
                <h3>{folder}</h3>
                <p>View Gallery</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selected && (
        <div className="gallery-section">
          <button className="back-btn" onClick={() => setSelected(null)}>
            ← Back
          </button>

          <div className="gallery">
            {data[selected].images.map((img, i) => (
              <img src={img} key={i} alt="" onClick={() => setPreview(img)} />
            ))}
          </div>
        </div>
      )}

      {preview && (
        <div className="preview" onClick={() => setPreview(null)}>
          <span className="close">×</span>
          <img src={preview} alt="Preview" />
        </div>
      )}
    </motion.section>
  );
}

export default Portfolio;