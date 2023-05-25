import { MyProvider } from "./contexts";
import InitialPage from "./pages/initialPage";

function App() {
  return (
    <MyProvider>
      <InitialPage  />
    </MyProvider>
  );
}

export default App;
