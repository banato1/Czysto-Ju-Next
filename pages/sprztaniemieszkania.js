import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Cena from '../components/cena'

const Sprztaniemieszkania = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>SprzÄtanie mieszkania - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta
            property="og:title"
            content="SprzÄtanie mieszkania - Czysto JuÅ¼ - SprzÄtanie w Opolu"
          />
          <meta property="og:description" content="SprzÄtanie w Opolu" />
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
            <div className="container01">
              <div className="container02">
                <div className="right-side"></div>
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="content-container">
              <h1 className="text01 heading">
                <span>
                  Firma sprzÄtajÄca w Opolu &quot;Czysto JuÅ¼&quot;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="text03">profesjonalne</span>
                <span> sprzÄtanie mieszkaÅ</span>
              </h1>
              <SolidButton
                button="ZamÃ³w wycenÄ"
                rootClassName="rootClassName14"
              ></SolidButton>
            </div>
          </div>
        </div>
        <div id="main-section" className="main">
          <h2 className="text05">SprzÄtanie mieszkaniaw Opolu</h2>
          <div className="container03">
            <img
              alt="image"
              src="/playground_assets/sprzatnaie-mieszkania-opole-600w.jpg"
              className="image"
            />
            <span className="text06">
              <span className="text07">
                Na Åwiecie niestety wciÄÅ¼ jest za duÅ¼o brudu i kurzu, a oni majÄ
                tendencjÄ do przejmowania wszystkiego wokÃ³Å. âCzysto JuÅ¼â
                niestrudzenie walczÄ o czystoÅÄ, oczywiÅcie nie w skali
                globalnej â caÅy Åwiat jest za duÅ¼y. Ale z powodzeniem
                pokonujemy zacieki, plamy, Ålady malowania, kurz w domach,
                mieszkaniach i biurach Opola. A nasza walka o czystoÅÄ nie
                zostaje przerwana na jeden dzieÅ!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className="text09">
                SpecjaliÅci z profesjonalnym sprzÄtem utrzymujÄ czystoÅÄ za
                pomocÄ delikatnych ÅrodkÃ³w chemicznych. Nie zawyÅ¼amy cen
                sprzÄtania mieszkaÅ w Opolu, utrzymujÄc je na przystÄpnym
                poziomie. SprzÄtanie przebiega sprawnie i szybko. Bierzemy na
                siebie wszelkie troski o usuwanie plam, uwalniajÄc czas klienta.
                Oferujemy peÅen zakres usÅug, mogÄ paÅstwo zleciÄ ciÄgle
                utrzymanie czystoÅci lub jednorazowe sprzÄtanie domu (po
                przeprowadzce, remoncie, lokatorÃ³w).
              </span>
            </span>
          </div>
          <div className="container04">
            <h2 className="text10">Oferta</h2>
            <div className="container05">
              <Cena
                city="SprzÄtanie domÃ³w"
                city1="od 200 PLN"
                image="/playground_assets/sprzatnaie-domow-opole-1500h.jpg"
                description="SprzÄtanie domÃ³w od 120 metrÃ³w kwadratowych. Czas realizacji usÅugi od 4 godzin."
                rootClassName="rootClassName6"
              ></Cena>
              <Cena
                city="Mieszkanie 1 lub 2 pokojowe"
                city1="od 100 PLN"
                image="/playground_assets/sprzatnaie-mieszkania-1-pokojowe-1500h.jpg"
                description="SprzÄtanie mieszkania do 80 metrÃ³w kwadratowych. Czas realizacji usÅugi od 2 godzin."
                rootClassName="rootClassName7"
              ></Cena>
              <Cena
                city="Mieszkanie 3 lub 4 pokojowe"
                city1="od 150 PLN"
                image="/playground_assets/sprzatnaie-mieszkania-3-pokojowe-1500h.jpg"
                description="SprzÄtanie mieszkania od 80 do 120 metrÃ³w kwadratowych. Czas realizacji usÅugi od 3 godzin."
                rootClassName="rootClassName8"
              ></Cena>
            </div>
          </div>
          <div className="container06">
            <div className="container07">
              <Cena
                city="SprzÄtanie domÃ³w"
                city1="od 200 PLN"
                image="/playground_assets/sprzatnaie-domow-opole-1500h.jpg"
                description="SprzÄtanie domÃ³w od 120 metrÃ³w kwadratowych. Czas realizacji usÅugi do 6 godzin."
                rootClassName="rootClassName9"
              ></Cena>
              <Cena
                city="Mieszkanie 3 lub 4 pokojowe"
                city1="od 150 PLN"
                image="/playground_assets/sprzatnaie-mieszkania-3-pokojowe-1500h.jpg"
                description="SprzÄtanie mieszkania od 80 do 120 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName10"
              ></Cena>
              <Cena
                city="Mieszkanie 1 lub 2 pokojowe"
                city1="od 100 PLN"
                image="/playground_assets/sprzatnaie-mieszkania-1-pokojowe-1500h.jpg"
                description="SprzÄtanie mieszkania do 80 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName11"
              ></Cena>
            </div>
          </div>
          <h1 className="text11">Skontaktuj siÄ z nami !</h1>
          <div className="container08">
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
              <a className="link05">
                <h1 className="logo1">Czysto JuÅ¼</h1>
              </a>
            </Link>
            <div className="container09">
              <span className="text12">
                <span className="text13">O n</span>
                <Link href="/onas">
                  <a></a>
                </Link>
                <span className="text14">as</span>
              </span>
              <Link href="/kontakt">
                <a className="link07">Kontakt</a>
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link08"
              >
                Personalna oferta
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link09"
              >
                Regulamin
              </a>
            </div>
            <div className="follow-container">
              <span className="text15">Za subskrybuj nas</span>
              <div className="icons-container">
                <div className="container10">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link10"
                  >
                    <svg viewBox="0 0 877.7142857142857 1024" className="icon">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link11"
                  >
                    <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link12"
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
            background-image: url('/playground_assets/spszatanie-mieszkan-1500w.webp');
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
            color: #121010;
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
          .container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .container02 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .right-side {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            position: relative;
            align-items: center;
            padding-top: 3%;
            padding-left: 4%;
            padding-right: 4%;
            flex-direction: row;
            padding-bottom: 3%;
            justify-content: center;
          }
          .content-container {
            width: 80%;
            height: 45%;
            margin: 14%;
            display: flex;
            align-self: center;
            margin-top: 13%;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .text01 {
            color: #000000;
            width: 100%;
            align-self: center;
            margin-top: 0%;
            text-align: justify;
          }
          .text03 {
            color: #000000;
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
          .text05 {
            align-self: center;
            padding-bottom: 1%;
          }
          .container03 {
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
          .text06 {
            width: 50%;
            height: 40%;
            font-size: 18px;
            align-self: flex-start;
            text-align: justify;
            padding-top: 3%;
          }
          .text07 {
            color: #080707;
          }
          .text09 {
            color: #080707;
          }
          .container04 {
            width: 100%;
            display: flex;
            margin-top: 3%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text10 {
            padding-top: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .container05 {
            width: 100%;
            height: 570px;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            max-width: 1000px;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .container06 {
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
          .container07 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .text11 {
            align-self: center;
            margin-bottom: 20px;
          }
          .container08 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form {
            height: 146px;
            position: relative;
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
          .link05 {
            display: contents;
          }
          .logo1 {
            width: 190px;
            text-decoration: none;
          }
          .container09 {
            width: 568px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text12 {
            align-self: center;
            text-decoration: none;
          }
          .text13 {
            text-decoration: none;
          }
          .text14 {
            text-decoration: none;
          }
          .link07 {
            align-self: center;
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
          .follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text15 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link10 {
            display: contents;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link11 {
            display: contents;
          }
          .icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link12 {
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
            .text06 {
              text-align: justify;
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
            .hero {
              width: auto;
            }
            .text01 {
              width: auto;
              font-size: 2rem;
              text-align: justify;
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
            .image {
              display: none;
            }
            .text06 {
              width: auto;
            }
            .container04 {
              margin-bottom: 5%;
            }
            .container05 {
              display: none;
            }
            .container06 {
              width: auto;
              height: auto;
              display: flex;
            }
            .text11 {
              width: 85%;
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
            .container09 {
              width: 100%;
            }
            .text12 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link07 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link08 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .link09 {
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

export default Sprztaniemieszkania
