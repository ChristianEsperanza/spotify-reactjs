import React from 'react'
import styled from 'styled-components';
import config from '../config';
import {SCOPES, API_URL} from '../utils/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height:20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black; 
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const handleButtonClick= () => {
  const url = `${API_URL}?client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URL}&scope=${SCOPES.join(
    " "
    )}&response_type=token&show_dialog=true`;

  window.location.href = url;
}


export default function Login() {
  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt=""/>
      <button onClick={handleButtonClick}>Connect Spotify</button>
    </Container>
  )
}

