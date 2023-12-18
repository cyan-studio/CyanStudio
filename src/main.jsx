import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact.jsx";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.jsx";
import { SEO } from "./Pages/SEO.jsx";
import { WebDev } from "./Pages/WebDev.jsx";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Website" element={<WebDev />} />
          <Route path="SEO" element={<SEO />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
