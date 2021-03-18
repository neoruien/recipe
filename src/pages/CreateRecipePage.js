import React, {useState} from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../styles';

const TYPE = { // based on the 7 meals of the day
    BREAKFAST: 'Breakfast',
    BRUNCH: 'Brunch',
    SNACK: 'Snack',
    LUNCH: 'Lunch',
    TEA: 'Tea',
    SUPPER: 'Supper',
    DINNER: 'Dinner'
};

const DIFFICULTY = {
    EASY: 'Easy',
    MEDIUM: 'Medium',
    HARD: 'Hard',
    EXPERT: 'Masterchef'
};

function CreateRecipePage() {
    const [data, setData] = useState({
        title: '',
        image: '',
        ingredients: '',
        instructions: '',
        type: TYPE.BREAKFAST,
        duration: '',
        difficulty: DIFFICULTY.EASY,
        quantity: 1,
        isValidTitle: true
    })

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Create recipe</Text>
            </View>
        </SafeAreaView>
    )
}
export default CreateRecipePage