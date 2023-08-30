import React, { useState } from "react";
import "./styles.css";
import EventDashboard from "../Features/events/eventDashboard/EventDashboard";
import Navbar from "../Features/navbar/Navbar";
import { Container } from "semantic-ui-react";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  return (
    <>
      <Navbar selectEvent={handleSelectedEvent} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
