import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from "react-icons/ci";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import '../../App.css';


const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <div className="container-fluid border-bottom">
      <div className="row py-2">
        <div className='col-sm-4 col-lg-2'>
          <h1 onClick={handleShow}>
            <CiMenuBurger />
          </h1>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Add your Offcanvas content here */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <div className='col col-lg-5 d-flex align-items-center'>
          <Form onSubmit={handleSubmit} className="d-flex w-100">
            <Form.Group className="mb-0 w-75" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Search the item "
                name="serach"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mr-2"
              />
            </Form.Group>

            <Button variant="" type="submit" className="ml-2 border ms-1">
             <FaSearch />
            </Button>
          </Form>
        </div>

        <div className='col col-lg-4 d-flex align-items-center gap-5'>
          <Link to="/" className='link'>
            <h4>Home</h4>
          </Link>
          <Link to="/shop" className='link'>
            <h4>Shop</h4>
          </Link>
          <div className="dropdown hover-dropdown">
            <div
              className="link"
              id="categoryDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
            <h4>Category</h4>
            </div>

            <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
              <li><Link to="/product1" className="dropdown-item">Men</Link></li>
              <li><Link to="/product2" className="dropdown-item">Women</Link></li>
              <li><Link to="/product3" className="dropdown-item">Shoes</Link></li>
              <li><Link to="/product4" className="dropdown-item">Accessories</Link></li>
            </ul>
         </div>
          <Link to="/orders" className='link'>
            <h4>Orders</h4>
          </Link>
        </div>
        

        <div className='col d-flex align-items-center justify-content-end gap-3'>

          <h2><PiShoppingCartBold /></h2>

          <h2><FaRegCircleUser /></h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
