import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'

const Uslugahoryzont = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <div className="container1">
          <div className="container2">
            <img alt={props.image_alt} src={props.image} className="image" />
            <div className="container3">
              <span className="text">{props.city}</span>
              <span className="text1">{props.description}</span>
              <span className="text2">{props.city1}</span>
              <Link href="/kontakt">
                <a className="link">
                  <OutlineButton
                    button1="ZamÃ³wiÄ"
                    rootClassName="rootClassName"
                    className="component"
                  ></OutlineButton>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 819px;
            height: 322px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container1 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .container2 {
            width: 802px;
            height: 364px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-end;
            padding-top: var(--dl-space-space-unit);
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            justify-content: center;
          }
          .image {
            top: -3px;
            left: -6px;
            width: 20em;
            height: 20em;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
          }
          .container3 {
            width: 60%;
            height: 70%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .text {
            height: 20%;
            font-size: 20px;
            align-self: stretch;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .text1 {
            top: 35%;
            left: 15%;
            position: absolute;
            font-size: 12px;
            max-width: 70%;
            min-width: 70%;
            text-align: justify;
          }
          .text2 {
            top: 70%;
            right: 39%;
            height: 20%;
            position: absolute;
            font-size: 20px;
            align-self: stretch;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 5%;
          }
          .link {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .rootClassName {
            width: 100%;
          }
          .rootClassName1 {
            width: 100%;
            margin-bottom: 2%;
          }
          .rootClassName2 {
            width: 100%;
            margin-bottom: 2%;
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
            .rootClassName {
              display: none;
            }
            .rootClassName1 {
              display: none;
            }
            .rootClassName2 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Uslugahoryzont.defaultProps = {
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  city: 'City Name',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1500',
  rootClassName: '',
  city1: 'City Name',
}

Uslugahoryzont.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  city: PropTypes.string,
  image: PropTypes.string,
  rootClassName: PropTypes.string,
  city1: PropTypes.string,
}

export default Uslugahoryzont
