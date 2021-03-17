import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    Button,
    ScrollView
} from 'react-native';
import { recipes } from '../backend/data';

function HomePage() {
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Go to Read Recipe"
                    onPress={() => props.navigation.navigate('Read Recipe')}
                />
                <ScrollView>
                    {recipes.map((recipe, index) => <Text>{recipe.title}</Text>)}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default HomePage