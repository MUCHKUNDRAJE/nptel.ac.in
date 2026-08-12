import { Routes, Route, Navigate } from "react-router-dom";
import PdfPage from "./PdfPage.jsx";

const TOKEN =
  "7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B7fK9mQ2xV8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B8rL4pN6zT1wY5cH3sA0dE8B";

const CERTIFICATE_URL =
  `/noc/E_Certificate/NOC26CS39S66350036203133414/${TOKEN}`;

function App() {
  return (
    <Routes>
      <Route
        path={CERTIFICATE_URL}
        element={<PdfPage />}
      />

      <Route
        path="*"
        element={<Navigate to={CERTIFICATE_URL} replace />}
      />
    </Routes>
  );
}

export default App;