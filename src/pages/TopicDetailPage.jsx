import { useParams, Link } from "react-router-dom";
import { TOPICS } from "../data/topics";
import InstagramEmbed from "../components/InstagramEmbed";

const HIDE_IG_BUTTON_SLUGS = new Set([
  "rotura-menisco-operarse-o-no",
  "rodillas-en-x-genu-valgo",
  "correr-no-desgasta-rodilla",
]);

export default function TopicDetailPage({ styles, brand }) {
  const { slug } = useParams();
  const topic = TOPICS.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <p style={styles.muted}>Tema no encontrado.</p>
          <Link to="/temas" style={styles.btnGhost}>
            Volver
          </Link>
        </div>
      </section>
    );
  }

  // Oculte botón solo en los 3 slugs indicados
  const hideIgButton = HIDE_IG_BUTTON_SLUGS.has(slug);

  return (
    <section style={styles.section}>
      <div style={{ ...styles.container, maxWidth: 780 }}>
        <Link
          to="/temas"
          style={{ ...styles.navLink, display: "inline-block", marginBottom: 10 }}
        >
          ← Volver a temas
        </Link>

        <h2 style={{ ...styles.h2, fontSize: 28 }}>{topic.title}</h2>
        <p style={{ ...styles.muted, fontSize: 15 }}>{topic.excerpt}</p>

        <div style={{ marginTop: 18, display: "grid", gap: 18 }}>
          {topic.content.map((b, idx) => (
            <div key={idx} style={styles.card}>
              <div style={{ fontWeight: 800, marginBottom: 8 }}>{b.h2}</div>

              {b.p && <p style={styles.muted}>{b.p}</p>}

              {b.ul && (
                <ul style={styles.ul}>
                  {b.ul.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {topic.instagramUrl && (
          <div style={{ marginTop: 22 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>
              Vídeo relacionado
            </div>
            <InstagramEmbed url={topic.instagramUrl} hideButton={hideIgButton} />
          </div>
        )}

      </div>
    </section>
  );
}
