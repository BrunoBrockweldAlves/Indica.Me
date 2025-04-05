export interface User {
	id: number;
	username: string;
	email: string;
	createdAt: string;
}

export interface Content {
	id: number;
	title: string;
	description: string;
	url: string;
	userId: number;
	createdAt: string;
}

export interface AuthState {
	isAuthenticated: boolean;
	user: User | null;
	token: string | null;
}

export interface ApiResponse<T> {
	data: T;
	message?: string;
	error?: string;
}
