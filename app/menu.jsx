import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    Appearance,
    Platform,
    ScrollView,
    SafeAreaView,
    FlatList,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For the language toggle icon
import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '../constants/MenuItems';
import MenuImages from '../constants/MenuImages'; // Ensure correct import of MenuImages

export default function MenuScreen() {
    const [language, setLanguage] = useState('en'); // State for language toggle

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    // Translations for English and Arabic
    const translations = {
        en: {
            footer: "End Of Menu",
            noItems: "No Items",
        },
        ar: {
            footer: "نهاية القائمة",
            noItems: "لا توجد عناصر",
        },
    };

    const t = translations[language];

    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme, language);

    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    const separatorComp = <View style={styles.separator} />;
    const footerComp = <Text style={styles.footerText}>{t.footer}</Text>;

    return (
        <Container style={styles.screenBackground}>
            {/* Language Toggle */}
            <Pressable
                style={styles.languageButton}
                onPress={toggleLanguage}
            >
                <Ionicons name="globe" size={24} color="#fff" />
                <Text style={styles.languageText}>{language === 'en' ? 'العربية' : 'English'}</Text>
      
            </Pressable>

            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={() => separatorComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>{t.noItems}</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                                {language === 'ar' ? item.title_ar : item.title}
                            </Text>
                            <Text style={styles.menuItemText}>
                                {language === 'ar' ? item.description_ar : item.description}
                            </Text>
                        </View>
                        <Image
                            source={MenuImages[item.id - 1]}
                            style={styles.menuImage}
                        />
                    </View>
                )}
            />
        </Container>
    );
}

// Function to create styles based on the theme, color scheme, and language
function createStyles(theme, colorScheme, language) {
    return StyleSheet.create({
        screenBackground: {
            backgroundColor: theme.background, // Add background color for the screen
            flex: 1,
        },
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
            color: theme.text,
            marginHorizontal: 'auto',
        },
        footerText: {
            fontSize: 16,
            textAlign: 'center',
            color: theme.text,
            marginVertical: 10,
        },
        row: {
            flexDirection: language === 'ar' ? 'row-reverse' : 'row',
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
            paddingHorizontal: 10,
            flexGrow: 1,
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        menuItemText: {
            color: theme.text,
            textAlign: language === 'ar' ? 'right' : 'left',
        },
        menuImage: {
            width: 100,
            height: 100,
            borderRadius: 10,
        },
        languageButton: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#333', // Darker background color for the button
            borderRadius: 50,
            margin: 10,
            alignSelf: 'flex-end',
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        languageText: {
            color: '#fff', // White text color
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: 5,
        },
    });
}
