import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Usluga from '../components/usluga'

const Kontakt = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Kontakt - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta
            property="og:title"
            content="Kontakt - Czysto JuÅ¼ - SprzÄtanie w Opolu"
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
                        rootClassName="rootClassName18"
                        className="component"
                      ></SolidButton>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="content-container">
              <h2 className="text01">
                <span>
                  Tel. -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="tel:+48539757559">
                  <span className="text03">+48 539 757 559</span>
                </a>
                <br></br>
                <span>
                  E-mail -
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <a href="mailto:kontakt@czystojuz.pl?subject=">
                  <span className="text06">kontakt@czystojuz.pl</span>
                </a>
                <span className="text07"></span>
              </h2>
            </div>
            <div className="container3">
              <form className="form">
                <input type="text" placeholder="Imie" className="input" />
                <input
                  type="tel"
                  name="Kontakt"
                  value="Kontakt"
                  placeholder="Kontakt"
                  className="textinput input"
                />
                <button type="button" className="button">
                  WyÅyÅam
                </button>
              </form>
            </div>
          </div>
        </div>
        <div id="main-section" className="main">
          <h1 className="text08">Naszy usÅugi</h1>
          <div className="container4">
            <div className="container5">
              <Link href="/sprztaniemieszkania">
                <a className="link08">
                  <Usluga
                    city="SprzÄtanie mieszkania"
                    image="/playground_assets/542261_936x530-1500h.jpg"
                    description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                    rootClassName="rootClassName8"
                    className="component1"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztanieporemoncie">
                <a className="link09">
                  <Usluga
                    city="SprzÄtanie po remoncie"
                    image="/playground_assets/poslerem-1500h.jpg"
                    description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                    rootClassName="rootClassName9"
                    className="component2"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztaniebiura">
                <a className="link10">
                  <Usluga
                    city="SprzÄtanie biura"
                    image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
                    description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                    rootClassName="rootClassName10"
                    className="component3"
                  ></Usluga>
                </a>
              </Link>
            </div>
          </div>
          <div className="cards-container">
            <Link href="/sprztaniemieszkania">
              <a className="link11">
                <Usluga
                  city="SprzÄtanie mieszkania"
                  image="/playground_assets/542261_936x530-1500h.jpg"
                  description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                  className="component4"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztaniebiura">
              <a className="link12">
                <Usluga
                  city="SprzÄtanie biura"
                  image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
                  description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                  rootClassName="rootClassName6"
                  className="component5"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztanieporemoncie">
              <a className="link13">
                <Usluga
                  city="SprzÄtanie po remoncie"
                  image="/playground_assets/poslerem-1500h.jpg"
                  description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                  rootClassName="rootClassName7"
                  className="component6"
                ></Usluga>
              </a>
            </Link>
          </div>
          <h1 className="text09">Skontaktuj siÄ z nami !</h1>
          <input type="text" placeholder="Imie" className="textinput1 input" />
          <input
            type="text"
            placeholder="Kontakt"
            className="textinput2 input"
          />
        </div>
        <div className="footer">
          <div className="menu">
            <Link href="/">
              <a className="link14">
                <h1 className="logo1">Czysto JuÅ¼</h1>
              </a>
            </Link>
            <div className="container6">
              <span className="text10">
                <span className="text11">O n</span>
                <Link href="/onas">
                  <a></a>
                </Link>
                <span className="text12">as</span>
              </span>
              <Link href="/kontakt">
                <a className="link16">Kontakt</a>
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link17"
              >
                Personalna oferta
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link18"
              >
                Regulamin
              </a>
            </div>
            <div className="follow-container">
              <span className="text13">Za subskrybuj nas</span>
              <div className="icons-container">
                <div className="container7">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link19"
                  >
                    <svg viewBox="0 0 877.7142857142857 1024" className="icon">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link20"
                  >
                    <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link21"
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
            height: 647px;
            display: flex;
            min-width: 100%;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/spszatanie-o-nas-1500w.webp');
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
          .hero {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .content-container {
            top: 0px;
            left: 0px;
            width: 50%;
            display: flex;
            position: absolute;
            align-self: flex-start;
            margin-top: 15%;
            align-items: center;
            margin-left: 5%;
            flex-direction: column;
            justify-content: center;
          }
          .text01 {
            color: #100808;
            width: 100%;
            font-size: 2rem;
            align-self: flex-start;
            font-style: normal;
            text-align: justify;
            font-family: Poppins;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .text03 {
            text-decoration: underline;
          }
          .text06 {
            text-decoration: underline;
          }
          .text07 {
            text-decoration: underline;
          }
          .container3 {
            top: 60%;
            left: 5%;
            bottom: 15%;
            display: flex;
            position: absolute;
            align-self: flex-end;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form {
            height: 146px;
            align-self: flex-start;
            margin-top: 0px;
          }
          .input {
            width: 100%;
            border-radius: 20px;
          }
          .textinput {
            width: 100%;
            margin-top: 10px;
            border-radius: 20px;
          }
          .button {
            left: 175px;
            color: var(--dl-color-gray-white);
            width: 25%;
            bottom: 4px;
            z-index: 20;
            position: absolute;
            font-size: 18px;
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            border-width: 0px;
            border-radius: 50px;
            background-color: #9e0404;
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
          .text08 {
            height: 66px;
            align-self: center;
          }
          .container4 {
            width: 318px;
            height: 1284px;
            display: none;
            position: relative;
            flex-wrap: wrap;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container5 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .link08 {
            display: contents;
          }
          .component1 {
            text-decoration: none;
          }
          .link09 {
            display: contents;
          }
          .component2 {
            text-decoration: none;
          }
          .link10 {
            display: contents;
          }
          .component3 {
            text-decoration: none;
          }
          .cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            position: relative;
            flex-wrap: wrap;
            max-width: 1000px;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .link11 {
            display: contents;
          }
          .component4 {
            text-decoration: none;
          }
          .link12 {
            display: contents;
          }
          .component5 {
            text-decoration: none;
          }
          .link13 {
            display: contents;
          }
          .component6 {
            text-decoration: none;
          }
          .text09 {
            height: 45px;
            align-self: center;
            margin-bottom: 20px;
          }
          .textinput1 {
            width: 465px;
            border-radius: 20px;
          }
          .textinput2 {
            width: 465px;
            margin-top: 10px;
            border-radius: 20px;
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
          .link14 {
            display: contents;
          }
          .logo1 {
            width: 190px;
            text-decoration: none;
          }
          .container6 {
            width: 568px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text10 {
            align-self: center;
            text-decoration: none;
          }
          .text11 {
            text-decoration: none;
          }
          .text12 {
            text-decoration: none;
          }
          .link16 {
            align-self: center;
            text-decoration: none;
          }
          .link17 {
            align-self: center;
            text-decoration: none;
          }
          .link18 {
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
          .text13 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link19 {
            display: contents;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link20 {
            display: contents;
          }
          .icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link21 {
            display: contents;
          }
          .icon4 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .hero {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .right-side {
              display: none;
            }
            .hero {
              justify-content: center;
            }
            .content-container {
              align-items: center;
            }
            .text01 {
              font-size: 2.5rem;
            }
            .main {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .menu {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .top-container {
              height: auto;
              flex-wrap: wrap;
              max-width: auto;
              min-width: 100%;
              align-self: stretch;
              align-items: center;
              background-size: cover;
              justify-content: space-between;
              background-image: url('/playground_assets/sprzatnaie-kontak%D0%B5-1500w.jpg');
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
            .hero {
              width: 100%;
              height: 100%;
              padding: var(--dl-space-space-quadruple);
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .content-container {
              width: 100%;
              margin-top: 0%;
              margin-left: 0%;
            }
            .text01 {
              width: auto;
              font-size: 2rem;
              text-align: justify;
            }
            .container3 {
              display: none;
            }
            .input {
              width: 100%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .textinput {
              width: 100%;
              margin-top: var(--dl-space-space-unit);
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
            .container4 {
              width: auto;
              height: auto;
              display: flex;
            }
            .cards-container {
              display: none;
            }
            .textinput1 {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .textinput2 {
              margin-top: var(--dl-space-space-unit);
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
            .container6 {
              width: 100%;
            }
            .text10 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link17 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link18 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Kontakt
