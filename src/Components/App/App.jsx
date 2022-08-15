import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "../SingleColor/SingleColor";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try
    {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);


    }
    catch(e)
    {
      setError(true);
    }
  };
  return (
    <>
      <section>
        <div className="container-fluid">
          <form className="row py-4 g-3 align-items-center" onSubmit={handleSubmit}>
            <div className="col-auto">
              <h1>Colors Generation</h1>
            </div>

            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#f15878"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-0">
                Confirm identity
              </button>
            </div>
          </form>
          {
            error && <h2 className="text-danger ">Invalid color</h2>
          }
          <div className="row justify-content-start align-items-center">
        {
          list.map((color, index) => {
            const hex = color.hex;
            return <SingleColor key={index} index={index} {...color} hex={hex} />
          } ) 
        }
        </div>
        </div>
        
      </section>
    </>
  );
}
