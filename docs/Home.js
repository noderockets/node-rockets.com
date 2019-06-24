import React from "react";
import Rocket from "./Rocket";
import styles from "./Home.module.styl";
import LazyHero from "react-lazy-hero";
import rocket from "./images/spacex-71873-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <Rocket />
      <header className={styles.hero} />
      <LazyHero imageSrc={rocket} opacity="0.3">
        <h1>Hero</h1>
      </LazyHero>
      <section>
        <h2>What is Node Rockets?</h2>
        <p>
          We create water rockets out of 2 liter bottles and control them with
          the power of node.js.
        </p>
        <h2>Events</h2>
        <ul>
          <li>
            Aug 12-14th - <a href="https://2019.jsconf.us/">JSConf</a>
          </li>
        </ul>
        <h2>Build Your Own</h2>
        <p>
          You can build your own rocket, launch system and parachute deploy
          system.
        </p>
        <a href="/rocket">Click here for tutorial</a>
        <h2>Contribute</h2>
        <p>You can also help contribute by participating with us:</p>
        <ul>
          <li>
            <a href="https://trello.com/b/RGp9NqFF/noderocket-next">
              Trello Board
            </a>
          </li>
          <li>
            <a href="https://github.com/noderockets">Github</a>
          </li>
          <li>
            <a href="https://noderockets.slack.com/">Slack</a>
          </li>
        </ul>
      </section>
    </div>
  );
}
