import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const Header_Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D9D9D9;
  padding: .6rem 2rem;
  z-index: 10;

  & > div.right_section {
    display: flex;
    align-items: center;
  }
  @media(max-width: 430px){
    padding: .6rem .8rem;

    & > div.right_section {
      display: flex;
      align-items: center;
    }
}
`
export const Icon = styled.div`
  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;

    & > img {
      width: 43px;
      height: 43px;
    }

    & > div {
      margin-left: .5rem;
      color: #1C274C;
      font-weight: 700;
    }
  }
  @media(max-width: 430px){
    & > a {
      & > img {
        width: 40px;
        height: 40px;
      }
    }
  }
`
export const Items_text = styled.div`
  font-weight: 600;
  color: #1C274C;
  font-size: 1rem;

  & > a {
    text-decoration: none;
    color: #1C274C;
  }
 
  @media(max-width: 430px){
    display: none;
  }
`
export const Sign_button = styled.div`
  background-color: #7C7C7C;
  border: 1px solid #1C274C;
  border-radius: 10px;
  padding: .4rem 1rem;
  margin-left: 1.2rem;
  &>a.mobile{
    display:none;
  }
  & > a {
    font-size: .9rem;
    font-weight: 500;
    text-decoration: none;
    color: #F0F0F0;
  }

  & > a > img {
    margin-right: .5rem;
    width: 15px;
  }
  @media(max-width: 430px){
    padding: .45rem .5rem;
    & > a {
      display: flex;
      align-items: center;
      font-size: .85rem;
    }

    & > a > img {
      margin-right: .5rem;
      width: 15px;
      
    }
    &>a.desc{
      display: none;
    }
    &>a.mobile{
      display: inline-block;
    }
  }
`