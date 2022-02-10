import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Uslugahoryzont from '../components/uslugahoryzont'
import Cena from '../components/cena'

const Sprztanieporemoncie = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>
            SprzÄtanie po remoncie - Czysto JuÅ¼ - SprzÄtanie w Opolu
          </title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta
            property="og:title"
            content="SprzÄtanie po remoncie - Czysto JuÅ¼ - SprzÄtanie w Opolu"
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
          <nav className="navbar">
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
                        rootClassName="rootClassName17"
                        className="component"
                      ></SolidButton>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="content-container">
            <h1 className="text01 heading">
              Firma sprzÄtajÄca w Opolu &quot;Czysto JuÅ¼&quot; profesjonalne
              sprzÄtanie po remoncie
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h1>
            <SolidButton
              button="ZamÃ³w wycenÄ"
              rootClassName="rootClassName16"
            ></SolidButton>
          </div>
        </div>
        <div id="main-section" className="main">
          <h2 className="text02">SprzÄtanie po remoncie w Opolu</h2>
          <div className="container3">
            <img
              alt="image"
              src="/playground_assets/sprzatnaie-poremoncie-600w.jpg"
              className="image"
            />
            <span className="text03">
              <span>
                SprzÄtanie po remoncie to trudne i Å¼mudne zadanie. JeÅli to
                moÅ¼liwe, lepiej powierzyÄ to profesjonalnym sprzÄtaczom. Nie
                jest tak drogi, jak wiele osÃ³b myÅli. Firma &quot;Czysto
                JuÅ¼&quot; zapewnia takÄ usÅugÄ od 4 PLN za mÂ². SprzÄtamy
                mieszkania, biura, domki. Napisz do nas na stronie lub zadzwoÅ
                pod wskazane numery.
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Po kosmetycznym, a tym bardziej remoncie kapitalnym, bardzo
                trudno pozbyÄ siÄ kurzu budowlanego. PrzyjeÅ¼dÅ¼amy do PaÅstwa z
                caÅym niezbÄdnym sprzÄtem, w tym odkurzaczami przemysÅowymi i
                profesjonalnymi Årodkami czystoÅci i w jeden dzieÅ
                przygotowujemy mieszkanie lub inne pomieszczenie do wprowadzenia
              </span>
            </span>
            <img
              alt="image"
              src="/playground_assets/sprzatnaie-po-remoncie-1500w.jpg"
              className="image1"
            />
            <span className="text07">
              <span className="text08">
                1. Usuwamy kurz z podÅÃ³g, Åcian, sufitÃ³w, mebli
              </span>
              <br></br>
              <span className="text09">
                2.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text10">wycieramy</span>
              <span className="text11">
                {' '}
                plamy z farb, mieszanek budowlanych, kleju
              </span>
              <br></br>
              <span className="text12">
                3.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text13">
                myjemy
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text14">
                powierzchnie szklane, drzwi, lustra
              </span>
              <br></br>
              <span className="text15">
                4.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text16">wykonujemy</span>
              <span className="text17"> mycie podÅogi na mokro</span>
              <br></br>
              <span className="text18">
                5.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text19">czyÅcimy</span>
              <span className="text20"> fugi pÅytek</span>
              <br></br>
              <span className="text21">
                6.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="text22">usuwamy</span>
              <span className="text23"> foliÄ ochronnÄ z okien</span>
            </span>
            <img
              alt="image"
              src="/playground_assets/sprzatnaie-po-remoncie-1500w.jpg"
              className="image2"
            />
          </div>
          <Uslugahoryzont
            city="SprzÄtanie po remoncie"
            city1="od 200 PLN"
            image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
            description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
            rootClassName="rootClassName"
          ></Uslugahoryzont>
          <Cena
            city="SprzÄtanie po remoncie"
            city1="od 200 PLN"
            image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
            description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
            rootClassName="rootClassName18"
          ></Cena>
          <div className="container4">
            <form className="form">
              <input type="text" placeholder="Imie" className="input" />
              <input
                type="text"
                placeholder="Kontakt"
                className="textinput input"
              />
              <button className="button">WyÅyÅam</button>
            </form>
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
              <span className="text24">
                <span className="text25">O n</span>
                <Link href="/onas">
                  <a></a>
                </Link>
                <span className="text26">as</span>
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
              <span className="text27">Za subskrybuj nas</span>
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
            height: 700px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/sprzatnaie-poremoncie1-1500w.jpg');
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
          .content-container {
            width: 80%;
            height: 55%;
            display: flex;
            position: relative;
            margin-top: 10%;
            align-items: center;
            margin-right: 4%;
            flex-direction: column;
            justify-content: center;
          }
          .text01 {
            top: 0px;
            left: 5%;
            color: #161212;
            right: 17%;
            bottom: 0px;
            margin: auto;
            position: absolute;
            align-self: stretch;
            text-align: justify;
          }
          .main {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-quadruple);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-quadruple);
            justify-content: center;
            background-color: #ffffff;
          }
          .text02 {
            align-self: center;
            padding-top: 1%;
            padding-bottom: 1%;
          }
          .container3 {
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: stretch;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .image {
            width: 40%;
            height: 25%;
            padding: 1%;
            align-self: flex-start;
            margin-top: 1%;
            object-fit: cover;
            margin-left: 5%;
            padding-top: 1%;
            margin-right: 5%;
            padding-left: 1%;
            margin-bottom: 1%;
            padding-bottom: 1%;
          }
          .text03 {
            width: 50%;
            font-size: 18px;
            align-self: flex-start;
            text-align: justify;
            padding-top: 2%;
            padding-right: 2%;
          }
          .image1 {
            right: 0%;
            width: 60%;
            bottom: 0%;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            padding-top: 0%;
            padding-left: 0%;
            padding-right: 0%;
            padding-bottom: 0%;
          }
          .text07 {
            width: 60%;
            font-size: 18px;
            align-self: flex-end;
            list-style: circle;
            text-align: left;
            line-height: 2;
            padding-top: 2%;
            padding-left: 6%;
            padding-right: 0%;
          }
          .text08 {
            text-align: left;
          }
          .text09 {
            text-align: left;
            text-transform: lowercase;
          }
          .text10 {
            text-transform: capitalize;
          }
          .text11 {
            text-transform: lowercase;
          }
          .text12 {
            text-align: left;
            text-transform: lowercase;
          }
          .text13 {
            text-transform: capitalize;
          }
          .text14 {
            text-transform: lowercase;
          }
          .text15 {
            text-align: left;
            text-transform: lowercase;
          }
          .text16 {
            text-transform: capitalize;
          }
          .text17 {
            text-transform: lowercase;
          }
          .text18 {
            text-align: left;
            text-transform: lowercase;
          }
          .text19 {
            text-transform: capitalize;
          }
          .text20 {
            text-transform: lowercase;
          }
          .text21 {
            text-align: left;
            text-transform: lowercase;
          }
          .text22 {
            text-transform: capitalize;
          }
          .text23 {
            text-transform: lowercase;
          }
          .image2 {
            right: 0%;
            width: 60%;
            bottom: 0%;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
            padding-top: 0%;
            padding-left: 0%;
            padding-right: 0%;
            padding-bottom: 0%;
          }
          .container4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form {
            height: 146px;
            position: relative;
            margin-top: 5%;
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
          .text24 {
            align-self: center;
            text-decoration: none;
          }
          .text25 {
            text-decoration: none;
          }
          .text26 {
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
          .text27 {
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
          @media (max-width: 767px) {
            .top-container {
              width: 100%;
            }
            .right-side {
              display: none;
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
            .text03 {
              text-align: justify;
            }
            .text07 {
              text-align: justify;
            }
            .menu {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .container {
              align-items: stretch;
              justify-content: space-between;
            }
            .top-container {
              width: 100%;
              height: auto;
              max-width: 100%;
              min-width: 100%;
              align-self: center;
              max-height: 100%;
              min-height: 100%;
              align-items: center;
              justify-content: flex-start;
            }
            .navbar {
              padding: var(--dl-space-space-halfunit);
              max-width: 100%;
              min-width: 25%;
              align-self: stretch;
              min-height: 100%;
              align-items: stretch;
              justify-content: space-between;
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
            .content-container {
              width: auto;
              height: auto;
              align-self: center;
              margin-top: 5%;
              align-items: center;
              margin-left: 0px;
              margin-right: 0%;
              margin-bottom: 0px;
              justify-content: center;
            }
            .text01 {
              top: -483px;
              left: -207px;
              width: 100%;
              height: auto;
              margin: 00%;
              position: static;
              font-size: 2rem;
              text-align: justify;
              padding-left: 5%;
              padding-right: 5%;
            }
            .main {
              width: auto;
              height: auto;
              align-self: center;
              align-items: stretch;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .image {
              display: none;
            }
            .text03 {
              width: auto;
            }
            .image1 {
              width: 100%;
              height: 100%;
              padding: 0%;
              position: static;
              align-self: flex-start;
              margin-top: 2%;
              margin-bottom: 2%;
            }
            .text07 {
              width: auto;
            }
            .image2 {
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
            .footer {
              width: auto;
              height: auto;
              padding: var(--dl-space-space-unit);
              flex-wrap: wrap;
              align-self: stretch;
              align-items: center;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
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
            .text24 {
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
          }
        `}
      </style>
    </>
  )
}

export default Sprztanieporemoncie
