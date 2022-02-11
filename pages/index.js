import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Usluga from '../components/usluga'

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta property="og:title" content="Czysto JuÅ¼ - SprzÄtanie w Opolu" />
          <meta
            property="og:description"
            content="Profesjonalna firma sprzÄtajÄca na terenie miasta Opola, pomoÅ¼emy Ci posprzÄtaÄ TwÃ³j dom, mieszkanie, biuro oraz po remoncie! Lepsza cena i jakoÅÄ!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b2b3b878-ffff-41fe-94c1-cd4ae51d6255/9a7c4e78-2c9e-4751-8914-f34403e1604d?org_if_sml=1"
          />
        </Head>
        <header className="top-container">
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
            <div className="hero">
              <div className="content-container">
                <h1 className="text01 heading">
                  Profesjonalne usÅugi sprzÄtania
                </h1>
                <h2 className="subheading">
                  <span className="text02">
                    Daj sobie chwilÄ odpoczÄÄ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="text04">A my zajmiemy siÄ sprzÄtaniem</span>
                </h2>
                <span className="text05">
                  <span className="text06">
                    SprzÄtanie domÃ³w, biur i wszystkiego, co powinno byÄ idealne
                  </span>
                  <span className="text07"></span>
                </span>
                <Link href="/kontakt">
                  <a className="link05">
                    <SolidButton
                      button="ZamÃ³w wycenÄ"
                      rootClassName="rootClassName1"
                      className="component"
                    ></SolidButton>
                  </a>
                </Link>
              </div>
            </div>
          </nav>
          <div className="hero1">
            <div className="content-container1">
              <h1 className="text08 heading">
                Profesjonalne usÅugi sprzÄtania
              </h1>
              <h2 className="subheading subheading1">
                <span className="text09">
                  Daj sobie chwilÄ odpoczÄÄ,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="text11">A my zajmiemy siÄ sprzÄtaniem</span>
              </h2>
              <span className="text12">
                <span className="text13">
                  SprzÄtanie domÃ³w, biur i wszystkiego, co powinno byÄ idealne
                </span>
              </span>
              <Link href="/kontakt">
                <a className="link06">
                  <SolidButton
                    button="ZamÃ³w wycenÄ"
                    rootClassName="rootClassName24"
                    className="component1"
                  ></SolidButton>
                </a>
              </Link>
            </div>
          </div>
        </header>
        <div id="main-section" className="main">
          <h1 className="text14">Naszy usÅugi</h1>
          <div className="container1">
            <div className="container2">
              <Link href="/sprztaniemieszkania">
                <a className="link07">
                  <Usluga
                    city="SprzÄtanie mieszkania"
                    image="/playground_assets/542261_936x530-1500h.jpg"
                    description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                    rootClassName="rootClassName5"
                    className="component2"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztanieporemoncie">
                <a className="link08">
                  <Usluga
                    city="SprzÄtanie po remoncie"
                    image="/playground_assets/poslerem-1500h.jpg"
                    description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                    rootClassName="rootClassName3"
                    className="component3"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztaniebiura">
                <a className="link09">
                  <Usluga
                    city="SprzÄtanie biura"
                    image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
                    description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                    rootClassName="rootClassName4"
                    className="component4"
                  ></Usluga>
                </a>
              </Link>
            </div>
          </div>
          <div className="cards-container">
            <Link href="/sprztaniemieszkania">
              <a className="link10">
                <Usluga
                  city="SprzÄtanie mieszkania"
                  image="/playground_assets/542261_936x530-1500h.jpg"
                  description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                  rootClassName="rootClassName29"
                  className="component5"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztaniebiura">
              <a className="link11">
                <Usluga
                  city="SprzÄtanie biura"
                  image="/playground_assets/uboroka-ofisoov-1-1000x600-1500h.jpg"
                  description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                  rootClassName="rootClassName2"
                  className="component6"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztanieporemoncie">
              <a className="link12">
                <Usluga
                  city="SprzÄtanie po remoncie"
                  image="/playground_assets/poslerem-1500h.jpg"
                  description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                  rootClassName="rootClassName"
                  className="component7"
                ></Usluga>
              </a>
            </Link>
          </div>
          <h1 className="text15">Skontaktuj siÄ z nami !</h1>
          <form
            name="contact-form"
            action="senchuk.sasha99@gmail.com"
            method="post"
            enctype="application/x-www-form-urlencoded"
            target="post"
            autoComplete="on"
            className="form"
          >
            <input type="text" placeholder="Imie" className="textinput input" />
            <input
              type="text"
              placeholder="Kontakt"
              className="textinput1 input"
            />
            <button type="submit" autoFocus="true" className="button">
              Button
            </button>
          </form>
        </div>
        <div className="footer">
          <div className="menu">
            <Link href="/">
              <a className="link13">
                <h1 className="logo1">Czysto JuÅ¼</h1>
              </a>
            </Link>
            <div className="container3">
              <Link href="/onas">
                <a className="link14">
                  <span className="text16">O n</span>
                  <span></span>
                  <span className="text18">as</span>
                </a>
              </Link>
              <Link href="/kontakt">
                <a className="link15">Kontakt</a>
              </Link>
              <Link href="/kontakt">
                <a className="link16">Personalna oferta</a>
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link17"
              >
                Regulamin
              </a>
            </div>
            <div className="follow-container">
              <span className="text19">Za subskrybuj nas</span>
              <div className="icons-container">
                <div className="container4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link18"
                  >
                    <svg viewBox="0 0 877.7142857142857 1024" className="icon">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link19"
                  >
                    <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link20"
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
            display: flex;
            min-height: 100vh;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .top-container {
            display: flex;
            min-width: 100%;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/playground_assets/313-200h.jpg');
          }
          .navbar {
            display: flex;
            padding: 2%;
            max-width: 100%;
            min-width: 50%;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: 2%;
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
          .hero {
            display: none;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .content-container {
            height: 286px;
            display: flex;
            margin-top: var(--dl-space-space-quadruple);
            align-items: flex-start;
            margin-right: 0px;
            flex-direction: column;
          }
          .text01 {
            color: #fdfdfd;
          }
          .text02 {
            color: #141010;
          }
          .text04 {
            color: #141010;
          }
          .text05 {
            color: #060404;
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .text06 {
            color: #0c0909;
          }
          .text07 {
            color: #100d0d;
          }
          .link05 {
            display: contents;
          }
          .component {
            text-decoration: none;
          }
          .hero1 {
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: center;
          }
          .content-container1 {
            height: 85%;
            display: flex;
            margin-top: 10%;
            align-items: flex-start;
            margin-right: 0%;
            flex-direction: column;
            justify-content: center;
          }
          .text08 {
            color: #100c0c;
          }
          .text09 {
            color: #180606;
          }
          .text11 {
            color: #180606;
          }
          .text12 {
            padding-top: var(--dl-space-space-doubleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .text13 {
            color: #100c0c;
          }
          .link06 {
            display: contents;
          }
          .component1 {
            text-decoration: none;
          }
          .main {
            height: auto;
            display: flex;
            padding: 2%;
            min-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text14 {
            height: 66px;
            align-self: center;
          }
          .container1 {
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
          .container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .link07 {
            display: contents;
          }
          .component2 {
            text-decoration: none;
          }
          .link08 {
            display: contents;
          }
          .component3 {
            text-decoration: none;
          }
          .link09 {
            display: contents;
          }
          .component4 {
            text-decoration: none;
          }
          .cards-container {
            width: 100%;
            display: flex;
            grid-gap: var(--dl-space-space-doubleunit);
            position: relative;
            flex-wrap: wrap;
            max-width: 1000px;
            align-self: center;
            margin-top: 2%;
            align-items: flex-start;
            margin-bottom: 2%;
            flex-direction: row;
            justify-content: space-between;
          }
          .link10 {
            display: contents;
          }
          .component5 {
            text-decoration: none;
          }
          .link11 {
            display: contents;
          }
          .component6 {
            text-decoration: none;
          }
          .link12 {
            display: contents;
          }
          .component7 {
            text-decoration: none;
          }
          .text15 {
            height: 45px;
            align-self: center;
            margin-bottom: 2%;
          }
          .form {
            width: 460px;
            height: 60%;
            position: relative;
            align-self: center;
          }
          .textinput {
            width: 460px;
            border-radius: 20px;
          }
          .textinput1 {
            width: 460px;
            margin-top: 10px;
            border-radius: 20px;
          }
          .button {
            color: #ffffff;
            width: 25%;
            height: 50px;
            font-size: 28px;
            font-style: normal;
            margin-top: 5%;
            text-align: center;
            font-weight: 700;
            margin-left: 37.5%;
            margin-right: 37.5%;
            border-radius: 50px;
            margin-bottom: 0%;
            text-decoration: none;
            background-color: #088c00;
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
          .link13 {
            display: contents;
          }
          .logo1 {
            width: 190px;
            text-decoration: none;
          }
          .container3 {
            width: 568px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link14 {
            align-self: center;
            text-decoration: none;
          }
          .text16 {
            text-decoration: none;
          }
          .text18 {
            text-decoration: none;
          }
          .link15 {
            align-self: center;
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
          .follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text19 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link18 {
            display: contents;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link19 {
            display: contents;
          }
          .icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link20 {
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
            .hero1 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .cards-container {
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              justify-content: center;
            }
            .content-container {
              align-items: center;
            }
            .text01 {
              font-size: 2.5rem;
            }
            .text05 {
              text-align: center;
            }
            .hero1 {
              justify-content: center;
            }
            .content-container1 {
              align-items: center;
            }
            .text08 {
              font-size: 2.5rem;
            }
            .text12 {
              text-align: center;
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
            .container {
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .top-container {
              height: auto;
              flex-wrap: wrap;
              max-width: auto;
              min-width: 100%;
              align-self: stretch;
              align-items: center;
              background-size: cover;
              justify-content: space-between;
              background-image: url('/playground_assets/313-200h.jpg');
            }
            .navbar {
              padding: 5%;
              flex-wrap: wrap;
              align-self: stretch;
              align-items: stretch;
              justify-content: space-between;
            }
            .logo {
              width: auto;
              max-width: 15%;
              min-width: 15%;
              align-self: stretch;
            }
            .links-container {
              flex: 1;
              width: 90%;
              max-width: 90%;
              min-width: 50%;
              align-self: stretch;
              align-items: center;
              justify-content: space-between;
            }
            .link02 {
              width: auto;
              height: auto;
            }
            .hero {
              display: flex;
              flex-wrap: wrap;
              align-self: center;
              align-items: center;
              padding-top: 5%;
              padding-left: 5%;
              padding-right: 5%;
              padding-bottom: 5%;
              justify-content: space-between;
            }
            .text01 {
              color: #080606;
              font-size: 2rem;
              text-align: center;
            }
            .subheading {
              font-size: 1.3rem;
              text-align: center;
            }
            .text05 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .hero1 {
              display: none;
              flex-wrap: wrap;
              align-self: center;
              align-items: center;
              padding-top: 5%;
              padding-left: 5%;
              padding-right: 5%;
              padding-bottom: 5%;
              justify-content: space-between;
            }
            .text08 {
              font-size: 2rem;
              text-align: center;
            }
            .subheading1 {
              font-size: 1.3rem;
              text-align: center;
            }
            .text12 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
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
            .container1 {
              width: auto;
              height: auto;
              display: flex;
            }
            .cards-container {
              display: none;
            }
            .textinput {
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .textinput1 {
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
              flex-wrap: wrap;
              max-width: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .logo1 {
              width: auto;
            }
            .container3 {
              width: 100%;
            }
            .link14 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link15 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link16 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link17 {
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

export default LandingPage
