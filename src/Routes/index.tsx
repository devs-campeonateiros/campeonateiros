import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

import Login from "../Pages/Login";
import Register from "../Pages/Register";


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/events" element={"ex: <componente />"}/>
            <Route path="/home" element={"ex: <componente />"}/>
            <Route path="*" element={<Navigate replace to={"/home"} />}/>

        </Routes>
    );
};
