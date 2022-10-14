import React, { useEffect, useState } from "react";
import fetchApi from "../Constants/fetchApi";
function Home() {
  const [user, setUser] = useState("");
  const [options, setOptions] = useState([]);
  const [curr1, setCurr1] = useState();
  const [curr2, setCurr2] = useState();
  const [curr3, setCurr3] = useState("usd");
  const [curr4, setCurr4] = useState("usd");

  useEffect(() => {
    fetchApi("usd").then((data) => setOptions(Object.keys(data)));
    fetchApi("usd").then((data) => setUser(data["usd"]));
  }, []);

  const handleChange = (ev) => {
    setCurr1(ev.target.value);
  };

  const handleChange2 = async (ev) => {
    setCurr2(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setCurr3(curr1);
    setCurr4(curr2);
    const data = await fetchApi(curr1);
    setUser(data[curr2]);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select onChange={handleChange2}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Convert</button>
      <h1>
        1 {curr3.toUpperCase()} ={" "}
        {user.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{" "}
        {curr4.toUpperCase()}
      </h1>
    </div>
  );
}

export default Home;
