import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { Header, Footer, SideBar } from "./layout";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <SideBar />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
