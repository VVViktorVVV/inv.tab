import React, {useState} from "react";

const Counter = function () {
    let [likes, setlikes] = useState(0);
   
    const increment = function () {
    setlikes( likes += 1);
  }

  const decrement = function () {
    setlikes( likes -= 1);
  }

    return (
    <div>
      <h1>{likes}</h1>
      {/* <h2>{value}</h2> */}
        {/* <input
        type="text"
        value={value}
        onChange = {event => setValue(event.target.value)}
        ></input> */}
      
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    )

}

export default Counter