import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import timeslots from '../assets/data/timeslots.json';
import EventCard from '../components/EventCard';
import moment from 'moment';
import { utc_offset } from '../constants/Configs';

function HappeningNow() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    filterEventsByDay();
  }, []);

  const filterEventsByDay = () => {
    //filter list by today's date and time
    let filteredEvents = timeslots.filter((item) =>
      moment(item.start).utcOffset(utc_offset).format() <= moment(new Date()).utcOffset(utc_offset).format() &&
      moment(new Date()).utcOffset(utc_offset).format() <= moment(item.end).utcOffset(utc_offset).format());
    setEvents(filteredEvents);
  }

  return (
    <View style={styles.body}>
      <FlatList
        data={events}
        style={styles.list}
        renderItem={({ item, index }) =>
          <EventCard event={item} showDate />
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
};

export default HappeningNow;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    marginBottom: 20,
  },
})