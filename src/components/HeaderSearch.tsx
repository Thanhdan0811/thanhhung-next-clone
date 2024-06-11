'use client';

import { cn } from "@/lib/utils";
import { Search, ShoppingBag, User, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const HeaderSearch = () => {

  const [activeSearchMobile, setActiveSearchMobile] = useState(false);

  const handleToggoleSearchMobile = (isActive: boolean) => {
    setActiveSearchMobile(isActive);
  }

  return (
    <>
      <div className="header-search flex items-center justify-between py-2 px-2 xl:py-0">
        {/* Logo */}
        <div className="logo-wrap w-[20%] order-2 xl:order-1">
          <Image
            src="/logo/logo_medium.png"
            alt="logo"
            width="240"
            height="82"
          />
        </div>

        {/* search block */}
        <div className="search-icon__mobile order-1 xl:hidden" onClick={() => handleToggoleSearchMobile(true)}>
          <Search size="30px" />
        </div>
        <div className={cn('search-wrap items-center w-[60%] order-1 xl:order-2', {'active-mobile': activeSearchMobile})}>
          <span className="close-icon__mobile inline-block xl:hidden p-2" onClick={() => handleToggoleSearchMobile(false)}>
            <X size="26px" />
          </span>
          <input
            type="text"
            placeholder="Bạn đang tìm kiếm..."
            className="px-4 py-3 inline-block w-full"
          />
          <span className="search-icon cursor-pointer p-2">
            <Search size="30px" />
          </span>
        </div>
        
        {/* user noti-user language */}
        <div className="user-wrap w-[20%] flex items-center justify-end order-3 gap-6 xl:order-3">
          <div className="user-icon cursor-pointer relative">
            <User size="26px" />
            <div className="absolute top-full right-[50%] user-drop w-max">
                <span className="block px-4 py-2 transition-all">Đăng Nhập</span>
                <span className="block px-4 py-2 transition-all">Đăng ký</span>
            </div>
          </div>
          <div className="noti-icon cursor-pointer">
            <ShoppingBag size="26px" className="bag-icon" />
            <span className="noti-count">0</span>
          </div>
          <div className="language cursor-pointer">
            <span className="">ENG</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default HeaderSearch;
