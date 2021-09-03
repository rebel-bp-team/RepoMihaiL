import React, { useEffect, useState} from 'react';
import { Pressable, Image ,Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { addItemtoFavorites ,removeItembyKey } from '../../services/AsyncStorage'
// import { Storage } from 'aws-amplify';
import { Movie } from '../../models/movie.model';
import styles from './styles';


const MovieItem = ({ movie, onFavoritesChange }: {movie: Movie, onFavoritesChange?:any}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const onValueChange = (newToggleValue) => {
        setToggleCheckBox(newToggleValue);
    }
    useEffect(()  => {
        if (toggleCheckBox){
            const onToggleChange = async () => {
                await addItemtoFavorites(movie.imdbID,movie);
                await onFavoritesChange();
             }
             onToggleChange();
        }
    }, [toggleCheckBox])
    return (
        <Pressable style={styles.container}>
           { onFavoritesChange? <CheckBox style={styles.checkbox}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={ onValueChange }
                    tintColors={{ true: '#F15927', false: 'yellow' }}
            />:<></>
            }
            <Image style={styles.image} source={{ uri: movie.Poster }} />
            <Text style={styles.title}>{movie.Title}</Text>
        </Pressable>
    )
}

export default MovieItem