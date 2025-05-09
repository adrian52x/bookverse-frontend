import { Nav } from "../components/Nav";
import { CustomNotification } from "../components/ui/CustomNotification";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Nav />
			<CustomNotification />
			<div className="container mx-auto px-8">{children}</div>
		</>
	);
}
