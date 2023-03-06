import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BestServices from "./components/BestServices";
import { useEffect, useState } from "react";
import Specialist from "./components/Specialist";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
// import ClientReviews from "./components/ClientReviews";

function App() {
  const [theme, setTheme] = useState("");

  const setupTheme = () => {
    if ("theme" in localStorage && localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("");
    }
  };

  useEffect(() => {
    setupTheme();
  }, [theme]);
  return (
    <div className="font-poppins dark:bg-black">
      <Nav {...{ setTheme }} />
      <Hero />
      <Features />
      <BestServices />
      <Specialist />
      {/* <ClientReviews /> */}
      <Blog />
      <Footer />
    </div>
  );
}
export default App;
