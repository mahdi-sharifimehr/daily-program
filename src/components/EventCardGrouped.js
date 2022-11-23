import { StyleSheet, View } from 'react-native';
import React from 'react';
import colors from '../constants/Colors';
import EventCard from '../components/EventCard';

const EventCardGrouped = ({ event }) => {
    return (
        <View style={styles.first_level}>
            <EventCard event={event} showDate />
            {event.children?.map((item, index) => {
                return (
                    <View key={index} style={styles.second_level}>
                        <EventCard event={item} showDate />
                        {item.children?.map((item, index) => {
                            return (
                                <View key={index} style={styles.third_level}>
                                    <EventCard event={item} showDate />
                                </View>
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export default EventCardGrouped;

const styles = StyleSheet.create({
    first_level: {
        backgroundColor: colors.GRAY_SHADE1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin:10,
    },
    second_level: {
        backgroundColor: colors.GRAY_SHADE2,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.GRAY
    },
    third_level: {
        backgroundColor: colors.GRAY_SHADE3,
        borderColor: colors.LIGHT_GRAY
    },
})