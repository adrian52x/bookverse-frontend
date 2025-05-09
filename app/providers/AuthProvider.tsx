"use client";
import { useEffect, useState } from "react";
import { useAuthInit } from "../hooks/useAuthInit";

export function AuthProvider({ children }: { children: React.ReactNode }) {
	// useAuthInit();
	// return <>{children}</>;
	useAuthInit();
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	// Prevent rendering until client mounting is complete. Due to hydration errors.
	if (!hasMounted) return null;

	return <>{children}</>;
}
