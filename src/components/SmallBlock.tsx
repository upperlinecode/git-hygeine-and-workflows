import { SmallBlockRoot, ColorFill } from "./Blocks.styles";

const SmallBlock = () => {
  return (
    <SmallBlockRoot>
      <ColorFill colorCode={1}>
        <h2>Small Block Title</h2>
        <p>Small block description with some extra text.</p>
      </ColorFill>
    </SmallBlockRoot>
  );
};

export default SmallBlock;
