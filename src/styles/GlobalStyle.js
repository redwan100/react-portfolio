import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   *{
       padding: 0;
       margin: 0;
       box-sizing: border-box;
       
   }

   :root{
       --dark-bg: #262626;
       --gray-1: #BCB4B4;
       --deep-dark: #1E1E1E;
       --gray-2: #363636;
       --white:#FFFF;
       --black: #000000;
   }
   ::selection{
       background-color: var(--gray-1);
       color: var(--deep-dark);
   }

   html{
       font-size: 10px;
       font-family: 'Roboto Mono';
       background-color: var(--dark-bg);
       color: var(--white);
       cursor: none;
   }

   h1,h2,h3,h4,h5,h6{
       margin: 0;
       color: var(--gray-1);
   }

   ul,li{
       list-style: none;
   }

   a{
       text-decoration: none;
   }

   img, svg{
       width: 100%;
       height: 100%;
       object-fit: cover;
   }

   .container{
       max-width: 1200px;
       width: 90%;
       margin: 0 auto;
   }

   button{
       outline: none;
   }

   /* TODO: Smooth Scroll  */
   [data-scrollbar]{
       height: 100vh;
       overflow: hidden;
       background-color: var(--gray-1);

       .scroll-content{
           background-color: var(--dark-bg);
       }
       .scrollbar-track.scrollbar-track-y{
           z-index: 100;
           background-color: var(--deep-dark); 
           .scrollbar-thumb-y{
               background-color: var(--gray-1);
           }
       }
   }
`;

export default GlobalStyles;