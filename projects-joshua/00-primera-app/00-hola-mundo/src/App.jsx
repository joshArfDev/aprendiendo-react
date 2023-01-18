import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="pheralb">
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard  userName="angular" name="Angular">
        Angular
      </TwitterFollowCard>
      <TwitterFollowCard userName="midudev">
        Miguel Angel Durán
      </TwitterFollowCard>
    </section>
  );
}
