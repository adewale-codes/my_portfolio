import React, { ReactNode, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ScrollLinkProps {
  toRef: React.RefObject<HTMLElement>;
  children: ReactNode;
  path: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ toRef, children, path }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setIsActive] = useState<boolean>(location.pathname === path);

  useEffect(() => {
    setIsActive(location.pathname === path);
  }, [location.pathname, path]);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      navigate(path);
      setIsActive(true);
    }
  };

  return (
    <button
      className={`text-white ${isActive || (path === "/home" && location.pathname === "/") ? "font-bold" : "font-extralight"}`}
      onClick={() => scrollToRef(toRef)}
    >
      {children}
    </button>
  );
};

export default ScrollLink;
