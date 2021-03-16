import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
// import { FaSun, FaMoon } from 'react-icons/fa';
import SearchContainer from './SearchContainer';

const NavStyles = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg};

  nav {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    margin: 0 auto;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 2rem 2rem 0 2rem;
    text-transform: uppercase;
    border-bottom: 3rem solid ${({ theme }) => theme.text};
  }
  .logo-container {
    grid-row: 1/3;
  }
  h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 15rem;
    font-weight: 700;
    letter-spacing: -0.5rem;
    margin: 0 0 0.5rem 0;
    color: ${({ theme }) => theme.text};
    span {
      margin: 0;
      line-height: 12rem;
      padding: 0;
    }
  }

  ul {
    align-self: start;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-end;
    margin: 0;
    padding: 0 0 0 15rem;
    list-style: none;

    li {
      margin: 0.75rem 2rem;
      padding: 0;
      font-size: 3rem;
      font-weight: 600;
      line-height: 3rem;

      a {
        position: relative;
        overflow: hidden;
        z-index: 10;
        &::after {
          width: 0;
          content: '';
          position: absolute;
          right: -5px;
          bottom: -8px;
          transition: 0.35s cubic-bezier(0.2, 0.1, 0, 1.8);
          height: calc(100% - 15px);
          background: #70ae6e;
          z-index: -1;
        }
        &:hover {
          &::after {
            width: 90%;
          }
        }
      }
    }
  }
  .search-container {
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    justify-self: end;
    form {
      width: 80%;
    }
    input {
      padding: 1rem;
      border: 5px solid ${({ theme }) => theme.text};
      font-size: 3rem;
      width: 100%;
    }
  }
`;

// const Button = styled.button`
//   background: ${({ theme }) => theme.toggleBg};
//   border: 2px solid ${({ theme }) => theme.toggleBorder};
//   color: ${({ theme }) => theme.toggleIcon};
//   border-radius: 40px;
//   cursor: pointer;
//   font-size: 0.8rem;
//   padding: 0.6rem;
//   height: 40px;
//   width: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 1rem;
// `;

const Nav = ({ isDark, setIsDark }) => {
  // const darkModeHandler = () => {
  //   setIsDark(isDark === 'light' ? 'dark' : 'light');
  // };
  return (
    <NavStyles>
      <nav>
        <div className="logo-container">
          <Link to="/">
            <h1>
              <span>Trident</span>
              <span>Digest</span>
            </h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">We Made This</Link>
          </li>
          <li>
            <Link to="/">Things To Watch</Link>
          </li>
          {/* <li>
              <Button onClick={darkModeHandler}>
                {isDark === 'light' ? (
                  <FaSun size={20} />
                ) : (
                  <FaMoon size={20} />
                )}
              </Button>
            </li> */}

          <li>
            <Link to="/">Advice</Link>
          </li>
          <li>
            <Link to="/">Things to hear</Link>
          </li>
          <li>
            <Link to="/">Filmmaking</Link>
          </li>
          <li>
            <Link to="/">Business</Link>
          </li>
          <li>
            <Link to="/">...</Link>
          </li>
        </ul>
        <SearchContainer />
      </nav>
    </NavStyles>
  );
};

export default Nav;