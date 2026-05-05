import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    let tries = 0;

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      tries += 1;
      if (tries < 60) requestAnimationFrame(scroll); // espera hasta que se pinte
    };

    scroll();
  }, [hash, pathname]);

  return null;
}

