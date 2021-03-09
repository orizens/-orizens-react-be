import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { Be } from '@orizens/react-be'

export function Header() {
  return (
    <header id='header' className='header'>
      <div className='header-content py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-xl-5'>
              <div className='text-container'>
                <h1>React-BE</h1>
                <p className='p-large'>
                  Bootstrap Element is a react primitive component with typed
                  utility classes and auto-completion
                </p>
                <a
                  className='btn-solid-lg page-scroll'
                  href='https://github.com/orizens/-orizens-react-be'
                >
                  Open Source
                </a>
              </div>
            </div>
            <div className='col-lg-6 col-xl-7'>
              <div className='image-container'>
                <Be
                  flex='row'
                  d='flex'
                  justify='content-center'
                  className='img-wrapper'
                >
                  <BiBitcoin size={350} color='white' />
                </Be>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
