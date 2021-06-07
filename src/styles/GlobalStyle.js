import { createGlobalStyle } from "styled-components";
import { typesColors, dark } from "../UI/colors";

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.1;
    font-family: 'Lato', sans-serif;
    background-color: "#f6f8fc";
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

    color: ${dark};
  }

  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img{
    width: 100%;
  }

  .type__color-normal {
    background: ${typesColors.normal};
  }

  .type__color-fighting {
    background: ${typesColors.fighting};
  }

  .type__color-flying {
    background: ${typesColors.flying};
  }

  .type__color-poison {
    background: ${typesColors.poison};
  }

  .type__color-ground {
    background: ${typesColors.normal};
  }

  .type__color-rock {
    background: ${typesColors.rock};
  }

  .type__color-bug {
    background: ${typesColors.bug};
  }

  .type__color-ghost {
    background: ${typesColors.ghost};
  }

  .type__color-steel {
    background: ${typesColors.steel};
  }

  .type__color-fire {
    background: ${typesColors.fire};
  }

  .type__color-water {
    background: ${typesColors.water};
  }

  .type__color-grass {
    background: ${typesColors.grass};
  }
  .type__color-electric {
    background: ${typesColors.electric};
  }

  .type__color-psychic {
    background: ${typesColors.psychic};
  }

  .type__color-ice {
    background: ${typesColors.ice};
  }

  .type__color-dragon {
    background: ${typesColors.dragon};
  }

  .type__color-dark {
    background: ${typesColors.dark};
  }

  .type__color-fairy {
    background: ${typesColors.fairy};
  }

  .type__color-unknown {
    background: ${typesColors.unknown};
  }
`;
