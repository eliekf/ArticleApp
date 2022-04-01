
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  Platform,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Field from '../components/Field';
import Articles from '../components/Articles';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { } from '@react-navigation/native-stack';


  const ArticleScreen = props => {
   const [isLoading, setIsLoading] = useState(false);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const [error, setError] = useState();
   const products = useSelector(state => state.products.availableArticles);
   const dispatch = useDispatch();

  const loadArticles = useCallback(async () => {
     setError(null);
     setIsRefreshing(true);
     try {
       await dispatch(productsActions.fetchArticles());
     } catch (err) {
       setError(err.message);
    }
     setIsRefreshing(false);
   }, [dispatch, setIsLoading, setError]);

   useEffect(() => {
     const willFocusSub = props.navigation.addListener(
              'willFocus',
       loadArticles
     );

    return () => {
       willFocusSub.remove();
     };
   }, [loadArticles]);

   useEffect(() => {
    setIsLoading(true);
     loadArticles().then(() => {
       setIsLoading(false);
     });
   }, [dispatch, loadArticles]);

   const selectArticleHandler = (id, title, body, firstName, lastName, date, image) => {
     props.navigation.navigate('Articles', {
       ArticleId: id,
       ArticleTitle: title,
       ArticleBody: body,
       ArticleImage: image,
       ArticleDate: date

     });
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text>An error occurred!</Text>
        <Button
          title="Try again"
          onPress={loadArticles}        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large"  />
      </View>
    );
  }

  if (!isLoading && Articles.length === 0) {
    return (
      <View style={styles.centered}>
        < loadArticles />
      </View>
    );
  }
  
  const reloadArticles = async () => {
    setIsReloadingData(true);
    setIsLoadingData(false);
  };
  
  const articlesReached = () => {
    if (!isFiltered) loadArticles();
  };

  return (
    <FlatList
            renderItem={itemData => (
              <Articles
                title={itemData.item.title}
                body={itemData.item.body}
                image={itemData.item.image}
              />
            )}
            onEndReached={articlesReached}
            refreshing={isReloadingData}
            onRefresh={reloadArticles}
          />
  );
};

ArticleScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Available Articles',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButtons}>
        <Item
          title="Read More"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButtons}>
        <Item
          title="View"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('articleScreen');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default ArticleScreen;
