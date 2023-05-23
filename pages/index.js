import React from 'react'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Startpee</title>
          <meta name="description" content="A 1ª Startup BizDev do Brasil" />
          <meta property="og:title" content="Startpee" />
          <meta
            property="og:description"
            content="A 1ª Startup BizDev do Brasil"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/94358b63-40b7-4093-8e18-1144ab4efe27/9a7f6f1f-f3f4-488c-9af3-0bea4a5b247a?org_if_sml=1"
          />
        </Head>
        <section className="home-hero">
          <div className="home-menu">
            <div id="mobile-menu" className="home-mobile-navigation">
              <img
                alt="pastedImage"
                src="/external/startpee-1500h-1500h.png"
                className="home-logo"
              />
              <div className="home-links">
                <a
                  href="https://api.whatsapp.com/send?phone=5511967272695"
                  className="home-link Link"
                >
                  Fale conosco
                </a>
                <a href="#servi" className="home-link01 Link">
                  Serviços
                </a>
                <a
                  href="https://cliente.startpee.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02 button"
                >
                  Começar
                </a>
              </div>
              <div id="close-mobile-menu" className="home-close-mobile-menu">
                <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                  <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
                </svg>
              </div>
            </div>
            <div className="home-desktop-navigation">
              <nav className="home-centered">
                <div className="home-left">
                  <img
                    alt="pastedImage"
                    src="/external/playstart-200h-200h.png"
                    className="home-logo1"
                  />
                  <div className="home-links1">
                    <span className="home-text Link">Inicio</span>
                    <a
                      href="https://g.page/r/CThVb5zDOnTaEBM"
                      className="home-link03 Link"
                    >
                      Quem somos
                    </a>
                    <a
                      href="https://api.whatsapp.com/send?phone=5511967272695"
                      className="home-link04 Link"
                    >
                      Fale conosco
                    </a>
                  </div>
                </div>
                <div className="home-right">
                  <a
                    href="https://cliente.startpee.com/"
                    className="home-link05"
                  >
                    <div className="home-get-started">
                      <span className="home-text01">Começar</span>
                    </div>
                  </a>
                  <div id="open-mobile-menu" className="home-burger-menu">
                    <img
                      alt="pastedImage"
                      src="/external/pastedimage-yxbd.svg"
                      className="home-mobile-menu-button"
                    />
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></DangerousHTML>
            </div>
          </div>
          <video
            id="5guiUrgcblM"
            src="https://download.samplelib.com/mp4/sample-15s.mp4"
            poster="/external/start%20%5B6%5D-400h-400h.jpg"
            preload="auto"
            controls
            className="home-video"
          ></video>
        </section>
        <div className="home-div">
          <DangerousHTML
            html={`<storifyme-collection url="https://stories.storifyme.com/widgets/g-francisco-junior-70482/widget/custom/6913"></storifyme-collection>`}
          ></DangerousHTML>
        </div>
        <section className="home-quote-container">
          <div className="home-quote">
            <span className="home-message">
              Criatividade e sofisticação é oque nos faz diferente
            </span>
            <div className="home-author">
              <img
                alt="image"
                src="/external/img_20220824_110123-200w-200w.png"
                className="home-avatar"
              />
              <span className="home-quote1">
                <span className="home-text02">—francisco júnior</span>
                <span>, Fundador e CEO, Startpee</span>
              </span>
            </div>
          </div>
        </section>
        <section className="home-banners"></section>
        <section id="servi" className="home-pricing">
          <div className="home-centered-container">
            <div className="home-heading">
              <span className="home-text04 title">
                Nosso Principal serviço 
              </span>
              <span className="home-text05">
                <span>
                  <span>
                    {' '}
                    dúvidas entre em
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="home-text09">contato pelo chat</span>
              </span>
            </div>
            <div className="home-card">
              <span className="home-text10">Plano de negócios</span>
              <img
                alt="image"
                src="/external/task-200h-200h.png"
                className="home-image"
              />
              <span className="home-text11">
                o plano de negócios é desenvolvido de acordo com a sua realidade
              </span>
              <div className="home-get-started1 template-button">
                <span className="home-text12">
                  <span>Saiba mais</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-top">
            <div className="home-right1">
              <div className="home-category">
                <span className="home-text15">Soluções </span>
                <a
                  href="https://cliente.startpee.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link06"
                >
                  <div className="home-links2">
                    <span className="home-text16">Assessoria Tecnologia</span>
                    <span className="home-text17">Assessoria Negócios</span>
                    <span className="home-text18">
                      Desenvolvimento de Apps Web
                    </span>
                  </div>
                </a>
              </div>
              <div className="home-category1">
                <span className="home-text19">Empresa</span>
                <div className="home-links3">
                  <span className="home-text20">Quem somos</span>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511967272695"
                    className="home-link07"
                  >
                    fale conosco
                  </a>
                  <a
                    href="https://www.reclameaqui.com.br/empresa/startpee/"
                    className="home-link08"
                  >
                    Politica de privacidade
                  </a>
                  <a
                    href="https://www.linkedin.com/company/86838059"
                    className="home-link09"
                  >
                    <div className="home-container1">
                      <span className="home-text21">Trabalhe conosco</span>
                      <img
                        alt="image"
                        src="/external/unnamed-200h-200h.png"
                        className="home-image1"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <img
              alt="pastedImage"
              src="/external/startpee-1500h-200h.png"
              className="home-branding"
            />
            <span className="home-text22">
              CNPJ 20.369.543/0001-98  São Paulo- SP 
            </span>
            <span className="home-text23">Copyright © Startpee - 2022</span>
          </div>
          <a
            href="https://www.reclameaqui.com.br/empresa/startpee/"
            className="home-link10"
          >
            <img
              alt="image"
              src="/external/reclame-aqui-logo-1500w-1500w.png"
              className="home-image2"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=7255646900014848336"
            className="home-link11"
          >
            <img
              alt="image"
              src="/external/pt-br_badge_web_generic-200h-200h.png"
              className="home-image3"
            />
          </a>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            height: 595px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #0095f6;
          }
          .home-menu {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-mobile-navigation {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 150;
            position: fixed;
            transform: translateX(100%);
            transition: transform 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-logo {
            width: 64px;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-close-mobile-menu {
            top: var(--dl-space-space-oneandhalfunits);
            right: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon {
            width: 24px;
            height: 24px;
            display: flex;
          }
          .home-desktop-navigation {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
          }
          .home-centered {
            width: 100%;
            height: 131px;
            display: flex;
            max-width: 1200px;
            box-sizing: initial;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: #ffffff;
          }
          .home-left {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: 38px;
            flex-direction: row;
            padding-bottom: 38px;
          }
          .home-logo1 {
            width: 108px;
            height: 94px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .home-links1 {
            display: flex;
            align-items: center;
            margin-left: 33px;
            flex-direction: row;
          }
          .home-text {
            font-size: 24px;
          }
          .home-link03 {
            font-size: 24px;
            text-decoration: none;
          }
          .home-link04 {
            font-size: 24px;
            text-decoration: none;
          }
          .home-right {
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link05 {
            display: contents;
          }
          .home-get-started {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 56px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-image: linear-gradient(
              90deg,
              rgb(0, 149, 246) 2%,
              rgb(119, 92, 252) 100%
            );
          }
          .home-get-started:hover {
            background-color: #5228f5;
          }
          .home-text01 {
            color: rgb(255, 255, 255);
            font-size: 22px;
            font-style: normal;
            font-weight: 600;
          }
          .home-burger-menu {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-mobile-menu-button {
            width: 40px;
            height: 40px;
            display: none;
          }
          .home-video {
            width: 657px;
            height: 374px;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .home-div {
            width: 100%;
            height: 257px;
            margin-top: 68px;
            margin-bottom: 50px;
          }
          .home-quote-container {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 160px;
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: 160px;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-quote {
            width: 100%;
            display: flex;
            max-width: 1200px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-message {
            color: #1a1b29;
            font-size: 29px;
            max-width: 800px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 40px;
          }
          .home-author {
            width: 800px;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: row;
          }
          .home-avatar {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 50%;
          }
          .home-quote1 {
            color: #1a1b29;
            width: 100%;
            max-width: 800px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-text02 {
            font-style: normal;
            font-weight: 600;
          }
          .home-banners {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-pricing {
            width: 100%;
            display: none;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
            background-color: #fa7930;
          }
          .home-centered-container {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text04 {
            color: var(--dl-color-gray-white);
            text-align: center;
          }
          .home-text05 {
            color: rgb(238, 233, 254);
            width: 600px;
            font-size: 19px;
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text09 {
            text-decoration: underline;
          }
          .home-card {
            flex: 1;
            width: 543px;
            height: 503px;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: 40px;
            border-radius: 50px;
            padding-right: 40px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-text10 {
            font-size: 28px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-image {
            width: 123px;
            height: 140px;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            object-fit: cover;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text11 {
            color: rgb(0, 0, 0);
            font-size: 22px;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            line-height: 24px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-get-started1 {
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            padding-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: 0px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: #fa7930;
          }
          .home-get-started1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-template-blue-bg);
          }
          .home-text12 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sevenunits);
            padding-left: var(--dl-space-space-sevenunits);
            padding-right: var(--dl-space-space-sevenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sevenunits);
            background-color: #1a1b29;
          }
          .home-top {
            width: 100%;
            display: flex;
            max-width: 1200px;
            border-color: #3b3b3b;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            border-bottom-width: 1px;
          }
          .home-right1 {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-category {
            width: 240px;
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-link06 {
            display: contents;
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
          }
          .home-text16 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text17 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-text18 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-category1 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-links3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text20 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link07 {
            color: rgb(196, 196, 196);
            font-size: 14px;
          }
          .home-link08 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            text-decoration: none;
          }
          .home-link09 {
            display: contents;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            text-decoration: none;
          }
          .home-text21 {
            color: rgb(196, 196, 196);
            font-size: 14px;
            margin-top: 12px;
            margin-bottom: 12px;
          }
          .home-image1 {
            width: 30px;
            height: 30px;
            object-fit: cover;
            margin-left: 5px;
            margin-right: 28px;
          }
          .home-bottom {
            width: 100%;
            display: flex;
            max-width: 1200px;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            user-select: none;
            flex-direction: column;
          }
          .home-branding {
            width: var(--dl-size-size-large);
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
              brightness(103%) contrast(103%);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text22 {
            color: var(--dl-color-gray-white);
            font-size: 14px;
            line-height: 30px;
          }
          .home-text23 {
            color: rgb(104, 104, 104);
            font-size: 14px;
            line-height: 30px;
          }
          .home-link10 {
            display: contents;
          }
          .home-image2 {
            width: 410px;
            height: 100%;
            object-fit: cover;
            text-decoration: none;
          }
          .home-link11 {
            display: contents;
          }
          .home-image3 {
            width: 437px;
            height: 141px;
            margin-top: var(--dl-space-space-unit);
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero {
              height: 453px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-close-mobile-menu {
              align-items: center;
              justify-content: center;
            }
            .home-desktop-navigation {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-centered {
              height: 60px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .home-left {
              margin-left: var(--dl-space-space-halfunit);
            }
            .home-logo1 {
              width: 63px;
              height: 56px;
            }
            .home-links1 {
              display: none;
            }
            .home-get-started {
              display: none;
            }
            .home-mobile-menu-button {
              display: flex;
            }
            .home-video {
              width: 585px;
              height: 355px;
              margin-top: 20px;
              margin-left: 10px;
              margin-right: 10px;
              margin-bottom: 20px;
            }
            .home-div {
              margin-bottom: 40px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-sevenunits);
              padding-bottom: var(--dl-space-space-sevenunits);
            }
            .home-message {
              width: 100%;
              max-width: 800px;
              font-style: normal;
              font-weight: 700;
            }
            .home-author {
              width: 100%;
              max-width: 800px;
            }
            .home-text05 {
              width: 100%;
              max-width: 600px;
            }
            .home-card {
              width: 100%;
              align-items: flex-start;
            }
            .home-text10 {
              align-self: center;
            }
            .home-text11 {
              align-self: center;
            }
            .home-get-started1 {
              align-self: center;
            }
            .home-footer {
              padding: var(--dl-space-space-sixunits);
            }
            .home-top {
              flex-direction: column;
            }
            .home-right1 {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-links2 {
              gap: var(--dl-space-space-unit);
            }
            .home-text16 {
              color: rgb(196, 196, 196);
              font-size: 14px;
              text-decoration: none;
            }
            .home-text17 {
              color: rgb(196, 196, 196);
              font-size: 14px;
              text-decoration: none;
            }
            .home-text18 {
              color: rgb(196, 196, 196);
            }
            .home-links3 {
              gap: var(--dl-space-space-unit);
            }
            .home-text21 {
              margin-top: 12px;
              margin-bottom: 12px;
            }
            .home-image1 {
              width: 34px;
              height: 32px;
              margin-top: 2px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 2px;
            }
            .home-branding {
              width: var(--dl-size-size-medium);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text22 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .home-text23 {
              font-size: 12px;
              line-height: 25px;
              margin-bottom: 0px;
            }
            .home-image2 {
              width: 100%;
              height: auto;
              margin-left: 20px;
              margin-right: 20px;
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              height: 639px;
              position: relative;
              margin-top: 3px;
              margin-bottom: var(--dl-space-space-threeunits);
              padding-bottom: 180px;
              background-color: #0095f6;
            }
            .home-desktop-navigation {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-centered {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-left {
              margin-left: var(--dl-space-space-unit);
            }
            .home-logo1 {
              width: 53px;
              height: 55px;
            }
            .home-right {
              margin-right: var(--dl-space-space-unit);
            }
            .home-get-started {
              display: none;
            }
            .home-video {
              margin-top: 106px;
            }
            .home-quote-container {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-message {
              font-size: 24px;
              line-height: 31px;
            }
            .home-author {
              width: 100%;
            }
            .home-avatar {
              width: 40px;
              height: 40px;
            }
            .home-quote1 {
              font-size: 14px;
              max-width: 800px;
            }
            .home-pricing {
              width: 100%;
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
            .home-card {
              align-self: center;
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              font-size: 28px;
              align-self: center;
            }
            .home-text11 {
              align-self: center;
            }
            .home-get-started1 {
              align-self: center;
            }
            .home-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-category {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category1 {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text21 {
              color: rgb(196, 196, 196);
              font-size: 14px;
              margin-top: 12px;
              text-decoration: none;
            }
            .home-image1 {
              width: 27px;
              height: 27px;
              margin-top: 5px;
              margin-left: 5px;
              margin-right: 5px;
              margin-bottom: 5px;
            }
            .home-image2 {
              width: 100%;
              height: auto;
              margin-left: 30px;
              margin-right: 30px;
            }
            .home-image3 {
              width: 426px;
              height: 139px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              height: 373px;
              padding-bottom: 0px;
              background-color: #0095f6;
            }
            .home-mobile-navigation {
              width: 456px;
              margin-right: 4px;
              padding-left: 0px;
              padding-right: 84px;
            }
            .home-logo {
              margin-top: var(--dl-space-space-halfunit);
              margin-left: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-links {
              align-self: center;
              align-items: center;
              justify-content: center;
            }
            .home-link {
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link01 {
              display: none;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              text-align: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-link02 {
              color: var(--dl-color-gray-white);
              width: 162px;
              height: 54px;
              font-size: 22px;
              align-self: center;
              text-align: center;
              padding-top: 12px;
              border-radius: var(--dl-radius-radius-radius8);
              padding-bottom: 12px;
              text-decoration: none;
              background-color: transparent;
              background-image: linear-gradient(
                90deg,
                rgb(0, 149, 246) 0%,
                rgb(119, 92, 252) 100%
              );
            }
            .home-close-mobile-menu {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-icon {
              align-items: center;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .home-centered {
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-logo1 {
              width: 52px;
              height: 50px;
            }
            .home-video {
              width: 388px;
              height: 212px;
              margin-top: 7px;
              margin-left: 15px;
              margin-right: 15px;
              margin-bottom: 21px;
            }
            .home-div {
              margin-top: 2px;
              margin-left: 2px;
              margin-right: 2px;
              margin-bottom: 30px;
            }
            .home-quote-container {
              margin-top: var(--dl-space-space-halfunit);
            }
            .home-message {
              color: #1a1b29;
            }
            .home-pricing {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-text04 {
              color: var(--dl-color-gray-white);
            }
            .home-text05 {
              color: rgb(238, 233, 254);
              font-size: 19px;
            }
            .home-text09 {
              text-decoration: underline;
            }
            .home-card {
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-text10 {
              font-size: 28px;
              font-style: normal;
              font-weight: 700;
            }
            .home-text11 {
              color: rgb(0, 0, 0);
              font-size: 18px;
              text-align: center;
              line-height: 24px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-top {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-category {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text17 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-text18 {
              color: rgb(196, 196, 196);
              font-size: 14px;
            }
            .home-category1 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text20 {
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .home-link08 {
              margin-bottom: 4px;
            }
            .home-text21 {
              margin-bottom: 4px;
            }
            .home-text22 {
              color: var(--dl-color-gray-white);
            }
            .home-text23 {
              color: var(--dl-color-gray-700);
              font-size: 12px;
              line-height: 25px;
            }
            .home-image2 {
              width: 100%;
              height: auto;
              padding-top: 2px;
              padding-left: 20px;
              padding-right: 20px;
            }
            .home-image3 {
              width: 219px;
              height: 68px;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
