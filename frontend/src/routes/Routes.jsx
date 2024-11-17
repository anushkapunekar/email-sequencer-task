import AuthPage from "@pages/authPage";
import EmailSequence from "@pages/emailSeqPage";
import EmailSequenceDetail from "@pages/emailSeqDetailPage";
import Login from "@pages/loginPage";
import Register from "@pages/registerPage";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterForm from "../components/auth/registerForm";
import LoginForm from "../components/auth/loginForm";

const Routers = () => {
  // defining routes
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/emailsequences"} />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route
          path="/emailsequences"
          element={<AuthPage Component={EmailSequence} />}
        />
        <Route
          path="/emailsequences/:emailSequenceId"
          element={<EmailSequenceDetail />}
        />
      </Routes>
    </>
  );
};

export default Routers;