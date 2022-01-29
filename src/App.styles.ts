import styled from "styled-components";

export const Root = styled.div`
  font-family: "Montserrat", "IBM Plex Sans", sans-serif;
`;

export const Banner = styled.div`
  background-color: #ba1a62;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;

  h1 {
    margin: 0;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
    font-size: 64px;
  }
`;

export const BlockGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
