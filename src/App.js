import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense } from "react";

const Loading = React.lazy(() => import('./pages/Loading'));
const Login = React.lazy(() => import('./pages/Login'));

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <div>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </Suspense>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;