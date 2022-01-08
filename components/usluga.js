import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'

const Usluga = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <img alt={props.image_alt} src={props.image} className="image" />
        <div className="container1">
          <span className="text">{props.city}</span>
          <span className="text1">{props.description}</span>
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
            max-width: 20em;
            text-align: justify;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .link {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .rootClassName {
            top: 0%;
            left: 34%;
            position: absolute;
          }

          .rootClassName2 {
            top: 0%;
            right: 0%;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }

          .rootClassName4 {
            height: 40em;
            align-self: flex-start;
          }
          .rootClassName5 {
            align-self: center;
          }
          .rootClassName6 {
            top: 0em;
            right: 0em;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName7 {
            top: 0em;
            left: 21.3em;
            position: absolute;
          }
          .rootClassName8 {
            align-self: center;
          }

          .rootClassName10 {
            height: 40em;
            align-self: flex-start;
          }
          .rootClassName11 {
            top: 0em;
            right: 0em;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName12 {
            top: 0em;
            left: 21.3em;
            position: absolute;
          }
          .rootClassName13 {
            top: 0em;
            right: 0em;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName14 {
            top: 0em;
            left: 21.3em;
            position: absolute;
          }
          .rootClassName15 {
            align-self: center;
          }

          .rootClassName17 {
            height: 40em;
            align-self: flex-start;
          }
          .rootClassName18 {
            top: 0em;
            right: 0em;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName19 {
            top: 0em;
            left: 21.3em;
            position: absolute;
          }
          .rootClassName20 {
            align-self: center;
          }

          .rootClassName22 {
            height: 40em;
            align-self: flex-start;
          }
          .rootClassName23 {
            top: 0em;
            right: 0em;
            height: 40em;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName24 {
            top: 0em;
            left: 21.3em;
            position: absolute;
          }
          .rootClassName25 {
            align-self: center;
          }

          .rootClassName27 {
            height: 40em;
            align-self: flex-start;
          }

          @media (max-width: 991px) {
            .rootClassName14 {
              left: 0px;
            }
            .rootClassName28 {
              align-self: center;
            }
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
          }
        `}
      </style>
    </>
  )
}

Usluga.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  rootClassName: '',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

Usluga.propTypes = {
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
}

export default Usluga
