import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #0033cc;
    display: flex;
    align-items: center;
    height: 60px;
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        a {
          font-family: Comic Sans MS, Comic Sans, cursive;
          color: #ffffff;
          text-decoration: none;
          padding: 1em;
          &:hover {
            color: #b3c6ff;
          }
        }
      }
    }
  `
};

//@MauliN