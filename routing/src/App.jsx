import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
// import About from "./Pages/About";
// import Home from "./Pages/Home";
// import Profile from "./Profile";
import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./Pages/About"));
const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));

function App() {
  return (
    <BrowserRouter>
      <h1>App</h1>
      <Suspense fallback={<h2>loading....</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>Page not found</h1>} />

          {/* <Route path="/admin" element={<h1>Admin page</h1>} />
        <Route path="/admin/login" element={<h1>Login page</h1>} />
      <Route path="/admin/signin" element={<h1>Signin page</h1>} /> */}
          {/* <Route path="/admin">
          <Route index element={<h1>Admin page</h1>} />
          <Route path="login" element={<h1>login page</h1>} />
          <Route path="signin" element={<h1>signin page</h1>} />
          </Route>
          <Route path="courses">
          <Route index element={<h1>Courses page</h1>} />
          <Route path="react" element={<h1>React page</h1>} />
        </Route> */}
        </Routes>
      </Suspense>
      <h2>Bottom component</h2>
    </BrowserRouter>
  );
}

export default App;
