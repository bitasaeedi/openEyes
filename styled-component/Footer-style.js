import styled from "styled-components";
export const Footer_container=styled.footer`
background-color: #D9D9D9;
  border-top: 1px solid #787878;
  padding: .8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &>div.left_section>div{
    color: #1C274C;
    padding-right: .95rem;
    display: inline-block;
    font-weight: 600;
  }
  &>div.right_section{
    height: 23px;
    &>img{
      height: 100%;
      width: 40px;
    }
  }
`