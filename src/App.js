https://github.com/talhaawais1122/Screen-Sizeimport './App.css'
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(window.innerWidth);
  const [height,setHeight]=useState(window.innerHeight);

  const updateWindowSize = () => {
    setValue(window.innerWidth);
    setHeight(window.innerHeight)

  };https://github.com/talhaawais1122/Screen-Size

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);

   
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <>
      <h1>Your Screen Size = {value}px</h1>
      <h1>Your Screen height = {height}px</h1>
    </>
  );
}

export default App;
