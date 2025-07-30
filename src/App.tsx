import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import NewsBar from "./components/NewsBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Admission from "./pages/Admission";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation language={language} setLanguage={setLanguage} />
            <NewsBar language={language} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/about" element={<About language={language} />} />
                <Route path="/academic" element={<Academic language={language} />} />
                <Route path="/admission" element={<Admission language={language} />} />
                <Route path="/teachers" element={<Teachers language={language} />} />
                <Route path="/contact" element={<Contact language={language} />} />
                <Route path="/login" element={<Login language={language} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;