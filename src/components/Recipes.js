import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import { recipes } from '../backend/data';

export default class Recipes extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {recipes.map((recipe, index) => <Text>{recipe.title}</Text>)}
        </ScrollView>
      </View>
    );
  }
}