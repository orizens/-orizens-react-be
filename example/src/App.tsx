import React, { useState } from 'react'
import { CopyBlock, monokaiSublime } from 'react-code-blocks'

import {
  Be,
  H1,
  Row,
  H4,
  Section,
  P,
  Ul,
  Li,
  H6,
  Span,
  Img,
  Div,
  Column
} from '@orizens/react-be'
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
            <H1 text='center' my='3' className='text-indigo'>
              React Bootstrap Element (BE)
            </H1>
          </nav>

          <Row align='items-start' className='gutters-sm'>
            <Be col='8'>
              <H4 text='dark'>
                This card is coded with BE (bootstrap element):
              </H4>
              <CopyBlock
                theme={monokaiSublime}
                text={`
<Column align='items-center' text='center'>
  <Img
    src='https://bootdey.com/img/Content/avatar/avatar7.png'
    alt='Admin'
    rounded='circle'
    width='150'
  />
  <Section mt='3' onClick={toggleMessage}>
    <H4 text='dark'>John Doe</H4>
    <P text='secondary' mb='1'>
      Front End Engineer
    </P>
    <P text='muted' className='font-size-sm'>
      Anywhere, Earth
    </P>
    <button className='btn btn-primary'>Follow</button>
    <button className='btn btn-outline-primary'>Message</button>
  </Section>
</Column>
              `}
                language='jsx'
                wrapLines
              />
            </Be>

            <Be col='4'>
              <Div className='card'>
                <Div className='card-body'>
                  <Column align='items-center' text='center'>
                    <Img
                      src='https://bootdey.com/img/Content/avatar/avatar7.png'
                      alt='Admin'
                      rounded='circle'
                      width='150'
                    />
                    <Section mt='3' onClick={toggleMessage}>
                      <H4 text='dark'>John Doe</H4>
                      <P text='secondary' mb='1'>
                        Front End Engineer, {user}
                      </P>
                      <P text='muted' className='font-size-sm'>
                        Anywhere, Earth
                      </P>
                      <button className='btn btn-primary'>Follow</button>
                      <button className='btn btn-outline-primary'>
                        Message
                      </button>
                    </Section>
                  </Column>
                </Div>
              </Div>
            </Be>
          </Row>
          <div className='card mt-3'>
            <Ul className='list-group list-group-flush'>
              <Li
                align='items-center'
                flex='wrap'
                justify='content-between'
                className='list-group-item d-flex justify-content-between'
              >
                <a
                  href='https://orizens.com'
                  className='d-flex flex-row justify-content-between w-100'
                >
                  <H6 className='mb-0'>
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
                  </H6>
                  <Span className='text-secondary'>https://orizens.com</Span>
                </a>
              </Li>
              <Li
                align='items-center'
                flex='wrap'
                justify='content-between'
                className='list-group-item d-flex'
              >
                <a
                  href='https://github.com/orizens/-orizens-react-be'
                  className='d-flex flex-row justify-content-between w-100'
                >
                  <H6 className='mb-0'>
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
                  </H6>
                  <Span className='text-secondary'>orizens</Span>
                </a>
              </Li>
              <Li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                <H6 className='mb-0'>
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
                </H6>
                <Span className='text-secondary'>@orizens</Span>
              </Li>
            </Ul>
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
