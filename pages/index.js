import Head from "next/head";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import { useAppContext } from "../context";
import { useLocalStorageValue } from "@mantine/hooks";

const Index = () => {
  const [themeLocal, setThemeLocal] = useLocalStorageValue({
    key: "theme",
  });
  const { globalState, setGlobalState } = useAppContext();

  useEffect(() => {
    setGlobalState((themeLocal && themeLocal.theme) ?? "dark-theme");
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    setThemeLocal({ theme: theme });
  }, [globalState]);

  const switchTheme = () => {
    setGlobalState((oldTheme) =>
      oldTheme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };
  let theme = globalState;
  const titleTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
  return (
    <>
      <Head>
        <title>React Portfolio Sample</title>
        <meta name="description" content="Quiz app by next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav id="navbar" className="horiz-nav">
        <a href="#welcome-section">About</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="welcome-section">
        <header>
          <h1 id="name">
            Adelinked{" "}
            <span
              id="theme-switch"
              title={`Switch to ${titleTheme}`}
              onClick={switchTheme}
            >
              {theme === "light-theme" ? (
                <i className="fa fa-moon-o"></i>
              ) : (
                <i className="fa fa-sun-o"></i>
              )}
            </span>
          </h1>

          <p> a web developer </p>
        </header>

        <div id="about" className="welcome-divs">
          <h2>About me</h2>
          <p>
            Some textSome textSome textSome textSome textSome textSome textSome
            text Some textSome textSome textSome textSome textSome textSome
            textSome text Some textSome textSome textSome textSome textSome
            textSome textSome text Some textSome textSome textSome textSome
            textSome textSome textSome text Some textSome textSome textSome
            textSome textSome textSome textSome text Some textSome textSome
            textSome textSome textSome textSome textSome text Some textSome
            textSome textSome textSome textSome textSome textSome text Some
            textSome textSome textSome textSome textSome textSome textSome text.
          </p>
        </div>
        <div id="Skills" className="welcome-divs">
          <h2>Skills</h2>
          <p>
            Some textSome textSome textSome textSome textSome textSome textSome
            text Some textSome textSome textSome textSome textSome textSome
            textSome text Some textSome textSome textSome textSome textSome
            textSome textSome text.
          </p>
        </div>
      </section>
      <section id="projects">
        <h2>These are some of my projects</h2>
        <div id="projects-div">
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/NWaOQMB" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/NWaOQMB/image/large.png"
                alt="Screenshot image of Tribute page project"
                loading="lazy"
              />
              <h2>Tribute page</h2>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/BamWbPy" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/BamWbPy/image/large"
                alt="Screenshot image of 25+5 Clock project"
                loading="lazy"
              />

              <h2>25+5 Clock</h2>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/JjrwrOb" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/JjrwrOb/image/large.png"
                alt="Screenshot image Technical documentation project"
                loading="lazy"
              />

              <h2>Technical Documentation</h2>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/podRerx" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/podRerx/image/large.png"
                alt="Screenshot image of JavaScript Calculator project"
                loading="lazy"
              />

              <div className="project-title">
                <h2>JavaScript Calculator</h2>
              </div>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/zYEMdQx" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/zYEMdQx/image/large.png"
                alt="Screenshot image of Survey Form project"
                loading="lazy"
              />

              <div className="project-title">
                <h2>Survey Form</h2>
              </div>
            </a>
          </div>
          <div className="project-tile">
            <a href="https://codepen.io/adelinked/pen/PoOzmzY" target="_blank">
              <img
                src="https://codepen.io/adelinked/pen/PoOzmzY/image/large.png"
                alt="Screenshot image of Markdown Previewer project"
                loading="lazy"
              />

              <div className="project-title">
                <h2>Markdown Previewer</h2>
              </div>
            </a>
          </div>
        </div>
        <a
          id="profile-link"
          href="https://www.freecodecamp.org/fccf13b2fc8-7cde-4bf2-a0be-72e94aca204e"
          target="_blank"
        >
          Show all
        </a>
      </section>
      <section id="contact">
        <h3> Let's work together ... </h3>
        <p> How do you take your coffee? </p>
        <div id="contacts-div">
          <a className="contact-link" href="#" title="Facebook" target="_blank">
            <i className="fa fa-facebook-official"></i>
          </a>
          <a
            className="contact-link"
            href="https://github.com/Adelinked"
            title="Git hub"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
          <a className="contact-link" href="#" title="Twitter" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="contact-link"
            href="#"
            title="Send an email"
            target="_blank"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <a className="contact-link" href="#" title="Call me" target="_blank">
            <i className="fa fa-phone"></i>
          </a>
        </div>
      </section>
      <footer id="footer">
        <p> **This portfolio page is under construction. </p>
        <p id="copyright">
          {" "}
          <sup>©</sup> Created as part of a{" "}
          <a href="https://www.freecodecamp.org/learn" target="_blank">
            freeCodeCamp
          </a>{" "}
          project.{" "}
        </p>
      </footer>
    </>
  );
};

export default Index;
