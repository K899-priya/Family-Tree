import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MainPage from "./components/MainPage";

function App() {
  const [enter, setEnter] = useState(false);

  return (
    <>
      {!enter ? (
        <WelcomeScreen onEnter={() => setEnter(true)} />
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;