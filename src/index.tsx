import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<UserProvider>
				<ToastContainer />
				<App />
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
