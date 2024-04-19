import Image from "next/image";


export default function Home() {
  return (

    <>
      <div className="relative w-full h-full">

        <div className="invisible sm:visible md:invisible lg:visible absolute left-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-full bg-four-color-gradient">
          <div className="pt-56 bg-background-color"></div>
          
        </div>

        <div className="invisible sm:visible md:invisible lg:visible absolute right-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-full bg-four-color-gradient">
          <div className="pt-56 bg-background-color"></div>
        </div>

        <div className="flex flex-col h-full px-4 lg:px-28 2xl:px-36">

          <div className="flex w-full h-full justify-center">
            <div className="flex flex-row gap-4 h-3/4 w-[100rem] sm:w-[80rem] h-full justify-center">
                <div className="invisible md:visible md:w-1/4 h-full border">a</div>
                <div className="w-full sm:w-3/5 h-3/5 md:h-full bg-gradient-to-b from-light-purple-200 from-15% to-light-purple-300 to-80%"></div>
                <div className="invisible md:visible md:w-1/4 h-full border">a</div>
            </div>
          </div>

          <div className="h-2/5 w-full h-full bg-bg-color"></div>
        </div>
      
      </div>
    </>



  );
}
