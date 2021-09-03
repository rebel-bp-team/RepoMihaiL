import React, {useState, useEffect} from 'react';
import { FlatList, Image, Text, TextInput, View, } from 'react-native';
import MovieItem from '../MovieItem/MovieItem';
import styles from './styles';
import axios from 'axios';
import { filterMovies } from '../../services/MovieService'
import { getAllFavorites ,getKeys } from '../../services/AsyncStorage';
import { Movie } from '../../models/movie.model';



const Movies= prop => {
    const[searchText,setSearchText]= useState("");
    const[resultList,setResultList]= useState([]);
    const[favoriteList,setFavoriteList]= useState([]);
    

    useEffect(() => {
        search(searchText);
        }, [searchText])

    useEffect(() => {
        const onLoad = async () => {
           await onFavoritesLoad();
        }
        onLoad();
        }, [])

        const onChangeText = (text:string) => {
            setSearchText(text);
        };
        const onFocusText = () => {setSearchText("")};

        const search= (text:string) =>{
            filterMovies(text).then((data) => {
                setResultList(data);
            }) 
        }

        const onFavoritesLoad= async () => {
            const allKeys= await getKeys();
            const favorites = await getAllFavorites(allKeys);
            const favoritesMovieEntites: Movie[]= [];
            favorites.forEach(element => {
                favoritesMovieEntites.push(JSON.parse(element[1]));
            });
            setFavoriteList(favoritesMovieEntites);
        }
    return(
            <View style={styles.container}>
            <View style={styles.searchContainer}>
            <Image style={styles.icon} source={require('./search_icon.png')} />
            <TextInput 
                style={styles.searchbox}
                onChangeText = { onChangeText }
                onFocus = { onFocusText }
                value={searchText}
            />
            </View>
            {resultList?<Text style={styles.title}>List Of Movies</Text>:<></>}
                <FlatList
                    data={ resultList }
                    renderItem={({item}) => <MovieItem movie={item} onFavoritesChange ={onFavoritesLoad} isFavorite={false} /> }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            <Text style={styles.title}>List Of Favorites</Text>
            <FlatList
                    data={ favoriteList }
                    renderItem={({item}) => <MovieItem movie={item} onFavoritesChange ={onFavoritesLoad} isFavorite={true} /> }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
    );
}



    
    export default Movies;