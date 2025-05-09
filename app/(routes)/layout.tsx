import { Nav } from "../components/Nav";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Nav />
			<div className="container mx-auto px-8">{children}</div>
		</>
	);
}
