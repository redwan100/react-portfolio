import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ColStyles = styled.div`
    .heading{
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom: 1rem;
    }
    a{
        font-size: 1.8rem;
        color: var(--gray-1);
    }
`

const FooterCol = ({
  heading = "col heading",
  Links = [
    {
      type: "Links",
      title: "Home",
      path: "/home",
    },
    {
      type: "Links",
      title: "About",
      path: "/about",
    },
  ],
}) => {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>

      <ul>
        <li>
          {Links.map((item, index) => (
            <li key={index}>
              {item.type === "Links" ? (
                <Link to={item.path}>{item.title}</Link>
              ) : (
                <a href={item.path} target="_blank">
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </li>
      </ul>
    </ColStyles>
  );
};

export default FooterCol;
