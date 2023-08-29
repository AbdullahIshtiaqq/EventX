import React, { useState } from "react";
import "./styles.css";
import EventDashboard from "../Features/events/eventDashboard/EventDashboard";
import Navbar from "../Features/navbar/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
