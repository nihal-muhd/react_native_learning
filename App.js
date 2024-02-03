import Profile from "./components/Profile"
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {
  return (
  <SafeAreaProvider>
    <SafeAreaView style={{flex:1,justifyContent:'center',padding:20}}>
      <Profile />
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

