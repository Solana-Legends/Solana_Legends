import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import GuardiansPage from './pages/GuardiansPage'; // 🔥 nueva importación
import { Analytics } from '@vercel/analytics/react'; // 📊 integración de Vercel Analytics

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guardians" element={<GuardiansPage />} /> {/* 🔥 nueva ruta */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Analytics /> {/* 📊 componente de analíticas */}
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
