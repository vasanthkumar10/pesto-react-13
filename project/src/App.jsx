import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";

import { Suspense } from "react";
// import Home from "./pages/Home";    /
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const HotelInfo = lazy(() => import("./pages/HotelInfo"));

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:slug" element={<HotelInfo />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
