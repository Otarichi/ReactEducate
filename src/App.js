import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./containers/header/header";
import Navbar from "./containers/navbar/navbar";
import NEWS from "./containers/root/NEWS";
import SendNews from "./containers/root/SendNews";
import AboutAuthor from "./containers/root/AboutAuthor";
import Footer from "./containers/footer/footer";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <Route path="/"></Route>
        <Route exact path="/bbc">
          <NEWS source="bbc"></NEWS>
        </Route>
        <Route path="/cnn">
          <NEWS source="cnn"></NEWS>
        </Route>
        <Route>
          <SendNews path="/send_news"></SendNews>
        </Route>
        <Route>
          <AboutAuthor name="oto" surname="gvazava" age="20" university="BTU" path="/about_author"></AboutAuthor>
        </Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
