import styled from 'styled-components'

export const NotFoundMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
export const NotFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
export const NotHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: #1e293b;
  @media (max-width: 768px) {
    font-family: 'DM Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
  }
`
export const NotCon = styled.div`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #475569;
  @media (max-width: 768px) {
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }
`
export const NotImg = styled.img`
  width: 15%;
  @media (max-width: 768px) {
    width: 30%;
  }
`

export const NotFoundBtn = styled.div`
  height: 48px;
  width: 123px;
  left: 0px;
  top: 0px;
  padding-top: 13px;
  border-radius: 12px;
  background-color: #f7931e;
  color: #ffffff;
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0em;
  cursor: pointer;
`
