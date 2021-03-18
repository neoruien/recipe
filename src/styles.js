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
    // image
    image: {
        borderRadius: 10,
        resizeMode: 'cover',
        width: "100%",
        height: hp('20%')
    },
    input: {
        backgroundColor: 'pink',
        height: 40,
        padding: 10,
        borderRadius: 4
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
});

export default styles;