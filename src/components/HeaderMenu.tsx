'use client';

import { HEADER_MENU } from "@/constanst";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";
import { useRef, useState } from "react";


type menuType = {
  title: string;
  href: string;
  isActive: boolean;
  children: string;
}

const ICON_LIST = {
  chevronDown:  <ChevronDown className="icon hidden xl:inline-block" size="12px" />,
  chevronRight: <ChevronRight className="icon  hidden xl:inline-block" size="12px" />,
  plus: <Plus className="icon xl:hidden" size="12px" />,
  minus: <Minus className="icon xl:hidden" size="12px" />
}

const HeaderMenu = () => {

  const [ headerMenu, setHeaderMenu ] = useState<any>(HEADER_MENU);

  const toggleMenuList = (typeMenu: string, idx: number) => {
    const newHeaderMenu = {...headerMenu};
    
    newHeaderMenu[typeMenu][idx].isActive = !newHeaderMenu[typeMenu][idx].isActive;
    
    console.log("heelleo ", typeMenu, idx, newHeaderMenu);
    setHeaderMenu({...newHeaderMenu});

  }

  return (
    <>
      {/* header menu desktop */}
      <div className="header-menu hidden xl:block">
        <ul className="wrap-lv wrap-lv__1">
          {headerMenu.MENU_LIST_MAIN.map((mainItem: menuType, index: number) => {
            return (
              <li
                className="level level-1"
                key={mainItem.title + index.toString()}
              >
                <span className="title">{mainItem.title || ""} { !mainItem.children ? null : ICON_LIST.chevronDown } </span>
                { !mainItem.children ? null : (
                  <ul className="wrap-lv wrap-lv__2">
                    {headerMenu[mainItem.children].map((item1: menuType, idx1 : number) => {
                      return (
                        <li
                          className="level level-2"
                          key={item1.title + idx1.toString()}

                        >
                          <span className="title">{item1.title} {!item1.children ? null : ICON_LIST.chevronRight} </span>
                          { !item1.children ? null : (
                            <ul className="wrap-lv wrap-lv__3">
                              {headerMenu[item1.children].map((item2: menuType, idx2: number) => {
                                return (
                                  <li
                                    className="level level-3"
                                    key={item2.title + idx2.toString()}
                                  >
                                    <span className="title">
                                      {item2.title}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      {/* header menu mobile */}
      <div className="header-menu-mobile xl:hidden">
        <ul className="wrap-lv wrap-lv__1">
          {headerMenu.MENU_LIST_MAIN.map((mainItem: menuType, index: number) => {
            return (
              <li
                className={cn("level level-1", mainItem.isActive && 'active')}
                key={mainItem.title + index.toString()}
              >
                <span className="title">{mainItem.title || ""} </span>
                {!mainItem.children ? null : (
                  <>
                    <span className="expand" onClick={() => toggleMenuList("MENU_LIST_MAIN", index)}>
                      <Plus className="icon-plus" size="15px"/>
                      <Minus className="icon-minus" size="15px"/>
                    </span>
                    <ul className="wrap-lv wrap-lv__2">
                      {headerMenu[mainItem.children].map((item1: menuType, idx1: number) => {
                        return (
                          <li
                            className={cn("level level-2", item1.isActive && 'active')}
                            key={item1.title + idx1.toString()}

                          >
                            <span className="title">{item1.title}</span>
                            { !item1.children ? null : (
                              <>
                                <span className="expand" onClick={() => toggleMenuList(mainItem.children, idx1)}>
                                  <Plus className="icon-plus" size="15px"/>
                                  <Minus className="icon-minus" size="15px"/>
                                </span>
                                <ul className="wrap-lv wrap-lv__3">
                                  {headerMenu[item1.children].map((item2: menuType, idx2: number) => {
                                    return (
                                      <li
                                        className="level level-3"
                                        key={item2.title + idx2.toString()}
                                      >
                                        <span className="title">
                                          {item2.title}
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
