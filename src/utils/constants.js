export const SCOPES = [
    "playlist-read-private",
    "playlist-read-collaborative", 
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "user-library-read",
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
];

export const API_URL = "https://accounts.spotify.com/authorize";

export const reducerCases = {
    SET_TOKEN: "SET_TOKEN"
}

export const API_URL_ROOT = "https://api.spotify.com/v1/me/" 