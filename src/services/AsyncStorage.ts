import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { Movie } from '../models/movie.model';


export const getKeys = async():Promise<string[]> => {
    let keys=[];
    try{
        keys= await AsyncStorage.getAllKeys();
    }        
    catch(e){
        console.log("error");
    }
    return keys;
}

export const removeItembyKey = async (key:string) => {
    try {
        await AsyncStorage.removeItem(key);

    }
    catch(e){
        console.log("error at key: ",key);
    }

}

export const getAllFavorites = async (keys:string[]) => {
    try {
        return await AsyncStorage.multiGet(keys);
    }
    catch(e){
        console.log("Error");
        return [];
    }
}

export const addItemtoFavorites = async (key:string,item:Movie) => {
    try {
        await AsyncStorage.setItem(key,JSON.stringify(item));
    }
    catch(e){
        console.log("error at key: ",key);
    }

}