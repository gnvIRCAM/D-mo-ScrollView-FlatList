import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

function fakeUsers(n_users) {
  // Fonction pour générer un nombre arbitraire de faux "utilisateurs"
  var users = new Array();
  for (i=0; i<=n_users; ++i) {
    users.push({
      'username':i, 
      'first_name': Math.floor(Math.random()*1e6),
      'last_name': Math.floor(Math.random()*1e6),});
  }
  return users;
}

export default function App() {
  const userData = fakeUsers(2000); 
  // const userData = require('./assets/users.json'); // Décommentez pour avoir une liste de vrais utilisateurs
  const [users, setUsers] = useState(userData);
  const [display, setDisplay] = useState(true); 
  const [textInput, setTextInput] = useState();

  return (
    <View style={styles.container}>
      <TextInput 
        onChangeText={setTextInput} 
        placeholder='Uncontrolled'
        />
      <TextInput 
        value={textInput}
        onChangeText={setTextInput} 
        placeholder='Controlled'
        />
      <Button onPress={() => setDisplay(!display)} title='Display' />
      {/* {display && 
      <ScrollView>
        {users.map((user) => <Text key={user.username}>
          User {user.username}, Name: {user.first_name}, 
        </Text>)}
      </ScrollView>} */} 
      {display && 
      <FlatList
        data={users} // liste de données
        keyExtractor={item => item.username} // mapping élément -> id
        renderItem={({item}) => 
        <Text>
          User : {item.username},
          Name : {item.first_name}
        </Text>}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
