import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 2,
  imagesLoaded: true
}

const Carousel = () => {
  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      options={flickityOptions}
    >

      <div className='carousel-cell'>
        <figure>
          <img src='../assets/5.jpg' className='back-img' />
          <img src='../assets/5.jpg' className='front-img' />
          <figcaption>
            <h3>Cuba</h3>
            <h5>Bahamas & Caribbean</h5>
            <a href='#'><p>View Itinerary</p></a>
          </figcaption>
        </figure>
      </div>

      <div className='carousel-cell'>
        <figure>
          <img src='../assets/1.png' className='back-img' />
          <img src='../assets/1.png' className='front-img' />
          <figcaption>
            <h3>Cuba</h3>
            <h5>Bahamas & Caribbean</h5>
            <a href='#'><p>View Itinerary</p></a>
          </figcaption>
        </figure>
      </div>

      <div className='carousel-cell'>
        <figure>
          <img src='../assets/8.jpg' className='back-img' />
          <img src='../assets/8.jpg' className='front-img' />
          <figcaption>
            <h3>Theha Island</h3>
            <h5>Bahamas & Caribbean</h5>
            <a href='#'><p>View Itinerary</p></a>
          </figcaption>
        </figure>
      </div>

      <div className='carousel-cell'>
        <figure>
          <img src='../assets/9.jpg' className='back-img' />
          <img src='../assets/9.jpg' className='front-img' />
          <figcaption>
            <h3>Maldives</h3>
            <h5>Bahamas & Caribbean</h5>
            <a href='#'><p>View Itinerary</p></a>
          </figcaption>
        </figure>
      </div>


      <div className='carousel-cell'>
        <figure>
          <img src='../assets/7.jpg' className='back-img' />
          <img src='../assets/7.jpg' className='front-img' />
          <figcaption>
            <h3>Bali</h3>
            <h5>Bahamas & Caribbean</h5>
            <a href="#"><p>View Itinerary</p></a>
          </figcaption>
        </figure>
      </div>


    </Flickity>
  )
}

export default Carousel
