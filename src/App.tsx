import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HallOfHeroesPage from "./pages/HallOfHeroesPage";
import LanguageSwitcher from "@/components/LanguageSwitcher"; // IMPORTANTE
import { Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          {/* 🛡️ INTERFAZ GLOBAL: Aquí es donde debe vivir para no desplazar nada */}
          <LanguageSwitcher />
          
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/hall-of-heroes" element={<HallOfHeroesPage />} />
              <Route path="/guardians" element={<Navigate to="/hall-of-heroes" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;