import { CustomNotification } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
	message: string | null;
	type: "success" | "error" | "info" | null;
}

const initialState: NotificationState = {
	message: null,
	type: null,
};

export const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		showNotification(state, action: PayloadAction<CustomNotification>) {
			state.message = action.payload.message;
			state.type = action.payload.type || "info";
		},
		clearNotification(state) {
			state.message = null;
			state.type = null;
		},
	},
});

export const { showNotification, clearNotification } =
	notificationSlice.actions;
export default notificationSlice.reducer;
