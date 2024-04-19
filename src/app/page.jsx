import Image from "next/image";
import Detail from "@/assets/images/design1.png"
import { Button } from '@radix-ui/themes';

import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Home() {
  return (

    <>
      <BackgroundBeams className="z-0" />

      <div className="relative w-full h-full">
        <div className="relative w-[100vw] h-[100vh]">

          <div className="z-10 w-full h-full">
            <div className="flex flex-col justify-between invisible sm:visible md:invisible lg:visible absolute bottom-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-[65vh] bg-four-color-gradient mb-28">


            </div>

            <div className="flex flex-col justify-between invisible sm:visible right-0 md:invisible lg:visible absolute bottom-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-[65vh] bg-four-color-gradient mb-28">


            </div>

            <div className="flex flex-col h-full px-4 lg:px-28 2xl:px-36">

              <div className="flex w-full h-2/3 justify-center">
                <div className="flex flex-row gap-4 h-full w-[100rem] sm:w-[80rem] h-full justify-center">

                  <div className="relative invisible md:visible md:w-1/4 h-full border border-primary rounded-sm">
                    
                    <Image className="absolute h-1/2 top-12 scale-x-[1]" src={Detail} width={1000} height={1000} alt="Page Design detail"></Image>
                    
                    <div className="flex flex-col h-full m-5 border border-primary rounded-sm">
                      
                      <div className="h-2/4 w-full text-center flex flex-col">
                        
                        
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-3/5 h-3/5 md:h-[96%] bg-gradient-to-b from-light-purple-200 from-15% to-light-purple-300 to-80% flex justify-center items-center flex-col">
                  
                    <div className="flex flex-row items-center justify-center h-[80%] w-1/2">
                      <div className="p-4 flex flex-col mt-20 md:mt-40">
                        <span className="pl-[2px]">J</span>
                        <span>A</span>
                        <span>C</span>
                        <span>O</span>
                        <span className="pl-[1px]">B</span>
                      </div>
                      <div className="flex flex-col h-full items-center justify-center">
                        <div className="mt-[50%]">. . . . . . . . . .</div>
                        <div className="text-[500%] md:text-[1000%]">現</div>
                        <div className="text-[500%] md:text-[1000%] mt-[-50%]">実</div>
                      </div>
                      <div className="p-4 flex flex-col mt-20 md:mt-40">
                        <span>R</span>
                        <span className="pl-[3px]">I</span>
                        <span>G</span>
                        <span>N</span>
                        <span className="px-[1px]">E</span>
                        <span className="px-[1px]">Y</span>
                      </div>
                    </div>
                    <div className="h-[20%] w-[60%] md:w-[40%]">
                      <div className="border border-background-color p-4 text-center">Software Engineer Intern</div>
                    </div>
                    <div className="pb-12 pt-2">. . . . . . . . . .</div>
                  </div>

                  <div className="relative invisible md:visible md:w-1/4 h-full border border-primary rounded-sm">
                    <Image className="absolute h-1/2 top-12 scale-x-[-1]" src={Detail} width={1000} height={1000} alt="Page Design detail"></Image>
                    <div className="h-full m-6 border border-primary rounded-sm">
                      
                    </div>
                  </div>

                </div>
              </div>

              <div className="h-1/3 w-full bg-bg-color"></div>
            </div>
          </div>
        </div>
      </div>
      <br />    <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>



  );
}
