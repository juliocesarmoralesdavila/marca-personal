import { TOPICS } from "../data/topics";
import { Link } from "react-router-dom";

export default function TopicsPage({ styles }) {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Temas de interés (para el público)</h2>
        <p style={styles.muted}>
          Artículos cortos basados en dudas frecuentes y en mis vídeos.
        </p>

        <div style={{ ...styles.grid3, marginTop: 14 }}>
          {TOPICS.map((t) => (
            <div key={t.slug} style={styles.card}>
              <div style={{ fontWeight: 700 }}>{t.title}</div>
              <p style={{ ...styles.muted, marginTop: 8 }}>{t.excerpt}</p>

              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 12, color: "#64748b" }}>{t.readTime}</span>

                <Link to={`/temas/${t.slug}`} style={styles.btnGhost}>
                  Leer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
