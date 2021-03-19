import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View, 
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import NumericInput from 'react-native-numeric-input'
import styles from '../styles';

const type = [
    {name: 'Breakfast'},
    {name: 'Brunch'},
    {name: 'Snack'},
    {name: 'Lunch'},
    {name: 'Tea'},
    {name: 'Supper'},
    {name: 'Dinner'}
];

const difficulty = [
    {name: 'Easy'},
    {name: 'Medium'},
    {name: 'Hard'},
    {name: 'Masterchef'}
]

function CreateRecipePage() {
    const [value, setValue] = useState({
        title: '',
        image: '',
        ingredients: [],
        newIngredient: '',
        instructions: [],
        newInstruction: '',
        type: type[0].name,
        duration: 30,
        difficulty: difficulty[0].name,
        quantity: 1,
    })
    const addIngredient = () => {
        setValue(prevValue => ({
            ingredients: [...prevValue.ingredients, {name: value.newIngredient}]
        }));
    }
    const deleteAllIngredients = () => {
        setValue({...value, ingredients: []});
    }
    const addInstruction = () => {
        setValue(prevValue => ({
            instructions: [...prevValue.instructions, {name: value.newInstruction}]
        }));
    }
    const deleteAllInstructions = () => {
        setValue({...value, instructions: []});
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Create a recipe</Text>
                <View style={styles.form}>
                    {/* Title */}
                    <Text style={styles.recipeTitle}>Title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter title'
                        placeholderTextColor='lightgrey'
                        onChangeText={text => setValue({...value, title: text})}
                        value={value.title}
                        autoCompleteType='off'
                    />
                    {/* Image */}
                    <Text style={styles.recipeTitle}>Image</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter image url'
                        placeholderTextColor='lightgrey'
                        onChangeText={text => setValue({...value, image: text})}
                        value={value.image}
                        autoCompleteType='off'
                    />
                    {/* Ingredients */}
                    <Text style={styles.recipeTitle}>Ingredients</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter ingredient'
                        placeholderTextColor='lightgrey'
                        onChangeText={text => setValue({...value, newIngredient: text})}
                        value={value.newIngredient}
                        autoCompleteType='off'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => addIngredient()}
                    >
                        <Text>Add ingredient</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => deleteAllIngredients()}
                    >
                        <Text>Delete all ingredients</Text>
                    </TouchableOpacity>
                    <Text>Ingredients list:</Text>
                    {value.ingredients.map((item, index) =>
                        <Text key={index}>{item.name}</Text>
                    )}
                    {/* Instructions */}
                    <Text style={styles.recipeTitle}>Instructions: {value.instructions.length}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter instruction'
                        placeholderTextColor='lightgrey'
                        onChangeText={text => setValue({...value, newInstruction: text})}
                        value={value.newInstruction}
                        autoCompleteType='off'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => addInstruction()}
                    >
                        <Text>Add instruction</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => deleteAllInstructions()}
                    >
                        <Text>Delete all instructions</Text>
                    </TouchableOpacity>
                    <Text>Instructions list:</Text>
                    {value.instructions.map((item, index) =>
                        <Text key={index}>{item.name}</Text>
                    )}
                    {/* Type */}
                    <Text style={styles.recipeTitle}>Type</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={value.type}
                        onValueChange={item => setValue({...value, type: item})}
                    >
                        {type.map((item, index) =>
                            <Picker.Item label={item.name} value={item.name} key={index}/>
                        )}
                    </Picker>
                    {/* Difficulty */}
                    <Text style={styles.recipeTitle}>Difficulty</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={value.difficulty}
                        onValueChange={item => setValue({...value, difficulty: item})}
                    >
                        {difficulty.map((item, index) =>
                            <Picker.Item label={item.name} value={item.name} key={index}/>
                        )}
                    </Picker>
                    {/* Duration */}
                    <Text style={styles.recipeTitle}>Duration (in minutes)</Text>
                    <NumericInput
                        value={value.duration}
                        onChange={item => {
                            if (item < 1) {
                                setValue({...value, duration: 1})
                            } else if (item > 999) {
                                setValue({...value, duration: 999})
                            } else {
                                setValue({...value, duration: item})
                            }
                        }}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={240}
                        totalHeight={50}
                        iconSize={25}
                        step={1}
                        minValue={1}
                        maxValue={999}
                        valueType='number'
                        rounded
                        textColor='#B0228C'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#EA3788'
                        leftButtonBackgroundColor='#E56B70'
                    />
                    {/* Quantity */}
                    <Text style={styles.recipeTitle}>Quantity</Text>
                    <NumericInput
                        value={value.quantity}
                        onChange={item => {
                            if (item < 1) {
                                setValue({...value, quantity: 1})
                            } else if (item > 999) {
                                setValue({...value, quantity: 999})
                            } else {
                                setValue({...value, quantity: item})
                            }
                        }}
                        onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                        totalWidth={240}
                        totalHeight={50}
                        iconSize={25}
                        step={1}
                        minValue={1}
                        maxValue={999}
                        valueType='number'
                        rounded
                        textColor='#B0228C'
                        iconStyle={{ color: 'white' }}
                        rightButtonBackgroundColor='#EA3788'
                        leftButtonBackgroundColor='#E56B70'
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CreateRecipePage