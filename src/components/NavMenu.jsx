import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const NavMenuStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  /* background-color: var(--dark-bg); */
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;

      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: "Roboto Mono";
      color: var(--gray-1);
      outline: none;
      padding: 1rem 2rem;
      font-size: 2rem;
    }

    .active {
      color: var(--white);
    }
  }

  .mobile__menu__icon {
    font-size: 4rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    display: none;
    color: var(--gray-1);
  }
  .mobile__menu__close {
    font-size: 4rem;
    color: var(--gray-1);
    cursor: pointer;
    display: none;
    color: var(--white);
  }

  @media screen and (max-width: 768px) {
      padding: 0;
    .hide__items{
       transform: translateY(calc(-100% - var(--top)))
    }
    .mobile__menu__icon {
      display: block;
    }

    .nav__items {
      --top: 1rem;
      background-color: var(--deep-dark); 
      transition: 0.5s ease transform;
      width: 250px;
      max-width: 90%;
      padding: 2rem;
      border-radius: 12px;
      position: absolute;
      top: var(--top);
      right: 1.2rem;


      .mobile__menu__close {
        display: block;
        width: 2rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        transition: 0.3s ease color;
        font-size: 3rem;

        * {
          pointer-events: none;
        }

        &:hover {
          color: red;
        }
      }

      li {
        display: block;
        margin-bottom: 1rem;

        &:hover {
          background-color: var(--dark-bg);
        }
      }
    }

    
  }
`;

const NavMenu = () => {
    const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div className="mobile__menu__icon" onClick={()=>setShowNav(!showNav)}>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
      <ul className={!showNav ? 'nav__items hide__items':"nav__items"}>
        <div className="mobile__menu__close" onClick={()=>setShowNav(!showNav)}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
        <li>
          <Link to="/" onClick={()=>setShowNav(!showNav)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={()=>setShowNav(!showNav)}>About</Link>
        </li>
        <li>
          <Link to="/project" onClick={()=>setShowNav(!showNav)}>Project</Link>
        </li>
        <li>
          <Link to="/contact" onClick={()=>setShowNav(!showNav)}>Contact</Link>
        </li>
      </ul>
    </NavMenuStyles>
  );
};

export default NavMenu;
