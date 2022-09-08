import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./Global/global";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalProvider>
                <GlobalStyle />
                <App />
                <ToastContainer
                    theme="dark"
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </GlobalProvider>
        </BrowserRouter>
    </React.StrictMode>
);

