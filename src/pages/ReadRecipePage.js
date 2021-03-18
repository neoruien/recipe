import React, {useState} from 'react';
import {
    SafeAreaView, 
    View,
    Text,
    Image,
    FlatList
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CheckboxList from 'rn-checkbox-list';
import styles from '../styles';
import { finishedCookingCount } from '../backend/data';

function ReadRecipePage({route, navigation}) {
    const recipe = route.params;
    const finishedCooking = () => {
        console.log("finishedCooking")
        console.log(finishedCookingCount)
    }
    const editRecipe = () => {
        console.log("editRecipe")
    }
    const deleteRecipe = () => {
        console.log("deleteRecipe")
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <Image source={{uri: recipe.image}} style={styles.image}/>
                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flex: 1}}>
                    <Text style={styles.recipeSubtitle}>{recipe.duration}</Text>
                    <Text style={styles.recipeSubtitle}>{recipe.difficulty}</Text>
                    <Text style={styles.recipeSubtitle}>{recipe.quantity} people</Text>
                </View>
                <Text style={styles.recipeTitle}>Ingredients</Text>  
                <CheckboxList
                    headerName="All"
                    theme="red"
                    listItems={recipe.ingredients}
                    onChange={({ ids, items }) => console.log('Ingredients list: ', ids)}
                    listItemStyle={styles.listItemStyle}
                />
                <Text style={styles.recipeTitle}>Instructions</Text>
                <CheckboxList
                    headerName="All"
                    theme="red"
                    listItems={recipe.instructions}
                    onChange={({ ids, items }) => console.log('Instructions list: ', ids)}
                    listItemStyle={styles.listItemStyle}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={finishedCooking}
                >
                    <Text>Finished cooking!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={editRecipe}
                >
                    <Text>Edit recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={deleteRecipe}
                >
                    <Text>Delete recipe</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ReadRecipePage