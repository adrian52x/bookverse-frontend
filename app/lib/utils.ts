import { ApiErrorData } from "@/types";

export function isVariableValid(variable: any) {
	return variable !== null && variable !== undefined;
}

// Handle API error messages
// Error response can have either a string message or an array of validation errors
export function getErrorMessage(errorData: ApiErrorData): string {
	if (Array.isArray(errorData.message)) {
		return errorData.message.map((err) => err.msg).join(", ");
	}
	return errorData.message;
}
