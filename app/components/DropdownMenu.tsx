"use client";
import React from 'react';

import { Menu } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

 const MobileMenu = () =>{

    return(
        <NavigationMenu.Root className=' block md:hidden p  justify-center'>
        <NavigationMenu.List>

          <NavigationMenu.Item>

            <NavigationMenu.Trigger>
                <Menu/>
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className=' NavigationMenuContent  z-50 backdrop-blur  bg-slate-950/60  p-5 absolute top-[13vh] w-full'>

              <NavigationMenu.Link />
              <div className=' flex flex-col gap-5 items-start text-2xl'>
                <a > Home </a>
                <a href='#about'> About </a>
                <a > Location & Hours </a>
                <a >  Contact </a>

              </div>

        



            </NavigationMenu.Content>
          </NavigationMenu.Item>
    
    {/*  */}
          <NavigationMenu.Indicator />
        </NavigationMenu.List>
    
        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
      );
}



export default MobileMenu;