import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import ConfirmPage from "./pages/ConfirmPage";
import ThankYouPage from "./pages/ThankYouPage";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    interests: [],
    comment: "",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/form"
          element={<FormPage formData={formData} setFormData={setFormData} />}
        />
        <Route path="/confirm" element={<ConfirmPage formData={formData} />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
