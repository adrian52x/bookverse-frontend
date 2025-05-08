import Link from "next/link";
import { BookGrid } from "../components/BookGrid";
import { BookGridFallBack } from "../components/BookGridFallBack";
import { isVariableValid } from "../lib/utils";
import { Book } from "@/types";
import { Dashboard } from "../components/Dashboard";


export default function Home() {
    return (
      <Dashboard/>
    );
}
