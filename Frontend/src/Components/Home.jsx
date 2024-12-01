import React from "react";
import { Container,  Carousel, Row, Col} from "react-bootstrap";
import { NavBar } from "./NavBar";


export function Home() {
    return(
        <div>
          <NavBar/>
            <header className="text-center my-4">
                <h1>Pack Your Bags, We've Done the Rest!</h1>
                <hr />
            </header>

            <Container>
                <Carousel>
                    <Carousel.Item>
                    <img
              className="d-block w-100 carousel-image"
              src="\image\img2.jpg" width={250} height={250}
              alt="Scenic view of mountains"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="\image\img3.jpg" width={250} height={250}
              alt="Tropical beach with trees"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="\image\img13.PNG" width={250} height={250}
              alt="Sunset view"
            />
          </Carousel.Item>
                </Carousel>
            </Container>

            <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Column - Image */}
          <Col md={6} className="text-center">
            <img
              src="\image\img4.jpg"
              alt="Travel illustration"
              className="img-fluid rounded"
            />
          </Col>

          {/* Right Column - Text */}
          <Col md={6}>
            <h3>Discover Amazing Places</h3>
            <p>
              ReadyRoam helps you explore the world like never before! Enjoy curated travel 
              experiences, personalized itineraries, and seamless planning.
            </p>
            <p>
              <strong>Features:</strong>
            </p>
            <ul>
              <li>Customized travel packages</li>
              <li>Exclusive deals on flights and hotels</li>
              <li>24/7 customer support</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6}>
  <h3>Embark on Your Next Adventure</h3>
  <p>
    At ReadyRoam, we believe every journey tells a story. From awe-inspiring landscapes to vibrant cultural experiences, we offer unforgettable travel adventures designed just for you.
  </p>
  <p>
    <strong>Why Choose ReadyRoam?</strong>
  </p>
  <ul>
    <li>Explore hidden gems off the beaten path</li>
    <li>Expert local guides for authentic experiences</li>
    <li>Seamless travel planning and support</li>
  </ul>
  <p>
    Ready to create lifelong memories? Let’s start your journey today!
  </p>
</Col>


          {/* Right Column - Image */}
          <Col md={6} className="text-center">
            <img
              src="\image\img1.jpg"
              alt="Travel illustration"
              className="img-fluid rounded"
            />
            </Col>
        </Row>
    
      </Container>
        </div>
    )
}
