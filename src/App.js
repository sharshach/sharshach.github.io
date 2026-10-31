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
import automations from "./data/automations.json";

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
      <Header />
      <main id="main-content" tabIndex="-1">
        <section className="experience-screen" id="about" aria-labelledby="about-title">
          <div className="experience-layout section">
            <div className="experience-intro">
              <h2 id="about-title">Useful platforms.<br />Dependable experiences.</h2>
              <p className="experience-lead">
                I design developer APIs, deliver cross-platform product features,
                and work across team boundaries to improve everyday product reliability.
              </p>
              <p>
                At Microsoft, my work has grown from mobile product quality to
                reusable developer capabilities, pragmatic integrations, and AI-enabled
                experiences. I care about the decisions that make a feature
                understandable, accessible, and maintainable—not just implemented.
              </p>
              <a className="experience-next" href="#work">See the work behind that <span aria-hidden="true">↗</span></a>
            </div>
            <Jobs />
          </div>
        </section>
        <SelectedWork />
        <section id="team" className="section team-section" aria-labelledby="team-title">
          <h2 id="team-title">AI-first teams.<br />Practical innovation.</h2>
          <div>
            <article className="team-story">
              <h3>AI First Champion</h3>
              <p>I co-led practical AI adoption through hands-on tool demos,
                individual setup and onboarding help, and reusable engineering workflows.
                The focus was helping teammates apply the tools to real work:
                multi-agent collaboration, spec-driven development, and useful
                feedback—not just demonstrating that a model can generate code.</p>
              <p>I collected feedback and supported adoption reporting for management.
                I also explored an AI-assisted schema reviewer and a spec-driven
                multi-repository workflow with early teammate use. These were
                prototypes and practical experiments, not an organization-wide
                production standard.</p>
              <p className="practice-skills">Skills applied: AI enablement, tool onboarding,
                multi-agent workflows, spec-driven development, feedback and evaluation.</p>
            </article>
            <article className="team-story">
              <h3>Hackathon Champion</h3>
              <p>I identified user and workflow gaps, shaped product concepts,
                organized ideation, and helped teammates prototype and demonstrate
                their ideas. Experiments explored user-authored shortcuts, workflow
                assistance, summarization, booking, intent-based navigation,
                sharing, and advocacy.</p>
              <p>The goal was to validate an idea and make the next product decision
                clearer. Several experiments prompted product discussions; a working
                demo was not treated as a launched feature, and not every innovation
                depended on AI.</p>
              <p className="practice-skills">Skills applied: product thinking, ideation,
                prototyping, idea validation, technical demos, team participation.</p>
            </article>
            <article className="team-story">
              <h3>Mentoring &amp; shared ownership</h3>
              <p>I mentor new joiners, review designs and code, and help teammates
                navigate technical decisions. I value evidence-based feedback and
                knowledge sharing that helps others deliver independently.</p>
            </article>
          </div>
        </section>
        <section id="automations" className="section automations-section" aria-labelledby="automations-title">
          <div className="automation-heading">
            <h2 id="automations-title">Personal engineering assistants.</h2>
            <div>
              <p>Automations I build and configure for my own engineering workflow,
                sometimes shared for team use. They prepare context and first drafts;
                I remain responsible for the decisions, reviews, and communication.</p>
              <p className="practice-skills">Skills applied: workflow orchestration,
                context synthesis, review automation, traceable drafts, human oversight.</p>
            </div>
          </div>
          <dl className="automation-list">
            {automations.map(automation => (
              <div key={automation.title}>
                <dt>{automation.title}</dt>
                <dd>{automation.description}</dd>
              </div>
            ))}
          </dl>
        </section>
        <GithubStats />
        <Contact />
      </main>
      <footer className="site-footer section">
        <a href="#top">Back to top</a>
        <p>Sri Harsha Chilukuri</p>
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
