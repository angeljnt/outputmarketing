import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import CaseStudyRadar from "./pages/CaseStudyRadar";
import CaseStudyNewsletter from "./pages/CaseStudyNewsletter";
import CaseStudyLinkedIn from "./pages/CaseStudyLinkedIn";
import CaseStudyProductMarketing from "./pages/CaseStudyProductMarketing";
import ServiceInfluencer from "./pages/ServiceInfluencer";
import ServiceContent from "./pages/ServiceContent";
import ServiceSocial from "./pages/ServiceSocial";
import Services from "./pages/Services";
import ServiceLaunch from "./pages/ServiceLaunch";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Nav />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<Work />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies/archive-radar-launch" element={<CaseStudyRadar />} />
              <Route path="/case-studies/archive-ai-newsletter" element={<CaseStudyNewsletter />} />
              <Route path="/case-studies/archive-linkedin-strategy" element={<CaseStudyLinkedIn />} />
              <Route path="/case-studies/archive-product-marketing" element={<CaseStudyProductMarketing />} />
              <Route path="/services/content-marketing" element={<ServiceContent />} />
              <Route path="/services/seo-content" element={<ServiceSocial />} />
              <Route path="/services/social-linkedin-execution" element={<ServiceInfluencer />} />
              <Route path="/services/product-launch-marketing" element={<ServiceLaunch />} />
              <Route path="/services/measurement-reporting" element={<Navigate to="/pricing" replace />} />
              <Route path="/services/founder-linkedin" element={<Navigate to="/services/social-linkedin-execution" replace />} />
              <Route path="/services/organic-seo" element={<Navigate to="/services/seo-content" replace />} />
              <Route path="/work" element={<Navigate to="/case-studies" replace />} />
              <Route path="/work/archive-radar-launch" element={<Navigate to="/case-studies/archive-radar-launch" replace />} />
              <Route path="/work/archive-ai-newsletter" element={<Navigate to="/case-studies/archive-ai-newsletter" replace />} />
              <Route path="/work/archive-linkedin-strategy" element={<Navigate to="/case-studies/archive-linkedin-strategy" replace />} />
              <Route path="/work/archive-product-marketing" element={<Navigate to="/case-studies/archive-product-marketing" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
