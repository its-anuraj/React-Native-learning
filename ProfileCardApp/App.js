import ProfileCard from "./components/ProfileCard";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ProfileCard
        name="Arnav Jaiswal"
        profession="Full Stack Developer"
        location="Noida, Uttar Pradesh"
        bio="Passionate about building scalable apps with React Native and Node.js."
        emoji="🧑‍💻"
        skills="React Native, JavaScript, Node.js"
      />

      <ProfileCard
        name="Rahul Kumar"
        profession="Frontend Developer"
        location="New Delhi"
        bio="Love creating pixel-perfect UIs and smooth user experiences."
        emoji="🚀"
        skills="React, TypeScript, CSS"
      />

      <ProfileCard
        name="Priya Sharma"
        profession="UI/UX Designer"
        location="Mumbai, Maharashtra"
        bio="Design is not just how it looks — it is how it works."
        emoji="🎨"
        skills="Figma, Adobe XD, Prototyping"
      />

      {/* No emoji passed → default "👤" will be used */}
      <ProfileCard
        name="Aman Verma"
        profession="Data Analyst"
        location="Bengaluru, Karnataka"
        bio="Turning raw data into meaningful insights every single day."
        skills="Python, SQL, Power BI"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingVertical: 20,
  }
});
