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
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>No Items</Text>}
                // Render each item in the list
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            {/* Display the title of the menu item */}
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            {/* Display the description of the menu item */}
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        {/* Display the image corresponding to the menu item */}
                        <Image
                            source={MenuImages[item.id - 1]} style={styles.image}
                            style={styles.MenuImages} />
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
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        menuTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
        },
        MenuImages: {
            width: 100,
            height: 100,

        },


    });
}