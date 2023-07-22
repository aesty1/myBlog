import Container from "@mui/material/Container";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages";
import { FullPost } from "./pages/FullPost";

function App() {
  return (
    <Container maxWidth="lg">
      <Header/>
      {/* <Home /> */}
      <FullPost />
      <Footer />
    </Container>
  );
}

export default App;
