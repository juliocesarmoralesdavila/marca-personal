import bannerImg from "./assets/banner.jpg";
import perfil from "./assets/perfil.jpg";
import clinicImg from "./assets/clinic.jpg";
import hucImg from "./assets/huc.jpg";
import kortenImg from "./assets/korten.jpeg";
import docenciaImg from "./assets/docencia.jpeg";
import docenciaLzImg from "./assets/docencialz.jpeg";
import formacion1Img from "./assets/formacion1.jpeg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TopicsPage from "./pages/TopicsPage";
import TopicDetailPage from "./pages/TopicDetailPage";
import { TOPICS } from "./data/topics";
import ScrollToHash from "./components/ScrollToHash";
import AreaDetailPage from "./pages/AreaDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import ChapterPage from "./pages/ChapterPage";

const BRAND = {
  name: "Dr. Julio Morales Dávila",
  title: "Traumatología · Cadera y Rodilla",
  city: "Santa Cruz de Tenerife Canarias",
  tagline:
    "Atención en sanidad pública y consulta privada. Cirugía y tratamiento basado en evidencia, comunicación clara y enfoque humano.",
  ctaPrimary: { label: "Pedir cita", href: "/#consulta" },
ctaSecondary: { label: "Contacto", href: "/#contacto" },

  socials: [
    { label: "Instagram", href: "https://instagram.com/dr.juliomoralesdavila/" },
    { label: "TikTok", href: "https://tiktok.com/@" },
    { label: "LinkedIn", href: "https://es.linkedin.com/in/julio-cesar-morales-davila-0023092b/" },
  ],
  contact: {
    email: "citaprevia@cecoten.com",
    phone: "+34 922 985 522",
    locationLine: "CECOTEN · Av. Benito Pérez Armas, 10 38007 Santa Cruz de Tenerife España",
    mapsHref: "https://maps.app.goo.gl/SM3LpBwHv5QKQ4H86",
  },
};

const INTEREST_AREAS = [
  {
    title: "Cadera",
    bullets: [
      "Artrosis de cadera y tratamiento escalonado",
      "Prótesis total de cadera (primaria y revisiones)",
      "Protesis cadera VIA ANTERIOR convencional y Bikini",
      "Dolor inguinal, trocanteritis, tendinopatías",
      "Infiltraciones de cadera y rodilla",
    ],
  },
  {
    title: "Rodilla",
    bullets: [
      "Lesiones deportivas: ligamento cruzado anterior, menisco",
      "Genuvaro o genuvalgo en el paciente joven",
      "Protesis de rodilla Unicompartimentales",
      "Artrosis de rodilla y opciones de manejo",
      "Prótesis de rodilla totales",
    ],
  },
];

const PUBLIC_TOPICS = [
  {
    title: "Dolor de cadera: cuándo preocuparse",
    desc: "Señales de alarma, causas frecuentes y qué pruebas suelen pedir.",
    href: "#",
  },
  {
    title: "Artrosis: qué funciona de verdad",
    desc: "Ejercicio, control de peso, infiltraciones y cuándo pensar en cirugía.",
    href: "#",
  },
  {
    title: "Menisco y dolor de rodilla",
    desc: "Qué significa una rotura, cuándo se opera y cuándo no.",
    href: "#",
  },
];

const CV_HIGHLIGHTS = [
  "Especialista en Traumatología y Cirugía Ortopédica",
  "Subespecialidad: cadera y rodilla",
  "Actividad en sanidad pública y consulta privada",
  "Docencia / sesiones clínicas / formación continuada",
];

const BOOK_CHAPTERS = [
  "Capítulo 1 — (título provisional)",
  "Capítulo 2 — (título provisional)",
  "Capítulo 3 — (título provisional)",
];

const GALLERY = [
  {
    title: "Running",
    desc: "Entrenamiento y carreras",
    imgs: [
      { src: "/img/running1.jpeg", caption: "Trail running y entrenamiento en montaña" },
      { src: "/img/running2.jpeg", caption: "Preparación antes de una carrera" },
      { src: "/img/running3.jpeg", caption: "Competición y entrenamiento funcional" },
    ],
  },
  {
    title: "Cursos",
    desc: "Formación y congresos",
    imgs: [
      { src: "/img/course1.jpeg", caption: "Formación osteotomía de rodilla Nantes" },
      { src: "/img/course2.jpeg", caption: "Profesor abordaje anterior protesis cadera Madrid" },
    ],
  },
  {
    title: "Docencia",
    desc: "Sesiones y talleres",
    imgs: [
      { src: "/img/teaching1.jpeg", caption: "Docencia abordaje anterior directo protesis cadera" },
      { src: "/img/teaching2.jpeg", caption: "Ponencia en SECCA SATO casos clinicos" },
    ],
  },
];
const styles = {
  page: {
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    color: "#0f172a",
    background: "#f7f4ef",
    minHeight: "100vh",
  },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 20px" },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #e5e7eb",
  },
  navInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 0",
  },
  brand: {
  fontWeight: 800,
  letterSpacing: 0.3,
  fontSize: 22,
  color: "#0f172a",
  whiteSpace: "nowrap",
},
  navLinks: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" },
  navLink: { textDecoration: "none", color: "#334155", fontSize: 14 },
  btn: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid #0f172a",
    background: "#0f172a",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  btnGhost: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid #e5e7eb",
    background: "#fff",
    color: "#0f172a",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  hero: { padding: "54px 0 24px", position: "relative", overflow: "hidden" },
  heroBg: {
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.80,
  transform: "scale(1.03)",
  zIndex: 0,
},
heroOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(247,244,239,0.95) 0%, rgba(247,244,239,0.85) 55%, rgba(247,244,239,0.78) 100%)",
  zIndex: 1,
},
heroContent: { position: "relative", zIndex: 2 },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 18,
    alignItems: "start",
  },
  h1: { fontSize: 44, margin: "0 0 10px", lineHeight: 1.05 },
  sub: { margin: 0, fontSize: 16, color: "#334155", lineHeight: 1.7 },
  pillRow: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 },
  pill: {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid #e5e7eb",
    background: "#f8fafc",
    color: "#334155",
  },
  heroCtas: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 16,
    background: "#fff",
  },
  section: {
  padding: "30px 0",
  borderTop: "1px solid #e5e7eb",
  scrollMarginTop: 90,
},
  h2: { fontSize: 22, margin: "0 0 10px" },
  muted: { margin: 0, color: "#475569", lineHeight: 1.7, fontSize: 14 },
  grid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  grid3: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 },
  ul: { margin: "10px 0 0 18px", color: "#334155", lineHeight: 1.7, fontSize: 14 },
  footer: { padding: "26px 0", borderTop: "1px solid #e5e7eb", color: "#64748b", fontSize: 13 },
  img: {
  width: "100%",
  maxHeight: "220px",
  objectFit: "contain",
  borderRadius: 14,
  border: "1px solid #e5e7eb",
  backgroundColor: "#f5f5f5"
},
};

function AnchorLinks() {
  const links = [
    ["Inicio", "/#inicio"],
    ["Sobre mí", "/#sobremi"],
    ["Áreas de experiencia", "/#subespecialidad"],
    ["Temas", "/temas"],
    ["Mi libro", "/#libro"],
    ["Galería", "/#galeria"],
  ];

  return (
    <div style={styles.navLinks}>
      {links.map(([label, href]) =>
        href === "/temas" ? (
          <Link key={href} style={styles.navLink} to={href}>
            {label}
          </Link>
        ) : (
          <a key={href} style={styles.navLink} href={href}>
            {label}
          </a>
        )
      )}

      <a style={styles.btn} href={BRAND.ctaPrimary.href}>
        {BRAND.ctaPrimary.label}
      </a>
    </div>
  );
}

function TopNav() {
  return (
    <header style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.navInner}>
          <div style={{ display: "inline-flex", flexDirection: "column", gap: 6 }}>
  <div style={styles.brand}>{BRAND.name}</div>

  <div
    style={{
      height: 3,
      width: "100%",
      maxWidth: 280,          // ajusta si quieres más largo
      background: "#0f172a",
      borderRadius: 999,
      opacity: 0.35,
    }}
  />
</div>

          <div style={{ display: "none" }} />
          <div style={{ display: "flex" }}>
            <AnchorLinks />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" style={styles.hero}>
      <div style={styles.heroBg} />
      <div style={styles.heroOverlay} />

      <div style={{ ...styles.container, ...styles.heroContent }}>
        <div style={styles.heroGrid}>
          <div>
            <h1 style={styles.h1}>
              Traumatólogo especialista en cadera y rodilla en Tenerife
            </h1>

            <p style={{ ...styles.sub, marginTop: 8 }}>
              Dr. Julio Morales Dávila · Traumatología y Cirugía Ortopédica
            </p>

            <p style={styles.sub}>
              Diagnóstico claro, explicación sencilla y un plan de tratamiento paso a paso.
              Mi enfoque prioriza la función, el movimiento y una recuperación segura — con cirugía sólo cuando aporta valor.
            </p>

            <p style={{ ...styles.sub, marginTop: 10 }}>
              Atiendo en sanidad pública y en consulta privada en Santa Cruz de Tenerife.
            </p>

            <p style={{ ...styles.sub, marginTop: 14, fontStyle: "italic" }}>
              “No trato una articulación: ayudo a personas a recuperar movilidad, función y calidad de vida.”
            </p>

            <div style={styles.heroCtas}>
              <a style={styles.btn} href="#consulta">Pedir cita</a>

              {BRAND.socials.map((s) => (
                <a
                  key={s.label}
                  style={styles.btnGhost}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <div
              style={{
                display: "inline-block",
                marginTop: 12,
                marginBottom: 12,
                padding: "9px 14px",
                background: "rgba(255,255,255,0.85)",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              📍 Tenerife · Consulta presencial
            </div>
<p style={{ marginTop: 8, marginBottom: 6, fontWeight: 600 }}>
  Selecciona tu problema:
</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href="/areas/artrosis-cadera-tratamiento-escalonado" style={styles.btnGhost}>
  Dolor de cadera
</a>
              <a href="/areas/artrosis-rodilla-opciones-manejo" style={styles.btnGhost}>
  Dolor de rodilla
</a>
              <a href="/areas/infiltraciones-cadera-rodilla" style={styles.btnGhost}>
  Infiltraciones
</a>
            </div>

            <p style={{ ...styles.muted, marginTop: 14 }}>
              *Esta web ofrece información general y no sustituye una consulta médica. En urgencias, acude a tu centro más cercano.
            </p>
          </div>

          <div style={styles.card}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={perfil}
                alt="Dr. Julio Morales Dávila"
                style={{
                  width: "280px",
                  maxWidth: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "18px",
                  filter: "drop-shadow(0 12px 35px rgba(0,0,0,0.18))",
                }}
              />
            </div>

            <div style={{ fontWeight: 700, marginTop: 14 }}>Contacto rápido</div>

            <p style={{ ...styles.muted, marginTop: 8 }}>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${BRAND.contact.email}`}>{BRAND.contact.email}</a>
              <br />
              <strong>Tel:</strong>{" "}
              <a href={`tel:${BRAND.contact.phone.replace(/\s/g, "")}`}>
                {BRAND.contact.phone}
              </a>
              <br />
              <strong>Consulta:</strong> {BRAND.contact.locationLine}
              <br />
              <a href={BRAND.contact.mapsHref} target="_blank" rel="noreferrer">
                Ver en Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}function SobreMiAcordeon() {
  const items = [
  {
  title: "Biografía",
  content: (
    <>
      <p style={styles.muted}>
        Me formé como médico especialista en Traumatología y Cirugía Ortopédica
        vía MIR en el Hospital Clínic de Barcelona, uno de los centros de referencia
        y mayor prestigio a nivel nacional.
      </p>

      <p style={{ ...styles.muted, marginTop: 10 }}>
        Tras finalizar la especialidad, trabajé durante cuatro años en el sistema
        público de salud de Lanzarote (Canarias), donde adquirí una amplia experiencia
        clínica en patología traumatológica y articular.
      </p>

      <p style={{ ...styles.muted, marginTop: 10 }}>
        Con el objetivo de seguir creciendo profesionalmente y perfeccionar mis
        habilidades en cirugía protésica de cadera y rodilla, trabajé durante dos
        años en el Reino Unido, donde me formé bajo la supervisión del{" "}
        <a
          href="https://surgeonprofile.njrcentre.org.uk/SurgeonProfile?gmccode=4756635"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#0f172a", fontWeight: 600 }}
        >
          Dr. Senthil Kumar Velayudham
        </a>
        , cirujano de referencia en cirugía articular registrado en el National Joint
        Registry del Reino Unido.
      </p>

      <p style={{ ...styles.muted, marginTop: 10 }}>
        Actualmente trabajo en la sección de cirugía articular del Hospital
        Universitario de Canarias, combinando mi actividad en sanidad pública
        y consulta privada en Tenerife.
      </p>

      <p style={{ ...styles.muted, marginTop: 10 }}>
        Además, soy corredor habitual (runner) y mantengo una formación continuada
        constante, lo que me permite comprender mejor las demandas funcionales y
        deportivas de muchos pacientes.
      </p>

      {/* IMÁGENES BIOGRAFÍA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 12,
          marginTop: 16,
        }}
      >
        <figure style={{ margin: 0 }}>
          <img
            src={clinicImg}
            alt="Hospital Clínic de Barcelona"
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
            }}
          />
          <figcaption style={{ ...styles.muted, marginTop: 6 }}>
            Hospital Clínic de Barcelona
          </figcaption>
        </figure>

        <figure style={{ margin: 0 }}>
          <img
            src={hucImg}
            alt="Hospital Universitario de Canarias"
            style={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
            }}
          />
          <figcaption style={{ ...styles.muted, marginTop: 6 }}>
            Hospital Universitario de Canarias
          </figcaption>
        </figure>
      </div>
    </>
  ),
},

  {
  title: "Experiencia profesional",
  content: (
    <>
      <ul style={styles.ul}>
        <li>
          <strong>Residente de Traumatología y Cirugía Ortopédica (vía MIR).</strong><br />
          Hospital Clínic i Provincial de Barcelona.<br />
          Mayo 2008 – Julio 2013.
        </li>

        <li style={{ marginTop: 8 }}>
          <strong>Cirujano Ortopédico.</strong><br />
          Hospital de l’Esperit Sant, Santa Coloma de Gramenet, Barcelona (España).<br />
          Mayo – Julio 2013.
        </li>

        <li style={{ marginTop: 8 }}>
          <strong>Especialista en Cirugía Ortopédica y Traumatología.</strong><br />
          Hospital José Molina Orosa, Lanzarote (Canarias).<br />
          Agosto 2013 – Mayo 2017.
        </li>

        <li style={{ marginTop: 8 }}>
          <strong>Specialty Doctor in Trauma and Orthopedics.</strong><br />
          Maidstone and Tunbridge Wells NHS Trust, Maidstone, Kent (Reino Unido).<br />
          Junio 2017 – Junio 2018.
        </li>

        <li style={{ marginTop: 8 }}>
          <strong>Senior Clinical Fellow in Trauma and Orthopedics.</strong><br />
          Lewisham and Greenwich NHS Trust, Woolwich, Londres (Reino Unido).<br />
          Julio 2018 – Abril 2019.
        </li>

        <li style={{ marginTop: 8 }}>
          <strong>Especialista en Cirugía Ortopédica y Traumatología.</strong><br />
          Hospital Universitario de Canarias (HUC), Tenerife.<br />
          Mayo 2019 – Actualidad.
        </li>
      </ul>
    </>
  ),
},

  {
  title: "Estancias formativas",
  content: (
  <div
    style={{
      display: "flex",
      gap: 24,
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {/* COLUMNA IZQUIERDA: TEXTO */}
    <div style={{ flex: "1 1 60%" }}>
      <p style={styles.muted}>
        He realizado diversas estancias formativas nacionales e internacionales
        en centros de referencia, orientadas a ampliar experiencia en traumatología,
        cirugía articular y reconstrucción compleja entre ellas:
      </p>

      <ul style={{ ...styles.ul, marginTop: 10 }}>
        <li>
          Trauma Service, <strong>Kingston General Hospital</strong>, Ontario
          (Canadá). Noviembre 2010. Tutor: <strong>Dr. Jeff Yach</strong>.
        </li>
        <li>
          <strong>Miami Hand Institute</strong>, Miami (EE. UU.). Marzo 2010.
          Tutor: <strong>Dr. Jorge Orbay</strong>.
        </li>
        <li>
          AO Short-term Fellowship, <strong>Queen’s Medical Centre</strong>,
          Nottingham (Reino Unido). 2015 (1 mes). Tutor:{" "}
          <strong>Dr. Daren Forward</strong>.
        </li>
        <li>
          Unidad de Reconstrucción Articular,{" "}
          <strong>Royal National Orthopaedic Hospital</strong>, Stanmore
          (Reino Unido). Abril 2019. Tutor:{" "}
          <strong>Prof. John Skinner</strong>.
        </li>
        <li>
          <strong>Hospital de Genk</strong>, Bélgica. Marzo 2025. Tutor:{" "}
          <strong>Prof. Kristoff Corten</strong>.
        </li>
        <li>
          <strong>Hospital Clínic de Barcelona</strong>, Unidad ASI Cadera.
          Abril 2025. Tutor: <strong>Dr. Fernández Valencia</strong>.
        </li>
      </ul>
    </div>

    {/* COLUMNA DERECHA: FOTO */}
    <div style={{ flex: "1 1 35%", maxWidth: 360 }}>
      <img
        src={kortenImg}
        alt="Hospital Genk con el Prof. Korten"
        style={{
          width: "100%",
          maxHeight: 280,
          objectFit: "contain",
          background: "#f8fafc",
          borderRadius: 14,
          border: "1px solid #e5e7eb",
          padding: 10,
        }}
      />
      <div style={{ ...styles.muted, marginTop: 6, textAlign: "center" }}>
        Hospital Genk con el Prof. Korten
      </div>
    </div>
  </div>
),
},

  {
  title: "Docencia, investigación y formación continua",
  content: (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.35fr 0.65fr",
        gap: 24,
        alignItems: "start",
      }}
    >
      {/* TEXTO */}
      <div>
        <p style={styles.muted}>
          Desarrollo una actividad docente continuada participando activamente
          en la formación de residentes de Cirugía Ortopédica y Traumatología,
          tanto en el ámbito asistencial como en sesiones clínicas y discusión
          de casos.
        </p>

        <p style={{ ...styles.muted, marginTop: 10 }}>
          Soy miembro de la Sociedad Española de Cirugía Ortopédica y
          Traumatología (SECOT) y de la Sociedad Española de Cirugía de Cadera (SECCA),
          manteniendo una actualización constante en los avances científicos
          y técnicos de la especialidad.
        </p>

        <p style={{ ...styles.muted, marginTop: 10 }}>
          Compagino la práctica clínica con formación continua, participación
          en cursos especializados y congresos nacionales e internacionales,
          con el objetivo de mejorar los resultados funcionales y la calidad
          asistencial de los pacientes.
        </p>
        <p style={{ ...styles.muted, marginTop: 10 }}>
  Actualmente continúo ampliando mi formación en el ámbito de la
  <strong> cirugía de preservación articular</strong>, con especial
  interés en <strong>osteotomías de rodilla y pelvis</strong> y
  <strong> artroscopia de cadera</strong>, orientadas a optimizar el
  tratamiento de pacientes jóvenes y activos.
</p>
<p style={{ ...styles.muted, marginTop: 10 }}>
  Por eso mismo a fines del año pasado y a lo largo de este año 
  estoy siendo acreditado por la Sociedad Europea de Traumatología del Deporte,
   Cirugía de Rodilla y Artroscopia <strong>(ESSKA)</strong> en Osteotomías de Rodilla. Además, tengo reservados
   en febrero el famoso simposio de Cirugía de Cadera en Berna (Suiza), en mayo de este año 
   estaré 3 semanas en Cali Colombia a la Unidad de Preservación de Cadera <strong>(UPRECA)</strong> acreditada por la
   Sociedad Internacional de Preservación de Cadera <strong>(ISHA).</strong>  
  
</p>
      </div>

      {/* IMÁGENES */}
<div style={{ display: "grid", gap: 14 }}>
  {/* fila superior: 2 fotos */}
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
    <figure style={{ margin: 0 }}>
      <img
        src={docenciaImg}
        alt="Comunicación oral Sociedad de Cadera"
        style={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
        }}
      />
      <figcaption style={{ ...styles.muted, marginTop: 6 }}>
        Comunicación oral Sociedad de Cadera
      </figcaption>
    </figure>

    <figure style={{ margin: 0 }}>
      <img
        src={docenciaLzImg}
        alt="Formación de residentes y actividad clínica"
        style={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderRadius: 12,
          border: "1px solid #e5e7eb",
        }}
      />
      <figcaption style={{ ...styles.muted, marginTop: 6 }}>
        Formación abordaje anterior Lanzarote
      </figcaption>
    </figure>
  </div>

  {/* fila inferior: 1 foto más grande */}
  <figure style={{ margin: 0 }}>
    <img
      src={formacion1Img}
      alt="Formación continua y actualización profesional"
      style={{
        width: "100%",
        height: 210,
        objectFit: "cover",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
      }}
    />
    <figcaption style={{ ...styles.muted, marginTop: 6 }}>
      Acreditación osteotomías rodilla ESSKA
    </figcaption>
  </figure>
</div>
    </div>
  ),
},

  {
    title: "Currículum",
    content: (
      <>
        <ul style={styles.ul}>
          <li>Especialista en Traumatología y Cirugía Ortopédica</li>
          <li>Subespecialidad en cadera y rodilla</li>
          <li>Actividad en sanidad pública y consulta privada</li>
          <li>Formación y actualización continuada</li>
        </ul>

        <div style={{ marginTop: 12 }}>
          <a
  style={styles.btnGhost}
  href="/cv-julio-morales.pdf"
  target="_blank"
  rel="noreferrer"
>
  CV resumido (PDF)
</a>
        </div>
      </>
    ),
  },
];

  return (
    <div style={{ display: "grid", gap: 12, marginTop: 14 }}>
      {items.map((it, index) => (
        <details key={it.title} style={styles.card}>
          <summary style={{ cursor: "pointer", fontWeight: 700 }}>{it.title}</summary>
          <div style={{ marginTop: 10 }}>{it.content}</div>
        </details>
      ))}
    </div>
  );
}

function SobreMi() {
  return (
    <section id="sobremi" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Sobre mí</h2>

        <SobreMiAcordeon />


      </div>
    </section>
  );
}

function AQueMeDedico() {
  return (
    <section id="subespecialidad" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Áreas de experiencia</h2>
        <p
  style={{
    ...styles.muted,
    maxWidth: "100%",
    lineHeight: 1.6,
    marginBottom: 28,
    textAlign: "justify",
  }}
>
  Mi práctica se centra en la patología de cadera y rodilla, tanto degenerativa
  (artrosis y desgaste articular) como deportiva, relacionada con la actividad
  física. Indico el tratamiento adecuado en el momento adecuado, priorizando la
  función y la recuperación del movimiento.
</p>

        <div style={{ ...styles.grid2, marginTop: 14 }}>
          {INTEREST_AREAS.map((a) => (
            <div key={a.title} style={styles.card}>
              <div style={{ fontWeight: 700 }}>{a.title}</div>
              <ul style={styles.ul}>
  {a.bullets.map((b, i) => {
    const slugMap = {
      "Artrosis de cadera y tratamiento escalonado": "artrosis-cadera-tratamiento-escalonado",
      "Prótesis total de cadera (primaria y revisiones)": "protesis-total-cadera",
      "Protesis cadera VIA ANTERIOR convencional y Bikini": "protesis-cadera-via-anterior",
      "Dolor inguinal, trocanteritis, tendinopatías": "dolor-inguinal-trocanteritis-tendinopatias",
      "Infiltraciones de cadera y rodilla": "infiltraciones-cadera-rodilla",

      "Lesiones deportivas: ligamento cruzado anterior, menisco": "lesiones-deportivas-lca-menisco",
      "Genuvaro o genuvalgo en el paciente joven": "genuvaro-genuvalgo-paciente-joven",
      "Protesis de rodilla Unicompartimentales": "protesis-rodilla-unicompartimental",
      "Artrosis de rodilla y opciones de manejo": "artrosis-rodilla-opciones-manejo",
      "Prótesis de rodilla totales": "protesis-rodilla-total",
    };

    const slug = slugMap[b];

    return (
      <li key={b}>
        {slug ? (
          <Link
            to={`/areas/${slug}`}
            style={{ color: "#0f172a", textDecoration: "underline", fontWeight: 500 }}
          >
            {b}
          </Link>
        ) : (
          b
        )}
      </li>
    );
  })}
</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivateClinic() {
  return (
    <section id="consulta" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Consulta privada</h2>
        <div style={styles.grid2}>
          <div style={styles.card}>
            <p style={styles.muted}>
  <strong>Centro:</strong> CECOTEN (Santa Cruz de Tenerife)<br />
  <strong>Dirección:</strong> {BRAND.contact.locationLine}{" "}
<a
  href={BRAND.contact.mapsHref}
  target="_blank"
  rel="noreferrer"
  style={{ marginLeft: 8, fontSize: 13 }}
>
  (Ver mapa)
</a>
<br />

  <strong>Teléfono:</strong>{" "}
  <a href={`tel:${BRAND.contact.phone.replace(/\s/g, "")}`}>{BRAND.contact.phone}</a><br />
  <strong>Email:</strong>{" "}
<a href={`mailto:${BRAND.contact.email}`}>{BRAND.contact.email}</a>
<br />


</p>


            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
  
</div>


          </div>

          <div style={styles.card}>
  <div style={{ fontWeight: 700 }}>Motivo de consulta</div>

  <p style={{ ...styles.muted, marginTop: 8 }}>
    Problemas de cadera o rodilla, lesiones deportivas y valoración para segunda opinión.
  </p>

  <p style={{ ...styles.muted, marginTop: 8 }}>
    Si dispones de pruebas previas (resonancia magnética, radiografías o informes médicos),
    es recomendable traerlas a la consulta.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}

function Trajectory() {
  return (
    <section id="trayectoria" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Trayectoria (resumen)</h2>
        <div style={styles.grid2}>
          <div style={styles.card}>
            <p style={styles.muted}>
              <strong>Bio corta (6–10 líneas):</strong><br />
              Escribe aquí tu presentación: dónde te formaste, tu enfoque, tu subespecialidad y tu actividad actual.
            </p>
          </div>
          <div style={styles.card}>
            <div style={{ fontWeight: 700 }}>Hitos</div>
            <ul style={styles.ul}>
              {CV_HIGHLIGHTS.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopicsHome() {
  return (
    <section id="temas" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Temas de interés (para el público)</h2>
        <p style={styles.muted}>
          Aquí pondremos artículos cortos. Más adelante podemos convertirlos en páginas separadas si quieres.
        </p>

        <div style={{ ...styles.grid3, marginTop: 14 }}>
          {TOPICS.map((t) => (
  <div key={t.slug} style={styles.card}>
    <div style={{ fontWeight: 700 }}>{t.title}</div>
    <p style={{ ...styles.muted, marginTop: 8 }}>{t.excerpt}</p>

    <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
      <Link style={styles.btnGhost} to={`/temas/${t.slug}`}>
        Leer
      </Link>
      <Link style={styles.btnGhost} to="/temas">
        Ver todos
      </Link>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="libro" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Mi libro: Diario de un traumatólogo</h2>

        <div style={{ display: "grid", gap: 16 }}>

          {/* 🔹 BLOQUE TEXTO */}
          <div style={styles.card}>
            <p style={{
  ...styles.muted,
  fontFamily: "'Merriweather', serif",
  fontSize: 17,
  lineHeight: 1.8
}}>
  <span style={{ fontWeight: 700, fontSize: 20 }}>
    Diario de un traumatólogo
  </span>{" "}
  nace de la necesidad de contar lo que pocas veces se dice sobre la vida real de los traumatólogos en la sanidad pública en España.
</p>

            <p style={{ ...styles.muted, marginTop: 10, fontFamily: "'Merriweather', serif", fontSize: 16 }}>
              <strong>Antes que médicos, somos personas:</strong> vivimos, sentimos y afrontamos decisiones complejas en un entorno muchas veces exigente, intentando siempre hacer lo mejor para nuestros pacientes.
            </p>

            <p style={{ ...styles.muted, marginTop: 10, fontFamily: "'Merriweather', serif", fontSize: 16 }}>
              Este proyecto recoge historias, experiencias y reflexiones del día a día en el hospital, más allá de la técnica o la cirugía.
            </p>

            <p style={{ ...styles.muted, marginTop: 10, fontFamily: "'Merriweather', serif", fontSize: 16 }}>
              Es, además, una muestra de lo que más adelante se convertirá en un libro que <strong>publicaré en Amazon</strong>, donde desarrollaré estas historias con mayor profundidad y daré una visión más humana, real y cercana de la traumatología.
            </p>
          </div>

          {/* 🔹 BLOQUE CAPÍTULOS */}
          <div style={styles.card}>
            <div style={{ fontWeight: 700, fontSize: 18 }}>Capítulos</div>
            <div style={{ display: "grid", gap: 12 }}>

  {/* CAPÍTULO 1 */}
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 16,
    background: "#fff"
  }}>
    <div style={{ fontWeight: 700, fontSize: 17 }}>
      La primera vez que tuve miedo en quirófano
    </div>
    <div style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>
      Una experiencia real que marcó mi forma de entender la cirugía.
    </div>
    <div style={{ marginTop: 6 }}>
      <Link
  to="/capitulo/miedo-en-quirofano"
  style={{ textDecoration: "underline", cursor: "pointer", fontWeight: 600 }}
>
  Leer →
</Link>
    </div>
  </div>

  {/* CAPÍTULO 2 */}
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 12,
    background: "#fff"
  }}>
    <div style={{ fontWeight: 600 }}>
      El paciente que nunca olvidaré
    </div>
    <div style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>
      Historias que dejan huella más allá del quirófano.
    </div>
    <div style={{ marginTop: 6, color: "#94a3b8" }}>
      Próximamente
    </div>
  </div>

  {/* CAPÍTULO 3 */}
  <div style={{
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 12,
    background: "#fff"
  }}>
    <div style={{ fontWeight: 600 }}>
      El chico de la patera
    </div>
    <div style={{ fontSize: 14, color: "#64748b", marginTop: 4 }}>
      Una historia que refleja la realidad más allá de la medicina.
    </div>
    <div style={{ marginTop: 6, color: "#94a3b8" }}>
      Próximamente
    </div>
  </div>

</div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.h2}>Galería</h2>
        <p style={styles.muted}>
        </p>

        <div style={{ ...styles.grid3, marginTop: 14 }}>
          {GALLERY.map((g) => (
            <div key={g.title} style={styles.card}>
              <div style={{ fontWeight: 700, marginBottom: 10 }}>
                {g.title}
              </div>

              <p style={{ ...styles.muted, marginBottom: 12 }}>
                {g.desc}
              </p>

              <div style={{ display: "grid", gap: 12 }}>
                {g.imgs.map((img, i) => (
                  <figure key={i} style={{ margin: 0 }}>
                    <img
                      style={styles.img}
                      src={img.src}
                      alt={img.caption}
                    />

                    <figcaption
                      style={{
                        fontSize: 13,
                        color: "#64748b",
                        marginTop: 6,
                        textAlign: "center",
                        lineHeight: 1.4,
                      }}
                    >
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Home() {
  return (
    <div>
      <main>
        <Hero />
        <SobreMi />
        <AQueMeDedico />
        <TopicsHome />
        <Book />
        <Gallery />
        <PrivateClinic />
        <div style={styles.container}>
          <div style={styles.footer}>
            © {new Date().getFullYear()} {BRAND.name}. · Información general, no sustituye consulta médica.
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <ScrollToHash />
      <div style={styles.page}>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temas" element={<TopicsPage styles={styles} />} />
          <Route path="/temas/:slug" element={<TopicDetailPage styles={styles} brand={BRAND} />}/>
          <Route path="/areas/:slug" element={<AreaDetailPage styles={styles} brand={BRAND} />}
/><Route path="/capitulo/:slug" element={<ChapterPage styles={styles} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
