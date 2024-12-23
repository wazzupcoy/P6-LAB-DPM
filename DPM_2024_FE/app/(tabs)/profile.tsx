import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedView } from "@/components/ThemedView";

const ProfileScreen = () => {
	const router = useRouter();

	const handleLogout = () => {
		Alert.alert(
			"Logout",
			"Are you sure you want to logout?",
			[
				{
					text: "Cancel",
					style: "cancel",
				},
				{
					text: "OK",
					onPress: async () => {
						await AsyncStorage.removeItem("token");
						router.replace("/auth/LoginScreen");
					},
				},
			],
			{ cancelable: false }
		);
	};

	return (
		<ThemedView style={styles.container}>
			<Text style={styles.title}>Profile Screen</Text>
			<Button
				title="Logout"
				onPress={handleLogout}
			/>
		</ThemedView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
	},
});

export default ProfileScreen;
