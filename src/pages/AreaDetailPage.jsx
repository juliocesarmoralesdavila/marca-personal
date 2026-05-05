// src/pages/AreaDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { AREAS } from "../data/areas";

export default function AreaDetailPage({ styles, brand }) {
  const { slug } = useParams();
  const area = AREAS.find((a) => a.slug === slug);

  if (!area) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.muted}>Área no encontrada.</p>
          <Link to="/#subespecialidad" style={styles.btnGhost}>
            Volver
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section style={styles.section}>
      <div style={{ ...styles.container, maxWidth: 780 }}>
        <Link
          to="/#subespecialidad"
          style={{ ...styles.navLink, display: "inline-block", marginBottom: 10 }}
        >
          ← Volver a Áreas de experiencia
        </Link>

        <h2 style={{ ...styles.h2, fontSize: 28 }}>{area.title}</h2>
        {area.excerpt && (
          <p style={{ ...styles.muted, fontSize: 15 }}>{area.excerpt}</p>
        )}

        {area.isLanding && area.landing && (
  <div
    style={{
      background: "#ffffff",
      padding: 20,
      borderRadius: 16,
      marginTop: 16,
      marginBottom: 20,
      border: "1px solid #e5e7eb",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    }}
  >
    <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
      {area.landing.title}
    </div>

    <p style={{ marginBottom: 10 }}>
      {area.landing.text}
    </p>

    <p style={{ fontWeight: 600, marginBottom: 12 }}>
      {area.landing.note}
    </p>

    <a href="tel:+34922985522" style={styles.btn}>
      {area.landing.button}
    </a>
  </div>
)}

        <div style={{ marginTop: 18, display: "grid", gap: 18 }}>
          {(area.content || []).map((b, idx) => (
            <div key={idx} style={styles.card}>
              {b.h2 && (
                <div style={{ fontWeight: 800, marginBottom: 8 }}>{b.h2}</div>
              )}

              {b.img && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={b.img}
                    alt={b.h2 || "Imagen"}
                    style={{
                      width: "100%",
                      maxWidth: 500,
                      maxHeight: 360,
                      objectFit: "contain",
                      borderRadius: 16,
                      border: "1px solid #e5e7eb",
                      marginBottom: 18,
                    }}
                  />
                </div>
              )}

              {b.imgs && Array.isArray(b.imgs) && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "center",
                  }}
                >
                  {b.imgs.map((src) => {
                    const isRx = src.toLowerCase().includes("unib");

                    return (
                      <div
                        key={src}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: 6,
                        }}
                      >
                        <img
                          src={src}
                          alt="Imagen"
                          style={{
                            width: "100%",
                            maxWidth: isRx ? 320 : 520,
                            height: isRx ? 180 : 240,
                            objectFit: isRx ? "contain" : "cover",
                            borderRadius: 14,
                            border: "1px solid #e5e7eb",
                            background: "#fff",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}

              {b.p && (
                <p
                  style={styles.muted}
                  dangerouslySetInnerHTML={{ __html: b.p }}
                />
              )}

              {b.ul && (
                <ul style={styles.ul}>
                  {b.ul.map((it, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: it }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <a style={styles.btn} href="tel:+34922985522">
            📞 SOLICITAR CITA
          </a>

          <a
            style={{ ...styles.btnGhost, marginLeft: 10 }}
            href={brand.ctaSecondary.href}
          >
            {brand.ctaSecondary.label}
          </a>
        </div>

        <p style={{ ...styles.muted, marginTop: 10, fontSize: 12 }}>
          Contenido informativo. No sustituye una valoración médica presencial.
        </p>
      </div>
    </section>
  );
}