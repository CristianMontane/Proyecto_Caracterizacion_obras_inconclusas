import React from 'react'

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div
      className='portfolio-item'
      
    >
      <div className='hover-bg'>
        {' '}
        <a href={largeImage} title={title} data-lightbox-gallery='gallery1' target='_blank'>
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
            style={{
              width: '500px',
              height: '250px',
              backgroundColor: 'red',
              objectFit: 'cover',
            }}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}
