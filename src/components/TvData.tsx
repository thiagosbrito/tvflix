'use client';
import { useLocalStorage } from "@/hooks/useLocalStorate";
import { Card, CardContent, CardHeader } from "./ui/card";
import { FileImage } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



interface Episode {
    name: string;
    cover: string;
    stream_url: string;
}

interface Channel {
    category: string;
    name: string;
    episodes: Episode[];
    channels: Channel[];
    cover: string;
    stream_url: string;
}

const TvData = ({channels}: {channels: Channel[]}) => {
    const movies = channels.filter(channel => channel.category === 'Movie');
    const series = channels.filter(channel => channel.category === 'Series');
    const tvChannels = channels.filter(channel => channel.category !== 'Movie' && channel.category !== 'Series');
    return (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="movies">Movies</TabsTrigger>
                <TabsTrigger value="series">Series</TabsTrigger>
                <TabsTrigger value="channels">Channels</TabsTrigger>
            </TabsList>
            <TabsContent value="movies">
                <div className="w-full f-full grid grid-cols-8 gap-4">
                    {movies.map((channel, index) => 
                        <Card key={index}>
                            <CardHeader>{channel.name}</CardHeader>
                            <CardContent>
                                <FileImage className="w-12 h-12" />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </TabsContent>
            <TabsContent value="series">
                <div className="w-full f-full grid grid-cols-8 gap-4">
                    {series.map((channel, index) => 
                        <Card key={index}>
                            <CardHeader>{channel.name}</CardHeader>
                            <CardContent>
                                <FileImage className="w-12 h-12" />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </TabsContent>
            <TabsContent value="channels">
                <div className="w-full f-full grid grid-cols-8 gap-4">
                    {tvChannels.map((channel, index) => 
                        <Card key={index}>
                            <CardHeader>{channel.name}</CardHeader>
                            <CardContent>
                                <FileImage className="w-12 h-12" />
                            </CardContent>
                        </Card>
                    )}
                </div>
            </TabsContent>
        </Tabs>
    )
}
export default TvData;