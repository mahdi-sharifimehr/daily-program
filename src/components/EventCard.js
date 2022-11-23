import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faCompass } from '@fortawesome/free-regular-svg-icons';
import colors from '../constants/Colors';
import places from '../assets/data/places.json';
import { utc_offset } from '../constants/Configs';

const EventCard = ({ event, showDate }) => {

    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        setDateTimeFormat();
    }, []);

    const setDateTimeFormat = () => {
        //check if start and end dates are in the same day or not
        if (moment(event.start).utcOffset(utc_offset).format('DDMMYYYY') === moment(event.end).utcOffset(utc_offset).format('DDMMYYYY'))
            setDateTime(`${moment(event.start).utcOffset(utc_offset).format(showDate ? 'ddd, DD MMM HH:mm' : 'ddd, HH:mm')} - ${moment(event.end).utcOffset(utc_offset).format('HH:mm')}`);
        else
            setDateTime(`${moment(event.start).utcOffset(utc_offset).format(showDate ? 'ddd, DD MMM HH:mm' : 'ddd, HH:mm')} - ${moment(event.end).utcOffset(utc_offset).format(showDate ? 'ddd, DD MMM HH:mm' : 'ddd, HH:mm')}`);
    }

    const findLocationName = (id) => {
        return places.find(item => item._id === id)?.name
    }

    return (
        <View style={styles.body}>
            <View style={styles.date_container}>
                <FontAwesomeIcon
                    icon={faClock}
                    size={14}
                    color={colors.ORANGE}
                />
                <Text style={styles.date}>
                    {dateTime}
                </Text>
            </View>
            <View style={styles.name_container}>
                <Text style={styles.name}>
                    {event.name}
                </Text>
            </View>
            {event.locations.length > 0 &&
                <View style={styles.date_container}>
                    <FontAwesomeIcon
                        icon={faCompass}
                        size={14}
                        color={colors.GRAY}
                    />
                    <Text style={styles.location}>
                        {findLocationName(event.locations[0]._id)}
                    </Text>
                </View>
            }
        </View>
    )
}

export default EventCard;

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.LIGHT_GRAY,
        padding: 15
    },
    date_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    },
    name_container: {
        marginVertical: 5
    },
    date: {
        fontSize: 16,
        color: colors.ORANGE,
        fontWeight: '500',
        marginHorizontal: 5
    },
    name: {
        fontSize: 16,
        marginTop: 5,
        color: 'black',
        fontWeight: '500',
    },
    location: {
        fontSize: 16,
        color: colors.GRAY,
        fontWeight: '500',
        marginHorizontal: 5
    }
})