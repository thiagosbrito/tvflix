import { parse, Playlist, PlaylistItem} from 'iptv-playlist-parser';
import { TvPlayer } from './TvPlayer';
import { Suspense, useState } from 'react';

export const config = {
    api: {
        responseLimits: false
    }
};

const TvGuide = async () => {
    
    let isLoading = false;
    let tv_guide: Array<{ title: string; items: PlaylistItem[]}> = [];
    
    try {
        const response = await fetch('http://dns.clientetv.xyz:8080/get.php?username=ThiagoPO1&password=huRNFqWVTX&type=m3u_plus', { 
            headers: {
                method: 'GET'
            },
            cache: 'no-store'
        });

        const data = await response.text();
        const parsedString: Playlist = parse(data);
        const groupedItems = parsedString.items.reduce((groups: { [key: string]: { title: string, items: PlaylistItem[] } }, item) => {
            const groupTitle = item.group?.title || 'Uncategorized';
            if (!groups[groupTitle]) {
                groups[groupTitle] = { title: groupTitle, items: [] };
            }
            groups[groupTitle].items.push(item);
            return groups;
        }, {});
        tv_guide = Object.values(groupedItems);
        isLoading = false;
    } catch (error) {
        console.error(error);
        isLoading = false;
    }
    
    
    return (
        <div className='flex flex-col w-full h-full px-6 py-4 text-slate-200'>
            <Suspense fallback={
                <div className='w-full h-full bg-white flex items-center justify-center text-slate-800 text-3xl font-semibold'>
                    Loading your Tv Channels...
                </div>
            }>
                <TvPlayer guide={tv_guide} />
            </Suspense>
        </div>
        // <TvData channels={parsed_tv_data} /> // Modify the prop name to 'channels'
    )
}

export default TvGuide;
