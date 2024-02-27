import Image from "next/image";
import MobileMenu from "./DropdownMenu";
import { Menu } from "lucide-react";

interface Link {
    title: string,
    url: string
}

interface LinkItems extends Array<Link>{};




const pageLinks: Link[] = [
    { title: 'Home', url: '#home'},
    { title: 'About', url: '#about'},
    {title: 'Location & Hours', url: '#hours'}
    
    

];


const GlobalHeader = () => {
  return (
    <>
    <nav className=" z-50 border-b border-gray-400 sticky top-0 bg-black">
      <div className=" flex flex-row justify-between py-2 px-[5%] items-center">
        <div className=" w-32">
          <Image
            className=" w-full"
            src="/logo-transparent-bg.webp"
            alt=""
            width={500}
            height={500}
          />
        </div>

        
        <div className=" hidden md:block  ">
            <ol className=" flex flex-row gap-8 text-lg">
                {pageLinks.map((item)=>{
                    return(
                        <a key={item.url} href={item.url}><ul >{item.title}</ul></a>
                    )
                })}
            </ol>
        </div>
        <MobileMenu />

      </div>
    </nav>
    </>
  );
};

export default GlobalHeader;
