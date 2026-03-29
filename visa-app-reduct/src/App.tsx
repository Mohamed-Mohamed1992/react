import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VisaFormPage from "./pages/VisaFormPage";
import ReviewPage from "./pages/ReviewPage";
import SuccessPage from "./pages/SuccessPage";
import PassportFormPage from "./pages/PassportFormPage";
import UserList from "./pages/UserList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/visa" element={<VisaFormPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/passport" element={<PassportFormPage />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
}

export default App;
