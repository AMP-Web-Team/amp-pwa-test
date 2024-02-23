import Image from "next/image";

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
    <nav className=" border-b border-gray-400">
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

        <div>
            <ol className=" flex flex-row gap-8 text-lg">
                {pageLinks.map((item)=>{
                    return(
                        <a key={item.url} href={item.url}><ul >{item.title}</ul></a>
                    )
                })}
            </ol>
        </div>
      </div>
    </nav>
  );
};

export default GlobalHeader;
