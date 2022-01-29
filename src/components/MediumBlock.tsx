import { MediumBlockRoot, ColorFill } from "./Blocks.styles";

const MediumBlock = () => {
  return (
    <MediumBlockRoot>
      <ColorFill colorCode={3}>
        <h2>Medium Block Title</h2>
        <p>Medium block description with some extra text.</p>
      </ColorFill>
    </MediumBlockRoot>
  );
};

export default MediumBlock;
