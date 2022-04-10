import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Contact from '../components/contact'
import Header from '../components/header'
import Backgroundgraph from '../components/graphback'
import Title from '../components/title'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  //Here im redrawing everytime i change the theme
  //another way to do it is making a especial function on graphback that change only the colors.. maybe..
  useEffect(() => {
    Backgroundgraph(theme)
  }, [theme])

  return (
    <div className="isolate flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-900">
      <Head>
        <title>Marcelo Portfolio Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <canvas
        id="nokey"
        className="z-index-30 absolute top-0  w-full dark:bg-transparent"
      >
        Your Browser Don't Support Canvas, Please Download Chrome ^_^``
      </canvas>
      <Header />
      <div className="space-y-40">
        <label
          htmlFor="toogleA"
          className="absolute top-16 right-2 flex cursor-pointer items-center"
        >
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className=" mb-1 h-4 w-10 appearance-none rounded-full bg-gray-400 shadow-inner shadow transition"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
            />
            {/*           <div className="h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div> */}
            <div className="dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition"></div>
          </div>
          <div className="mb-3 ml-3 font-medium text-gray-700 dark:text-gray-200">
            {theme === 'light' ? 'Dark' : 'Light'}
          </div>
        </label>
        <Title />
        <div
          id="projects"
          className="flex w-full flex-grow flex-wrap items-center justify-center border-t py-10 "
        >
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>PROJECTS</h1>
          </div>
          <a href="https://Adaminter.org" target="_blank">
            <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/adaminterback.png')]  bg-cover bg-center shadow-xl drop-shadow-xl">
              <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
                <div className="relative flex flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
                  <img
                    className="relative w-12"
                    src="/adamintericon.svg"
                    alt="Adaminter.org"
                  />
                  <div>Adaminter.org</div>
                  <span className="flex-wrap-2 flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none ">
                    <img
                      className="relative w-8 animate-spin-slow"
                      src="/reacticon.png"
                      alt="reactjs"
                    />
                    <img
                      className="relative w-9 animate-spin-slow"
                      src="/djangoicon.png"
                      alt="reactjs"
                    />
                    <img
                      className="relative -ml-2 w-14 animate-spin-slow"
                      src="/nodejsicon.png"
                      alt="nodejs"
                    />
                  </span>
                </div>
                <div className="relative px-2 pb-2 text-black">
                  <span className="-mb-1 block opacity-75">
                    Havard Final Project
                  </span>
                  <div className="flex justify-between">
                    <span className="block break-normal text-lg font-semibold">
                      Reactjs+Django+Nodejs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://nutri-notes.vercel.app/" target="_blank">
            <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/nutrinotesbg.png')] bg-cover bg-center shadow-xl drop-shadow-xl">
              <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
                <div className="relative flex flex-col flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
                  <img
                    className="relative w-10"
                    src="/nutriNotes.png"
                    alt="Nutri Notes icon"
                  />
                  <div> Nutri Notes </div>
                  <span className="flex-wrap-2 flex items-center bg-transparent bg-white bg-opacity-50 px-5 text-xs font-bold leading-none">
                    <img
                      className="relative w-8 animate-spin-slow"
                      src="/nextjsicon.png"
                      alt="nextjs"
                    />
                    <img
                      className="relative w-9 animate-spin-slow"
                      src="supabaseicon.png"
                      alt="supabase"
                    />
                    <img
                      className="relative w-6 animate-spin-slow"
                      src="/muiicon.png"
                      alt="material UI"
                    />
                  </span>
                </div>
                <div className="relative px-2 pb-2 text-black">
                  <span className="-mb-1 block opacity-75">
                    Nutritional Stats Project
                  </span>
                  <div className="flex justify-between">
                    <span className="block break-normal text-lg font-semibold">
                      Nextjs+Supabase+MUI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://bem-pago-form.vercel.app/" target="_blank">
            <div className="relative mx-2 mb-6 h-40 w-56 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-[url('/bempagobg.png')] bg-cover bg-center shadow-xl drop-shadow-xl">
              <div className="backdrop-blur-[3px] duration-300 hover:opacity-10 hover:backdrop-blur-0">
                <div className="relative flex flex-wrap items-center justify-center px-10 pt-3 dark:text-black">
                  <img
                    className="relative w-12"
                    src="/bempaggoicon2.png"
                    alt="BemPaggo icon"
                  />
                  <div>bem-pago-form</div>
                  <span className="flex-wrap-2 flex items-center gap-3 rounded-lg bg-transparent bg-black bg-opacity-20 py-1 px-5 text-xs font-bold leading-none">
                    <img
                      className="relative w-6 animate-spin-slow"
                      src="/typescripticon.png"
                      alt="typescript"
                    />
                    <img
                      className="relative w-6 animate-spin-slow"
                      src="/muiicon.png"
                      alt="material UI"
                    />
                    <img
                      className="relative w-7 animate-spin-slow"
                      src="/styledcomponentsicon3.png"
                      alt="Styled Components"
                    />
                  </span>
                </div>
                <div className="relative px-2 pb-2 text-black">
                  <span className="-mb-1 block opacity-75">
                    Technical Test Project
                  </span>
                  <div className="flex justify-between">
                    <span className="block break-normal text-lg font-semibold">
                      Typescript+MUI+StyledC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div
          id="github"
          className="flex w-full flex-wrap items-center justify-center border-t py-10"
        >
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>GITHUB</h1>
          </div>
          <a
            className="z-40 w-72 overflow-hidden rounded bg-white shadow-lg shadow-xl drop-shadow-xl dark:bg-gray-800 dark:text-white"
            href="https://github.com/MarceloArraes"
            target="_blank"
          >
            <img
              className="w-full"
              src="https://avatars.githubusercontent.com/u/6797670?v=4"
              alt="Marcelo_profile"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-lg font-bold">GitHub</div>
              <p className="text-md text-base text-gray-700 dark:text-gray-200">
                This is my github profile. Here i have been updating my
                portfolio and my studies. I try to make a commit everyday. And
                even as I've not been sucessfull every week, this has been
                working for me as a incentive.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                #nulla dies sine linea.
              </span>
            </div>
          </a>
        </div>

        <div id="contact" className="w-full border-t py-10">
          <div className="mb-10 w-full text-center text-3xl font-bold">
            <h1>CONTACT</h1>
          </div>
          <Contact />
        </div>

        <footer
          id="footer"
          className=" flex h-24 w-full items-center justify-center border-t py-10"
        >
          <p className="flex items-center justify-center gap-2">
            Powered by{' '}
            <Image
              src="/Doom-2-Cheats.png"
              alt="Doom Guy Face"
              width={72}
              height={56}
            />
            <Image
              src="/doomguygif.gif"
              alt="Doom Guy Face"
              width={72}
              height={56}
            />
            <Image
              src="/giphy.gif"
              alt="Doom Guy Face"
              width={72}
              height={56}
            />
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Home
