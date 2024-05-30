import { Carousel, Row, Col } from "antd";

import Image from "next/image";

function BannerCarousel() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <Row>
        <Col>
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image
              sizes="100vw"
              fill
              priority
              src="/images/1.jpg"
              alt="First slide"
            />
          </div>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image
              fill
              priority={false}
              sizes="100vw"
              src="/images/2.jpg"
              alt="Second slide"
            />
          </div>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{ width: "100%", height: "400px", position: "relative" }}>
            <Image
              fill
              priority={false}
              sizes="100vw"
              src="/images/3.jpg"
              alt="Second slide"
            />
          </div>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Col>
      </Row>
    </Carousel>
  );
}

export default BannerCarousel;
