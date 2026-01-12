// src/components/LogoSection.tsx
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../assets/styles/Main.scss";

interface ScheduleProps {
  mode: "light" | "dark";
}

interface Session {
  time: string;
  programme: string;
  speaker: string;
}

const Schedule: React.FC<ScheduleProps> = ({ mode }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);

  const day1: Session[] = [
    { time: "8:30-9:00", programme: "Opening + Registration", speaker: "-" },

    {
      time: "9:00-9:40",
      programme: "Keynote Lecture",
      speaker: "Regazzoni",
    },

    {
      time: "9:40-11:20",
      programme: "Models and Methods",
      speaker: "Cusumano",
    },
    {
      time: "9:40-11:20",
      programme: "for Healthcare Applications",
      speaker: "Dalmaso",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Fiori",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Leimer Saglio",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Trombini",
    },

    { time: "11:20-11:50", programme: "Coffee Break", speaker: "-" },

    {
      time: "11:50-12:30",
      programme: "Keynote Lecture",
      speaker: "Montardini",
    },

    {
      time: "12:30-13:10",
      programme: "Contributed Talks",
      speaker: "Gonnella",
    },
    {
      time: "12:30-13:10",
      programme: "",
      speaker: "Tarantino",
    },

    { time: "13:10-14:30", programme: "Lunch", speaker: "-" },

    {
      time: "14:30-15:50",
      programme: "Contributed Talks",
      speaker: "Accogli",
    },
    {
      time: "14:30-15:50",
      programme: "",
      speaker: "Belardo",
    },
    {
      time: "14:30-15:50",
      programme: "",
      speaker: "Lonati",
    },
    {
      time: "14:30-15:50",
      programme: "",
      speaker: "Monforte",
    },

    { time: "16:00-17:00", programme: "Elevator Pitch", speaker: "-" },

    { time: "17:00-18:30", programme: "Poster Session + Aperitif", speaker: "-" },
  ];

  const day2: Session[] = [
    { time: "8:30-9:00", programme: "Opening + Registration", speaker: "-" },

    {
      time: "9:00-9:40",
      programme: "Keynote Lecture",
      speaker: "Calatroni",
    },

    {
      time: "9:40-11:20",
      programme: "Advances in Scientific Machine Learning",
      speaker: "Daniele",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Palummo",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Tomada",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Tomasetto",
    },
    {
      time: "9:40-11:20",
      programme: "",
      speaker: "Valentino",
    },

    { time: "11:20-11:50", programme: "Coffee Break", speaker: "-" },

    {
      time: "11:50-12:30",
      programme: "Keynote Lecture",
      speaker: "Torlo",
    },

    {
      time: "12:30-13:10",
      programme: "Contributed Talks",
      speaker: "Labarrière",
    },
    {
      time: "12:30-13:10",
      programme: "",
      speaker: "Scarlato",
    },

    { time: "13:10-14:30", programme: "Lunch", speaker: "-" },

    {
      time: "14:30-15:30",
      programme: "Contributed Talks",
      speaker: "Loffredo Senesi",
    },
    {
      time: "14:30-15:30",
      programme: "",
      speaker: "Mugnaioni",
    },
    {
      time: "14:30-15:30",
      programme: "",
      speaker: "Speroni",
    },

    {
      time: "15:30-16:00",
      programme: "SIAM + Institutional Session",
      speaker: "-",
    },

    {
      time: "16:00-16:40",
      programme: "Keynote Lecture",
      speaker: "Pagliantini",
    },

    { time: "16:40-16:50", programme: "Closing", speaker: "-" },
  ];


  return (
    <div className="schedule-section" id="schedule">
      <h2>Schedule</h2>

      <Paper elevation={0} className={`schedule-card ${mode === "dark" ? "dark" : ""}`}>
        <Accordion
          expanded={expanded === "day1"}
          onChange={handleChange("day1")}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>January 29, 2026 - Thursday</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table size="small" aria-label="day 1 schedule" sx={{tableLayout: 'auto', whiteSpace: 'nowrap' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Time</strong></TableCell>
                    <TableCell><strong>Programme</strong></TableCell>
                    <TableCell><strong>Speaker</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {day1.map((session, i) => (
                    <TableRow key={i}>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.programme}</TableCell>
                      <TableCell>{session.speaker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "day2"}
          onChange={handleChange("day2")}
          sx={{ background: "transparent", boxShadow: "none" }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>January 30, 2026 - Friday</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table size="small" aria-label="day 2 schedule" sx={{tableLayout: 'auto', whiteSpace: 'nowrap' }}>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Time</strong></TableCell>
                    <TableCell><strong>Programme</strong></TableCell>
                    <TableCell><strong>Speaker</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {day2.map((session, i) => (
                    <TableRow key={i}>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.programme}</TableCell>
                      <TableCell>{session.speaker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </Paper>

      {/* <a
        href="./downloadables/programma.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="download-button"
      >
        Download Schedule (PDF)
      </a> */}
    </div>
  );
};

export default Schedule;
