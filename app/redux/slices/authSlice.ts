import { getCookie } from "@/app/lib/utils";
import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthModalType = "login" | "register" | null;

interface AuthState {
	user: User | null;
	openModal: AuthModalType;
}

const initialState: AuthState = {
	user: null,
	openModal: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		clearUser(state) {
			state.user = null;
		},
		openModal(state, action: PayloadAction<AuthModalType>) {
			state.openModal = action.payload;
		},
		closeModal(state) {
			state.openModal = null;
		},
	},
});

export const { setUser, clearUser, openModal, closeModal } = authSlice.actions;
export default authSlice.reducer;
