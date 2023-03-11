import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="in-wrap d-flex">
      <div className='in-nav__wrap flex-shrink-0 d-flex flex-column justify-content-between p-3'>
        <div className='in-nav__top'>
          <a className='in-nav__logo-wrap pb-1 w-100'>
            <span className='in-nav__logo'>Instill</span>
          </a>
          <div className='in-card in-card--teams'>
            <div className='d-flex'>
              <div className='in-card__profile-icon flex-shrink-0'>
                <span></span>
              </div>
              <div className='d-flex align-items-center'>
                <div className='in-card__content'>
                  <div className='in-card__name in-title__block in-text--ligth'>Instill</div>
                  <div className='in-card__para in-para'>general team</div>
                </div>
                <div className='in-card__icon-wrap'>
                  <span className=''></span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className='in-nav__links'>
              <li className='in-nav__link'>
                <a className=''>
                  <span></span>
                </a>
              </li>
              <li className='in-nav__link'>
                <a className=''>
                  <span></span>
                </a>
              </li>
              <li className='in-nav__link'>
                <a className=''>
                  <span></span>
                </a>
              </li>
              <li className='in-nav__link'>
                <a className=''>
                  <span></span>
                </a>
              </li>
            </ul>
            <div>
              <div>Shortcut</div>
              <ul className='in-nav__links'>
                <li className='in-nav__link'>
                  <a className=''>
                    <span><img src='' /></span>
                  </a>
                </li>
                <li className='in-nav__link'>
                  <a className=''>
                    <span></span>
                  </a>
                </li>
                <li className='in-nav__link'>
                  <a className=''>
                    <span></span>
                  </a>
                </li>
                <li className='in-nav__link'>
                  <a className=''>
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='in-nav__bottom'>
          <div className='in-card in-card--storage'>
            <div className='in-card__wrap'>
              <div className='d-flex'>
                <div>
                  <div>Storage</div>
                  <div><span>3.4 GB</span> of 15 GB</div>
                </div>
                <div>Upgrade</div>
              </div>
              <div className='in-progress__bar-outline'>
                <span className='in-progress__bar'></span>
              </div>
            </div>
          </div>
          <div className='in-nav__profile d-flex align-items-center'>
            <div className='d-flex align-items-center'>
              <div className='in-nav__profile-img'>
                <img src="" alt="" />
              </div>
              <div className='in-nav__profile-name in-title__section in-title__section--light'>Jane Smith</div>
            </div>
            <div className='in-card__icon-wrap'>
              <span className=''></span>
            </div>
          </div>
        </div>
      </div>
      <div className='in-content__wrap p-3'>
        <header className='in-header'>
          <div className='in-header__inwrap'>
            <div className='in-header__title'>Hello Moe <span className='in-batch in-batch--premium'>premium</span></div>
          </div>
          <div className='in-input__wrap'>
            <input className='in-input in-input__search' type="search" />
          </div>
        </header>
        <main className='in-main'>
          <section className='in-sectionm'>
            <div className='in-row row'>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div className=''>
                      <div className='in-card__profile d-flex '>
                        <div className='in-card__profile-icon flex-shrink-0'>
                          <img src='' />
                        </div>
                        <div className=''>
                          <div className='in-title__block'>Jane Smith</div>
                          <p className='in-para in-text--gray'>Sales manager - France</p>
                        </div>
                      </div>
                      <div className='text-center'>
                        <div className=''>
                          <img />
                        </div>
                        <div className='in-title__section in-text__success'>$3490.00</div>
                      </div>
                    </div>
                    <div className=''>
                      <p>3 from 6 tasks completed</p>
                      <div className='in-progress__bar-outline'>
                        <span className='in-progress__bar'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div className=''>
                      <div className='in-card__profile d-flex '>
                        <div className='in-card__profile-icon flex-shrink-0'>
                          <img src='' />
                        </div>
                        <div className=''>
                          <div className='in-title__block'>Jane Smith</div>
                          <p className='in-para in-text--gray'>Sales manager - France</p>
                        </div>
                      </div>
                      <div className='text-center'>
                        <div className=''>
                          <img />
                        </div>
                        <div className='in-title__section in-text__success'>$3490.00</div>
                      </div>
                    </div>
                    <div className=''>
                      <p>3 from 6 tasks completed</p>
                      <div className='in-progress__bar-outline'>
                        <span className='in-progress__bar'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div className=''>
                      <div className='in-card__profile d-flex '>
                        <div className='in-card__profile-icon flex-shrink-0'>
                          <img src='' />
                        </div>
                        <div className=''>
                          <div className='in-title__block'>Jane Smith</div>
                          <p className='in-para in-text--gray'>Sales manager - France</p>
                        </div>
                      </div>
                      <div className='text-center'>
                        <div className=''>
                          <img />
                        </div>
                        <div className='in-title__section in-text__success'>$3490.00</div>
                      </div>
                    </div>
                    <div className=''>
                      <p>3 from 6 tasks completed</p>
                      <div className='in-progress__bar-outline'>
                        <span className='in-progress__bar'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div className='in-title__section'>Your work summary</div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div>
                      <div className='in-title__section'>Top countries</div>
                      <div className='in-title__block in-text--gray'>Favorites</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div>
                      <div className='in-title__section'>Segmentation</div>
                      <div className='in-title__block in-text--gray'>All users</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div>
                      <div className='in-title__section'>Satisfaction rate</div>
                      <div className='in-subtitle'>From all projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='in-card'>
                  <div className='in-card__wrap'>
                    <div className='text-center'>
                      <div className='in-title__section'>No components created yet</div>
                      <p className='in-subtitle in-text--gray'>Simply create your first component. Just click on the button</p>
                      <a className='in-btn__primary' href=''>
                        <span className='in-icon'><img src='' /></span>
                        Add component
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
