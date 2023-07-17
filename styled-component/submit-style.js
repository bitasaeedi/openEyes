import styled from "styled-components";

export const Description = styled.div`
  margin: 7rem 6rem 1rem;

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
    margin: 6rem auto 0rem;
    width: 90%;

    & > h6 {
      font-size: 1rem;
      margin-bottom: 1.1rem;
    }
  }
`

export const Container = styled.div`
  margin: 3rem 6rem;
  padding: 2rem 4rem;
  background-color: rgba(124, 124, 124, 0.25);
  border: 1px solid #1C274C;
  border-radius: 30px;
  box-shadow: -10px 10px 12px 0 rgba(0, 0, 0, 0.25);

  & > h6 {
    color: #1C274C;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  & > textarea {
    width: 100%;
    padding: 1rem;
    background-color: unset;
    border: 1px solid #1C274C;
    border-radius: 10px;
    min-height: 190px;
    margin-bottom: 3rem;
    color: rgba(28, 39, 76, 0.86);
    font-size: 1rem;
    outline: none;
  }

  & > p {
    font-weight: lighter;
    color: rgba(28, 39, 76, 0.86);
  }

  & > img {
    margin-bottom: 3rem;
    width: 100%;
  }

  & > div.terms {
    margin-top: 1rem;
    color: #1C274C;

    & > div > span {
      font-weight: 600;
    }

    & > input {
      float: left;
      margin-right: 1rem;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 430px) {
    margin: 1rem auto 2rem ;
    width: 90%;
    padding: 1.5rem 0;
    border-radius: 25px;
    box-shadow: none;
    background-color: unset;
    border: none;
    & > h6 {
      font-size: 1.05rem;
      margin-bottom: 1.3rem;
    }

    & > textarea {
      min-height: 180px;
      margin-bottom: 2.5rem;
      font-size: 1.02rem;
    }

    & > p {
      font-weight: lighter;
      color: rgba(28, 39, 76, 0.86);
    }

    & > img {
      margin-bottom: 3rem;
      width: 100%;
      height: 230px;
    }

    & > div.terms {
      margin-top: 1.5rem;
      font-size: .95rem;

      & > input {
        margin-bottom: 1rem;
      }
    }
  }
`
export const Location_Input = styled.div`
  width: 100%;
  margin: 0 0 3rem;
  border: 1px solid #1C274C;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    padding: .6rem;
    width: 100%;

    & > input {
      background-color: unset;
      border: none;
      width: 100%;
      outline: none;
      border-left: 1px solid #1C274C;
      padding-left: 1rem;
      font-size: 1rem;
    }

    & > img {
      width: 25px;
      margin-right: 1rem;
    }
  }

  & > span {
    background-color: #1C274C;
    padding: .5rem .7rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 430px) {
    margin: 0 0 2.5rem;
    & > div {
      padding: .5rem;

      & > input {
        font-size: .9rem;
      }

      & > img {
        margin-right: .4rem;
      }
    }

    & > span {
      background-color: #1C274C;
      padding: .5rem .7rem;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;

      & > img {
        width: 27px;
      }
    }
  }

`
export const Category_input = styled.div`
  width: 100%;
  margin: 0 0 3rem;
  border: 1px solid #1C274C;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    padding: .6rem;
    width: 100%;

    & > input {
      background-color: unset;
      border: none;
      width: 100%;
      outline: none;
      border-left: 1px solid #1C274C;
      padding-left: 1rem;
      font-size: 1rem;
    }

    & > img {
      width: 25px;
      margin-right: 1rem;
    }
  }

  @media (max-width: 430px) {
    margin: 0 0 2.5rem;
    & > div {
      padding: .5rem .6rem;

      & > input {
        padding-left: .8rem;
      }

      & > img {
        width: 23px;
        margin-right: .6rem;
      }
    }

    & > span > img {
      width: 50px;
    }
  }
`
export const Upload_box = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect 
  width='100%25' height='100%25' fill='none' stroke='black' stroke-width='1' stroke-dasharray='9' stroke-dashoffset='0'
   stroke-linecap='square'/%3e%3c/svg%3e");
  margin-top: 1rem;
  text-align: center;
  padding: 4rem;
  color: #1C274C;
  border-radius: 10px;
font-weight: 600;
  & > div > span {
    font-weight: 500;
  }

  @media (max-width: 430px) {
    & > div > span {
     display: none;
    }
  }
`
export const Voice_container = styled.div`
  display: flex;
  align-items: center;
margin-bottom: 2rem;
  & > div.audio {
    display: flex;
    align-items: center;
    border: 1px solid #1C274C;
    padding: 1rem .5rem;
    border-radius: 10px;
    margin-right: 1.5rem;
    &>img{
      margin: 0 .5rem;
    }
    &>div{
      width: 200px;
      height: 2px;
      background-color: #1C274C ;
      margin-left: 1rem;
    }
  }

  & > div.img {
    border: 1px solid #1C274C;
    border-radius: 50%;
    background-color: rgba(28, 39, 76, 0.50);
    padding: .6rem .7rem;
    margin-right: 1rem;
    & > img {
      width: 28px;
      height: 28px;
    }
  }
  @media(max-width: 430px){
    & > div.audio {
      
      padding: .7rem .2rem;
      border-radius: 10px;
      margin-right: 1rem;
      &>img{
        margin: 0 ;
        width: 25px;
        height: 25px;
      }
      &>div{
        width: 100px;
        height: 2px;
        background-color: #1C274C ;
        margin-left: .4rem;
      }
      &>span{
        font-size: .6rem;
      }
    }

    & > div.img {
      padding: .35rem .5rem;
      margin-right: .5rem;
      
      & > img {
        margin-top: .1rem;
        width: 18px;
        height: 18px;
      }
    }
    &>div>img:last-of-type{
      margin-right: 0;
    }
  }
`
export const Submit_btn = styled.button`
  color: white;
  background-color: #1C274C;
  font-weight: 700;
  padding: .9rem 4rem;
  margin: 2rem auto;
  width: fit-content;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  display: block;
  @media (max-width: 430px) {

  }
`