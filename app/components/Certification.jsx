import { useState } from "react";

const certificates = [
  {
    id: 1,
    src: "/diploma_1.png",
    alt: "IIT Madras diploma in programming certificate",
  },
  {
    id: 2,
    src: "/java_1.png",
    alt: "Hacckerank certificate in Java",
  },
  {
    id: 3,
    src: "/foundation.png",
    alt: "IIT Madras foundation certificate",
  },
  {
    id: 4,
    src: "/sql.png",
    alt: "Sql certificate from coursera",
  },
  // Add more certificates as needed
];

export default function Certification() {
  const [zoomedImage, setZoomedImage] = useState(null);

  const openModal = (src) => setZoomedImage(src);
  const closeModal = () => setZoomedImage(null);

  return (
   <div id="certifications" style={styles.pageContainer}> 
      {/* ✅ Title */}
      <h1 style={styles.title}>Certifications</h1>

      <div style={styles.grid}>
        {certificates.map(({ id, src, alt }) => (
          <div
            key={id}
            style={styles.card}
            onClick={() => openModal(src)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal(src);
            }}
            aria-label={`View ${alt}`}
            role="button"
          >
            <img
              src={src}
              alt={alt}
              style={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ✅ Modal */}
      {zoomedImage && (
        <div
          style={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={styles.closeButton}
              aria-label="Close zoomed certificate"
            >
              &times;
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed certificate"
              style={styles.zoomedImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: "white",
    minHeight: "50vh",
    padding: "40px 20px 40px", // ✅ Controlled padding: top, sides, bottom
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#333",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    cursor: "pointer",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    padding: "10px",
  },
  modalContent: {
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "8px",
  },
  zoomedImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  closeButton: {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "red",
    cursor: "pointer",
  },
};
