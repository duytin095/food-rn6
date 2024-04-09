import React from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
// import { withNavigation } from "react-navigation";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({title, results})=>{
    const navigation = useNavigation();
    if(!results.length){
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) =>{
                return <TouchableOpacity
                onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10,
    }
});

export default ResultsList;
        //training với mentor trực tiếp thì nhiều, bí lúc nào hỏi lúc đó (tuyệt). Tham gia workshop cùng team thì đâu đó 6-7 buổi, nhiều kiến thức mới và bổ ích, tuy nhiên thì nó cũng trôi vào dĩ vãng vì công việc không hoặc ít áp dụng
        //OK
        //Phải nói là học được nhiều thứ từ mentor
        //Mọi người vui vẻ (tất nhiên), mentor bá dơ
        // NOT OK
        //Công việc yêu cầu hoàn thành nhanh, tốt,..., nhưng thiết bị là của CÁ NHÂN em thì không đủ đáp ứng, điều này một phần ảnh hưỏng tới performance của e, nhưng có vẻ Line Manager thì không nghĩ tới điều đó, dùng đó để đánh giá performance
        //Hệ thống OKR thì khỏi nói, đầu quý đặt OKR đó => em hỏi nhận task liên quan đến OKR đó => không có task => "VẬy thÌ eM kHônG cÓ CONtrIbuTE rồi, OKR nÀy 0 ĐiỂM nhÉ"
        //Tiếng cười sang sảng, hoặc mấy câu chuyện cứ nhai nhai trong miệng của team khác mất tập trung thật
        //Nóng

        //chỉ nhớ được nhiêu đó