import type { NextPage } from 'next'
import React, { useRef, useState, useEffect } from "react"
import Head from 'next/head'
import data from '../data/portfolio.json'
import useIsomorphicLayoutEffect from '../src/stories/hooks/UseIsomorphicLayoutEffect'
import {stagger} from '../src/utils/GsapStagger'


import WorkCard from '../src/stories/WorkCard'
import Header from '../src/stories/Header'
import SkillCard from '../src/stories/SkillCard'
import SectionRenderer from '../src/stories/SectionRenderer'
import Socials from '../src/stories/Socials'
import Footer from '../src/stories/Footer'



const Home: NextPage = () => {
  const textOne = useRef<HTMLDivElement>(null)
  const textTwo = useRef<HTMLDivElement>(null)
  const textThree = useRef<HTMLDivElement>(null)
  const textFour = useRef<HTMLDivElement>(null)

  const [stuck, setStuck] = useState(false)
  const workRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  const handleWorkScroll = () => {
    if(workRef.current){
      window.scrollTo({
        top: workRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
    
  };

  const handleSkillScroll = () => {
    if(skillRef.current){
      window.scrollTo({
        top: skillRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }

  };

  const handleContactScroll = () => {
    if(footerRef.current){
      window.scrollTo({
        top: footerRef.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }

  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>SeungCheol Yeo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleSkillScroll={handleSkillScroll}
          handleContactScroll={handleContactScroll}
        />

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5 laptop:mb-10" >
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 transition ease-in-out	"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
          <div
            className="mt-10 laptop:mt-30 p-2 laptop:p-0"
           // ref={workRef}
          >
            <h1 className="text-2xl text-bold">Project</h1>
           
              <SectionRenderer ref={workRef} type={'work'} />
                

            <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
              <h1 className="tablet:m-10 text-2xl text-bold">
                Skill.
              </h1>
              <div className="mt-5 tablet:m-10  gap-6">
                <SectionRenderer ref={skillRef} type={'skill'} />
                
              </div>
            </div>

          </div>

        </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      </div>
    </>
  )
}

export default Home
