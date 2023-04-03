import { ReactNode, createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

interface IUserProviderProps {
	children: ReactNode;
}

export interface IUserRegisterData {
	name: string;
	email: string;
	phoneNumber: string;
	password: string;
	passwordConfirmation: string;
}

export interface IUserUpdateData {
	name?: string;
	email?: string;
	phoneNumber?: string;
	password?: string;
	passwordConfirmation?: string;
}

export interface IUser {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	password: string;
	passwordConfirmation: string;
	createdAt: string;
}

export interface IUserLoginData {
	email: string;
	password: string;
}

export interface IUserContext {
	registerUser: (userRegisterData: IUserRegisterData) => Promise<void>;
	userLogin: (userLoginData: IUserLoginData) => Promise<void>;
	user: IUser | null;
	setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
	logout: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
	const navigate = useNavigate();
	const [user, setUser] = useState<IUser | null>(null);

	const registerUser = async (userRegisterData: IUserRegisterData) => {
		try {
			const response = await api.post("/users", userRegisterData);
			navigate("/");
			toast.success("Conta criada com sucesso!", {
				position: "top-right",
				autoClose: 2500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} catch (error) {
			console.error(error);
			if (axios.isAxiosError(error)) {
				toast.error(error?.response?.data.message, {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					pauseOnFocusLoss: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			} else {
				toast.error("An error has occurred, please try again later", {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					pauseOnFocusLoss: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		}
	};

	const getUser = async () => {
		try {
			const userId = localStorage.getItem("@contacts.com-userid");
			const token = localStorage.getItem("@contacts.com-token");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.get(`/users/${userId}`);
			setUser(response.data);
			navigate("/dashboard");
		} catch (error) {
			console.error(error);
		}
	};

	const logout = () => {
		localStorage.clear();
		navigate("/");
	};

	useEffect(() => {
		getUser();
	}, []);

	const userLogin = async (userLoginData: IUserLoginData) => {
		try {
			const response = await api.post("/login", userLoginData);
			const { token } = response.data;

			const tokens = token.split(".");

			const userId = JSON.parse(atob(tokens[1])).sub;
			localStorage.setItem("@contacts.com-token", token);
			localStorage.setItem("@contacts.com-userid", userId);
			getUser();
			navigate("/dashboard", { replace: true });
		} catch (error) {
			console.error(error);
			if (axios.isAxiosError(error)) {
				toast.error(error?.response?.data.message, {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					pauseOnFocusLoss: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			} else {
				toast.error("An error has occurred, please try again later", {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					pauseOnFocusLoss: false,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			}
		}
	};

	return (
		<UserContext.Provider
			value={{
				registerUser,
				userLogin,
				user,
				setUser,
				logout,
				// patchUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
