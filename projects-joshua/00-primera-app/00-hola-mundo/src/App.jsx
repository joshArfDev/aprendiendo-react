import React from "react";
import "./App.css";
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className="App">
    <TwitterFollowCard userName="joshArfa" name="Joshua Acevedo" />
    <TwitterFollowCard userName="pheralb" name="Pablo Hernandez" />
    <TwitterFollowCard userName="angular" name="Angular" />
    <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
    </section>
  );
}
