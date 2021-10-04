import styled from 'styled-components'

export const CartItemMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
`

export const CartItemImg = styled.img`
  min-width: 150px;
  max-width: 150px;
  height: 100px;
  border-radius: 5px;
`
export const CartItemName = styled.h1`
  font-family: 'DM Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  margin-left: 10px;
  min-width: 24%;
  max-width: 24%;
  @media (max-width: 768px) {
    margin-bottom: 5px;
    margin-left: 0;
    font-family: 'DM Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.20000000298023224px;
    max-width: 100%;
  }
`
export const CartItemCost = styled.h1`
  font-family: 'DM Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  color: #ffa412;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: -3%;
  width: 10%;
  @media (max-width: 768px) {
    left: 0;
  }
`
export const QAndP = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px;
    margin-left: 5px;
  }
`
export const CounterComp = styled.div`
  position: relative;
  left: -11%;
  @media (max-width: 768px) {
    left: 0;
  }
`
