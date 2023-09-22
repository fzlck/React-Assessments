/* 
Task: Implement a button to show/hide the text content
*/
import { useState } from "react";

const ToggleButton = () => {
  const [showText, setShowText] = useState(true);
  const handleClick = () => setShowText(!showText);
  return (
    <>
      <button onClick={handleClick}>Show/Hide</button>
      {showText && <h1>Mother</h1>}
    </>
  );
};
export default ToggleButton;
