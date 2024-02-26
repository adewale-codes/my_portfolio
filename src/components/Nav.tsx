import React, { useState, useEffect, MutableRefObject } from "react";
import { useLocation } from "react-router-dom";
import ScrollLink from "./ScrollLink";

interface NavProps {
    homeRef: MutableRefObject<HTMLDivElement | null>;
    aboutRef: MutableRefObject<HTMLDivElement | null>;
    contactRef: MutableRefObject<HTMLDivElement | null>;
    blogRef: MutableRefObject<HTMLDivElement | null>;
  }
const Nav: React.FC<NavProps> = ({ homeRef, aboutRef, contactRef, blogRef }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const pathsToScrollTo = ['/home', '/about', '/contact', '/blog'];
    if (pathsToScrollTo.includes(pathname)) {
      const targetRef =
        pathname === '/home'
          ? homeRef
          : pathname === '/about'
          ? aboutRef
          : pathname === '/contact'
          ? contactRef
          : pathname === '/blog'
          ? blogRef
          : null;

      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, []);


  

  return (
    <nav>
      <div className="p-5 md:py-10 md:px-24 flex justify-between items-center">
        <ScrollLink path="/" toRef={homeRef}>
          <p className="text-white font-bold text-xl md:text-2xl">AdeCodes</p>
        </ScrollLink>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <ScrollLink path="/home"
            toRef={homeRef} 
          >
            Home
          </ScrollLink>
          <ScrollLink path="/about"
            toRef={aboutRef}
          >
            About
          </ScrollLink>
          <ScrollLink
            toRef={contactRef} path="/contact"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            toRef={blogRef} path="/blog"
          >
            Blog
          </ScrollLink>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <img
              src="/assets/xmark.svg"
              alt="close-icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src="/assets/bars.svg"
              alt="bars-icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 mt-4 transform left-0 w-full bg-black transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <ScrollLink
            toRef={homeRef} path="/home"
          >
            Home
          </ScrollLink>
          <ScrollLink
            toRef={aboutRef} path="/about"
          >
            About
          </ScrollLink>
          <ScrollLink
            toRef={contactRef} path="/contact"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            toRef={blogRef} path="/blog"
          >
            Blog
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;