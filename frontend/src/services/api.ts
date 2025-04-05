import axios from "axios";
import { User, Content, ApiResponse } from "../types";
import { mockUsers, mockContents } from "../utils/mockData";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Mock API implementation
export const api = {
	// Auth endpoints
	login: async (
		email: string,
		password: string,
	): Promise<ApiResponse<{ token: string; user: User }>> => {
		// Mock implementation
		const user = mockUsers.find((u) => u.email === email);
		if (user) {
			return {
				data: {
					token: "mock-jwt-token",
					user,
				},
			};
		}
		throw new Error("Invalid credentials");
	},

	register: async (
		userData: Omit<User, "id" | "createdAt">,
	): Promise<ApiResponse<User>> => {
		// Mock implementation
		const newUser: User = {
			...userData,
			id: mockUsers.length + 1,
			createdAt: new Date().toISOString(),
		};
		return { data: newUser };
	},

	// Content endpoints
	getContents: async (): Promise<ApiResponse<Content[]>> => {
		// Mock implementation
		return { data: mockContents };
	},

	getContent: async (id: number): Promise<ApiResponse<Content>> => {
		// Mock implementation
		const content = mockContents.find((c) => c.id === id);
		if (content) {
			return { data: content };
		}
		throw new Error("Content not found");
	},

	createContent: async (
		contentData: Omit<Content, "id" | "createdAt">,
	): Promise<ApiResponse<Content>> => {
		// Mock implementation
		const newContent: Content = {
			...contentData,
			id: mockContents.length + 1,
			createdAt: new Date().toISOString(),
		};
		return { data: newContent };
	},
};
