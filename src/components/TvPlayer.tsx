'use client';
import { PlaylistItem } from "iptv-playlist-parser";
import { ChevronRight, PlayIcon, TvIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import VideoPlayer from "./VideoPlayer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import Image from "next/image";


const fetchTSStream = async (stream_url: string) => {
    try {
        const tsStreamResponse = await fetch(stream_url);
        const reader = tsStreamResponse.body?.getReader();
        if (!reader) {
            throw new Error('Failed to get reader for TS stream');
        }

        const chunks: Uint8Array[] = [];
        let done = false;
        while (!done) {
            const { value, done: streamDone } = await reader.read();
            done = streamDone;
            if (value) {
                chunks.push(value);
            }
        }

        const blob = new Blob(chunks, { type: 'video/mp2t' });
        const objectURL = URL.createObjectURL(blob);
        return objectURL;
    } catch (error) {
        console.error('Error fetching TS stream:', error);
        throw error;
    }
};


export const TvPlayer = ({ guide }: {guide: any}) => {
    const playerRef = useRef(null);
    const [videoOptions, setVideoOptions] = useState<any | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<{title: string; items: PlaylistItem[]} | null>(null);
    const filteredGuide = guide.filter((group: { title: string; items: PlaylistItem[] }) => group.items.length > 0  && !group.title.includes('+18') && !group.title.includes('Adultos'));
    // useEffect(() => {
    //     if (filteredGuide.length > 0) {
    //         extractAllLogoURLSAndExcludeDuplicates(filteredGuide);
    //     }
    // }, [filteredGuide])
    const setVideo = async (video: PlaylistItem) => {
        const src = video.url.includes('.mp4') ? video.url : await fetchTSStream(video.url);
        const options = {
            autoplay: true,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
                src,
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
    // const extractAllLogoURLSAndExcludeDuplicates = (guide: any): Array<{protocol: string, hostname: string}> => {
    //     const uniqueLogos: Array<{protocol: string, hostname: string}> = guide.reduce((acc: Array<{protocol: string, hostname: string}>, group: { items: PlaylistItem[] }) => {
    //         group.items.forEach((item: PlaylistItem) => {
    //         const logoURL = item.tvg.logo;
    //         let protocol: string;
    //         protocol = logoURL.includes('https://') ? 'https' : 'http';
    //         const domain = logoURL.split('/')[2];
    //         const logo = { protocol, hostname: domain };
    //         if (!acc.some((logoObj) => logoObj.hostname === domain)) {
    //             acc.push(logo);
    //         }
    //         });
    //         return acc;
    //     }, []);
    //     console.log(uniqueLogos);
    //     return uniqueLogos;
    // }

    const defineCategory = (category: {title: string; items: PlaylistItem[]}) => {
        setVideoOptions(null);
        setSelectedCategory(category);
    }

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;
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
                    {filteredGuide.map((group: { title: string; items: PlaylistItem[] }) => {
                        if (group) {
                            return (
                                <li key={group.title} className="flex items-center justify-between px-4 py-2 cursor-pointer rounded-md backdrop-blur bg-black/30 hover:bg-black/65 transition-all ease-in" onClick={() => defineCategory(group)}>
                                    <h2 className="text-lg text-white font-semibold">{group.title} - {`(${group.items.length})`}</h2>
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
                                    <div key={index} className={`rounded-lg border border-slate-400 flex w-full h-14 items-center justify-center`}>
                                        <Image src={item.tvg.logo} alt={item.name} width={200} height={56} />
                                    </div>
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