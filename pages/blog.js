import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import BlogPostCard22 from '../components/blog-post-card22'

const Blog = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Blog - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta
            property="og:title"
            content="Blog - Czysto JuÅ¼ - SprzÄtanie w Opolu"
          />
          <meta
            property="og:description"
            content="Profesjonalna firma sprzÄtajÄca na terenie miasta Opola, pomoÅ¼emy Ci posprzÄtaÄ TwÃ³j dom, mieszkanie, biuro oraz po remoncie! Lepsza cena i jakoÅÄ!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b2b3b878-ffff-41fe-94c1-cd4ae51d6255/9a7c4e78-2c9e-4751-8914-f34403e1604d?org_if_sml=1"
          />
        </Head>
        <div className="top-container">
          <nav data-role="Header" className="navbar">
            <Link href="/">
              <a className="link">
                <h1 className="logo">
                  <span className="text">Czysto JuÅ¼</span>
                </h1>
              </a>
            </Link>
            <div className="links-container">
              <Link href="/blog">
                <a className="link01">Blog</a>
              </Link>
              <Link href="/onas">
                <a className="link02">O nas</a>
              </Link>
              <Link href="/cennik">
                <a className="link03">Cennik</a>
              </Link>
              <Link href="/kontakt">
                <a className="link04">Kontakt</a>
              </Link>
            </div>
            <div className="container1">
              <div className="container2">
                <div className="right-side">
                  <Link href="/kontakt">
                    <a className="link05">
                      <SolidButton
                        button="ZamÃ³w wycenÄ"
                        rootClassName="rootClassName23"
                        className="component"
                      ></SolidButton>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div id="main-section" className="main">
          <div className="blog">
            <div className="container3">
              <BlogPostCard22
                profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName3"
              ></BlogPostCard22>
            </div>
            <div className="container4">
              <BlogPostCard22
                image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName"
              ></BlogPostCard22>
            </div>
            <BlogPostCard22
              image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></BlogPostCard22>
          </div>
        </div>
        <div className="footer">
          <div className="menu">
            <Link href="/">
              <a className="link06">
                <h1 className="logo1">Czysto JuÅ¼</h1>
              </a>
            </Link>
            <div className="container5">
              <span className="text01">
                <span className="text02">O n</span>
                <Link href="/onas">
                  <a></a>
                </Link>
                <span className="text03">as</span>
              </span>
              <Link href="/kontakt">
                <a className="link08">Kontakt</a>
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link09"
              >
                Personalna oferta
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link10"
              >
                Regulamin
              </a>
            </div>
            <div className="follow-container">
              <span className="text04">Za subskrybuj nas</span>
              <div className="icons-container">
                <div className="container6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link11"
                  >
                    <svg viewBox="0 0 877.7142857142857 1024" className="icon">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link12"
                  >
                    <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link13"
                  >
                    <svg viewBox="0 0 950.8571428571428 1024" className="icon4">
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <h1 className="text05">
              <span>50</span>
              <span>+</span>
            </h1>
            <span className="text08">Happy clients</span>
            <span className="text09">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="stat1">
            <h1 className="text10">
              <span>369</span>
            </h1>
            <span className="text12">Projects completed</span>
            <span className="text13">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="stat2">
            <h1 className="text14">
              <span>500</span>
              <span>+</span>
            </h1>
            <span className="text17">Hours</span>
            <span className="text18">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
          <div className="stat3">
            <h1 className="text19">
              <span>24/7</span>
            </h1>
            <span className="text21">Support</span>
            <span className="text22">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .top-container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .navbar {
            display: flex;
            padding: var(--dl-space-space-doubleunit);
            max-width: 100%;
            min-width: 50%;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link {
            display: contents;
          }
          .logo {
            width: 60%;
            text-decoration: none;
          }
          .text {
            color: #0c0909;
          }
          .links-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link01 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-left: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .link02 {
            font-size: 18px;
            min-width: 15%;
            font-style: normal;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .link03 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .link04 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-right: var(--dl-space-space-doubleunit);
            text-decoration: none;
          }
          .container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .right-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link05 {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .main {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: flex-start;
          }
          .blog {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .container3 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .container4 {
            display: flex;
            align-items: center;
            margin-bottom: 32px;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .menu {
            width: 1047px;
            display: flex;
            max-width: 1000px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link06 {
            display: contents;
          }
          .logo1 {
            width: 190px;
            text-decoration: none;
          }
          .container5 {
            width: 568px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text01 {
            align-self: center;
            text-decoration: none;
          }
          .text02 {
            text-decoration: none;
          }
          .text03 {
            text-decoration: none;
          }
          .link08 {
            align-self: center;
            text-decoration: none;
          }
          .link09 {
            align-self: center;
            text-decoration: none;
          }
          .link10 {
            align-self: center;
            text-decoration: none;
          }
          .follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text04 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link11 {
            display: contents;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link12 {
            display: contents;
          }
          .icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link13 {
            display: contents;
          }
          .icon4 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .stats {
            width: 100%;
            display: grid;
            padding: 48px;
            grid-gap: 32px;
            max-width: 1400px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .stat {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text05 {
            color: #FF7C4C;
            font-size: 3rem;
          }
          .text08 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .text09 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stat1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text10 {
            color: #FF7C4C;
            font-size: 3rem;
          }
          .text12 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .text13 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stat2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text14 {
            color: #FF7C4C;
            font-size: 3rem;
          }
          .text17 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .text18 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .stat3 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .text19 {
            color: #FF7C4C;
            font-size: 3rem;
          }
          .text21 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          .text22 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
          }
          @media (max-width: 991px) {
            .text05 {
              text-align: center;
            }
            .text10 {
              text-align: center;
            }
            .text14 {
              text-align: center;
            }
            .text19 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .top-container {
              width: 100%;
            }
            .right-side {
              display: none;
            }
            .main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .blog {
              padding-left: 32px;
              padding-right: 32px;
            }
            .menu {
              flex-direction: column;
            }
            .stats {
              padding-left: 32px;
              padding-right: 32px;
              grid-template-columns: 1fr 1fr;
            }
            .text08 {
              text-align: center;
            }
            .text12 {
              text-align: center;
            }
            .text17 {
              text-align: center;
            }
            .text21 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .top-container {
              flex: 0 0 auto;
              width: auto;
              height: 100%;
              align-self: stretch;
            }
            .logo {
              width: auto;
            }
            .links-container {
              width: 359px;
            }
            .link01 {
              margin-left: 5%;
              margin-right: 5%;
            }
            .link02 {
              width: auto;
              height: auto;
              margin-right: 5%;
            }
            .link03 {
              margin-right: 5%;
            }
            .link04 {
              margin-right: 0px;
            }
            .main {
              width: auto;
              height: auto;
              flex-wrap: wrap;
              min-width: 100%;
              align-self: stretch;
              align-items: center;
              padding-top: 4%;
              padding-left: 2%;
              padding-right: 2%;
              padding-bottom: 4%;
              justify-content: center;
            }
            .blog {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .footer {
              width: auto;
              height: auto;
              flex-wrap: wrap;
              min-width: 100%;
              align-self: stretch;
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .menu {
              width: 100%;
              height: 100%;
              max-width: 100%;
              align-items: stretch;
              justify-content: flex-end;
            }
            .logo1 {
              width: auto;
              align-self: center;
            }
            .container5 {
              width: 100%;
            }
            .text01 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link08 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link09 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link10 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .follow-container {
              margin-left: 0px;
            }
            .stats {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog
