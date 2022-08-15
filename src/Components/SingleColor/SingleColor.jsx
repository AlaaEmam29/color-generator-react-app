import React, { useState } from "react";
export default function SingleColor({ rgb, weight, index, hex }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const valueHex = `#${hex}`;
  return (
    <>
      <div
        className={`col-4 col-md-2  color text-center ${index > 10 && "text-white"} `}
        style={{
          backgroundColor: `rgb(${bcg})`,
          border: `3px solid rgb(${bcg})`,
        }}
        onClick={() => 
        {
            setAlert(true);
            navigator.clipboard.writeText(valueHex);
        }}

      >
        <p>%{weight}</p>
        <p>{valueHex}</p>
        {alert && <p class="text-uppercase">Copy to Clipboard</p>}
      </div>
    </>
  );
}
