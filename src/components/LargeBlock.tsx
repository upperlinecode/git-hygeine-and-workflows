import { LargeBlockRoot, ColorFill } from "./Blocks.styles";

interface blockPropTypes {
  title: string;
  desc: string;
}

const LargeBlock = (props: blockPropTypes) => {
  const { title, desc } = props;

  return (
    <LargeBlockRoot>
      <ColorFill colorCode={0}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </ColorFill>
    </LargeBlockRoot>
  );
};

export default LargeBlock;
