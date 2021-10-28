import React, { useState } from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const HomeScreen = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <div>
      <Header leftMenuHandler={setLeftMenuOpen} />
      {leftMenuOpen ? <LeftMenu leftMenuHandler={setLeftMenuOpen} /> : null}
    </div>
  );
};

export default HomeScreen;
