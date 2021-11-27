import React,{Fragment} from "react";
import { Link } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)
import { Divider ,Flag, Segment} from 'semantic-ui-react'

function Home({ name }) {

    return (
        <Fragment>
            <div>Home {name}</div>
            <Link to="/greeting">Greeting</Link>
            <Divider/>
            <Segment>
    <Flag name='ae' />
    <Flag name='france' />
    <Flag name='myanmar' />
  </Segment>
            <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
        </Fragment>
        )
}

export default Home