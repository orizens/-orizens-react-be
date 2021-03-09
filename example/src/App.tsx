import React, { useState } from 'react'
import { CopyBlock, monokaiSublime } from 'react-code-blocks'

import { Be } from '@orizens/react-be'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { Wave } from './Wave'

const App = () => {
  const [user, setUser] = useState('')
  const toggleMessage = () => setUser('John')
  return (
    <>
      <Navbar />
      <Header />
      <Wave />
      <div className='container'>
        <div className='main-body'>
          <nav aria-label='breadcrumb' className='main-breadcrumb'>
            <Be as='h1' text='center' my='3' className='text-indigo'>
              React Bootstrap Element (BE)
            </Be>
          </nav>

          <Be d='flex' flex='row' align='items-start' className='gutters-sm'>
            <Be col='8'>
              <Be as='h4' text='dark'>
                This card is coded with BE (bootstrap element):
              </Be>
              <CopyBlock
                theme={monokaiSublime}
                text={`
<Be d='flex' flex='column' align='items-center' text='center'>
  <Be
    as='img'
    src='https://bootdey.com/img/Content/avatar/avatar7.png'
    alt='Admin'
    rounded='circle'
    width='150'
  />
  <Be mt='3' onClick={toggleMessage}>
    <h4>John Doe</h4>
    <Be as='p' text='secondary' mb='1'>
      Front End Engineer
    </Be>
    <Be as='p' text='muted' className='font-size-sm'>
      Anywhere, Earth
    </Be>
    <button className='btn btn-primary'>Follow</button>
    <button className='btn btn-outline-primary'>Message</button>
  </Be>
</Be>
              `}
                language='jsx'
                wrapLines
              />
            </Be>

            <Be col='4'>
              <div className='card'>
                <div className='card-body'>
                  <Be d='flex' flex='column' align='items-center' text='center'>
                    <Be
                      as='img'
                      src='https://bootdey.com/img/Content/avatar/avatar7.png'
                      alt='Admin'
                      rounded='circle'
                      width='150'
                    />
                    <Be mt='3' onClick={toggleMessage}>
                      <h4>John Doe</h4>
                      <Be as='p' text='secondary' mb='1'>
                        Front End Engineer, {user}
                      </Be>
                      <Be as='p' text='muted' className='font-size-sm'>
                        Anywhere, Earth
                      </Be>
                      <button className='btn btn-primary'>Follow</button>
                      <button className='btn btn-outline-primary'>
                        Message
                      </button>
                    </Be>
                  </Be>
                </div>
              </div>
            </Be>
          </Be>
          <div className='card mt-3'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <a
                  href='https://orizens.com'
                  className='d-flex flex-row justify-content-between w-100'
                >
                  <h6 className='mb-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-globe mr-2 icon-inline'
                    >
                      <circle cx='12' cy='12' r='10'></circle>
                      <line x1='2' y1='12' x2='22' y2='12'></line>
                      <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                    </svg>
                    Website
                  </h6>
                  <span className='text-secondary'>https://orizens.com</span>
                </a>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <a
                  href='https://github.com/orizens/-orizens-react-be'
                  className='d-flex flex-row justify-content-between w-100'
                >
                  <h6 className='mb-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='feather feather-github mr-2 icon-inline'
                    >
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                    Github
                  </h6>
                  <span className='text-secondary'>orizens</span>
                </a>
              </li>
              <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <h6 className='mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-twitter mr-2 icon-inline text-info'
                  >
                    <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
                  </svg>
                  Twitter
                </h6>
                <span className='text-secondary'>@orizens</span>
              </li>
            </ul>
          </div>

          <Be as='footer' d='flex' flex='row' p='3' justify='content-center'>
            Design By:
            <a
              href='https://www.bootdey.com/snippets/view/profile-with-data-and-skills'
              className='mr-2'
            >
              bootdey.com
            </a>
            <a href='https://demos.onepagelove.com/html/tivo/'>
              onepagelove.com
            </a>
          </Be>
        </div>
      </div>
    </>
  )
}

export default App
