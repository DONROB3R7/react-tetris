import React, {useState} from "react";

import { createStage } from "../gameHelper";

// Styled  Components 
import { StyledTetris, StyledTetrisWrapper} from "./styles/StyledTetris";


// Custom Hooks 
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
 
//Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {

  console.log(useStage);

  console.log("re-render");

  return (
    <StyledTetrisWrapper>
    <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
