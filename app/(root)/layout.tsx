import { Work_Sans } from "next/font/google";
import Navbar from "../components/Navbar";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className={workSans.className}>
            <Navbar />
            {children}
        </main>
    )
}