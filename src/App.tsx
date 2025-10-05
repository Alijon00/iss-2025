import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages";
import { About } from "./pages";
import { Gallery } from "./pages";
import { Navbar } from "./widgets/navbar/nav";
import { Footer } from "./widgets/footer/footer";
import { RocketProvider } from "./contexts/rocketContext";

function App() {
  return (
    <BrowserRouter>
      <RocketProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </RocketProvider>
    </BrowserRouter>
  );
}

export default App;
