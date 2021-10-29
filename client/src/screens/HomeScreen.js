import React, { useState } from "react";
import Header from "../components/Header";
import LeftMenu from "../components/LeftMenu";

const HomeScreen = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <div>
      <Header setLeftMenuOpen={setLeftMenuOpen} />
      <LeftMenu leftMenuOpen={leftMenuOpen} setLeftMenuOpen={setLeftMenuOpen} />
    </div>
  );
};

export default HomeScreen;
