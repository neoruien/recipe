import React from 'react';
import {
    SafeAreaView, 
    View, 
    Text,
    TextInput,
    Button
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Input from '../components/Input';

function CreateRecipePage() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <SafeAreaView>
            <View>
                <Input label='Username' />
                <Input label='Password' error="Password can't be blank" />
                <Button title='Create' />
    </View>
        </SafeAreaView>
    )
}
export default CreateRecipePage