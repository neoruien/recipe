import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    ScrollView,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';
import styles from '../styles';
import { recipes } from '../backend/data';

function HomePage(props) {
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    {recipes.map(recipe =>
                        <TouchableOpacity
                            key={recipe.id}
                            onPress={() => props.navigation.navigate('Read Recipe', recipe)}
                        >
                            <Image source={{uri: recipe.image}} style={styles.image}/>
                            <View style={styles.whiteContainer}>
                                <Text style={styles.recipeSubtitle}>{recipe.type}</Text>
                                <Text style={styles.recipeTitle}>{recipe.title}</Text>
                                <View style={{justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', flex: 1}}>
                                    <Text style={styles.recipeSubtitle}>{recipe.duration}</Text>
                                    <Text style={styles.recipeSubtitle}>{recipe.difficulty}</Text>
                                    <Text style={styles.recipeSubtitle}>{recipe.quantity} people</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomePage