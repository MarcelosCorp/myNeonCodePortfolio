import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

function Header() {
  const [scrollDir, setScrollDir] = useState('scrolling down')
  const { theme, setTheme } = useTheme()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(e)
    e.currentTarget.classList.add('active:bg-blue-800')

    const { target } = e
    if (target) {
      window.location.href = (target as HTMLLinkElement).href
    }
  }

  /*   function isScrolledIntoView(element: HTMLElement) {
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(element).offset().top;
    var elemBottom = elemTop + $(element).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
} */

  /* function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);


  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
} */

  useEffect(() => {
    const home = document.getElementById('home')
    const projects = document.getElementById('projects')
    const github = document.getElementById('github')
    const contact = document.getElementById('contact')
    const footer = document.getElementById('footer')

    const indexSessions = document.querySelectorAll(
      '#home #projects #github #contact #footer'
    )

    const navhome = document.getElementById('nav-home')
    const navprojects = document.getElementById('nav-projects')
    const navgithub = document.getElementById('nav-github')
    const navcontact = document.getElementById('nav-contact')
    const navfooter = document.getElementById('nav-footer')

    const navSessions = document.querySelectorAll(
      '#nav-home #nav-projects #nav-github #nav-contact #nav-footer'
    )

    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        if (
          home &&
          projects &&
          window.pageYOffset > home?.offsetTop - 60 &&
          window.pageYOffset < projects?.offsetTop
        ) {
          navhome?.classList.add('active')
          console.log('home')
        } else if (
          projects &&
          github &&
          window.pageYOffset > projects?.offsetTop - 60 &&
          window.pageYOffset < github?.offsetTop
        ) {
          navprojects?.classList.add('active')
          console.log('projects')
        } else if (
          contact &&
          github &&
          window.pageYOffset > github?.offsetTop - 60 &&
          window.pageYOffset < contact?.offsetTop
        ) {
          navgithub?.classList.add('active')
          console.log('github')
        } else if (
          contact &&
          footer &&
          window.pageYOffset > contact?.offsetTop - 60 &&
          window.pageYOffset < footer?.offsetTop
        ) {
          navcontact?.classList.add('active')
          console.log('contact')
        } else if (footer && window.pageYOffset > footer?.offsetTop - 150) {
          navfooter?.classList.add('active')
          console.log('footer')
        } else {
          console.log('last else on header')
        }

        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    console.log(scrollDir)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return (
    <nav className="fixed top-0 z-10 divide-x-2 ">
      <div className="container flex w-screen justify-center rounded-lg bg-white py-5 text-black">
        <div className="flex flex-row justify-items-center space-x-4">
          <a
            href="#home"
            id="nav-home"
            onClick={handleClick}
            className="::selection:bg-black"
          >
            Home
          </a>

          <a href="#projects" id="nav-projects" onClick={handleClick}>
            Projects
          </a>

          <a href="#github" id="nav-github" onClick={handleClick}>
            Github
          </a>

          <a href="#contact" id="nav-contact" onClick={handleClick}>
            Contact
          </a>

          <a href="#footer" id="nav-footer" onClick={handleClick}>
            Footer
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
