import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 100,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        width:120, 
        textAlign:'center'
    },
    checkbox:{ 
        alignSelf: 'flex-end',
        right:10,
        
    }
});

export default styles;