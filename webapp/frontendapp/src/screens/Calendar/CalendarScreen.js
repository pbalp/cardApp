import React from 'react';
//import { View, Text } from 'react-native';
import './CalendarScreen.css';

import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const CalendarScreen = (props) => {
    return (
      <div className="screens">
        <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
      </div>
    );
} //<Text>Calendar!</Text>

export default CalendarScreen;