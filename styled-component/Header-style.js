import styled from "styled-components";

export const Header_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #D9D9D9;
  padding: .6rem 1.5rem;

  & > div.right_section {
    display: flex;
    align-items: center;
  }
`
export const  Toggle=styled.div`
    &>img{
      width: 52px;
      height: 24px;
    }
  margin-right: 1.1rem;
`
export const Items_text = styled.div`
  font-weight: 600;
  color: #1C274C;
  font-size: 1rem;

  & > a {
    text-decoration: none;
    color: #1C274C;
  }
`
export const Sign_button = styled.div`
  background-color: #7C7C7C;
  border: 1px solid #1C274C;
  border-radius: 10px;
  padding: .4rem 1rem;
  margin-left: 1.2rem;
  & > a {
    font-size: .9rem;
    font-weight: 500;
    text-decoration: none;
    color:  #F0F0F0;
  }
  &>a>img{
    margin-right: .5rem;
    width: 15px;
  }
`