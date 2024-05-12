import Image from "next/image"
import { HomeSearch } from "../HomeSearch/HomeSearch"
import { Button } from "../ui/button"
import { auth } from "@clerk/nextjs/server"
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";


export const Header = () => {
    const { userId } = auth();
    return (
        <header className="flex gap-x-6 fixed items-center antialiased w-full text-slate-400 px-4 py-6 z-30 backdrop-blur">
            <Image src="/images/logo_horiz.svg" width={215} height={75} alt="" />
            <HomeSearch />
            <nav className="ml-auto">
                <ul className="flex gap-x-4">
                    <li>
                        <a href="#" className="drop-shadow">Movies</a>
                    </li>
                    <li>
                        <a href="#" className="drop-shadow">Series</a>
                    </li>
                    <li>
                        <a href="#" className="drop-shadow flex flex-nowrap items-center gap-x-1">
                            <div className="px-0.5 py-0.5 border border-slate-400 text-white text-xs font-semibold uppercase rounded relative">
                                live
                                <div className="animate-ping w-full h-full delay-1000 bg-red-900 text-white text-xs font-semibold uppercase rounded absolute left-0 top-0"></div>
                            </div>
                            Channels
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-x-6">
                {!userId && (
                    <>
                        <Link href="/sign-in" className="rounded-[8px] drop-shadow-xl transition-colors ease-in hover:bg-slate-200">Sign in</Link>
                        <Link href="/sign-up" className="rounded-[8px] drop-shadow-xl transition-colors ease-in hover:bg-red-800">Register</Link>
                    </>
                )}
                {userId && (
                    <SignOutButton>
                        <Button className="rounded-[8px] drop-shadow hover:bg-red-800 transition-colors ease-in">Sign out</Button>    
                    </SignOutButton>
                )}
            </div>
        </header>
    )
}