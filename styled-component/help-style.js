import styled from "styled-components";

export const Help_Container=styled.div`
  margin: 6rem 7rem 4rem;
  width: 70%;
  @media(max-width: 430px){
    margin: 6rem auto;
   width: 88%;
  }
`
export const Help_Items=styled.div`
    display: flex;
  margin-bottom: 4rem;
  &>img{
    background-color:#D9D9D9;
    border: 1px solid #1C274C;
    width: 40px;
    height: 40px;
    padding: .6rem;
    border-radius: 50%;
  }
  &>div{
    margin-left: 1.5rem;
  }
  &>div>h4{
    color: #1C274C;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: .9rem;
    
  }
  &>div>h6{
    color: #1C274C;
    font-size: .95rem;
    font-weight: 600;
    margin-bottom: .6rem;
  }
  &>div>p{
    color: #3A3A3A;
    font-weight: 600;
    font-size: .9rem;
    line-height: 1.5rem;
    }
  &>div>p.margin{
    margin-bottom: 2rem;
  }
  
  @media(max-width: 430px){
    margin-bottom: 2.5rem;
    &>img{
      width: 37px;
      height: 37px;
      padding: .5rem;
    }
    &>div{
      margin-left: 1.4rem;
    }
    &>div>h4{
      font-size: 1.1rem;
      margin-bottom: .8rem;
      line-height: 1.5rem;
    }
    &>div>h6{
      color: #1C274C;
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: .6rem;
    }
    &>div>p{
      color: #3A3A3A;
      font-weight: 600;
      line-height: 1.5rem;
    }
    &>div>p.margin{
      margin-bottom: 1.6rem;
    }
  }
`