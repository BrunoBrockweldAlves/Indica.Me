import { api } from "../services/api";
import { mockUsers, mockContents } from "../utils/mockData";

describe("API Service", () => {
	describe("Authentication", () => {
		it("should login successfully with valid credentials", async () => {
			const response = await api.login("john@example.com", "password");
			expect(response.data.user).toEqual(mockUsers[0]);
			expect(response.data.token).toBeDefined();
		});

		it("should fail login with invalid credentials", async () => {
			await expect(
				api.login("invalid@example.com", "password"),
			).rejects.toThrow("Invalid credentials");
		});

		it("should register a new user", async () => {
			const newUser = {
				username: "newuser",
				email: "new@example.com",
			};
			const response = await api.register(newUser);
			expect(response.data.username).toBe(newUser.username);
			expect(response.data.email).toBe(newUser.email);
			expect(response.data.id).toBeDefined();
			expect(response.data.createdAt).toBeDefined();
		});
	});

	describe("Content", () => {
		it("should fetch all contents", async () => {
			const response = await api.getContents();
			expect(response.data).toEqual(mockContents);
		});

		it("should fetch a specific content", async () => {
			const response = await api.getContent(1);
			expect(response.data).toEqual(mockContents[0]);
		});

		it("should fail to fetch non-existent content", async () => {
			await expect(api.getContent(999)).rejects.toThrow("Content not found");
		});

		it("should create new content", async () => {
			const newContent = {
				title: "New Content",
				description: "New Description",
				url: "https://example.com",
				userId: 1,
			};
			const response = await api.createContent(newContent);
			expect(response.data.title).toBe(newContent.title);
			expect(response.data.description).toBe(newContent.description);
			expect(response.data.url).toBe(newContent.url);
			expect(response.data.userId).toBe(newContent.userId);
			expect(response.data.id).toBeDefined();
			expect(response.data.createdAt).toBeDefined();
		});
	});
});
