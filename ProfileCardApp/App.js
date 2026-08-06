import ProfileCard from "./components/ProfileCard";
import {ScrollView,StyleSheet} from "react-native";

export default function App(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProfileCard
   name="Tumhara naam"
  profession="Tumhari job"
  location="Tumhara sheher"
  bio="Tumhara short intro"
  emoji="🧑‍💻"
  skills="react"
  

/>

<ProfileCard
   name="Tumhara naam"
  profession="Tumhari job"
  location="Tumhara sheher"
  bio="Tumhara short intro"
  emoji="🧑‍💻"
  skills="js"

/>


<ProfileCard
   name="Tumhara naam"
  profession="Tumhari job"
  location="Tumhara sheher"
  bio="Tumhara short intro"
  emoji="🧑‍💻"
  skills="html"

/>


<ProfileCard
   name="Tumhara naam"
  profession="Tumhari job"
  location="Tumhara sheher"
  bio="Tumhara short intro"
  skills="css"

/>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,              // ScrollView ko full screen height deta hai
    justifyContent: "center", // Cards vertically center
    alignItems: "center",     // Cards horizontally center
    gap: 16,                  // Har card ke beech equal gap
    paddingVertical: 20,      // Upar neeche thoda space
  }
})

