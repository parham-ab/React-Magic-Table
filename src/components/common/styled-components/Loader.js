import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;
export const Loader = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #00a693;
  animation: ${spin} 2s linear infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 3px solid transparent;
    animation: ${spin} 3s linear infinite;
  }
  &:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: #0c659b;
  }
  &:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: #00a693;
    animation: ${spin} 1.5s linear infinite;
  }
`;
