import React from "react";
import logo from "./logo.svg";
import "./App.css";
import collegeBasketballTeams from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>D1 Basketball Teams</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>

        <br />
        <br />
        <br />
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {collegeBasketballTeams.teams.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
