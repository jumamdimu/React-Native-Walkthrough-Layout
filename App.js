import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const UserContext = React.createContext()

const DisplayMsg = () =>{
  
  const user = React.useContext(UserContext)

  return(
    <SafeAreaView>
      <Text style={styles.text}>{`Hello ${user}`}</Text>
    </SafeAreaView>
  )
}

const App = () => {
  const [title, setTitle] = React.useState("loading...")
  const [count, setCount] = React.useState(0)
  const [user, setUser] = React.useState("...")

  React.useEffect(()=>{
    setTimeout(()=>{
      setTitle("My Starter Program")
      setUser("Jay")
    }, 5000)
  }, [])

  return(
    <UserContext.Provider value={user}>
      <LinearGradient colors={[ "#171717", "#494949"]} style={styles.container}>
        <StatusBar color={"#f0f0f0"} backgroundColor={"#494949"}></StatusBar>
        <View>
          <Text style={styles.text}>{title}</Text>
          <Text>{user}</Text>
          <DisplayMsg user={user} />
          <TouchableOpacity 
            style={{ alignItems: "center", justifyContent: "center",  marginTop: 10, width: 100, height: 40, borderWidth: 1, borderRadius: 5, borderColor: "#f1f1f1"}}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.text}>Increment</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{count}</Text>
        </View>      
      </LinearGradient>
    </UserContext.Provider>
  )
}

export default App

const styles = new StyleSheet.create(
  {
    container: {
      flex:  1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#f0f0f0"
    }
  })