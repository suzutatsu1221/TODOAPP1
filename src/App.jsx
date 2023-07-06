import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShoeFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEfdect11は第二引数の変数が更新されて時のみ実行される
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="pink">こんばんは</ColorfulMessage>
      <ColorfulMessage color="blue">こんにちは</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShoeFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>Σ('◉⌓◉’)</p>}
    </>
  );
};

export default App;
