import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {/* Sppinet de loading */}
            <ActivityIndicator color='#7C3AED'/> 
        </View>
    )
}