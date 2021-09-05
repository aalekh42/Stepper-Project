import React from "react";
import Navbar from "./Component/Navbar";
import CenterTabs from "./Component/Tabs";
import Carousel from "./Component/Carousel";
import Card from "./Component/Card";
import "./App.css";
import data from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {RoleProvider} from "./Context/RoleProvider";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    // const renderService = this.state.data.map((data) => {
    //   return <>{console.log("HEY", data.fields.status)}</>;
    // });
    return (
      <div className="App">
        <Router>
          {/* <Route exact path="/help" component={() => <Carousel />} /> */}
          <RoleProvider>
            <Navbar />
            <CenterTabs />
            <Carousel />
            <div style={{ marginTop: "40px" }}>
              <Route
                exact
                path="/request"
                component={() => <Card data={this.state.data} limit={5}/>}
              />
              {/* <Card data={this.state.data} /> */}
            </div>
          </RoleProvider>
        </Router>
      </div>
    );
  }
}

export default App;
