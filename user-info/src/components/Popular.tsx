
import  { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

const products = [
  { id: 1, name: "Product 1", price: "$10", imageUrl: "https://www.panaprium.com/cdn/shop/articles/men_rectangle_bodies_dressing_tips.jpg?v=1711452445" },
  { id: 2, name: "Product 2", price: "$20", imageUrl: "https://media.istockphoto.com/id/539247531/photo/smiling-man-in-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=_-r3a91PXcyzk0isQHvh2AQDOnjghf8iVyg8kNg5GQg=" },
  { id: 3, name: "Product 3", price: "$30", imageUrl: "https://www.panaprium.com/cdn/shop/articles/men_rectangle_bodies_dressing_tips.jpg?v=1711452445" },
  { id: 4, name: "Product 4", price: "$40", imageUrl: "https://media.istockphoto.com/id/539247531/photo/smiling-man-in-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=_-r3a91PXcyzk0isQHvh2AQDOnjghf8iVyg8kNg5GQg=" },
  { id: 5, name: "Product 5", price: "$50", imageUrl: "https://www.panaprium.com/cdn/shop/articles/men_rectangle_bodies_dressing_tips.jpg?v=1711452445" },
  { id: 6, name: "Product 6", price: "$60", imageUrl: "https://media.istockphoto.com/id/539247531/photo/smiling-man-in-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=_-r3a91PXcyzk0isQHvh2AQDOnjghf8iVyg8kNg5GQg=" },
  { id: 7, name: "Product 7", price: "$70", imageUrl: "https://www.panaprium.com/cdn/shop/articles/men_rectangle_bodies_dressing_tips.jpg?v=1711452445" },
  { id: 8, name: "Product 8", price: "$80", imageUrl: "https://media.istockphoto.com/id/539247531/photo/smiling-man-in-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=_-r3a91PXcyzk0isQHvh2AQDOnjghf8iVyg8kNg5GQg=" },
  { id: 9, name: "Product 9", price: "$90", imageUrl: "https://www.panaprium.com/cdn/shop/articles/men_rectangle_bodies_dressing_tips.jpg?v=1711452445" },
  { id: 10, name: "Product 10", price: "$100", imageUrl: "https://media.istockphoto.com/id/539247531/photo/smiling-man-in-blank-t-shirt.jpg?s=612x612&w=0&k=20&c=_-r3a91PXcyzk0isQHvh2AQDOnjghf8iVyg8kNg5GQg=" },
];

const Popular = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const productsPerPage = 4;

  const currentProducts = products.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

  const handleNext = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-5 me-3 ms-3">
    <Row className="align-items-center">
      <Col xs={6}>
        <h2>Most Popular Products</h2>
      </Col>
      <Col xs={6} className="d-flex justify-content-end gap-4">
        <Button variant="secondary" onClick={handlePrev} disabled={currentPage === 0}>
          {"<"}
        </Button>
        <Button variant="secondary" onClick={handleNext} disabled={(currentPage + 1) * productsPerPage >= products.length}>
          {">"}
        </Button>
      </Col>
    </Row>
    
    <Row>
      {currentProducts.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
              <Button variant="primary">+</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
  );
};

export default Popular;
