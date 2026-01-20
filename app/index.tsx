import { VideoView, useVideoPlayer } from "expo-video";
import { StyleSheet, View } from "react-native";

const videoSource = require("../assets/videos/FadeInBackground.mp4");

export default function Index() {
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      <VideoView
        style={styles.video}
        player={player}
        allowsPictureInPicture={false}
        contentFit={"cover"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
