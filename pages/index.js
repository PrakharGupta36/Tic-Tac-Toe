import { useEffect, useState } from "react";

export default function Index() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let [text, setText] = useState("X");
  let [data, setData] = useState([]);
  let [player, setPlayer] = useState("X Turn");
  // let data = [];

  function click(e) {
    e.target.textContent = text;
    text === "X" ? setText("O") : setText("X");
    player === "X Turn" ? setPlayer("O Turn") : setPlayer("X Turn");
    e.target.disabled = true;

    data.push({ [e.target.value]: e.target.textContent });

    // console.log(data);
  }

  useEffect(() => {
    console.log(Object.keys(data));
  });

  return (
    <main>
      <div className='main-container'>
        <div className='container'>
          {arr.map((i) => {
            return (
              <button
                onClick={click}
                className={`button`}
                key={i}
                value={i}></button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
