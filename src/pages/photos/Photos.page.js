import React from 'react';
import bima from '../img/1234.jpg'


import '../Home.css';


const PhotosPage = () => {
    return (
        <div>
            <h1 className='h1-photos'> BMW M6</h1>
            <div className='grid-container'>
              <img className='photos' src={bima}></img>
                   </div>
        </div>
        
    );
};

export default PhotosPage;