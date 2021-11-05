import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import ThemeConfig from "./theme";

function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}

export default App;
