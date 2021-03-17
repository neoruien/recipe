import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text
} from 'react-native';

function ReadRecipePage({route, navigation}) {
    const recipe = route.params;
    return (
        <SafeAreaView>
            <View>
                <Text>Title: {recipe.title}</Text>
            </View>
        </SafeAreaView>
    )
}
export default ReadRecipePage