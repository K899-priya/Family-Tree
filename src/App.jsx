import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MainPage from "./components/MainPage";

function App() {
  const [enter, setEnter] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!enter ? (
        <WelcomeScreen onEnter={() => setEnter(true)} key="welcome" />
      ) : (
        <MainPage key="main" />
      )}
    </AnimatePresence>
  );
}

export default App;