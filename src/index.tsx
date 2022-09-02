import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Global/global";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalProvider>
                <GlobalStyle />
                <App />
            </GlobalProvider>
        </BrowserRouter>
    </React.StrictMode>
);
