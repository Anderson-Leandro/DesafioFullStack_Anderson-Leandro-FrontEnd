import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import api from "../services/api";
import { IUserUpdateData, UserContext } from "./UserContext";

interface IModalProviderProps {
	children: ReactNode;
}

export interface IAddContactData {
	name: string;
	email: string;
	phoneNumber: string;
}

export interface IUpdateContactData {
	name?: string;
	email?: string;
	phoneNumber?: string;
}

export interface IContact {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	createdAt: string;
	user?: {
		name: string;
		email: string;
		phoneNumber: string;
		id: string;
		createdAt: string;
	};
}
export interface IModalContext {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	loadContacts: () => Promise<void>;
	addContact: (addContactData: IAddContactData) => Promise<void>;
	contacts: IContact[];
	setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
	modalType: string;
	setModalType: React.Dispatch<React.SetStateAction<string>>;
	openModal: (type: string) => void;
	getContact: (contactId: string) => Promise<void>;
	editContact: IContact;
	setEditContact: React.Dispatch<React.SetStateAction<IContact>>;
	updateContact: (updateContactData: IUpdateContactData) => Promise<void>;
	deleteContact: (contactId: string) => Promise<void>;
	updateUser: (updateUserData: IUserUpdateData) => Promise<void>;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalProviderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalType, setModalType] = useState("");
	const token = localStorage.getItem("@contacts.com-token");
	const [contacts, setContacts] = useState<IContact[] | []>([]);
	const [editContact, setEditContact] = useState<IContact>({} as IContact);
	const { user, setUser } = useContext(UserContext);

	const openModal = (type: string) => {
		setModalType(type);
		setIsOpen(true);
	};

	const loadContacts = async (): Promise<void> => {
		try {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.get("/contacts");
			return setContacts(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		loadContacts();
	}, []);

	const getContact = async (contactId: string): Promise<void> => {
		try {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.get(`/contacts/${contactId}`);
			setEditContact(response.data);
			openModal("updateContact");
		} catch (error) {
			console.error(error);
		}
	};

	const addContact = async (
		addContactData: IAddContactData
	): Promise<void> => {
		try {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			await api.post("/contacts", addContactData);
			loadContacts();
			setIsOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	const updateContact = async (
		updateContactData: IUpdateContactData
	): Promise<void> => {
		try {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			await api.patch(`/contacts/${editContact.id}`, updateContactData);
			loadContacts();
			setIsOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteContact = async (contactId: string): Promise<void> => {
		try {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			await api.delete(`/contacts/${contactId}`);
			loadContacts();
			setIsOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	const updateUser = async (updateUserData: IUserUpdateData) => {
		try {
			const token = localStorage.getItem("@contacts.com-token");
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			const response = await api.patch(
				`/users/${user?.id}`,
				updateUserData
			);
			setUser(response.data);
			setIsOpen(false);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<ModalContext.Provider
			value={{
				isOpen,
				setIsOpen,
				addContact,
				loadContacts,
				contacts,
				setContacts,
				modalType,
				setModalType,
				openModal,
				getContact,
				editContact,
				setEditContact,
				updateContact,
				deleteContact,
				updateUser,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };
