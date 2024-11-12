import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';

// Custom Component
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    )
}

const MyApp = () => {
    // let username = "";
    // let pw = "";
    const [pw, setPw] = useState('');
    const [username, setUsername] = useState('');
    const [userType, setUserType] = useState('');

  return (
      <View style={{padding: 20, paddingTop: 50}}>
          {/*EXERCISE 1B*/}
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setUserType(value)}
              items={[
                  {label: 'Admin', value: 'Admin'},
                  {label: 'Guest', value: 'Guest'}
              ]}
          />

          {/*STATE*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}

          {/*<TouchableOpacity onPress={()=>ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<Text>{pw}</Text>*/}


          {/*Getting Text Input Values*/}
          {/*<Text>Username:</Text>*/}
          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => username = text} />*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth:1}}*/}
          {/*           onChangeText={(text) => pw = text} />*/}
          {/*<TouchableOpacity onPress={() => ToastAndroid.show(pw, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1A*/}
          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}} />*/}

          {/*EXERCISE 1C & 1D*/}
          {/*<Button*/}
          {/*    title="LOG IN"*/}
          {/*    onPress={() => Alert.alert("Welcome!")}*/}
          {/*/>*/}

          {/*EXERCISE 1E*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => Alert.alert("2nd Welcome!")}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1F*/}
          {/*<TouchableOpacity*/}
          {/*    onPress={() => ToastAndroid.show("Welcome!",ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN 2</Text>*/}
          {/*</TouchableOpacity>*/}

          {/*EXERCISE 1G*/}

          {/*<Text>User Name:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => setUsername(text)}*/}
          {/*/>*/}

          {/*<Text>Password:</Text>*/}
          {/*<TextInput style={{borderWidth: 1}}*/}
          {/*           onChangeText={(text) => setPw(text)}*/}
          {/*/>*/}

          <InputBox label="User Name:" onChangeText={(text) => setUsername(text)}/>
          <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

          {/*<TouchableOpacity*/}
          {/*    onPress={() => ToastAndroid.show("Welcome " + userType + " " + username, ToastAndroid.SHORT)}>*/}
          {/*    <Text>LOG IN</Text>*/}
          {/*</TouchableOpacity>*/}

          <TouchableOpacity onPress={()=> {
              const correctPassword = '123';
              let mymessage = 'Error! Wrong Password!';
              if (pw == correctPassword) {
                  mymessage = 'Welcome ' + userType + ' ' + username;
              }
              ToastAndroid.show(mymessage, ToastAndroid.SHORT);
          }
          }>
              <Text>LOG IN</Text>
          </TouchableOpacity>

      </View>
  );
};

export default MyApp;
