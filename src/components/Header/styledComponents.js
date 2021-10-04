import styled from 'styled-components'

export const LogoTitle = styled.h1`
  font-family: 'DM Sans';
  font-size: 24px;
  font-style: italic;
  line-height: 32px;
  color: #f7931e;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const LogoImg = styled.img`
  width: 60px;
  @media (max-width: 768px) {
    width: 35px;
  }
`
export const LogOutBtn = styled.button`
  width: 73px;
  height: 32px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  background-color: #f7931e;
  color: white;
  border: none;
  cursor: pointer;
`

export const LinksCon = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`
export const HamburgerBtn = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    color: #231f20;
  }
`

export const LogCon = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 155px;
  }
`
export const HearCon = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`
export const HeaderMain = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8fafc;
  @media (max-width: 768px) {
    display: flex;
    height: auto;
    flex-direction: column;
  }
`
export const SmallMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
  }
`
export const SmallLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
`
export const HeaderItems = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  width: 165px;
`
