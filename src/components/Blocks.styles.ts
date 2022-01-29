import styled from "styled-components";

const Block = styled.div`
  min-height: 200px;
  color: white;
  box-sizing: border-box;
`;

export const LargeBlockRoot = styled(Block)`
  grid-column: span 3;
`;

export const MediumBlockRoot = styled(Block)`
  grid-column: span 2;
`;

export const SmallBlockRoot = styled(Block)`
  grid-column: span 1;
`;

// Some jewel tones we like:
// Emerald: #02a68d
// Mykonos Blue: #016295
// Samba Red: #bb1e39
// Koi Orange: #e4633b
// Vivacious Pink: #ba1a62

const colorCodes: string[] = [
  "#02a68d",
  "#016295",
  "#bb1e39",
  "#e4633b",
  "#ba1a62",
];

export const ColorFill = styled.div<{ colorCode: number }>`
  height: 100%;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${({ colorCode }) => colorCodes[colorCode]};
`;
