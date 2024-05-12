import TvGuide from "@/components/TvGuide";
import { Featured } from "@/components/layout/Featured";
import { Header } from "@/components/layout/Header";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
export const dynamic = 'force-dynamic'
export default function Home() {
  	return (
    	<div className="w-full h-full bg-[url(../../public/images/bg_image.jpg)] bg-black bg-top bg-no-repeat flex flex-col overflow-x-hidden">
      		<Header />
			<Featured />
      		<main className="bg-gradient-to-t from-black to-transparent w-full h-full flex flex-col z-30 -mt-3">
        		<div className="w-full h-full flex pb-6">
          			{/* <TvGuide /> */}
          			<div className="w-full flex flex-col bg-black">
						<div className="w-full h-52 px-6 py-9 gap-y-4">	
							<div className="w-full flex gap-x-4 items-center">
								<h3 className="text-white font-semibold">Movies</h3>
								<ChevronRight className="w-6 h-6 text-white"/>
							</div>
							<div className="w-full h-48">
								<ScrollArea className="w-full py-4">
									<div className="w-full h-full flex gap-x-6">
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
						</div>
						<div className="w-full h-52 px-6 py-9 gap-y-4">	
							<div className="w-full flex gap-x-4 items-center">
								<h3 className="text-white font-semibold">Series</h3>
								<ChevronRight className="w-6 h-6 text-white"/>
							</div>
							<div className="w-full h-48">
								<ScrollArea className="w-full py-4">
									<div className="w-full h-full flex gap-x-6">
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
						</div>
						<div className="w-full h-52 px-6 py-9 gap-y-4">	
							<div className="w-full flex gap-x-4 items-center">
								<h3 className="text-white font-semibold">Live TV</h3>
								<ChevronRight className="w-6 h-6 text-white"/>
							</div>
							<div className="w-full h-48">
								<ScrollArea className="w-full py-4">
									<div className="w-full h-full flex gap-x-6">
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
										<div className="w-48 h-24 flex flex-col items-baseline p-2 bg-gray-800 rounded-lg overflow-hidden bg-[url('/images/video_cover.jpg')] bg-cover">
											<h4 className="text-white text-sm mt-auto">Movie Title</h4>
										</div>
									</div>
									<ScrollBar orientation="horizontal" />
								</ScrollArea>
							</div>
						</div>
          			</div>
					
					
        		</div>
      		</main>
    	</div>
  	);
}
