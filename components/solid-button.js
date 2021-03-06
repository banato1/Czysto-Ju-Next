import React from 'react'

import PropTypes from 'prop-types'

const SolidButton = (props) => {
  return (
    <>
      <div className={`container ${props.rootClassName} `}>
        <button className="button">{props.button}</button>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            position: relative;
          }
          .button {
            color: var(--dl-color-gray-white);
            border: none;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-doubleunit);
            border-radius: 50px;
            padding-right: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #830101;
          }
          .rootClassName {
            flex: 1;
            align-self: center;
          }
          .rootClassName1 {
            left: 0px;
            bottom: 0px;
          }
          .rootClassName2 {
            flex: 1;
            align-self: center;
          }
          .rootClassName3 {
            flex: 1;
            align-self: center;
          }
          .rootClassName4 {
            flex: 1;
            align-self: center;
          }
          .rootClassName5 {
            flex: 1;
            align-self: center;
          }
          .rootClassName6 {
            flex: 1;
            align-self: center;
          }
          .rootClassName7 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName8 {
            flex: 1;
            align-self: center;
          }
          .rootClassName9 {
            flex: 1;
            align-self: center;
          }
          .rootClassName10 {
            left: 0px;
            bottom: 0px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-doubleunit);
          }
          .rootClassName11 {
            left: 0px;
            bottom: 0px;
          }
          .rootClassName12 {
            flex: 1;
            align-self: center;
          }
          .rootClassName13 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName14 {
            left: 0px;
            bottom: 0px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-doubleunit);
          }
          .rootClassName16 {
            left: 5%;
            bottom: 0%;
            margin: auto;
            position: absolute;
            align-self: flex-start;
          }
          .rootClassName17 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName18 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName19 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName20 {
            left: 0px;
            bottom: 0px;
            align-self: center;
            margin-top: 25%;
          }
          .rootClassName21 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName22 {
            left: 0px;
            bottom: 0px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-doubleunit);
          }
          .rootClassName23 {
            flex: 1;
            align-self: center;
            margin-left: var(--dl-space-space-tripleunit);
          }
          .rootClassName24 {
            left: 0px;
            bottom: 0px;
          }
          .rootClassName25 {
            left: 0px;
            bottom: 0px;
          }
          @media (max-width: 767px) {
            .rootClassName7 {
              display: none;
            }
            .rootClassName13 {
              display: none;
            }
            .rootClassName17 {
              display: none;
            }
            .rootClassName18 {
              display: none;
            }
            .rootClassName19 {
              display: none;
            }
            .rootClassName21 {
              display: none;
            }
            .rootClassName23 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .rootClassName16 {
              top: -127px;
              left: 0px;
              right: 0px;
              position: static;
              align-self: center;
              margin-top: 1%;
              margin-left: 25%;
              margin-right: 25%;
              margin-bottom: 1%;
            }
          }
        `}
      </style>
    </>
  )
}

SolidButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SolidButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SolidButton
