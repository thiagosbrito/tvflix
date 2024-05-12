import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-full bg-[url(../../public/images/bg_image.jpg)] bg-top bg-no-repeat flex flex-col relative items-center justify-center">
      <SignIn path="/sign-in" />
      <div className="h-full w-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}