import Header from './headerComponent/Header';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.prod.website-files.com/5e73b0054b9d003622f5c43e/6284ebd43518fef86b2893ba_Menswear-E-commerce-Photography-LRP-London-27.jpg"
              alt="First slide"
              style={{ height: '750px', objectFit: 'cover' }} // Inline styling to control height
            />
            <Carousel.Caption>
              <h3>Men</h3>
              <p>Discover the latest trends in men's fashion. From casual wear to formal attire, we offer a wide range of clothing that suits every style. Upgrade your wardrobe with our premium collection of shirts, jackets, jeans, and more.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg"
              alt="Second slide"
              style={{ height: '750px', objectFit: 'cover' }} // Inline styling to control height
            />
            <Carousel.Caption>
              <h3>Women </h3>
              <p>Explore our exquisite women's fashion collection. From elegant dresses to chic everyday outfits, our selection will keep you looking stylish for every occasion. Find your new favorite pieces that combine comfort with sophistication.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/2057238210/photo/woman-packing-clothes-and-shoes-into-cardboard-box-seasonal-comfortable-storage-organize-top.jpg?s=612x612&w=0&k=20&c=kGRQtKJh1DsV31WMWCAbwnNVLAeU3R2vfcI9E0zlubM="
              alt="Third slide"
              style={{ height: '750px', objectFit: 'cover' }} // Inline styling to control height
            />
            <Carousel.Caption>
              <h3>Shoes</h3>
              <p>Step up your footwear game with our stylish and comfortable collection of shoes. Whether you're looking for casual sneakers, elegant heels, or durable boots, we have something for every occasion and season.</p>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Home
