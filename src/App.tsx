import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MissionVision from "./pages/MissionVision";
import AboutUsPage from "./pages/AboutUsPage";
import OurValuesPage from "./pages/OurValuesPage";
import OurTeamPage from "./pages/OurTeamPage";
import OurServicesPage from "./pages/OurServicesPage";
import PartnersPage from "./pages/PartnersPage"; // Import new page
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"; // Import new page
import TermsOfServicePage from "./pages/TermsOfServicePage"; // Import new page
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate"; // Import the new component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTopOnNavigate /> {/* Add the scroll-to-top component here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/our-values" element={<OurValuesPage />} />
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route path="/services" element={<OurServicesPage />} />
              <Route path="/partners" element={<PartnersPage />} /> {/* New route */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} /> {/* New route */}
              <Route path="/terms-of-service" element={<TermsOfServicePage />} /> {/* New route */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;