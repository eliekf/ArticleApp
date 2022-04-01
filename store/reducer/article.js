// import {TabActions} from '@react-navigation/native';
// import Article from '../../models/Article';


// const initialState = {
//   articles: [],
//   filteredArticles: [],
//   currentPage: 0,
// };

// const articles = (state = initialState, action) => {
//   switch (action.type) {
//     case loadArticles:
//       const newArticles = [];
//       for (var i = 0; i < action.articles.docs.length; i++) {
//         let article = action.articles.docs[i];
//         const image = null;

//         if (article.multimedia.length != 0)
//           <Text> No articles found </Text>

//         if (!isFound) {
//           newArticles.push(
//             new Article(
//               article._id,
//               article.title,
//               article.firstname,
//               article.lastname,
//               article._date,
//               image,
//             ),
//           );
//         }
//       }
//       return {
//         ...state,
//         articles: state.articles.concat(newArticles),
//         filteredArticles: [],
//         currentPage: state.currentPage + 1,
//       };
//     case reloading:
//       const fetchArticles = [];
//       for (var i = 0; i < action.articles.docs.length; i++) {
//         let article = action.articles.docs[i];
//         const image = null;
//         if (article.multimedia.length != 0)
//           <Text> No articles found </Text>

//         fetchArticles.push(
//           new Article(
//             article._id,
//             article.headline.main,
//             article.title,
//             article.firstname,
//             article.lastname,
//             article.date,
//             image,
//           ),
//         );
//       }
//       return {
//         ...state,
//         articles: fetchArticles,
//         currentPage: 1,
//       };
//   }
//   return initialState;
// };

// export default articles;
