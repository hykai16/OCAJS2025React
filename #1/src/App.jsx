import { useState } from "react";
import { ColorText } from "./components/colorText";

function App() {
  //画面を再描画しないと、数字が変わらない
  //状態を管理してあげる
  //let count = 0;
  const [count,setCount] = useState(0);

  const CountUp = () => {
    setCount((prev) => prev + 1); //前の値をつかって更新
  }

  //JS内でのCSSの当て方（オブジェクトを当てる）
  const countStyle = {
    color:"blue",
    fontSize:"50px",
  }


  return (
    <div className="App">
      {/* JSをつかうときには｛｝でくくる */}
      {console.log("test")}
      <ColorText color="red" message="A"/>
      <ColorText color="green" message="A"/>
      <ColorText color="blue" message="A"/>
      <ColorText color="yellow" message="A"/>
      <ColorText color="purple" message="A"/>
      <h2 style={countStyle}>{count}</h2>
      <button onClick={CountUp}>カウントアップ</button>
    </div>
  );
}

export default App;
