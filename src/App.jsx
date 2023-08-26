import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

import Home from "./components/Home";
import Record from "./components/Record";
import Search from "./components/Search";
import All from "./components/All";
import Dentistry from "./components/Dentistry";
import Laboratory from "./components/Laboratory";
import Surgery from "./components/Surgery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />}>
            <Route index element={<Navigate to="all" replace />} />
            <Route path="all" element={<All />} />
            <Route path="dentistry" element={<Dentistry />} />
            <Route path="laboratory" element={<Laboratory />} />
            <Route path="surgery" element={<Surgery />} />
          </Route>
          <Route path="record" element={<Record />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
