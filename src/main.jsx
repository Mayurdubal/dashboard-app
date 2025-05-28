import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Removed the import for index.css since it doesn't exist
// Global styles are already imported in App.jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
