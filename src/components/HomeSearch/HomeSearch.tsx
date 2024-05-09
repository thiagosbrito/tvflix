import { SearchIcon } from "lucide-react";

export const HomeSearch = () => {
    return (
        <div className="w-8/12 h-12 flex items-center border border-slate-400 rounded-full px-4">
            <SearchIcon className="w-6 h-6" />
            <input type="text" placeholder="Search" className="w-full pl-4 h-full bg-transparent text-slate-400 outline-none" />
        </div>
    );
};