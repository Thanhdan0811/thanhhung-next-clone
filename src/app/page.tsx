import HeaderMenu from "@/components/HeaderMenu";
import HeaderSearch from "@/components/HeaderSearch";
import TopbarTitle from "@/components/Topbar-Title";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <TopbarTitle/>
        <div className="bg-white xl:px-12">
          <HeaderSearch />
          <HeaderMenu />
        </div>
      </header>
      <main className="">
        {/* <h1>Hello</h1> */}
      </main>
    </>
  );
}
