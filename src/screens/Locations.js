import React, { useEffect, useState } from 'react';
import { View, SectionList, StyleSheet, Text } from 'react-native';
import timeslots from '../assets/data/timeslots.json';
import EventCard from '../components/EventCard';
import places from '../assets/data/places.json';
import colors from '../constants/Colors';

function Locations() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        groupEventsByLocation();
    }, []);

    const findLocationName = (id) => {
        return places.find(item => item._id === id)?.name
    }

    const groupEventsByLocation = () => {

        const data = [...timeslots];

        var root = [];
        //create an array of events for the section list based on the location names
        data.forEach(function (item) {
            if (item.locations.length > 0) {
                const location_index = root.findIndex(obj => obj.title === findLocationName(item.locations[0]._id));
                if (location_index > -1)
                    root[location_index].data.push(item)
                else
                    root.push(
                        {
                            "title": findLocationName(item.locations[0]._id),
                            "data": [item]
                        }
                    );
            }
        });
        setEvents(root);
    }

    return (
        <View style={styles.body}>
            <SectionList
                sections={events}
                style={styles.list}
                renderItem={({ item }) => <EventCard event={item} showDate />}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.header_container}>
                        <Text style={styles.header}>{title}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};

export default Locations;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        marginBottom: 20,
    },
    header_container: {
        height: 50,
        backgroundColor: colors.CYAN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
        fontWeight: '500',
    },
})