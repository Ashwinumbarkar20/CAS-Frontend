import ReactGA from "react-ga4";

// Replace with your GA Measurement ID (from Google Analytics)
const TRACKING_ID = "G-KB92XZE4NG"; // Example: G-ABCD1234

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};
