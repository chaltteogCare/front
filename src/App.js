import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

const Loading = React.lazy(() => import('./pages/Loading'));
const Login = React.lazy(() => import('./pages/Login'));
const Main = React.lazy(() => import('./pages/Main'));
const Signup = React.lazy(() => import('./pages/Signup'));
const My = React.lazy(() => import('./pages/My'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/My" element={<My />} /> 
            </Routes>
          </Suspense>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;