import Container from "@mui/material/Container";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages";

function App() {
  return (
    <Container maxWidth="lg">
      <Header/>
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
