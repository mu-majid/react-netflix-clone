import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Title = styled.div``;
export const Text = styled.div``;

export const Row = styled.div``;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const Link = styled.a``;
export const Break = styled.a``;


