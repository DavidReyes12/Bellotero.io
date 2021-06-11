import React, { useEffect, useState } from "react";
import { message } from "antd";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import Configurator from "./Views/Configurator";
import Testimonial from "./Views/Testimonial";
import Navbar from "./Components/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () =>  {
  const [MenuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json')
      .then(response => response.json())
      .then(data =>  {
        if(data) {
          const { menu: { items } } = data;
          setMenuItems(items);
        } else {
          message.error("Error :(");
        }
      });
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Navbar MenuItems={MenuItems} />
        <Switch>
            <Route path="/page-1" exact render={() => <Testimonial />} />
            <Route path="/page-2" exact render={() => <Configurator />} />    
            <Redirect from="/" to="/page-1" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
