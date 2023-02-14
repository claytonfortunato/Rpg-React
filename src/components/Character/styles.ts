import styled from "styled-components";

export const Container = styled.div<{
  size: number;
  left: number;
  top: number;
}>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: #ff0000;
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;
