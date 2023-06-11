import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const Generator = () => {
  const [num, setNum] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let generated = [];
    // for (let index = 0; index < num; index++) {
    //   generated.push(data[index]);
    // }
    // setText(generated);
    setText(data.slice(0, num));
    setNum(1);
  };

  return (
    <section className="section-center">
      <h4>Lorem Ipsum Generator</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          min={1}
          max={8}
          step={1}
          onChange={(e) => setNum(parseInt(e.target.value))}
          value={num}
        />
        <button type="sumbit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((i) => {
          const id = nanoid();
          return <p key={id}>{i}</p>;
        })}
      </article>
    </section>
  );
};

export default Generator;
