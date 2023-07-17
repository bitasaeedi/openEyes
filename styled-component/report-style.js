import styled from "styled-components";

export const Description = styled.div`
  margin: 7rem 6rem 2rem;

  & > h6 {
    color: #1C274C;
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  & > p {
    color: #3A3A3A;
  }

  @media (max-width: 430px) {
    margin: 6rem auto 0 ;
    width: 90%;

    & > h6 {
      font-size: 1rem;
      margin-bottom: 1.1rem;
    }
  }
`
export const Container = styled.div`
  margin: 2rem 6rem;
  padding: 2rem 4rem;
  background-color: rgba(124, 124, 124, 0.25);
  border: 1px solid #1C274C;
  border-radius: 30px;
  box-shadow: -10px 10px 12px 0 rgba(0, 0, 0, 0.25);

  & > img {
    margin: 2rem auto;
    display: block;
    width: 160px;
  }

  & > div.infos > div {
    & > h6 {
      color: #1C274C;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      display: inline-block;
      margin-left: 1rem;
    }

    & > img {
      width: 26px;
      position: relative;
      top: .5rem;
    }
  }

  & > h6 {
    color: #1C274C;
    font-size: 1.1rem;
    margin: 3.5rem 0 1rem;
  }

  @media (max-width: 430px) {
    margin: 2rem auto 0;
    width: 90%;
    padding: 1.5rem 0;
    border-radius: 25px;
    box-shadow:none;
    background-color: unset;
    border: none;
    & > img {
      margin: 1rem auto 0;
      width: 140px;
    }

    & > div.infos > div {
      display: flex;
      align-items: baseline;
      & > h6 {
        font-size: 1rem;
        margin-bottom: .8rem;
        margin-left: .8rem;
      }
      & > img {
        width: 26px;
      }
    }

    & > h6 {
      color: #1C274C;
      font-size: 1.1rem;
      margin: 3.5rem 0 1rem;
    }
  }

`
export const Slider = styled.div`
  display: flex;
  align-items: center;
  width: 61%;
  margin: 4rem auto;
  justify-content: space-between;

  & > div > img:last-of-type {
    display: block;
    margin: .5rem auto;
  }

  @media (max-width: 430px) {
    width: 95%;
    margin: 0rem auto 1rem;
&>img{
  width: 35px;
  height: 35px;
}
    & > div > img:last-of-type {
      display: block;
      margin: .5rem auto;
      width: 30px;
    }
    &>div>img:first-child{
      width: 230px;
      height: 180px;
    }

  }
`
export const Description_Box = styled.div`
  border: 1px solid #1C274C;
  border-radius: 8px;
  padding: 3rem 4rem 2rem;
  margin-top: 2rem;
  position: relative;

  & > p {
    color: #3A3A3A;
    font-size: 1.1rem;
    font-weight: 600;
    width: 98%;
    line-height: 1.7rem;
  }

  & > span {
    position: absolute;
    background-color: #D3D3D3;
    top: -.6rem;
    font-weight: 600;
    font-size: 1.1rem;
  }

  @media (max-width: 430px) {
    padding: 2rem 1.2rem 1.4rem;
    & > p {
      font-size: 1.05rem;
      line-height: 1.6rem;
    }
    &>span{
      background-color: #F0F0F0
    }
    
  }
`
export const Rating_box = styled.div`
  border: 1px solid #1C274C;
  border-radius: 8px;

  & > div.header {
    display: flex;
    padding: 1.5rem;
    border-bottom: 2px solid #1C274C;
    color: #1C274C;
    font-weight: 600;

    & > div > span {
      color: rgba(28, 39, 76, 0.86);
      font-weight: 400;
    }

    & > div:last-of-type {
      margin-left: auto;
    }

    & > div:first-of-type {
      margin-right: 1.5rem;
    }
  }

  & > div.main {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1rem;

    & > div.right_section > div {
      display: flex;
      align-items: center;
      margin: .3rem 0 1.4rem;

      & > div {
        background-color: #1C274C;
        width: 120px;
        color: white;
        text-align: center;
        padding: .8rem 0;
        margin-right: 1.5rem;
        border-radius: 9px;
        position: relative;

      }

      & > p {
        color: #3A3A3A;
      }
    }

    & > div.left_section {
      border-left: 1px solid #1C274C;
      padding-left: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      & > span {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (max-width: 430px) {
  margin-top: 2rem;
    & > div.header {  
      justify-content: space-between;
      padding: 1rem;
      text-align: center;
      & > div > span {
        display: block;
      }
     
    }

    & > div.main {
      padding: 1rem .5rem;

      & > div.right_section > div {
        margin: 0 0 1.4rem;

        & > div {
          width: 160px;
          padding: .7rem 0;
          margin-right: 1rem;
          border-radius: 7px;
          font-size: .9rem;
        }

        & > p {
        width: 95%;
        }
      }

      & > div.left_section {
        padding:0 .6rem;
      }
    }

  }
  @media (max-width: 376px) {
    & > div.header {
      font-size: .9rem;
    }
    & > div.main {
      padding: .5rem;
      & > div.right_section > div {
        & > div {
          width: 130px;
          padding: .7rem 0;
          margin-right: .7rem;
          border-radius: 7px;
          font-size: .8rem;
        }

        & > p {
          width: 98%;
        }
      }

      & > div.left_section {
        padding:0 .6rem;
      }
    }

  }
`
export const Color_span = styled.span`
  background-color: ${(props) => props.color};
  display: inline-block;
  padding: .3rem;
  border-radius: 50%;
  position: absolute;
  top: .2rem;
  right: .2rem;
  @media (max-width: 430px) {
    padding: .25rem;
  }
`
export const Vote_btn = styled.button`
  color: white;
  background-color: #1C274C;
  font-weight: 700;
  padding: .9rem 4.5rem;
  margin: 2rem auto;
  width: fit-content;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  display: block;
`