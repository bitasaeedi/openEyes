import styled from "styled-components";

export const Footer_container = styled.footer`
  margin-top: auto;
  width: 100%;
  background-color: #D9D9D9;
  border-top: 1px solid #787878;
  padding: .8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
&>div.left_section{
  &>hr{
    display: none;
  }
}
  & > div.left_section > div {
    display: inline-block;
  }

  & > div.left_section > div > a {
    color: #1C274C;
    padding-right: 1.5rem;
    display: inline-block;
    font-weight: 600;
    text-decoration: none;
  }

  & > div.right_section {
    height: 23px;

    & > img {
      height: 100%;
      width: 40px;
    }
  }

  @media (max-width: 430px) {
    padding: 1rem 1rem 0;
    display: flex;
    justify-content: unset;
    flex-direction: column-reverse;
    & > div.left_section {
      text-align: center;

      & > hr {
        display: block;
        border-color: rgba(28, 39, 76, 0.78);
        width: 80%;
        margin: 0 auto .3rem;
      }

      & > hr:last-of-type {
        width: 60%;
        margin-bottom: .4rem;
      }
    }

    & > div.left_section > div {
      margin-bottom: .5rem;
      font-size: .85rem;
    }

    & > div.left_section > div > a {
      color: #1C274C;
      padding-right: 1.5rem;
      display: inline-block;
      font-weight: 600;
      text-decoration: none;
    }

    & > div.right_section {
      height: 20px;
      margin-left: unset;
      bottom: 0rem;
      margin-bottom: .5rem;

      & > img {
        height: 100%;
        width: 25px;
        margin: 0 .5rem;
      }
    }
  }
`