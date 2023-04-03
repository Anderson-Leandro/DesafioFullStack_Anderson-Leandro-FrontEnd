import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ModalProvider } from "./contexts/ModalsContext";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/dashboard"
					element={
						<ModalProvider>
							<Dashboard />
						</ModalProvider>
					}
				/>

				<Route path="*" element={<Navigate to={"/"} />} />
			</Routes>
		</div>
	);
}

export default App;
