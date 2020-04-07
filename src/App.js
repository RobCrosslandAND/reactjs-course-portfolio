import React from "react";

import * as styles from "./app.module.scss";
import { Header } from "./components/header";

import profileImage from "./assets/Murray_RobertCrossland_Professional.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      factsVisible: false,
    };
  }

  handleToggleFactsVisible = () => {
    this.setState((prevState) => ({
      factsVisible: !prevState.factsVisible,
    }));
  };

  render() {
    const { factsVisible } = this.state;

    return (
      <React.Fragment>
        <Header />
        <main>
          <div className={styles.container}>
            <section>
              <h1 className={styles.header}>Rob Crossland</h1>
              <h2>Associate AND Leeds United Supporter</h2>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </span>
              <section>
                <button onClick={this.handleToggleFactsVisible}>Show Facts</button>
                {factsVisible && (
                  <ul>
                    <li>I&apos;m a Leeds United supporter</li>
                    <li>I&apos;m trying to grow my own veg</li>
                    <li>I have two dogs</li>
                  </ul>
                )}
              </section>
            </section>
            <div>
              <img src={profileImage} alt="Image of Rob Crossland" />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
