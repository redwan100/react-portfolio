import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';


const FooterSectionStyles = styled.div`
padding-top: 10rem;
background-color: var(--deep-dark);

.container{
    display: flex;
    gap: 3rem;
}
.footer__col1{
    flex: 2;
}
.footer__col2,
.footer__col3,
.footer__col4{
    flex: 1;
}
.footer__col1__title{
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.copyright{
    background-color: var(--dark-bg); 
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;

    .para{
        margin-left: 0;
    }
}

@media screen and (max-width: 786px){
    .container{
        flex-direction: column;
        gap: 0;

        & > div{
            margin-top: 4rem;
        }
    }

    .footer__col1 .para{
        max-width: 100%;
        line-height: 1.3;
    }

    .copyright{
        .container{
            div{
                margin-top: 0;
            }
        }
    }
}
`

const Footer = () => {
    return <FooterSectionStyles>
        <div className="container">
            <div className="footer__col1">
                <h1 className="footer__col1__title">
                    Redwan islam
                </h1>

                <PText>
                    A freelance web designer and developer from Boalmary, Faridpur.I always make websites that have unique designs and also has a goo performance rate.
                </PText>
            </div>

            <div className="footer__col2">
                <FooterCol
                    heading='Important Links'
                    Links={[
                        {
                            title: "Home",
                            path: "/",
                            type: "Link"
                        },
                        {
                            title: "About",
                            path: "/about",
                            type: "Link"
                        },
                        {
                            title: "Contact",
                            path: "/contact",
                            type: "Link"
                        },
                    ]}
                />
            </div>
            <div className="footer__col3">
                <FooterCol
                    heading='Contact Info'
                    Links={[
                        {
                            title: "+880123",
                            path: "tel: +880123"
                        },
                        {
                            title: "redwanislam@gmail.com",
                            path: "mailto:redwanislam@gmail.com"
                        },
                        {
                            title: "GEC Circle, Faridpur,Bangladesh",
                            path: "http://google.com/maps",
                        }
                    ]}
                />
            </div>
            <div className="footer__col4">
                <FooterCol
                    heading="Social Links"
                    Links={[
                        {
                            title: "Facebook",
                            path: "http://facebook.com",
                        },
                        {
                            title: "Instagram",
                            path: "http://instagram.com",
                        },
                        {
                            title: "Twitter",
                            path: "http://twitter.com",
                        },
                    ]}
                />
            </div>
        </div>
        
        <div className="copyright">
            <div className="container">
                <PText>
                    &copy; 2022 - redwan islam | Designed by redwan
                </PText>
            </div>
        </div>
  </FooterSectionStyles>;
};

export default Footer;
