import { Text, View, StyleSheet } from "react-native";

const ProfileCard = ({ name, profession, location, bio, skills, emoji = "👤" }) => {
  return (
    <View style={styles.card}>

      {/* Top accent bar */}
      <View style={styles.accentBar} />

      {/* Avatar Circle */}
      <View style={styles.avatarCircle}>
        <Text style={styles.avatarEmoji}>{emoji}</Text>
      </View>

      {/* Name */}
      <Text style={styles.name}>{name}</Text>

      {/* Profession Badge */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{profession}</Text>
      </View>

      {/* Location */}
      <Text style={styles.location}>📍 {location}</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Bio */}
      <Text style={styles.bio}>{bio}</Text>

      {/* Skills Chip */}
      <View style={styles.skillsRow}>
        <Text style={styles.skillsLabel}>🛠️ Skills: </Text>
        <Text style={styles.skillsValue}>{skills}</Text>
      </View>

    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "88%",
   
    paddingBottom: 20,
    alignItems: "center",
    overflow: "hidden",       // accentBar ke liye zaroor
    // Android shadow
    elevation: 8,
    // iOS shadow
    shadowColor: "#6C63FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  // Purple top bar
  accentBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#6C63FF",
    marginBottom: 20,
  },

  // Emoji circle
  avatarCircle: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: "#EEF0FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#6C63FF",
  },
  avatarEmoji: {
    fontSize: 36,
  },

  // Name
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A2E",
    marginBottom: 8,
    letterSpacing: 0.5,
  },

  // Purple badge
  badge: {
    backgroundColor: "#6C63FF",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },

  // Location
  location: {
    fontSize: 13,
    color: "#888",
    marginBottom: 14,
  },

  // Horizontal line
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#EEEEEE",
    marginBottom: 14,
  },

  // Bio
  bio: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 14,
  },

  // Skills row
  skillsRow: {
    flexDirection: "row",
    backgroundColor: "#F4F3FF",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillsLabel: {
    fontSize: 12,
    color: "#6C63FF",
    fontWeight: "bold",
  },
  skillsValue: {
    fontSize: 12,
    color: "#555",
  },
});