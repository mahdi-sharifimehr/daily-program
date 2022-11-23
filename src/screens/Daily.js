import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import timeslots from '../assets/data/timeslots.json';
import EventCard from '../components/EventCard';
import colors from '../constants/Colors';
import moment from 'moment';
import { current_date, utc_offset } from '../constants/Configs';

function Daily() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        filterEventsByDay();
    }, []);

    const filterEventsByDay = () => {
        //filter list by current day came from configs
        let filteredEvents = timeslots.filter((item) =>
            moment(item.start).utcOffset(utc_offset).format('DDMMYYYY') === moment(current_date).format('DDMMYYYY'));
        //sort filtered list in reverse chronological order
        filteredEvents.sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
        });
        setEvents(filteredEvents);
    }

    return (
        <View style={styles.body}>
            <View style={styles.date_container}>
                <Text style={styles.date}>
                    {moment(current_date).format('dddd DD MMMM')}
                </Text>
            </View>
            <FlatList
                data={events}
                style={styles.list}
                renderItem={({ item, index }) =>
                    <EventCard event={item} />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};

export default Daily;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    date_container: {
        height: 50,
        backgroundColor: colors.CYAN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
        fontWeight: '500',
    },
    list: {
        marginBottom: 20,
    },
})