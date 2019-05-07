import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 2,
  imagesLoaded: true
}

const Carousel = () => {
  return (
    <div>
      <h1> Our Charter Destinations </h1>
      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
      >
        <div className='carousel-cell'>
          <figure>
            <img src='../assets/5.jpg' alt='beach' className='back-img' />
            <img src='../assets/5.jpg' alt='beach' className='front-img' />
            <figcaption>
              <h3>Cuba</h3>
              <h5>Bahamas & Caribbean</h5>
              <a href='#'><p>View Itinerary</p></a>
            </figcaption>
          </figure>
        </div>

        <div className='carousel-cell'>
          <figure>
            <img src='../assets/1.png' alt='turle' className='back-img' />
            <img src='../assets/1.png' alt='turle' className='front-img' />
            <figcaption>
              <h3>Cuba</h3>
              <h5>Bahamas & Caribbean</h5>
              <a href='#'><p>View Itinerary</p></a>
            </figcaption>
          </figure>
        </div>

        <div className='carousel-cell'>
          <figure>
            <img src='../assets/8.jpg' alt='island' className='back-img' />
            <img src='../assets/8.jpg' alt='island' className='front-img' />
            <figcaption>
              <h3>Theha Island</h3>
              <h5>Bahamas & Caribbean</h5>
              <a href='#'><p>View Itinerary</p></a>
            </figcaption>
          </figure>
        </div>

        <div className='carousel-cell'>
          <figure>
            <img src='../assets/9.jpg' alt='pier' className='back-img' />
            <img src='../assets/9.jpg' alt='pier' className='front-img' />
            <figcaption>
              <h3>Maldives</h3>
              <h5>Bahamas & Caribbean</h5>
              <a href='#'><p>View Itinerary</p></a>
            </figcaption>
          </figure>
        </div>


        <div className='carousel-cell'>
          <figure>
            <img src='../assets/7.jpg' alt='temple' className='back-img' />
            <img src='../assets/7.jpg' alt='temple' className='front-img' />
            <figcaption>
              <h3>Bali</h3>
              <h5>Bahamas & Caribbean</h5>
              <a href="#"><p>View Itinerary</p></a>
            </figcaption>
          </figure>
        </div>

      </Flickity>
      <a href='#'><button> View all destinations </button></a>
    </div>
  )
}

export default Carousel
