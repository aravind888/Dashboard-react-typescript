import React, { useState } from 'react';
import logo from './logo.svg';
import Employee from '../components/Employee';
import {EmployeeData} from '../API';
import { Countries } from '../API';

function App() {

  return (
    <section className='in-section'>
      <div className='in-row row in-dashboard__row'>

          {EmployeeData && EmployeeData.length > 0 && EmployeeData.map((val, i) => {
            return (
              <div className='col-md-4'>
                <Employee
                  name={val.name}
                  designation={val.designation}
                  amount={val.amount}
                  taskPending={val.taskPending}
                  taskTotal={val.taskTotal}
                  decrease={val.decrease}
                  percentage={val.percentage}
                  profileImg={val.profileImg}
                />
              </div>

            )
          })}
          
        
        <div className='col-md-12 col-xl-8'>
          <div className='in-card'>
            <div className='in-card__wrap'>
              <div className='in-title__section'>Your work summary</div>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-4'>
          <div className='in-card d-flex flex-direction-column justify-content-space-between'>
            <div className='in-card__wrap'>
              <div className='in-card__title-wrap'>
                <div className='in-title__section'>Top countries</div>
                <div className='in-title__block in-text--gray'>Favorites</div>
              </div>
              <div className=''>
                <ul className='in-country__list'>
                  {Countries && Countries.length > 0 && Countries.map((val, i) => {
                    return (
                      <li className='in-country__item d-flex justify-content-space-between'>
                        <div className='in-country__item-left d-flex align-items-center'>
                          <span className='in-country__item-icon flex-shrink-0 line-height-0'><img src={val.flag} /></span>
                          <span className='in-title__block in-title__block--light font-normal pl-1 mb-0'>{val.countryName}</span>
                        </div>
                        <div className='in-title__block'>{val.followers}</div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className='in-card__btn-wrap text-right'>
              <a className='in-btn__plain' href=''>View all 
                <span className='ml-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M0.442505 8.4425L3.8775 5L0.442505 1.5575L1.5 0.5L6 5L1.5 9.5L0.442505 8.4425Z" fill="#4A4DE6"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-4'>
          <div className='in-card d-flex flex-direction-column justify-content-space-between'>
            <div className='in-card__wrap'>
              <div>
                <div className='in-title__section'>Segmentation</div>
                <div className='in-title__block in-text--gray'>All users</div>
              </div>
            </div>
            <div className='in-card__btn-wrap text-right'>
              <a className='in-btn__plain' href=''>Details
                <span className='ml-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M0.442505 8.4425L3.8775 5L0.442505 1.5575L1.5 0.5L6 5L1.5 9.5L0.442505 8.4425Z" fill="#4A4DE6"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-4'>
          <div className='in-card d-flex flex-direction-column justify-content-space-between'>
            <div className='in-card__wrap'>
              <div>
                <div className='in-title__section'>Satisfaction rate</div>
                <div className='in-subtitle'>From all projects</div>
              </div>
            </div>
            <div className='in-card__btn-wrap text-right'>
                <a className='in-btn__plain' href=''>Details
                  <span className='ml-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M0.442505 8.4425L3.8775 5L0.442505 1.5575L1.5 0.5L6 5L1.5 9.5L0.442505 8.4425Z" fill="#4A4DE6"/>
                    </svg>
                  </span>
                </a>
              </div>
          </div>
        </div>

        <div className='col-md-6 col-xl-4'>
          <div className='in-card'>
            <div className='in-card__wrap'>
              <div className='text-center'>
                <a className='in-btn__add mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M14.5 8H8.5V14H6.5V8H0.5V6H6.5V0H8.5V6H14.5V8Z" fill="#4A4DE6"/>
                  </svg>
                </a>
                <div className='in-title__section pb-1 mt-2'>No components created yet</div>
                <p className='in-subtitle in-text--gray px-5 pb-2'>Simply create your first component. Just click on the button</p>
                <a className='in-btn__primary d-inline-flex align-items-center' href=''>
                  <span className='in-icon mr-1 line-light-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path d="M14.5 8H8.5V14H6.5V8H0.5V6H6.5V0H8.5V6H14.5V8Z" fill="white"/>
                    </svg>
                  </span>
                  Add component
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default App;
