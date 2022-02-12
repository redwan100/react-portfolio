import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/picture/map.png'


const MapStyles = styled.div`
    background: url(${MapImg}) no-repeat center / cover;
    min-height: 400px;
    /* position: relative; */
    
    .container{
        position: relative;
        min-height: 300px;
    }

    .map__card{
        position: absolute;
        right: 10%;
        bottom: -15%;
        background-color: var(--deep-dark);
        padding: 2rem;
        border-radius: 6px;
        width: 100%;
        max-width: 300px;


        a{
            display: inline-block;
            color: var(--gray-1);
            font-size: 1.5rem;
            margin-top: 3rem;
            text-decoration: underline;
        }
    }

    .map__heading{
        font-size: 3rem;
        margin-bottom: 1rem;
    }


    @media screen and (max-width: 768px){
        background-position: 80% center;

        .map__card{
            right: 5%;
            bottom: -10%;
            min-height: 100px;

            a{
                margin-top: 1rem;
            }
        }
        .map__heading{
            margin-bottom: 1rem;
        }

    }
    @media screen and (max-width: 400px){
        .map__card{
           max-width: none;
           right: auto;
        }
    }
`

const Map = () => {
  return <MapStyles>
      <div className="container">
          <div className="map__card">
              <h3 className="map__heading">
                  Here is me
              </h3>

              <PText>
                  Boalmari, Faridpur
              </PText>

              <a href="#" target="_blank">Open in Google Map</a>
          </div>
      </div>
  </MapStyles>;
};

export default Map;
