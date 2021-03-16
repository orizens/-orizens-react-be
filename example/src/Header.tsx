import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
import { Row, H1, P, Div } from '@orizens/react-be'

export function Header() {
  return (
    <header id='header' className='header'>
      <div className='header-content py-5'>
        <div className='container'>
          <div className='row'>
            <Div className='col-lg-6 col-xl-5'>
              <Div className='text-container'>
                <H1>React-BE</H1>
                <P className='p-large'>
                  Bootstrap Element is a react primitive component with typed
                  utility classes and auto-completion
                </P>
                <a
                  className='btn-solid-lg page-scroll'
                  href='https://github.com/orizens/-orizens-react-be'
                >
                  Open Source
                </a>
              </Div>
            </Div>
            <Div className='col-lg-6 col-xl-7'>
              <Div className='image-container'>
                <Row justify='content-center' className='img-wrapper'>
                  <BiBitcoin size={350} color='white' />
                </Row>
              </Div>
            </Div>
          </div>
        </div>
      </div>
    </header>
  )
}
