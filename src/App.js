import Container from "@mui/material/Container";
import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages";
import { FullPost } from "./pages/FullPost";
import { AddPost } from "./pages/AddPost";
import { Login } from "./components/Login";

import styles from "./index.scss"


function App() {
  const [isActiveState, setActive] = useState(false);
  
  const scrollFunc = () => {
    document.body.classList.remove('hidden');
    document.body.classList.add('scroll');
    setActive(false);
  }
  const hiddenFunc = () => {
    document.body.classList.remove('scroll');
    document.body.classList.add('hidden');
    setActive(true);
  }

  return (
    <Container maxWidth="lg">
      <Header onChange={hiddenFunc}/>
      {/* <Home /> */}
      <Login isActive={isActiveState} onChange={scrollFunc}/>
      {/* <FullPost /> */}
      <AddPost />
      <Footer />
    </Container>
  );
}

export default App;
