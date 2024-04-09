import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";


const ResultsShowScreen = ({ route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return <View>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.photo} source={{ uri: item }} />
            }}
        />
    </View>
}
const styles = StyleSheet.create({
    photo: {
        width: 250,
        height: 120,
    }
});
export default ResultsShowScreen;