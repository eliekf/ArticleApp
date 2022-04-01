export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loadArticles = (token, currentPage) => {
    return async dispatch => {
      const response = await fetch(
        'http://34.245.213.76:3000/articles?page=${currentPage}',
        {
          method: 'GET',
          headers: {
            Authorization: '${token}',
          },
        },
      );
  
      if (!response.ok) {
          const errorResData = await response.json();
        throw new Error('Something went wrong!');
      }
  
      const resData = await response.json();
      console.log(resData.response)
      dispatch(authenticate(resData.accessToken));
    };
  };
  export const logout = () => {
    return {type: LOGOUT};
  };
