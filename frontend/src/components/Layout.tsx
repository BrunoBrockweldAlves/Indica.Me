import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">Indica.Me</h1>
				</div>
			</header>
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<Outlet />
				</div>
			</main>
			<footer className="bg-white shadow mt-8">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<p className="text-center text-gray-500">© 2024 Indica.Me</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
