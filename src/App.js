import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Project from "./components/Projects/Project";
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import GithubStats from "./components/Github/GithubStats";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import SelectedWork from "./components/SelectedWork/SelectedWork";

class App extends React.Component {
  constructor(props) {
    super(props);
    let theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light" : "dark";
    let storageWarning = "";
    try {
      const savedTheme = window.localStorage.getItem("portfolio-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        theme = savedTheme;
      }
    } catch (error) {
      console.warn("Theme preference storage is unavailable.", error);
      storageWarning = "Theme changes work, but this browser cannot save your preference.";
    }
    this.state = { theme, storageWarning };
  }

  componentDidMount() {
    this.applyTheme();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      this.applyTheme();
    }
  }

  applyTheme = () => {
    document.documentElement.setAttribute("data-theme", this.state.theme);
  };

  onChangeTheme = () => {
    this.setState(state => ({ theme: state.theme === "dark" ? "light" : "dark" }), () => {
      try {
        window.localStorage.setItem("portfolio-theme", this.state.theme);
      } catch (error) {
        console.warn("Could not save the theme preference.", error);
        this.setState({
          storageWarning: "Theme changes work, but this browser cannot save your preference."
        });
      }
    });
  };

  renderHome = () => (
    <div>
      <Header theme={this.state.theme} onChangeTheme={this.onChangeTheme} />
      <main id="main-content" tabIndex="-1">
        <section className="section about-section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">How I approach engineering</h2>
          <div className="about-copy">
            <p>
              I like the point where product needs meet engineering trade-offs:
              understanding what matters to users, choosing a practical design,
              and making it work across the boundaries of a real system.
            </p>
            <p>
              I value evidence-based discussions, accessible experiences, and collaboration
              that helps others deliver independently. Mentoring, reviews, and technical
              learning are part of that work, not separate from it.
            </p>
          </div>
        </section>
        <SelectedWork />
        <Jobs />
        <GithubStats />
        <Contact />
      </main>
      <footer className="site-footer section">
        <a href="#top">Back to top</a>
        <p>Employer experience is described at a high level. No confidential code,
          customer data, or internal designs are published here.</p>
      </footer>
    </div>
  );

  renderProject = props => <Project {...props} />;

  renderNotFound = () => (
    <main id="main-content" className="section not-found" tabIndex="-1">
      <h1>Page not found</h1>
      <p>This address is not part of the portfolio.</p>
      <a className="button-link" href="/">Return to the portfolio</a>
    </main>
  );

  render() {
    return (
      <div className="App" data-theme={this.state.theme}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={this.renderHome} />
            <Route path="/project/:pid" exact render={this.renderProject} />
            <Route render={this.renderNotFound} />
          </Switch>
        </BrowserRouter>
        <ThemeSwitch theme={this.state.theme} onChangeTheme={this.onChangeTheme} />
        {this.state.storageWarning && (
          <p className="theme-warning" role="status">{this.state.storageWarning}</p>
        )}
      </div>
    );
  }
}

export default App;
