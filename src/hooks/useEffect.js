import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click
      </button>
    </div>
  );
}

export default UseEffect;
