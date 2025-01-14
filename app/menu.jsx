import { View, Text, StyleSheet, ImageBackground, Pressable, Appearance, Platform, ScrollView, SafeAreaView, FlatList, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from "../constants/MenuItems";
import MenuImages from '../constants/MenuImages'; // Ensure correct import of MenuImages

export default function MenuScreen() {
    // Get the color scheme (light or dark) from the device settings
    const colorScheme = Appearance.getColorScheme();

    // Determine the theme based on the color scheme
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    // Create styles based on the theme and color scheme
    const styles = createStyles(theme, colorScheme);

    // Use ScrollView for web and SafeAreaView for other platforms
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />

   //! const headerComp = <Text>Top Of List </Text>
    const footerComp = <Text>End Of List </Text>

    return (
        <Container>
            <FlatList
                // Use the MENU_ITEMS array as the data source
                data={MENU_ITEMS}
                // Set a unique key for each item
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={separatorComp}
               //! ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={ styles.footerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                // Render each item in the list
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View>
                            {/* Display the title of the menu item */}
                            <Text style={styles.title}>{item.title}</Text>
                            {/* Display the description of the menu item */}
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        {/* Display the image corresponding to the menu item */}
                        <Image source={MenuImages[item.id - 1]} style={styles.image} />
                    </View>
                )}
            />
        </Container>
    );
}

// Corrected the function name from creatStyles to createStyles
function createStyles(theme, colorScheme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        separator: {
            height: 1,
            backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            width: '50%',
            maxWidth: 300,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footerComp: {
            marginHorizontal: 'auto' 
        }
    });
}