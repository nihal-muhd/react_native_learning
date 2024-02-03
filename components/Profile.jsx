import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { s } from "./Profile.style";
import { FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  return (
    <>
      <View style={s.card}>
        <View style={s.header}>
          <View>
            <Image
              style={s.avatar}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
          </View>
          <View style={s.text}>
            <Text style={s.name}>Nihal</Text>
            <Text>Hi i am React Native Developer,lets get in touch</Text>
          </View>
        </View>
        <View style={s.social} >
        <FontAwesome name="twitter-square" size={24} color="black" />
        <FontAwesome name="linkedin-square" size={24} color="black" />
        <FontAwesome name="github-square" size={24} color="black" />
        </View>
      </View>
    </>
  );
};

export default Profile;
