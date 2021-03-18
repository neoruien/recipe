import React from 'react';
import {
    SafeAreaView, 
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import styles from '../styles';

function ReadRecipePage({route, navigation}) {
    const recipe = route.params;
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <Image source={{uri: recipe.image}} style={styles.image}/>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flex: 1}}>
                        <Text style={styles.recipeSubtitle}>{recipe.duration}</Text>
                        <Text style={styles.recipeSubtitle}>{recipe.difficulty}</Text>
                        <Text style={styles.recipeSubtitle}>{recipe.quantity} people</Text>
                    </View>
                    <Text style={styles.recipeTitle}>Ingredients</Text>
                    {recipe.ingredients.map(ingredient => {
                        <Text>ingredient</Text>
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default ReadRecipePage