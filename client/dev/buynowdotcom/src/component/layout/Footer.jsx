import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../store/features/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <footer className='mega-footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>About SuperKart</h3>
          <p>
            SuperKart is your trusted destination for quality products at unbeatable prices. 
            We bring you the best deals with a seamless shopping experience.
          </p>
        </div>

        <div className='footer-section'>
          <h3>Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link to={`/products/category/${category.id}/products`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='footer-section'>
  <h3>Contact Us</h3>
  <p>Email: help@superkart.in</p>
  <p>Phone: +91 98769999999</p>
  <p>Customer Support: Mon - Sat, 10:00 AM - 7:00 PM</p>
  <p>Address: SuperKart Pvt. Ltd., Panchvati, Pashan, Pune, Maharashtra, India</p>
</div>

        <div className='footer-section'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <a
              href='https://facebook.com/superkart'
              target='_blank'
              rel='noopener noreferrer'>
              <FaFacebookF />
            </a>
            <a
              href='https://twitter.com/superkart'
              target='_blank'
              rel='noopener noreferrer'>
              <FaTwitter />
            </a>
            <a
              href='https://instagram.com/superkart'
              target='_blank'
              rel='noopener noreferrer'>
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>&copy; {new Date().getFullYear()} SuperKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
