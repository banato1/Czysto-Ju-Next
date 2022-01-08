import React from 'react'

import PropTypes from 'prop-types'

const BlogPostCard22 = (props) => {
  return (
    <>
      <div className={`blog-post-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
          className="image"
        />
        <div className="container">
          <div className="container1">
            <span className="text">{props.label}</span>
            <span className="text1">{props.when}</span>
          </div>
          <h1 className="text2">{props.title}</h1>
          <span className="text3">{props.description}</span>
          <div className="container2">
            <span className="text4">Read More -&gt;</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .blog-post-card {
            width: 100%;
            display: flex;
            max-width: 1400px;
            box-shadow: 4px 4px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog-post-card:hover {
            transform: scale(1.02);
          }
          .image {
            width: 350px;
            height: 350px;
            object-fit: cover;
            flex-shrink: 0;
            border-radius: 0px;
          }
          .container {
            display: flex;
            align-items: flex-start;
            padding-top: 32px;
            padding-left: 32px;
            padding-right: 32px;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .text {
            color: var(--dl-color-gray-500);
            font-weight: 600;
            text-transform: uppercase;
          }
          .text1 {
            color: var(--dl-color-gray-500);
            font-weight: 300;
          }
          .text2 {
            margin-bottom: 32px;
          }
          .text3 {
            color: var(--dl-color-gray-500);
            font-size: 1.25rem;
            margin-bottom: 32px;
          }
          .container2 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text4 {
            color: var(--dl-color-gray-black);
            font-style: normal;
            font-weight: 500;
          }

          @media (max-width: 991px) {
            .blog-post-card {
              flex-direction: row;
              justify-content: space-between;
            }
          }
          @media (max-width: 767px) {
            .blog-post-card {
              flex-direction: column;
            }
            .image {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .container2 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .text4 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

BlogPostCard22.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  label: 'ENTERPRISE',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  when: '3 days ago',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard22.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
  when: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard22
