import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import { Header, Footer, SideBar } from "./layout";
function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-row">
        <SideBar />
        <div className="flex flex-col">
          <Header />
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
