import { Navigate, Route, Routes } from "react-router-dom";
import SimpleHeader from "../components/simpleHeader";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/register" element={"ex: <componente />"} />
            <Route path="/login" element={"ex: <componente />"} />
            <Route path="/dashboard" element={"ex: <componente />"} />
            <Route path="/events" element={"ex: <componente />"} />
            <Route path="/home" element={<SimpleHeader />} />
            <Route path="*" element={<Navigate replace to={"/home"} />} />
        </Routes>
    );
};
