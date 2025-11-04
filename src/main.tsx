import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  once: true,      // Whether animation should happen only once - while scrolling down
  offset: 100,     // Offset (in px) from the top of the screen to trigger animations
});

// Add global smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

createRoot(document.getElementById("root")!).render(<App />);