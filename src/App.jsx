import "./App.css";
import { Description } from "./components/Description";
import { Slider } from "./components/Slider";

import { Slides } from "./data/Pix-library.json";

function App() {
  return (
    <div className="App">
      <Slider data={Slides} />
      <Description data={Slides} />
    </div>
  );
}

export default App;
