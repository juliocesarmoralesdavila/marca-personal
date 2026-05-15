import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-LTRCPK6J9B");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};