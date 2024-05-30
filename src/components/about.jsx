import React from 'react'
import InformacionAdicional from './InformacionAdicional'


export const About = props => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img
              src='https://www.wradio.com.co/resizer/v2/XQOCI42IR5HGDMLTHX4PTOJJXQ.jpg?auth=a00b30529bca4e1eb36c0e93816a4d34f16e49c494bc66e5fbd062db85d460e0&width=1600&height=1200&quality=70&smart=true'
              style={{ borderRadius: '20px', marginTop: '50px' }}
              className='img-responsive'
              alt=''
            />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Estado y Desafios </h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.objective : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
      <InformacionAdicional />
    </div>
  )
}
