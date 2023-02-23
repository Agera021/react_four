import React from 'react';
import check from '../svg/check.svg'
import bmw from '../img/bmw.png'
import bmwm from '../img/m1000rr.webp'
import '../Home.css';

const HomePage = () => {
  const name = "BMWi"
  const surName = "///M"
  const nickName = `@${name.toLowerCase()}_${surName.toLowerCase()}`
  const fullName = `${name} ${surName}`
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;
    return (
        <div className='post'>
        <div className='header'>
          <ul className='information'>
            <img className='photo' src={bmw}></img>
            <li className='fullName'>{fullName}</li>
            <img className='post-svg' src={check}></img>
            <li className='nickName'>{nickName}</li>
            <li className='nickName'>{currentDate}</li>
          </ul>
        </div>
        <p className='post-text'>THIS IS THE INTERNATIONAL WEBSITE OF BMW MOTORRAD.</p>
        <img className='post-img' src={bmwm}></img>
        <div className='footer'>
        </div>
      </div>
    );
};

export default HomePage;