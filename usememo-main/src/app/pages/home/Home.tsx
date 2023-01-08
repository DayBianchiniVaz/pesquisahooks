import React from "react";
import { Header } from "../../shared/components/header/Header";
import { Main } from "../../shared/components/main/Main";

export const Home: React.FC = () => {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
  