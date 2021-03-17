import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    Button,
    ScrollView
} from 'react-native';
import { recipes } from '../backend/data';

function HomePage(props) {
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    {recipes.map(recipe =>
                        <Button
                            title={recipe.title}
                            key={recipe.id}
                            onPress={() => props.navigation.navigate('Read Recipe', recipe)}
                        />
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default HomePage