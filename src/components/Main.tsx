import { useRef, useState } from "react";
import "../assets/styles/Main.scss";

// MUI Components
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

// MUI Icons
import PlaceIcon from "@mui/icons-material/Place";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TaskIcon from "@mui/icons-material/Task";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ChecklistIcon from "@mui/icons-material/Checklist";

// Custom Components
import RegistrationSection from "./RegistrationSection";
import ScrollTopDiv from "./TopMenu";

interface MainProps {
  mode: "light" | "dark";
}

function Main({ mode }: MainProps) {
  // -------------------- Refs --------------------
  const nextSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // -------------------- Timeline Data --------------------
  const timelineData = [
    { date: "December 15, 2025", event: "Abstract submission deadline", icon: <TaskIcon /> },
    { date: "January 15, 2026", event: "Poster submission deadline", icon: <TaskIcon /> },
    { date: "January 15, 2026", event: "Registration deadline", icon: <HowToRegIcon /> },
    { date: "January 29, 2026", event: "Conference begins", icon: <ChecklistIcon /> },
  ];

  // -------------------- Map State --------------------
  const [mapIndex, setMapIndex] = useState(0);

  const maps = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145.15951723069884!2d9.229102492225795!3d45.478172299321386!2m3!1f332.1489971346723!2f55.08258341742861!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x4786c6f13e309441%3A0x7b80ebeb99531e2d!2sPoliMi%20%C2%B7%20Edificio%2013%20(Trifoglio)!5e1!3m2!1sit!2sit!4v1762888892871!5m2!1sit!2sit",
  ];

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newValue: number | null
  ) => {
    if (newValue !== null) setMapIndex(newValue);
  };

  // -------------------- Topics --------------------
  const topics = [
    "Scientific and Physics-Informed Machine Learning",
    "High Performance Computing",
    "Inverse Problems",
    "Multiscale and Multiphysics Problems",
    "Mathematical Modeling",
    "Numerical Analysis",
    "Data Integration",
    "Finite Element Methods",
    "Discontinuous Galerkin Methods",
    "Mathematics for Sustainable Development",
    "Mathematical Foundations of Deep Learning",
    "Uncertainty Quantification",
  ];

  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm")); // small screens

  // -------------------- JSX --------------------
  return (
    <div>
      {/* Menu */}
      <ScrollTopDiv/>
      {/* Hero Section */}
      <div className="container" id="home" style={{ height: "calc(100vh - 26px)" }}>
        <div className="main-section">
          <div className="title">
            <h1>SIAM Chapters meeting for Young Researchers</h1>
            <h2>in Applied Mathematics and Scientific Computing</h2>
            <h3>
              <PlaceIcon /> PoliMi, Italy &nbsp;&nbsp;&nbsp;&nbsp;
              <EventAvailableIcon /> January 29-30, 2026
            </h3>
          </div>
        </div>

        <Button
          className="scroll-button"
          variant="contained"
          size="large"
          disableElevation
          onClick={scrollToNextSection}
          sx={{ fontFamily: "inherit" }}
        >
          More
        </Button>
      </div>

      {/* About Section */}
      <div ref={nextSectionRef} className="about-section">
        <h2>About the conference</h2>
        <p>
          The SIAM Chapter Meeting in Applied Mathematics will take place on <strong>29-30 January 2026</strong> at <strong>Politecnico di Milano</strong>, following the success of the first Joint GNCS-SIAM Chapters Meeting for Young Researchers in Numerical Analysis and Applied Mathematics. This event offers an excellent opportunity to foster scientific interaction among young researchers in <strong>applied mathematics, numerical analysis, scientific computing</strong>, and <strong>statistical learning</strong>.
        </p>
        <p>
          The program will include <strong>keynote lectures</strong> by senior researchers, <strong>invited and contributed talks</strong> by young scientists (PhD students and PostDocs), and a <strong>poster session</strong>. This year, the poster session will be complemented by an <strong>elevator pitch format</strong>, where each presenter will give a <strong>three-minute flash talk</strong> to introduce their work and encourage engagement and discussion.
        </p>
        <p>
          A total of 8 slots are available for contributed talks and will be selected by the scientific committee. In case of a larger number of requests, submissions exceeding the available slots will be redirected to the poster session.
        </p>
        <p>
          The meeting is jointly organised by the Italian SIAM Chapters at <strong>Politecnico di Milano (PoliMi), Scuola Internazionale Superiore degli Studi Avanzati (SISSA), Università di Genova (UniGe), Università di Pavia - IMATI (UniPV-IMATI)</strong>, and <strong>Università di Pisa - Scuola Normale Superiore (UniPi-SNS)</strong>. This event is partly funded by <strong>GNCS-INdAM</strong> and held under the patronage of the <strong>Società Italiana di Matematica Applicata e Industriale</strong> (SIMAI).
        </p>
        <p>
          Submissions and participation are warmly encouraged from researchers across <strong>all Italian universities and research centres</strong>.
        </p>
        <p>
          Participation is <strong>free</strong>, but online registration is <strong>mandatory</strong>.
        </p>

        <h3>Included topics</h3>
        <p>Included topics are, but not limited to:</p>

        {/* Topics Grid */}
        <Box sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  gap: 1,
                }}
              >
                {topics.map((topic, i) => {
                  // Adjust based on screen size
                  const isWide = isSm ? i % 4 === 0 : i % 5 === 0;
                  const isTall = isSm ? i % 2 === 0 : i % 3 === 0; // small screens all normal height
                  return (
                    <Paper
                      className="topics"
                      key={i}
                      elevation={0}
                      sx={{
                        gridColumn: isWide ? "span 2" : "span 1",
                        gridRow: isTall ? "span 2" : "span 1",
                        borderRadius: 3,
                        p: 3,
                        m: 0,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.025)",
                        },
                      }}
                    >
                      {topic}
                    </Paper>
                  );
                })}
              </Grid>
            </Box>

        {/* Timeline */}
        <h2>Important dates</h2>
        <div className="timeline-section">
          <Timeline
            position="right"
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 1,
              },
            }}
          >
            {timelineData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      backgroundColor: "transparent",
                      color: mode === "dark" ? "#fff" : "#000",
                      boxShadow: "none",
                    }}
                  >
                    {item.icon}
                  </TimelineDot>
                  {index < timelineData.length - 1 && (
                    <TimelineConnector
                      sx={{
                        backgroundColor: mode === "dark" ? "#fff" : "#000",
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent
                  sx={{ display: "flex", alignItems: "center", fontFamily: "inherit", fontSize: "1.2rem" }}
                >
                  <div className="event">
                    {item.event}
                  </div>
                  <div className="date">
                    {item.date}
                  </div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <p>
          The meeting will take place on January 29-30, 2026, at <a href="https://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp?lang=IT&id_servizio=3246&csi=MIA0203&polij_step=0&__pj0=0&__pj1=272230a47c583b74452e43894178f6d8" target="_blank" rel="noopener noreferrer">Aula T.1.2</a>, Edificio 13 (Trifoglio), first floor, Politecnico di Milano, Milano, Italy.
        </p>

        <h3>Venue</h3>
        <p>
          The workshop is located near Piola subway station on Metro Line 2 (MM2 Green Line). Upon arrival at Piola station, please proceed to the left exit. Continue on via Francesco d'Ovidio for ~30 metres, then turn left onto the walkway towards Via Ampère. Once arrived at Via Ampère, make a right turn, which will lead you to the Faculty of Architecture entrance on your left. Enter the faculty, take the spiral staircase down on the left. Continue straight ahead through the passage: building 13 is in front of you.
        </p>
        <p>  
          For those arriving by train, the closest station is Milano Lambrate, which is a 15-minute walk away. The average travel time from Milan Central Station is 16 minutes by metro (MM2 Green Line), while the journey from Milan Cadorna takes 22 minutes.
        </p>
        {/* Map Section */}
        <div className="map-container">
          <ToggleButtonGroup
            value={mapIndex}
            exclusive
            onChange={handleToggle}
            className="map-toggle-group"
          >
            <ToggleButton value={0} className="map-toggle-left">
              Event location
            </ToggleButton>
          </ToggleButtonGroup>

          <div className="map">
            <iframe
              src={maps[mapIndex]}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <h3>Accomodation</h3>
        <p>
          Some hotels conveniently located near the conference venue are: 
        </p>
        <ul className="list">
          <li><a href="https://21houseofstories.com/milano-citta-studi/">21 House of Stories - Milano Città Studi</a> ***</li>
          <li><a href="https://hotellombardia.com/it">Hotel Lombardia</a> ****</li>
          <li><a href="https://hotelgammamilano.it/it">Hotel Gamma</a> ***</li>
          <li><a href="https://www.hotel-sanfrancisco.it/">Hotel San Francisco</a> ***</li>
        </ul>
        <p>
          If you have any question, don't hesitate to contact us at{" "}
          <a href="mailto:siam-studentchapter-dmat@polimi.it" target="_blank" rel="noopener noreferrer">
            siam-studentchapter-dmat@polimi.it
          </a>.
        </p>
      </div>

      {/* Registration */}
      <div id="registration">
        <RegistrationSection/>
      </div>
    </div>
  );
}

export default Main;
