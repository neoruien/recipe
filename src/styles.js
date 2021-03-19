import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const COLORS = {
    BLACK: "#333333",
    GREY: "#9E9E9E",
    WHITE: "#fff"
}

const styles = StyleSheet.create({
    // containers
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeContainer: {
        width: wp('100%'),
        height: hp('30%'),
    },
    imageContainer: {
        flex: 1
    },
    whiteContainer: {
        width: wp('100%'),
        height: hp('12.5%'),
        backgroundColor: COLORS.WHITE,
    },
    // text
    title: {
        fontFamily: 'Delicious'
    },
    recipeTitle: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.BLACK
    },
    recipeSubtitle: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: 'normal',
        color: COLORS.GREY
    },
    //form
    form: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 5
    },
    input: {
        width: 350,
        height: 40,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 3
    },
    // image
    image: {
        borderRadius: 10,
        resizeMode: 'cover',
        width: "100%",
        height: hp('20%')
    },
    // checkbox
    listItemStyle: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    // button
    button: {
        alignItems: "center",
        backgroundColor: COLORS.GREY,
        padding: 10
    },
    // picker
    picker: {
        height: 50,
        width: 150
    }
});

export default styles;