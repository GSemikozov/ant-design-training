import { Layout } from "antd";
import React from "react";

import ContentTabs from "./components/ContentTabs/ContentTabs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <ContentTabs />
    </Layout>
  );
}

export default App;
