import React from 'react'

export const About = props => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='https://www.wradio.com.co/resizer/v2/XQOCI42IR5HGDMLTHX4PTOJJXQ.jpg?auth=a00b30529bca4e1eb36c0e93816a4d34f16e49c494bc66e5fbd062db85d460e0&width=1600&height=1200&quality=70&smart=true' style={{borderRadius:"20px", marginTop:"50px"}} className='img-responsive'  alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Estado y Desafios </h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <p>{props.data ? props.data.objective : 'loading...'}</p>
              {/*  <h3>Why Choose Us?</h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
