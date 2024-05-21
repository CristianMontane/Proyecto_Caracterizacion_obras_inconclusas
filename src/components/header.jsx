import React from 'react'

export const Header = props => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p
                  style={{
                    marginTop: '20px',
                    fontWeight: "inherit",
                    background: 'rgba(0, 0, 0, 0.85)',
                    padding: '15px',
                    borderRadius: '40px',
                  }}
                >
                  {props.data ? props.data.paragraph : 'Loading'}
                </p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
