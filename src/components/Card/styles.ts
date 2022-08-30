import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray,
    borderRadius: 20,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10,
  },
  topicos: {
    flexDirection: "row",
  },
  img: {
    width: 100,
    height: 100,
  },
})

export default styles