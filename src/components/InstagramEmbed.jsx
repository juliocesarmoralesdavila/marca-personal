function ensureTrailingSlash(u) {
  if (!u) return "";
  const trimmed = u.trim();
  return trimmed.endsWith("/") ? trimmed : trimmed + "/";
}

function stripQuery(u) {
  if (!u) return "";
  return u.split("?")[0];
}

export default function InstagramEmbed({ url, hideButton = false }) {
  if (!url) return null;

  // Link para abrir en Instagram (con params si los hay)
  const originalUrl = ensureTrailingSlash(url);

  // Para el iframe suele ir mejor sin params
  const cleanUrl = ensureTrailingSlash(stripQuery(url));
  const embedSrc = `${cleanUrl}embed`;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Contenedor responsive 9:16 */}
      <div
        style={{
          width: "100%",
          maxWidth: 420, // tamaño “móvil” agradable también en desktop
          margin: "0 auto", // centrado
          border: "1px solid #e5e7eb",
          borderRadius: 18,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <div style={{ position: "relative", width: "100%", aspectRatio: "9 / 16" }}>
          <iframe
            title="Instagram Reel"
            src={embedSrc}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              display: "block",
            }}
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </div>

      {!hideButton && (
        <a
          href={originalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 14,
            border: "1px solid #e5e7eb",
            background: "#fff",
            color: "#0f172a",
            textDecoration: "none",
            fontSize: 14,
            fontWeight: 600,
            width: "fit-content",
            margin: "0 auto", // centrado
          }}
        >
          Ver vídeo en Instagram
        </a>
      )}
    </div>
  );
}
