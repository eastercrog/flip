import styled from "styled-components";

export const FlipContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const BetButton = styled.button `
  color: white;
  // width: 200px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
`;
export const Green = styled.text `
  color: green;
  font-weight: bold;
`;

export const CoinFlip = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const SelectBet = styled.select `
  cursor: pointer;
  color: white;
  background: black;
  border: none;
  padding: 10px;
`;

export const BetOption = styled.option `
  margin: 10px;
  background: none;
`;

export const GameButton = styled.button `
  height: 50px;
  width: 200px;
  background-color: #16171a;
  border: 0.5px solid #545659;
  border-radius: 11% / 50%;
  color: ${(props) => (props.isActive ? "black" : "white")};
  cursor: ${(props) => (!props.isDisabled ? "pointer" : "not-allowed")};
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  margin: ${(props) => (!props.spaced ? "5px 5px" : "5px 20px")};
  padding: 12px 24px;
  opacity: ${(props) => (!props.isDisabled ? 1 : 0.5)};
  font-weight: 200;
  font-family: "Helvetica";
  ${(props) => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }

  ${(props) => !props.isDisabled && ":hover"} {
    background-color: ${(props) => (props.isActive ? "#F1B213" : "#2F3236")};
    box-shadow: 0px 0px 5px 1px rgba(240, 185, 18, 0.5);
    opacity: 0.8;
  }
`;

export const DoubleOrNothingBtn = styled.button `
background: #876d1e;
border: none;
padding: 0;
cursor: ${(props) => (!props.isDisabled ? "pointer" : "not-allowed")};
opacity: ${(props) => (!props.isDisabled ? 1 : 0.8)};
outline-offset: 4px;
border-radius: 24px;

    span{
      min-width: 260px;
      display: block;
  padding: 12px 42px;
  transform: translateY(-6px);
  background: #f1b913;
  border: 1px solid #3a3a3a;
  border-radius: 24px;
  color:black;
    }

  &:active span{
    transform: ${(props) => (!props.isDisabled ? "translateY(0px)" : "")};
  }  
  // height: 50px;
  // width: 250px;
  // color: white;
  // background-color: #16171a;
  // border-radius: 11% / 50%;
  // border: .5px solid #545659;
  // cursor: ${(props) => (!props.isDisabled ? "pointer" : "not-allowed")};
  // opacity: ${(props) => (!props.isDisabled ? 1 : 0.5)};
  // font-weight: 200;
  // font-family: "Helvetica";
  // font-size: 16px;
  // ${(props) => !props.isDisabled && ":hover"} {
  //   background-color: #F0B912;
  //   color: black;
  //   box-shadow: 0 5px 30px rgba(240, 185, 18, .8);
  // }
`;