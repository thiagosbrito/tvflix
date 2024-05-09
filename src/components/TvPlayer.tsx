'use client';
import { PlaylistItem } from "iptv-playlist-parser";
import { ChevronRight, ImageIcon, PlayIcon, Tv2Icon, TvIcon } from "lucide-react";
import { useRef, useState } from "react";
import videojs from "video.js";
import VideoPlayer from "./VideoPlayer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "./ui/card";

interface VideoOptions {
    controls: true;
    autoplay: true;
    sources: {
        src: string;
        type: string;
    }[];
    plugins: {
        httpSourceSelector: {
            default: 'auto'
        }
    };

}

export const TvPlayer = ({ guide }: {guide: any}) => {
    const playerRef = useRef(null);
    const [videoOptions, setVideoOptions] = useState<any | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<{title: string; items: PlaylistItem[]} | null>(null);

    const setVideo = (video: PlaylistItem) => {
        const options = {
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
                src: video.url,
                type: video.url.includes('.mp4') ? 'video/mp4' : 'application/x-mpegURL'
            }],
            plugins: {
                httpSourceSelector: {
                    default: 'auto'
                }
            }
        }
        setVideoOptions(options);
    }

    const defineCategory = (category: {title: string; items: PlaylistItem[]}) => {
        console.log(category);
        setVideoOptions(null);
        setSelectedCategory(category);
    }

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;
        console.log(player.qualityLevels())
    // You can handle player events here, for example:
        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    }

    return (
        <div className="w-full h-full flex gap-4">
            <aside className="min-w-80 h-full border border-slate-500 overflow-hidden p-4 flex flex-col gap-y-3">
                <h1 className="text-xl text-white font-bold flex gap-x-4 items-center"><TvIcon className="h-6 w-6" />Your on-line channels</h1>
                <ul className="flex flex-col gap-y-2 overflow-y-auto">
                    {guide.map((group: { title: string; items: PlaylistItem[] }) => {
                        if (group) {
                            return (
                                <li key={group.title} className="flex items-center justify-between px-4 py-2 cursor-pointer rounded-md backdrop-blur bg-black/30 hover:bg-black/65 transition-all ease-in" onClick={() => defineCategory(group)}>
                                    <h2 className="text-lg text-white font-semibold">{group.title}</h2>
                                    <ChevronRight className="w-6 h-6" />
                                </li>
                            )
                        }
                    })}
                </ul>
            </aside>

            <div className="h-full w-full overflow-hidden pb-1">
                <div className="grid grid-flow-row grid-cols-5 gap-3 w-full h-full overflow-y-auto">
                    {(selectedCategory && !videoOptions) && selectedCategory.items.length > 0 ? (
                        <>
                            {selectedCategory.items.map((item: PlaylistItem, index) => {
                                return (
                                    <Card key={index} onClick={() => setVideo(item)}>
                                        <CardHeader>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription>{item.group.title}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <PlayIcon className="w-16 h-16 text-gray-400" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </>
                    ) : null}
                    {videoOptions !== null ? (
                        <div className="w-full h-full col-span-5">
                            <VideoPlayer options={videoOptions} onReady={handlePlayerReady} />
                        </div>
                    ) : null} 
                </div>
            </div>
        </div>
    )
}

// <div key={index} className="relative flex flex-col shadow-md rounded-xl cursor-pointer overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm backdrop-blur bg-black/45" onClick={() => setVideo(item)}>
//     <div className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//         </svg>
//     </div>
//     <div className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</div>
//     <div className="h-auto overflow-hidden">
//         <div className="h-44 overflow-hidden relative flex items-center justify-center">
//             <PlayIcon className="w-16 h-16 text-gray-400" />
//         </div>
//     </div>
//     <div className="bg-white py-4 px-3">
//         <h3 className="text-xs mb-2 font-medium">{item.name}</h3>
//         <div className="flex justify-between items-center">
//             <p className="text-xs text-gray-400">
//                 {item.group.title}
//             </p>
//             <div className="relative z-40 flex items-center gap-2">
//                 <div className="text-orange-600 hover:text-blue-500 cursor-pointer">
//                     <PlayIcon className="w-6 h-6" />
//                 </div>
//                 <a className="text-orange-600 hover:text-blue-500" href="">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     </div>
// </div>