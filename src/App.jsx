import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUp2nd from "./pages/SignUp2nd";
import SignUp3rd from "./pages/SignUp3rd";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Sidebar />} />
        <Route path="/upload" element={<SignUp2nd />} />
        <Route path="/loading" element={<SignUp3rd />} />
        <Route path="/forget" element={<ForgetPassword />} />
        <Route path="/payment" element={<Sidebar component={"upgrade"} />} />
        <Route path="/home" element={<Sidebar component={"home"} />} />
        <Route path="/account" element={<Sidebar component={"account"} />} />
        <Route
          path="/main/conversation"
          element={<Sidebar component={"singleConversation"} />}
        />
        <Route
          path="/main/conversations"
          element={<Sidebar component={"allConversations"} />}
        />
        <Route
          path="/main/conversation/summary"
          element={<Sidebar component={"summary"} />}
        />
        <Route
          path="/main/conversation/transcript"
          element={<Sidebar component={"transcript"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
