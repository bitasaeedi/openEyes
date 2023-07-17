import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem 7rem 6rem;
  &>img{
    width: 90%;
    margin: 6rem auto;
    display: block;
    height: 400px;
  }
  @media (max-width: 430px) {
    margin: 6rem auto 3rem;
    width: 90%;
    &>img{
      margin: 2rem auto;
      height: 280px;
    }
  }

`
export const Item = styled.div`
  display: flex;
  width: 75%;

  & > img {
    background-color: #D9D9D9;
    border: 1px solid #1C274C;
    width: 45px;
    height: 45px;
    padding: .6rem;
    border-radius: 50%;
  }

  & > div {
    margin-left: 2.7rem;

    & > h4 {
      color: #1C274C;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
      
    }

    & > div {
      color: #3A3A3A;
      font-size: 1.1rem;
      font-weight: 600;

      & > span {
        font-weight: 500;
      }
    }

    & > a {
      color: #2D527C;
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
    }

    & > ul {
      margin: .3rem 0 1.5rem 2rem;
      color: rgba(58, 58, 58, 0.78);

      & > li {
        font-weight: 500;
        font-size: 1.05rem;
        line-height: 1.3rem;
      }

      & > li.bold {
        font-weight: 600;
      }
    }

    & > h6 {
      font-size: 1.1rem;
    }
  }
  @media(max-width: 430px){
    width: 100%;
    & > img {
      width: 45px;
      height: 45px;
      padding: .5rem;
    }

    & > div {
      margin-left: 1.3rem;

      & > h4 {
        font-size: 1.1rem;
        margin-bottom: 1.3rem;
      }

      & > div {
        color: #3A3A3A;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.4rem;
        & > span {
          font-weight: 500;
        }
      }
      &>ul{
        margin: .3rem 0 1.4rem 1.6rem;
        & > li {
          line-height: 1.45rem;
          font-size: 1rem;
        }
      }

      & > a {
        color: #2D527C;
        display: block;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }
  }
`