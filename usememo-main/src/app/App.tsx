import { Home } from "./pages/home/Home";
import { GlobalStyle } from "./shared/styles/global";

export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}
