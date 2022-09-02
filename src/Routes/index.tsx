import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={"ex: <componente />"} />
            <Route path="/events" element={"ex: <componente />"} />
            <Route path="/home" element={<Homepage />} />
            <Route path="*" element={<Navigate replace to={"/home"} />} />
        </Routes>
    );
};
