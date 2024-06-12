import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fbfbfb;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}

.main-nav__mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  padding: 48px 40px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: var(--body-background-color);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 250ms var(--timing-functione),
  visibility 250ms var(--timing-functione);
}

.main-nav__mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}





/* ======================== BOTTONt ==============================================++++++++++++++++++++++++++++++++++++++++++++===============*/

.main-nav__button {
  display: inline-flex;
  margin: 0;
  padding: 0 10px;
  border: none;
  background-color: transparent;
  line-height: 0;

  @media screen and (min-width:768px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 796px;

    &.is-open {
      display: block;
    }
  }
}
.menu-nav {
  list-style: none;
  position: fixed;
  background: grey;
  left: 0;
  width: 0;
  // padding-left: 10px;
  margin-top: -60px;
  overflow: hidden;
  height: 50px; 
  max-width: 310px;
  z-index: 9;

  box-shadow: 0 10px 15px -3px rgb(46 41 51 / 8%), 0 4px 6px -2px rgb(71 63 79 / 16%);
  /* transform: translateX(-100px); */
  transition: transform ease-in-out 0.2s;

}
.menu-nav.show-menu {
  width: 100%;
  height: 150px;
  transform: translateX(0px);

}

.mobile-menu__conteiner {
  // position: relative;
  display: flex;
  justify-content: center;

  gap: 20px;
  flex-direction: column;
  // justify-content: space-between;
  height: 100%;
}

.navbar {
  position: relative;
}
:root {
  --text-color: #212121;
  --beckground-color: #80da7c;
  --text-color-p: #757575;
  --body-background-color: #ffffff;
  --button-hover-focus: #80da7c;
  --footer-bacground-color: #2f303a;
  --teams-bacground-color: #f5f4fa;
  --border-color: #eeeeee;
  --icone-color: #afb1b8;
  --icone-bg-color: #f5f4fa;
  --timing-functione: cubic-bezier(0.4, 0, 0.2, 1);
  --animate-duration: 800ms;
  --animate-delay: 0.9s;
  /* --technical-color: #ed0c0c; */
}
`;