import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className=" pr-[15%] pl-[15%] pt-[2%] pb-[2%]">
        <div className="text-stone-500 items-center text-sm font-medium flex w-full max-w-full bg-black flex-col md:flex-row justify-center">
          <div className=" md:mr-[10%]">
            <Image
            src={'/logo-transparent-bg.webp'}
            alt=""
            height={350}
            width={350}
            />
    
          </div>
          <div className=" flex flex-col items-center md:items-start">
            <div className="text-white text-center md:text-start">
              <h1 className="text-6xl pb-3">Sir Benjis Donuts</h1>

              <h3 className="text-2xl pb-3">Donut stop believing!</h3>
            </div>

            <div className="my-8 text-lg text-white flex-row">
              <a
                className="py-4 px-7 inline-block border border-white border-solid rounded-sm"
                href="https://sir-benjis-donuts.square.site/#J5NIRBJ7WWDGMPUBKVTUXBLR"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className=" pr-[15%] pl-[15%] pt-[2%] pb-[2%]  bg-black-main ">
        <div className=" flex flex-col">
          {/* Our Story Header */}
          <div className=" flex flex-row justify-center relative">
            <div className="text-white text-sm font-medium px-5 inline-block bg-neutral-950 min-[981px]:mb-0 z-10">
              <div>
                <h2 className="text-[2.38rem] leading-none pb-3 text-center">
                  Our Story
                </h2>
                <h4 className="text-[1.38rem] leading-7 pb-3 text-center">
                  EST 2017
                </h4>
              </div>
            </div>
            <hr className=" text-white w-full absolute top-1/2 z-0" />
          </div>

          <div className=" flex flex-col md:flex-row mt-4 items-center gap-8">
            <div className=" flex-1 flex flex-row justify-center">
              <p className=" w-3/5">
              Launched in 2017 at local orlando farmers markets & inspired by our pie making past, we became driven to provide guests with the best mini donut and experience, every single time. Our quaint donut shop located inside the vibrant plant street market & crooked can brewery is an experience worthy of confectionary indulgence. All glazes and toppings are made ‘in house’ we take time and invest in our high quality products, you can taste the difference.
              </p>
            </div>
            <div className=" flex-1 h-[500px]">
              <Image
                className=" mx-auto md:mx-0 h-full object-cover w-3/4  md:float-right"
                src={`/img02.webp`}
                alt=""
                width={2000}
                height={2000}
              
              />
              
            </div>
          </div>


        </div>
      </section>

      <section className=" pt-[2%] pb-[2%] bg-black-main ">
        <div className=" flex flex-row">
          <div className=" flex-1 flex flex-col justify-center">
            <div className="w-3/5 m-auto">
              <h2>
              The ‘Willy Wonka’ of Donuts
              </h2>
              <p>
              Inspired by a London ‘industrial ‘bespoke look, unapologetically old school vibe.Black and white logo, tops hat, white subway tiles, stainless steel equipment, with bold pops of color: golden sprinkle dispensers, an abundance of toppings and sprinkles and confectionary fun to help showcase our donuts.
              </p>
            </div>
          </div>
          <div className=" flex-1 bg-blue-600 h-[90vh]">
            <Image
                className=" w-full h-full object-cover object-bottom"
                src={`/img01.webp`}
                alt=""
                width={2000}
                height={2000}
              
              />
          </div>
        </div>
      </section>

    </main>
  );
}
