import React from "react";
import { Root, Banner, BlockGrid } from "./App.styles";
import LargeBlock from "./components/LargeBlock";
import MediumBlock from "./components/MediumBlock";
import SmallBlock from "./components/SmallBlock";

function App() {
  return (
    <Root>
      <Banner>
        <h1>Bulletin Board</h1>
      </Banner>
      <BlockGrid>
        <LargeBlock
          title="Test"
          desc="This is a test block to determine whether the bulletin board even works."
        />
        <MediumBlock />
        <SmallBlock />
      </BlockGrid>
    </Root>
  );
}

export default App;
