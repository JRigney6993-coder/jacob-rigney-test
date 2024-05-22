import Image from "next/image";
import Detail from "@/assets/images/design1.png"
import Pfp from "@/assets/images/me.jpg"

import { BackgroundBeams } from "@/components/ui/background-beams"

export default function Home() {
  return (

    <>
      <BackgroundBeams className="z-0" />

      <div className="relative w-full h-full">
        <div className="relative w-[100vw] h-[50vh] sm:h-[100vh]">

          <div className="z-10 w-full h-full">
            <div className="flex flex-col justify-between invisible sm:visible md:invisible lg:visible absolute bottom-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-[65vh] bg-four-color-gradient mb-28">


            </div>

            <div className="flex flex-col justify-between invisible sm:visible right-0 md:invisible lg:visible absolute bottom-0 w-[6rem] 2xl:w-[8rem] 3xl:w-[12rem] h-[65vh] bg-four-color-gradient mb-28">


            </div>

            <div className="flex flex-col h-full px-4 lg:px-28 2xl:px-36">

              <div className="flex w-full h-2/3 justify-center">
                <div className="flex flex-row gap-4 h-full w-[100rem] sm:w-[80rem] h-full justify-center">

                  <div className="relative invisible md:visible w-0 md:w-1/4 h-full border border-primary rounded-sm">

                    <Image className="absolute h-1/2 top-12 scale-x-[1]" priority={true} placeholder='blur' src={Detail} width={1000} height={1000} alt="Page Design detail"></Image>

                    <div className="flex flex-col h-full m-5 border border-primary rounded-sm">
                      <span className="h-[55%] p-1 text-sm text-primary font-semibold">私に連絡して</span>
                      <div className="h-[45%] w-full text-center flex flex-col px-2">
                        <span className="text-md 2xl:text-lg text-light-purple-200">Contact Me</span>
                        <span className="text-xs 2xl:text-sm text-light-purple-200">To reach out directly via email, please click on the button below! This will take you to a dedicated contact form where you can easily send your message.</span>
                        <button className="text-primary border border-primary p-2 mx-4 my-6">Navigate</button>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full sm:w-3/5 sm:h-3/5 md:h-[96%] bg-gradient-to-b from-light-purple-200 from-15% to-light-purple-300 to-80% flex justify-center items-center flex-col">

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

                  <div className="relative invisible md:visible w-0 md:w-1/4 h-full border border-primary rounded-sm">
                    <Image className="absolute h-1/2 top-12 scale-x-[-1]" priority={true} placeholder='blur' src={Detail} width={1000} height={1000} alt="Page Design detail"></Image>
                    <div className="flex flex-col h-full m-5 border border-primary rounded-sm">
                      <span className="h-[55%] p-1 text-sm text-primary font-semibold">私について</span>
                      <div className="h-[45%] w-full text-center flex flex-col px-2">
                        <span className="text-md 2xl:text-lg">About Me</span>
                        <span className="text-xs 2xl:text-sm text-light-purple-200">Click this button to explore my About Me page! Discover more about my background, interests, and professional journey. click now and start exploring!</span>
                        <button className="text-primary border border-primary p-2 mx-4 my-6">Navigate</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* About me */}
        <div className="w-full px-8 md:px-16 py-16 flex flex-col items-center">
          <div className="w-full mb-8 md:w-2/3 flex flex-col md:flex-row">
            <div className="flex-grow">
              <div className="flex flex-row w-full mb-4">
                <span className="text-primary text-2xl">
                  01.
                  <span className="text-light-purple-200 text-3xl pl-2 pr-6">About Me</span>
                </span>
                <div className="flex-grow border-t border-neutral-800 mt-4"></div>
              </div>
              <div className="relative w-[300px] h-[300px] sm:float-left mr-0 sm:mr-12 mb-12 sm:mb-4 block">
                <div className="absolute inset-0 border-2 border-primary rounded-sm transform translate-x-5 translate-y-5"></div>
                <Image
                  src={Pfp}
                  width={300}
                  height={300}
                  quality={100}
                  alt="Picture of me"
                  className="relative rounded-sm"
                />
              </div>
              <p className="text-md md:text-xl lg:text-3xl ">
                Hello, my name is Jake! I have always been passionate about creating and analyzing things. My interest in game development began at the age of 12 when I learned Lua. I quickly fell in love with programming and have been expanding my knowledge ever since. Throughout high school, I took various programming electives and attended <span className="text-primary">West-MEC trade school</span> and <span className="text-primary">Rio Salado Community College</span>, where I studied numerous programming languages. Recently, I've developed a keen interest in <span className="text-primary">Artificial Intelligence</span> and <span className="text-primary">Software Development</span>.
                <br /><br />
                In terms of experience, I completed an internship with <span className="text-primary">Workbase Learning Alliance (WBLA)</span> and learned industry standards at West-MEC. Additionally, I participated in the <span className="text-primary">Future Business Leaders of America (FBLA)</span> for two years. Currently, I am entering college as a junior, having completed my first two years during high school. I plan to earn my Bachelor's degree at Grand Canyon University (GCU) and later pursue a Master's in Business. My goal is to establish a business that creates programming opportunities for developing countries.
                <br /><br />
                Here are the skills I’ve acquired on my journey:      </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="w-full px-8 md:px-16 py-24 flex flex-col items-center">
          <div className="w-full mb-8 md:w-2/3 flex flex-col md:flex-row">
            <div className="flex-grow">
              <div className="flex flex-row w-full mb-4">
                
                <div className="flex-grow border-t border-neutral-800 mt-4"></div>
                <span className="text-primary text-2xl pl-6 pr-2">
                  02.
                  <span className="text-light-purple-200 text-3xl pl-2 pr-6">Projects</span>
                </span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Schooling */}
        <div className="w-full px-8 md:px-16 py-24 flex flex-col items-center">
          <div className="w-full mb-8 md:w-2/3 flex flex-col md:flex-row">
            <div className="flex-grow">
              <div className="flex flex-row w-full mb-4">
                <span className="text-primary text-2xl">
                  03.
                  <span className="text-light-purple-200 text-3xl pl-2 pr-6">Schooling</span>
                </span>
                <div className="flex-grow border-t border-neutral-800 mt-4"></div>
              </div>
              
            </div>
          </div>
        </div>




      </div>
    </>



  );
}
