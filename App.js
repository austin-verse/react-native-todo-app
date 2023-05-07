import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Pressable,
	View,
	TextInput,
} from "react-native";
import { theme } from "./colors";
import { useState } from "react";

export default function App() {
	const [working, setWorking] = useState(true);
	const [text, setText] = useState("");
	const travel = () => {
		setWorking(false);
		console.log("travel");
	};
	const work = () => {
		setWorking(true);
		console.log("work");
	};
	const onChangeText = (payload) => {
		setText(payload);
	};
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<View style={styles.header}>
				<TouchableOpacity onPress={work}>
					<Text
						style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
					>
						WORK
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={travel}>
					<Text
						style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
					>
						TRAVEL
					</Text>
				</TouchableOpacity>
			</View>
			<TextInput
				style={styles.input}
				value={text}
				placeholder={working ? "Add a To Do" : "Where do you want to go?"}
				onChangeText={onChangeText}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.bg,
		paddingHorizontal: 20,
	},
	header: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 100,
	},
	btnText: {
		fontSize: 38,
		fontWeight: "600",
	},
	input: {
		backgroundColor: "white",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 30,
		marginTop: 20,
		fontSize: 18,
	},
});
