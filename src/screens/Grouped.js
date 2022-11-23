import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import timeslots from '../assets/data/timeslots.json';
import EventCardGrouped from '../components/EventCardGrouped';

function Grouped() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        groupEventsByParent();
    }, []);


    const groupEventsByParent = () => {

        const data = [...timeslots];
        //sort filtered list in reverse chronological order
        data.sort((a, b) => {
            return new Date(a.start) - new Date(b.start);
        });
        //create an id to node map to access to the events by ids easier and have copy of them
        var idToNodeMap = data.reduce(function (map, node) {
            map[node._id] = node;
            return map;
        }, {});

        var root = [];
        //make a node tree with the help of parent ids
        data.forEach(function (item) {
            if (typeof item.parent === "undefined") {
                root.push(item);
            } else {
                parentNode = idToNodeMap[item.parent];
                if (typeof parentNode.children === "undefined")
                    parentNode.children = [];
                delete item.parent;
                parentNode.children.push(item);
            }
        });

        setEvents(root);
    }

    return (
        <View style={styles.body}>
            <FlatList
                data={events}
                style={styles.list}
                renderItem={({ item, index }) =>
                    <EventCardGrouped event={item} />
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
};

export default Grouped;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        marginBottom: 20,
    },
})