import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MissionVision from "./pages/MissionVision";
import AboutUsPage from "./pages/AboutUsPage";
import OurValuesPage from "./pages/OurValuesPage";
import OurTeamPage from "./pages/OurTeamPage";
import OurServicesPage from "./pages/OurServicesPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"; // Import the new tracker

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTopOnNavigate />
            <GoogleAnalyticsTracker /> {/* Render the Google Analytics tracker here */}
            <div className="min-h-screen flex flex-col"> {/* Added a flex container for sticky footer */}
              <Navbar /> {/* Render Navbar here */}
              <main className="flex-grow"> {/* Main content area */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/mission-vision" element={<MissionVision />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/our-values" element={<OurValuesPage />} />
                  <Route path="/our-team" element={<OurTeamPage />} />
                  <Route path="/services" element={<OurServicesPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer /> {/* Render Footer here */}
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;