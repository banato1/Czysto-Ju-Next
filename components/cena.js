import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'

const Cena = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <img alt={props.image_alt} src={props.image} className="image" />
        <div className="container1">
          <span className="text">{props.city}</span>
          <span className="text1">{props.description}</span>
          <span className="text2">{props.city1}</span>
          <Link href="/kontakt">
            <a className="link">
              <OutlineButton
                button1="ZamÃ³wiÄ"
                className="component"
              ></OutlineButton>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .image {
            width: 20em;
            height: 20em;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .container1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .text {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            font-size: 12px;
            max-width: 250px;
            text-align: justify;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .text2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .link {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .rootClassName {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName1 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName2 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName3 {
            display: none;
            align-self: center;
          }
          .rootClassName4 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName5 {
            display: none;
            align-self: center;
          }
          .rootClassName6 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName7 {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName8 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName9 {
            display: none;
            align-self: center;
          }
          .rootClassName10 {
            display: none;
            align-self: center;
          }
          .rootClassName11 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName12 {
            top: 1%;
            left: 70%;
            right: 1%;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName13 {
            top: 1%;
            left: 1%;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName14 {
            top: 1%;
            left: 35, 5%;
            height: 35em;
            position: absolute;
            align-self: center;
          }
          .rootClassName15 {
            display: none;
            align-self: center;
          }
          .rootClassName16 {
            display: none;
            align-self: center;
          }
          .rootClassName17 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName18 {
            display: none;
          }
          .rootClassName19 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName20 {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName21 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName22 {
            display: none;
            align-self: center;
          }
          .rootClassName23 {
            display: none;
            align-self: center;
          }
          .rootClassName24 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName25 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName26 {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName27 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName28 {
            display: none;
            align-self: center;
          }
          .rootClassName29 {
            display: none;
            align-self: center;
          }
          .rootClassName30 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName31 {
            display: none;
          }
          .rootClassName32 {
            display: none;
          }
          .rootClassName33 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName34 {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName35 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName36 {
            display: none;
            align-self: center;
          }
          .rootClassName37 {
            display: none;
            align-self: center;
          }
          .rootClassName38 {
            display: none;
            align-self: flex-end;
          }
          .rootClassName39 {
            top: 1%;
            right: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-end;
          }
          .rootClassName40 {
            top: 1%;
            left: 0px;
            bottom: 1%;
            height: 35em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName41 {
            top: 1%;
            height: 35em;
            margin: auto;
            position: absolute;
            align-self: center;
          }
          .rootClassName42 {
            display: none;
            align-self: center;
          }
          .rootClassName43 {
            display: none;
            align-self: center;
          }
          .rootClassName44 {
            display: none;
            align-self: flex-end;
          }
          @media (max-width: 767px) {
            .container {
              width: 200px;
            }
          }
          @media (max-width: 479px) {
            .container {
              width: 300px;
            }
            .rootClassName3 {
              display: flex;
            }
            .rootClassName4 {
              display: flex;
            }
            .rootClassName5 {
              display: flex;
            }
            .rootClassName9 {
              display: flex;
            }
            .rootClassName10 {
              display: flex;
            }
            .rootClassName11 {
              display: flex;
            }
            .rootClassName15 {
              display: flex;
            }
            .rootClassName16 {
              display: flex;
            }
            .rootClassName17 {
              display: flex;
            }
            .rootClassName18 {
              display: flex;
              align-self: center;
            }
            .rootClassName22 {
              display: flex;
            }
            .rootClassName23 {
              display: flex;
            }
            .rootClassName24 {
              display: flex;
            }
            .rootClassName28 {
              display: flex;
            }
            .rootClassName29 {
              display: flex;
            }
            .rootClassName30 {
              display: flex;
            }
            .rootClassName31 {
              display: flex;
              align-self: center;
            }
            .rootClassName32 {
              display: flex;
              align-self: center;
            }
            .rootClassName36 {
              display: flex;
            }
            .rootClassName37 {
              display: flex;
            }
            .rootClassName38 {
              display: flex;
            }
            .rootClassName42 {
              display: flex;
            }
            .rootClassName43 {
              display: flex;
            }
            .rootClassName44 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

Cena.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  image_alt: 'image',
  rootClassName: '',
  city: 'City Name',
  city1: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

Cena.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  city: PropTypes.string,
  city1: PropTypes.string,
  description: PropTypes.string,
}

export default Cena
