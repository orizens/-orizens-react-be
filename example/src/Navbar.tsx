import React from 'react'
import { BiBitcoin } from 'react-icons/bi'
export function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark navbar-custom top-nav-collapse fixed-top'>
      <div className='container'>
        <a className='navbar-brand logo-text page-scroll' href='index.html'>
          <BiBitcoin /> react-BE
        </a>

        {/* <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>  */}

        <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
          <ul className='navbar-nav ml-auto'>
            {/* <li className='nav-item'>
              <a className='nav-link page-scroll' href='#header'>
                HOME <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link page-scroll' href='#features'>
                FEATURES
              </a>
            </li> */}
            <li className='nav-item'>
              <a
                className='nav-link page-scroll'
                href='https://github.com/orizens/-orizens-react-be'
                target='_blank'
                rel='noreferrer'
              >
                GITHUB
              </a>
            </li>
          </ul>
          {/* <span className='nav-item'>
            <a className='btn-outline-sm' href='log-in.html'>
              LOG IN
            </a>
          </span> */}
        </div>
      </div>
    </nav>
  )
}
