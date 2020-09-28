import {NavigationActions} from 'react-navigation';
import firestore from '@react-native-firebase/firestore';

let _navigator;

export default class Repository {
  collection = '';

  constructor(collection) {
    this.collection = collection;
  }

  async getDoc(docPath) {
    try {
      const doc = await firestore()
        .collection(this.collection)
        .doc(docPath)
        .get();
      if (doc.exists) {
        const data = doc.data();
        return {id: doc.id, ...data};
      }
      return null;
    } catch (error) {
      return {error};
    }
  }

  async getAllDocs() {
    try {
      const result = await firestore().collection(this.collection).get();

      return result['_docs'].map((doc) => {
        return {id: doc.id, ...doc.data()};
      });
    } catch (error) {
      return {error};
    }
  }
}

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
  return {routeName, params};
};

// add other navigation functions that you need and export them

export {navigate, setTopLevelNavigator};
