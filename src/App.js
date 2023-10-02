import logo from "./logo.svg";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import {
  Header,
  UserInfo,
  CheckoutSectionTime,
  ResortOrRoomSelect,
  SelectionInfoAndOffers,
  Footer,
} from "./components/components";

function App() {
  return (
    <div className="App">
      <AppLayout selectionType={"resort"}>
        <Header />
        <UserInfo />
        <CheckoutSectionTime />
        <ResortOrRoomSelect />
        <SelectionInfoAndOffers />
        <Footer />
      </AppLayout>
    </div>
  );
}

export default App;
