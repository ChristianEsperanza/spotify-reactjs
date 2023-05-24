import React from 'react'
import styled from "styled-components";
import { API_URL_ROOT } from '../utils/constants';
import Test from './Test';

const Container = styled.div``;

export default function Spotify() {
  return (
    <Container>
        <div className="spotify_body">
            <div className="body">
                <div className="body_contents">
                </div>
            </div>
        </div>
    </Container>
  )
}
