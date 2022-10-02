import * as React from "react";
import moment from "moment";
import CountUp from "react-countup";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Machines() {
  return (
    <React.Fragment>
      <Title>Machines</Title>
      <Typography component="p" variant="h4">
        <CountUp start={0} end={200} duration={4} />
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {moment().format("LL")}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View all
        </Link>
      </div>
    </React.Fragment>
  );
}
