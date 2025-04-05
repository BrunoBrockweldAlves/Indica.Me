import { User, Content } from "../types";

export const mockUsers: User[] = [
	{
		id: 1,
		username: "johndoe",
		email: "john@example.com",
		createdAt: "2024-01-01T00:00:00Z",
	},
	{
		id: 2,
		username: "janedoe",
		email: "jane@example.com",
		createdAt: "2024-01-02T00:00:00Z",
	},
];

export const mockContents: Content[] = [
	{
		id: 1,
		title: "React Documentation",
		description: "Official React documentation",
		url: "https://reactjs.org/docs",
		userId: 1,
		createdAt: "2024-01-03T00:00:00Z",
	},
	{
		id: 2,
		title: "TypeScript Handbook",
		description: "TypeScript official documentation",
		url: "https://www.typescriptlang.org/docs",
		userId: 2,
		createdAt: "2024-01-04T00:00:00Z",
	},
];
