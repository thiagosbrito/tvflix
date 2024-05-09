import TvGuide from "@/components/TvGuide";
import { Header } from "@/components/layout/Header";
export const dynamic = 'force-dynamic'
export default function Home() {
  return (
    <div className="w-full h-full bg-[url(../../public/images/bg_image.jpg)] bg-top bg-no-repeat flex flex-col">
      <Header />
      <main className="bg-gradient-to-t from-black to-transparent w-full h-full">
        <div className="w-full h-full flex pb-6 overflow-hidden">
          <TvGuide />
        </div>
      </main>
    </div>
  );
}
