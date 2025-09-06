// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Utama from "./pages/Utama/Utama";
import TerasKDN from "./pages/TerasKDN/TerasKDN";
import TentangKajian from "./pages/TentangKajian";
import AktivitiKajian from "./pages/AktivitiKajian";
import Agensi from "./pages/Agensi";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Utama />} />
          <Route path="/teras-kdn" element={<TerasKDN />} />
          <Route path="/tentang-kajian" element={<TentangKajian />} />
          <Route path="/aktiviti-kajian" element={<AktivitiKajian />} />
          <Route path="/agensi" element={<Agensi />} />
        </Routes>
      </Layout>
    </Router>
  );
}
