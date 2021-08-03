import React, { useState } from "react";

const Home = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [compare, setCompare] = useState("Equal");
  return (
    <div>
      <label>Input - 1</label>
      <br />
      <textarea
        value={text1}
        onChange={(e) => {
          setText1(e.target.value);
          if (text2 === e.target.value) {
            setCompare("Equal");
          } else {
            setCompare("Not Equal");
          }
        }}
      />
      <br />
      <label>Words: </label>{" "}
      {text1
        ? text1
            .replace(/(^\s*)|(\s*$)/gi, "")
            .replace(/[ ]{2,}/gi, " ")
            .replace(/\n /, "\n")
            .split(" ").length
        : 0}
      <br />
      <br />
      <label>Input - 2</label>
      <br />
      <textarea
        value={text2}
        onChange={(e) => {
          setText2(e.target.value);
          if (text1 === e.target.value) {
            setCompare("Equal");
          } else {
            setCompare("Not Equal");
          }
        }}
      />
      <br />
      <label>Words: </label>{" "}
      {text2
        ? text2
            .replace(/(^\s*)|(\s*$)/gi, "")
            .replace(/[ ]{2,}/gi, " ")
            .replace(/\n /, "\n")
            .split(" ").length
        : 0}
      <br />
      <br />
      <label>Compare: {compare}</label>
    </div>
  );
};

export default Home;
