import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`
export const Background_Image = styled.div`
  width: 100%;
  height: 370px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    filter: blur(2px);
  }

  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
  }

  & > div > h4 {
    color: white;
    -webkit-text-stroke: 1px #1C274C;
    font-weight: 800;
    font-size: 1.5rem;
    margin-left: 2rem;
  }

`
export const Icon = styled.div`
  margin-left: 10rem;
  background-color: #D9D9D9;
  border-radius: 34px;
  padding: 1rem;
  border: 1px solid #1C274C;

  & > a {
    text-decoration: none;

    & > div {
      color: #1C274C;
      text-align: center;
      font-weight: 700;
      font-size: 1.25rem;
      margin-top: .3rem;
    }

    & > img {
      width: 105px;

    }

  }

  @media (max-width: 430px) {
    margin-left: 3rem;
  }
`

export const Welcome_section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 3rem;

  & > div {
    width: 60%;
    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div.text {
    width: 40%;
    margin: 12rem 0 5rem 5rem;
    & > h4 {
      color: #1C274C;
      font-size: 2.4rem;
      font-weight: 800;
    }

    & > div {
      color: #3A3A3A;
      margin:2.5rem 0;
      font-size: 1.6rem;
      line-height: 2rem;
    }

    & > a.link {
      color: #2D527C;
      font-size: 1.5rem;
    }

    & > a.btn {
      background-color: #7C7C7C;
      border: 1px solid #1C274C;
      margin-top: 1rem;
      display: inline-block;
      color: white;
      padding: .9rem 1.25rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      text-align: center;
    }
  }

  @media (max-width: 430px) {
    display: none;
  }

`
export const Welcome_section_mobile = styled.div`
  display: none;
margin-top: 2rem;
  & > div {
    height: 250px;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > div.text {
    margin: 1.5rem 0;
    text-align: center;

    & > h4 {
      color: #1C274C;
      font-size: 1.2rem;
    }

    & > div {
      color: #3A3A3A;
      margin: .7rem;
      font-size: 1.1rem;
    }

    & > a.link {
      color: #2D527C;
      font-size: 1.1rem;
    }

    & > a.btn {
      background-color: #7C7C7C;
      border: 1px solid #1C274C;
      margin-top: .5rem;
      display: inline-block;
      color: white;
      padding: .7rem 1.25rem;
      border-radius: 10px;
      font-weight: 600;
      font-size: .9rem;
      text-decoration: none;
      text-align: center;
    }
  }

  @media (max-width: 430px) {
    display: block;
  }
`
export const Left_section = styled.div`
  width: 40%;

  & > h6 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1C274C;
  }

  & > p {
    line-height: 1.8rem;
    font-size: 1rem;
    color: #3A3A3A;
    font-weight: 600;
  }

  & > a {
    background-color: #7C7C7C;
    border: 1px solid #1C274C;
    margin-top: 4rem;
    display: inline-block;
    color: white;
    padding: .75rem 1.25rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: .85rem;
    text-decoration: none;
    text-align: center;
  }
`
export const Map = styled.div`
  width: 100%;
  padding: 0 2.5rem;
  margin: 1rem 0 3rem;
  &>h4{
    color: #1c274c;
  }
&>p{
  color: #3A3A3A;
  font-size: 1.1rem;
  margin: 1rem 0 2.5rem;
}
  & > img {
    width: 100%;
    height: 450px;
  }

  @media (max-width: 430px) {
    width: 95%;
    margin: 2rem auto 1rem;
    padding: 0;
    &>img{
      height: 300px;
    }
    &>h4{
      font-size: .95rem;
    }
    &>p{
      color: #3A3A3A;
      font-size: .95rem;
      margin: 1rem 0 2rem;
    }
  }
`
export const Posts_Container = styled.div`
  padding: 0 2rem;
  margin: 4rem 0;
  @media (max-width: 430px) {
    padding: 0;
  }
`
export const Post_container = styled.div`
  width: 100%;
  background-color: #D9D9D9;
  border: 1px solid #1C274C;
  border-radius: 15px;
  padding: 1rem 1rem 2.5rem;

  & > a {
    text-decoration: none;

    & > div.top {
      display: flex;
      color: #1c274c;
      & > img {
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        margin: 0 1rem 1.5rem 0;
      }

      & > div {
        margin-top: 1rem;

        & > div {
          margin-top: 1rem;

          & > img {
            margin-right: .5rem;
            position: relative;
            top: .4rem;
            width: 20px;
          }
        }
      }
    }

    & > div.bottom {
      color: #1C274C;

      & > div:last-of-type {
        margin: .5rem 0 1.5rem;

        & > img {
          position: relative;
          top: .2rem
        }
      }

      & > div > img {
        margin-right: .8rem;
      }

      & > p {
        width: 95%;
        color: #3A3A3A;
      }
    }
  }

  @media (max-width: 430px) {
    width: auto;
    margin-left: 0;
    & > a > div.top > img {
      width: 160px;
    }

    & > a > div.top > div > img :last-of-type {
      width: 20px;
    }
  }
`
