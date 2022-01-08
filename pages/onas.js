import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import SolidButton from '../components/solid-button'
import Usluga from '../components/usluga'
import Cena from '../components/cena'
import Uslugahoryzont from '../components/uslugahoryzont'

const Onas = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>O nas - Czysto JuÅ¼ - SprzÄtanie w Opolu</title>
          <meta name="description" content="SprzÄtanie w Opolu" />
          <meta
            property="og:title"
            content="O nas - Czysto JuÅ¼ - SprzÄtanie w Opolu"
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
                <div className="right-side">
                  <Link href="/kontakt">
                    <a className="link05">
                      <SolidButton
                        button="ZamÃ³w wycenÄ"
                        rootClassName="rootClassName19"
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
                <span className="text02">
                  Czysto juÅ¼
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="text03">
                  to ambitni profesjonaliÅci, ktÃ³rzy zadbajÄ o to, aby lokale
                  klientÃ³w firmy byÅy idealnie czyste. Nieustannie szkolimy
                  naszych pracownikÃ³w, opracowujemy nowe metody, wykorzystujemy
                  najnowoczeÅniejsze narzÄdzia i materiaÅy, aby stworzyÄ czyste
                  i zdrowe Årodowisko dla klienta.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="text05">
                  W naszej pracy uÅ¼ywamy tylko wysokiej jakoÅci ÅrodkÃ³w
                  czyszczÄcych, ktÃ³re zapewniajÄ najlepsze efekty.
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div id="main-section" className="main">
          <h1 className="text06">Naszy usÅugi</h1>
          <div className="container03">
            <div className="container04">
              <Link href="/sprztaniemieszkania">
                <a className="link06">
                  <Usluga
                    city="SprzÄtanie mieszkania"
                    image="cd31e461-a67f-4e60-9782-334fa3f1c185"
                    description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                    rootClassName="rootClassName15"
                    className="component01"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztanieporemoncie">
                <a className="link07">
                  <Usluga
                    city="SprzÄtanie po remoncie"
                    image="9af27374-71d8-4993-aa2d-f9a2a7a0dcfb"
                    description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                    rootClassName="rootClassName16"
                    className="component02"
                  ></Usluga>
                </a>
              </Link>
              <Link href="/sprztaniebiura">
                <a className="link08">
                  <Usluga
                    city="SprzÄtanie biura"
                    image="2311dc25-9eb9-4184-997d-4daf839a595b"
                    description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                    rootClassName="rootClassName17"
                    className="component03"
                  ></Usluga>
                </a>
              </Link>
            </div>
          </div>
          <div className="cards-container">
            <Link href="/sprztaniemieszkania">
              <a className="link09">
                <Usluga
                  city="SprzÄtanie mieszkania"
                  image="cd31e461-a67f-4e60-9782-334fa3f1c185"
                  description="Z naszÄ pomocÄ uratujesz swÃ³j dom przed kurzem i brudem oraz sprawisz, Å¼e bÄdzie czysty i wygodny. ZespÃ³Å profesjonalnych sprzÄtaczy jest gotowy do szybkiego i bezpiecznego usuniÄcia wszelkich zanieczyszczeÅ. Odpowiedzialnie podchodzimy do zadaÅ postawionych przed sprzÄtaniem mieszkaÅ."
                  rootClassName="rootClassName28"
                  className="component04"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztaniebiura">
              <a className="link10">
                <Usluga
                  city="SprzÄtanie biura"
                  image="2311dc25-9eb9-4184-997d-4daf839a595b"
                  description='Firma sprzÄtajÄca "Czysto JuÅ¼" oferuje usÅugÄ - codzienne sprzÄtanie pomieszczeÅ biurowych, ktÃ³re ma na celu utrzymanie PaÅstwa biura w atrakcyjnej dla klientÃ³w formie.UsÅuga sprzÄtania biurowcÃ³w pozwala pracownikom biurowym skoncentrowaÄ siÄ na swojej pracy.'
                  rootClassName="rootClassName13"
                  className="component05"
                ></Usluga>
              </a>
            </Link>
            <Link href="/sprztanieporemoncie">
              <a className="link11">
                <Usluga
                  city="SprzÄtanie po remoncie"
                  image="9af27374-71d8-4993-aa2d-f9a2a7a0dcfb"
                  description='Ålady farby i szpachli, plamy kleju i rozpuszczalnika, resztki gruzu budowlanego i kurzu, kurz na dosÅownie wszystkich powierzchniach - ile czasu zajmie czyszczenie! UporzÄdkowanie pomieszczenia bÄdzie wymagaÅo wiele wysiÅku, wysokiej jakoÅci ÅrodkÃ³w czystoÅci i profesjonalnego sprzÄtu. Skontaktuj siÄ z profesjonalistami - do firmy sprzÄtajÄcej "Czysto JuÅ¼"'
                  rootClassName="rootClassName14"
                  className="component06"
                ></Usluga>
              </a>
            </Link>
          </div>
          <div className="container05">
            <div className="container06">
              <Cena
                city="Biuro od 200mÂ²"
                city1="od 200 PLN"
                image="b3a9784a-201d-4e0e-ba65-e5d559c5ca6c"
                description="SprzÄtanie duÅ¼ych biur o powierzchni ponad 200 metrÃ³w kwadratowych. Czas realizacji usÅugi od 5 godzin."
                rootClassName="rootClassName19"
              ></Cena>
              <Cena
                city="Biuro do 100mÂ²"
                city1="od 40 PLN"
                image="8d78caa3-c95b-4034-a5c5-8446d459e5ba"
                description="SprzÄtanie maÅego biura do 100 metrÃ³w kwadratowych to usÅuga. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName20"
              ></Cena>
              <Cena
                city="Biuro do 200mÂ²"
                city1="od 90 PLN"
                image="2b6452e5-1400-4b8a-815f-b22cfb671777"
                description="SprzÄtanie Åredniej wielkoÅci biura do 200 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName21"
              ></Cena>
            </div>
            <div className="container07">
              <div className="container08">
                <Cena
                  city="SprzÄtanie domÃ³w"
                  city1="od 200 PLN"
                  image="01963a5b-a184-4abb-85c7-c77ed1f353d5"
                  description="SprzÄtanie domÃ³w od 120 metrÃ³w kwadratowych. Czas realizacji usÅugi od 4 godzin."
                  rootClassName="rootClassName25"
                ></Cena>
                <Cena
                  city="Mieszkanie 1 lub 2 pokojowe"
                  city1="od 100 PLN"
                  image="b1316bbd-24bf-4a49-939b-6cabe16266d8"
                  description="SprzÄtanie mieszkania do 80 metrÃ³w kwadratowych. Czas realizacji usÅugi od 2 godzin."
                  rootClassName="rootClassName26"
                ></Cena>
                <Cena
                  city="Mieszkanie 3 lub 4 pokojowe"
                  city1="od 150 PLN"
                  image="ba8c8b30-15f9-4b7c-97f3-2a55f4f79fb4"
                  description="SprzÄtanie mieszkania od 80 do 120 metrÃ³w kwadratowych. Czas realizacji usÅugi od 3 godzin."
                  rootClassName="rootClassName27"
                ></Cena>
              </div>
            </div>
            <div className="container09">
              <div className="container10">
                <Cena
                  city="SprzÄtanie domÃ³w"
                  city1="od 200 PLN"
                  image="01963a5b-a184-4abb-85c7-c77ed1f353d5"
                  description="SprzÄtanie domÃ³w od 120 metrÃ³w kwadratowych. Czas realizacji usÅugi do 6 godzin."
                  rootClassName="rootClassName28"
                ></Cena>
                <Cena
                  city="Mieszkanie 3 lub 4 pokojowe"
                  city1="od 150 PLN"
                  image="ba8c8b30-15f9-4b7c-97f3-2a55f4f79fb4"
                  description="SprzÄtanie mieszkania od 80 do 120 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                  rootClassName="rootClassName29"
                ></Cena>
                <Cena
                  city="Mieszkanie 1 lub 2 pokojowe"
                  city1="od 100 PLN"
                  image="b1316bbd-24bf-4a49-939b-6cabe16266d8"
                  description="SprzÄtanie mieszkania do 80 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                  rootClassName="rootClassName30"
                ></Cena>
              </div>
            </div>
          </div>
          <div className="container11">
            <div className="container12">
              <Cena
                city="Biuro do 200mÂ²"
                city1="od 90 PLN"
                image="2b6452e5-1400-4b8a-815f-b22cfb671777"
                description="SprzÄtanie Åredniej wielkoÅci biura do 200 metrÃ³w kwadratowych. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName22"
              ></Cena>
              <Cena
                city="Biuro od 200mÂ²"
                city1="od 200 PLN"
                image="b3a9784a-201d-4e0e-ba65-e5d559c5ca6c"
                description="SprzÄtanie duÅ¼ych biur o powierzchni ponad 200 metrÃ³w kwadratowych. Czas realizacji usÅugi od 5 godzin."
                rootClassName="rootClassName23"
              ></Cena>
              <Cena
                city="Biuro do 100mÂ²"
                city1="od 40 PLN"
                image="8d78caa3-c95b-4034-a5c5-8446d459e5ba"
                description="SprzÄtanie maÅego biura do 100 metrÃ³w kwadratowych to usÅuga. Czas realizacji usÅugi do 4 godzin."
                rootClassName="rootClassName24"
              ></Cena>
            </div>
          </div>
          <Uslugahoryzont
            city="SprzÄtanie po remoncie"
            city1="od 200 PLN"
            image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
            description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
            rootClassName="rootClassName1"
          ></Uslugahoryzont>
          <Cena
            city="SprzÄtanie po remoncie"
            city1="od 200 PLN"
            image="/playground_assets/sprzatnaie-po-remoncie-baner1-1500h.jpg"
            description="Po omÃ³wieniu szczegÃ³ÅÃ³w i potwierdzeniu listy usÅug nasz zespÃ³Å wyjeÅ¼dÅ¼a do PaÅstwa i od razu przystÄpuje do pracy."
            rootClassName="rootClassName31"
          ></Cena>
          <h1 className="heading">Skontaktuj siÄ z nami !</h1>
          <input type="text" placeholder="Imie" className="textinput input" />
          <input
            type="text"
            placeholder="Kontakt"
            className="textinput1 input"
          />
        </div>
        <div className="footer">
          <div className="menu">
            <Link href="/">
              <a className="link12">
                <h1 className="logo1">Czysto JuÅ¼</h1>
              </a>
            </Link>
            <div className="container13">
              <span className="text07">
                <span className="text08">O n</span>
                <Link href="/onas">
                  <a></a>
                </Link>
                <span className="text09">as</span>
              </span>
              <Link href="/kontakt">
                <a className="link14">Kontakt</a>
              </Link>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link15"
              >
                Personalna oferta
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="link16"
              >
                Regulamin
              </a>
            </div>
            <div className="follow-container">
              <span className="text10">Za subskrybuj nas</span>
              <div className="icons-container">
                <div className="container14">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link17"
                  >
                    <svg viewBox="0 0 877.7142857142857 1024" className="icon">
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link18"
                  >
                    <svg viewBox="0 0 602.2582857142856 1024" className="icon2">
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link19"
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
            background-image: url('/playground_assets/313-1500w.jpg');
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
            margin-top: 5%;
            align-items: center;
            margin-left: 5%;
            flex-direction: column;
            justify-content: center;
          }
          .text01 {
            color: #01050c;
            align-self: flex-start;
            font-style: normal;
            text-align: justify;
            font-family: Poppins;
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .text02 {
            color: #04070c;
            font-style: normal;
            font-weight: 700;
          }
          .text03 {
            color: #04070c;
          }
          .text05 {
            color: #04070c;
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
          .text06 {
            height: 66px;
            align-self: center;
          }
          .container03 {
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
          .container04 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .link06 {
            display: contents;
          }
          .component01 {
            text-decoration: none;
          }
          .link07 {
            display: contents;
          }
          .component02 {
            text-decoration: none;
          }
          .link08 {
            display: contents;
          }
          .component03 {
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
          .link09 {
            display: contents;
          }
          .component04 {
            text-decoration: none;
          }
          .link10 {
            display: contents;
          }
          .component05 {
            text-decoration: none;
          }
          .link11 {
            display: contents;
          }
          .component06 {
            text-decoration: none;
          }
          .container05 {
            width: 100%;
            display: flex;
            margin-top: 3%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container06 {
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
          .container07 {
            width: 100%;
            display: flex;
            margin-top: 3%;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container08 {
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
          .container09 {
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
          .container10 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .container11 {
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
          .container12 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .heading {
            height: 45px;
            align-self: center;
            margin-bottom: 20px;
          }
          .textinput {
            width: 465px;
            border-radius: 20px;
          }
          .textinput1 {
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
          .link12 {
            display: contents;
          }
          .logo1 {
            width: 190px;
            text-decoration: none;
          }
          .container13 {
            width: 568px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .text07 {
            align-self: center;
            text-decoration: none;
          }
          .text08 {
            text-decoration: none;
          }
          .text09 {
            text-decoration: none;
          }
          .link14 {
            align-self: center;
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
          .follow-container {
            display: flex;
            align-items: center;
            margin-left: 50px;
            flex-direction: column;
            justify-content: space-between;
          }
          .text10 {
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .icons-container {
            width: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container14 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .link17 {
            display: contents;
          }
          .icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link18 {
            display: contents;
          }
          .icon2 {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .link19 {
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
            .container03 {
              display: none;
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
              background-image: url('/playground_assets/spszatanie-o-nas-1500w.webp');
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
            .content-container {
              width: 100%;
              height: auto;
              position: static;
              align-self: center;
              margin-top: 0%;
              margin-left: 0%;
            }
            .text01 {
              width: auto;
              height: auto;
              font-size: 1.5rem;
              align-self: center;
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
            .container03 {
              width: auto;
              height: auto;
              display: flex;
            }
            .cards-container {
              display: none;
            }
            .container05 {
              margin-bottom: 5%;
            }
            .container06 {
              display: none;
            }
            .container07 {
              margin-bottom: 5%;
            }
            .container08 {
              display: none;
            }
            .container09 {
              width: auto;
              height: auto;
              display: flex;
            }
            .container11 {
              width: auto;
              height: auto;
              display: flex;
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
              height: 100%;
              max-width: 100%;
              align-items: stretch;
              justify-content: flex-end;
            }
            .logo1 {
              width: auto;
              align-self: center;
            }
            .container13 {
              width: 100%;
            }
            .text07 {
              margin-bottom: var(--dl-space-space-halfunit);
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
            .follow-container {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Onas
