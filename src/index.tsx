import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Global/global";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </GlobalProvider>
    </React.StrictMode>
);
