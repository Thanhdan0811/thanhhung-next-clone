'use client';

import { X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const TopbarTitle = () => {

    const topBarRef = useRef<HTMLDivElement>(null);



    const handleHideTopbarTitle = () => {
        if(!topBarRef.current) return;
        const topBarHeight = topBarRef.current.getBoundingClientRect().height;

        for(let i = topBarHeight; i >= 0; i = i - 0.005) {
            topBarRef.current.style.height = i + "px";
        }
    };

    return <>

    <div ref={topBarRef} className="flex items-center duration-300 px-4 justify-between  lg:justify-center overflow-hidden h-11 bg-gray-title  xl:ps-12 xl:pe-12 xl:text-[14px] ">
        <Link href="#" className="text-slate-50 lg:mx-auto" >Thanh Hùng Futsal - Giày Bóng Đá Chính Hãng - 2013</Link>
        <div onClick={handleHideTopbarTitle}>
            <X className="text-slate-50 lg:ml-auto" />
        </div>
    </div>

    </>
}

export default TopbarTitle;