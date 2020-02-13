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

export const Text = styled.p`
  margin: 0.1rem;
  text-align: center;
  font-size: 0.7rem;
  color: grey;
`;

export const Attribution = styled(Text)`
  font-size: 0.5rem;
`;

export const Quote = styled(Text)`
  padding: 1rem;
`;

export const Image = styled.img`
  padding: 0.2rem 1.5rem;
  width: 1.5rem;
`;
