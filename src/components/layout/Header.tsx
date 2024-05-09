import Image from "next/image"
import { HomeSearch } from "../HomeSearch/HomeSearch"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <header className="flex gap-x-6 items-center antialiased w-full text-slate-400 px-4 py-6">
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
                <Button variant="secondary" className="rounded-[8px] drop-shadow-xl">Sign in</Button>
                <Button className="rounded-[8px] drop-shadow hover:bg-red-800">Register</Button>
            </div>
        </header>
    )
}