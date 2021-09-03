import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#141414'
    },
    title: {
        marginTop:10,
        fontSize: 24,
        color:'#FFFFFF',
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        backgroundColor:'#333333',
        borderRadius:6,
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    searchbox: {
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'300',
        flex:1
    }
});

export default styles;