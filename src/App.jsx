import { Routes, Route } from "react-router-dom";
import SigninForm from "./components/SigninForm";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;
