import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks2 = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <span className="text">{props.text}</span>
        <span className="text1">{props.text1}</span>
        <span className="text2">{props.text2}</span>
        <span className="text3">{props.text3}</span>
        <span className="text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .text1 {
            margin-left: 32px;
          }
          .text2 {
            margin-left: 32px;
          }
          .text3 {
            margin-left: 32px;
          }
          .text4 {
            margin-left: 32px;
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks2.defaultProps = {
  text2: 'Pricing',
  text: 'About',
  rootClassName: '',
  text4: 'Blog',
  text3: 'Team',
  text1: 'Features',
}

NavigationLinks2.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks2
