import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

/**
 * Mablo Digital Agency - Root Application Component
 * Configures the technical stack: React Query, React Router, Framer Motion, and UI Providers.
 * Implements a single-page structure for the 2026 digital agency landing page.
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* 
        MotionConfig applies global animation settings. 
        reducedMotion="user" respects system preferences for accessibility.
      */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <BrowserRouter>
            {/* 
              Layout provides the Header (with animated Mablo mascot) and Footer.
              It wraps the main content to maintain consistency across the single-page experience.
            */}
            <Layout>
              <Routes>
                {/* 
                  Single-page architecture: All major sections are IDs within the Home component.
                  Route mapping uses ROUTE_PATHS defined in lib/index.ts.
                */}
                <Route path={ROUTE_PATHS.HOME} element={<Home />} />
                
                {/* 
                  Catch-all route: Redirects back to Home for any undefined paths 
                  to maintain the fluid single-page experience of Mablo.
                */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Layout>
          </BrowserRouter>

          {/* Global feedback components for forms and interactions */}
          <Toaster />
          <Sonner position="top-center" expand={false} richColors />
        </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>
  );
};

export default App;
