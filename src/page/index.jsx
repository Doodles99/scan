import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='iphone-x'>
        <div className='iphone-x-1'>
          <div className='left-side'>
            <div className='time'>
              <div className='colon' />
            </div>
          </div>
          <div className='image' />
          <div className='right-side'>
            <div className='wifi' />
            <div className='battery' />
            <div className='mobile-signal' />
          </div>
        </div>
        <div className='left-side-2'>
          <div className='time-3'>
            <div className='unknown' />
          </div>
        </div>
        <div className='right-side-4'>
          <div className='wifi-5' />
          <div className='battery-6' />
          <div className='mobile-signal-7' />
        </div>
      </div>
      <span className='trash-can-qr'>쓰레기통에 있는 QR코드를 비춰주세요!</span>
      <div className='rectangle' />
      <span className='qr-scanning'>QR코드를 인식중입니다...</span>
      <button className='button'>
        <span className='span'>정류장 코드로 입력하기</span>
      </button>
      <div className='home-indicator' />
      <div className='header'>
        <div className='header-8'>
          <div className='icon-chevron-left'>
            <div className='chevron-left-thin' />
          </div>
        </div>
        <div className='icon-chevron-left-9'>
          <div className='chevron-left-thin-a' />
        </div>
        <span className='title'>Title</span>
      </div>
      <div className='pasted-graphic' />
      <div className='image-b' />
    </div>
  );
}
