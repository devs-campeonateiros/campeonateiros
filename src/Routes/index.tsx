import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Homepage from "../Pages/Homepage";

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
