import React, {useEffect, useState} from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { API_URL_ROOT } from '../utils/constants';

export default function Test() {
    const [{token, dispatch}] = useStateProvider();
    const [topArtistsShort, setTopArtistsShort] = useState(null);
    const [topArtistsMedium, setTopArtistsMedium] = useState(null);
    const [topArtistsLong, setTopArtistsLong] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        const getArtist = async (term) => {
            const res = await axios.get(API_URL_ROOT + `top/artists?limit=50&time_range=${term}`, {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                switch(term) {
                    case 'short_term':
                        setTopArtistsShort(response.data);
                        break;
                    case 'medium_term':
                        setTopArtistsMedium(response.data);
                        break;
                    case 'long_term':
                        setTopArtistsLong(response.data);
                        setLoading(false)
                        break;
                    default:
                        break;

                }
                
            });
        }
        getArtist('short_term');
        getArtist('medium_term');
        getArtist('long_term')
    }, [token, dispatch])

    if (!topArtistsShort) return null
    if (!topArtistsMedium) return <>loading</>
    if (!topArtistsLong) return null


    return (
        <div>
            <div>
                <h1>Top Artists Short Term</h1>
                <ol>
                    {topArtistsShort.items.map(artist => (
                        <li key={artist.name}>{artist.name}</li>
                    ))}
                </ol>
            </div>

            <div>
                <h1>Top Artists Medium</h1>
                <ol>
                    {topArtistsMedium && topArtistsMedium.items.map(artist => 
                        <li key={artist.name}>{artist.name}</li>
                    )}
                </ol>
            </div>

            <div>
                <h1>Top Artists Long Term</h1>
                <ol>
                    {topArtistsLong && topArtistsLong.items.map(artist => 
                        <li key={artist.name}>{artist.name}</li>
                    )}
                </ol>
                
            </div>
        </div>
    )
}
