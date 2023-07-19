import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`
export const Left_section = styled.div`
  width: 50%;

  & > img {
    width: 240px;
    height: auto;
  }

  & > div {
    color: #1C274C;
    width: 50%;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  text-align: center;
  @media (max-width: 430px) {
    display: none;
  }
`

export const Right_section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  background-color: rgba(124, 124, 124, 0.25);
  border-top-left-radius: 90px;
  border-bottom-left-radius: 90px;
  box-shadow: -10px 0 12px 0 rgba(0, 0, 0, 0.25);
  padding: 4rem 7rem 6rem;
  min-height: 850px;
  margin-top: 4rem;

  & > p {
    color: #1C274C;
    margin-top: 1.2rem;
    font-size: .9rem;

    & >a>span {
      font-weight: 800;
      font-size: .9rem;
      display: inline-block;
      margin-left: .8rem;
      text-decoration: none;
      color: #1C274C;
    }
  }
  &>p{
    color: #1C274C;
    font-weight: 600;
    font-size: 1.05rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 430px) {
    margin-top: 4.5rem;
    width: 100%;
    border-radius: unset;
    padding: 2rem;
    min-height: unset;
    background-color: unset;
    box-shadow: none;
  }
`

export const Switch_Box = styled.div`
  width: fit-content;
  padding: .8rem 1rem;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background-color: rgba(28, 39, 76, 0.50);
  color: white;
  border: 1px solid #1C274C;
  border-radius: 10px;
  margin-bottom: 5rem;

  & > div {
    cursor: pointer;
  }

  & > div:first-child {
    margin-right: 2.5rem;
  }

  & > div.chosen {
    text-decoration: underline;
    font-size: 1.2rem;
    color: #1C274C;
    font-weight: 600;
  }
  &>div.center{
    margin: 0 auto;
    padding: 0 .5rem;
  }

  @media (max-width: 430px) {
    padding: .6rem .8rem;
    margin-bottom: 2rem;
    font-size: .9rem;
    & > div {
      cursor: pointer;
    }

    & > div:first-child {
      margin-right: 2rem;
    }

    & > div.chosen {
      text-decoration: underline;
      font-size: 1rem;
    }
  }
`
export const Input_box = styled.div`
  width: 100%;
  border: 1px solid #1C274C;
  border-radius: 8px;
  padding: .6rem 1rem .6rem .7rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  position: relative;
&>a{
  position: absolute;
  bottom: -1.8rem;
  font-size: .9rem;
  color: #1C274C;
  text-decoration: none;
}
  & > span {
    position: absolute;
    bottom: -1.8rem;
    font-size: .9rem;
    color: #1C274C;
    

    & > input {
      width: 18px;
      height: 18px;
      margin-right: .5rem;
      position: relative;
      top: .3rem;

    }
  }

  & > input {
    font-size: 1rem;
    color: rgba(28, 39, 76);
    background-color: unset;
    border: none;
    outline: none;
    border-left: 1px solid rgba(28, 39, 76, 1);
    height: 31px;
    width: 100%;
    padding-left: 1rem;
    margin-left: .7rem;

  }

  & > img {

  }

  & > div > img {
    width: 23px;
  }

  & > span {
    color: #1C274C;
  }
  @media(max-width: 430px){
    padding: .6rem .7rem .6rem .7rem;
    margin-bottom: 1.8rem;
    & > span {
      font-size: .9rem;

      & > input {
        width: 18px;
        height: 18px;
        margin-right: .5rem;
        position: relative;
        top: .3rem;
      }
    }

    & > input {
      font-size: .9rem;
      padding-left: .9rem;
      margin-left: .6rem;

    }

    & > img {
      width: 23px;
    }
    
    & > span {
      color: #1C274C;
    }
  }
`
export const Sign_button = styled.div`
  background-color: #1C274C;
  color: white;
  padding: .7rem 3.3rem;
  margin-top: 2rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
`