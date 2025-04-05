import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../components/Layout";

describe("Layout Component", () => {
	it("renders the layout with header, main content, and footer", () => {
		render(
			<MemoryRouter>
				<Layout />
			</MemoryRouter>,
		);

		// Check header
		expect(screen.getByText("Indica.Me")).toBeInTheDocument();

		// Check footer
		expect(screen.getByText("© 2024 Indica.Me")).toBeInTheDocument();

		// Check main content area
		const mainContent = screen.getByRole("main");
		expect(mainContent).toBeInTheDocument();
	});
});
