import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";
import LocationList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationList} />
      <SearchForm />
    </main>
  );
}