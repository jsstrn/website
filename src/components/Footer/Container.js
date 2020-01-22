import styled, { css } from "styled-components";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.footer`
  ${containerStyle}
  margin: 2rem auto 1rem;
`;
