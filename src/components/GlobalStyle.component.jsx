import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --464646: #464646;
    --ffc50a: #ffc50a;
    --245daa: #245daa;
    --1c1f1c: #1c1f1c;
    --font-family: "Play", sans-serif;
    --second-family: "Play", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 60px 0 60px;
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 0 12px;
    }
  }

  .d-flex {
    display: flex;
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 16px;
    outline: none;
    border: none;
    img {
      margin-left: 4px;
    }
  }

  .btn-primary {
    padding: 16px;
    background-color: var(--ffc50a);
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: var(--1c1f1c);
  }
  
  .btn-secondary {
    padding: 16px 24px;
    background: var(--245daa);
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 171%;
    color: #fff;
  }

  h1 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 64px;
    line-height: 112%;
    background: linear-gradient(180deg, #245daa 0%, #e0d29d 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 56px;
    line-height: 114%;
    background: linear-gradient(180deg, #245daa 0%, #e0d29d 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: var(--1c1f1c);
  }

  ul {
    list-style-type: none;
    display: flex;
  }
  
  a {
    cursor: pointer;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #232824;
    text-decoration: none;
  }

  span {
    font-family: var(--font-family);
    font-weight: 300;
    font-size: 14px;
    line-height: 229%;
    color: var(--464646);
  }

  .no-scroll {
    overflow: hidden;
  }
`;

export default GlobalStyle;
