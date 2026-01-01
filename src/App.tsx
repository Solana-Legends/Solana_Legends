import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GuardiansPage from "./pages/GuardiansPage";
import { Analytics } from "@vercel/analytics/react";

// 🔥 Importamos el aura global
import AuraGlobal from "./components/AuraGlobal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />

        {/* 🔥 Aura global detrás de toda la app */}
        <AuraGlobal />

        <BrowserRouter>
          {/* ❌ Eliminado el max-w que creaba bandas */}
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/guardians" element={<GuardiansPage />} />
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
