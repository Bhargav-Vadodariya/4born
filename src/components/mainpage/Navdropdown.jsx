import React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Link } from 'react-router-dom';
import '../dropdown.css';

function Navdropdown() {
  return (
    <div>
      <Dropdown
        title="Services"
        className="link-text text-lg text-white font-semibold hover:!text-yellow-400 transition-colors duration-500"
      >
        {/* Backend Dropdown Submenu */}
        <Dropdown.Item className="relative group hover:!bg-yellow-400 hover:!text-white">
          Backend
          <Dropdown.Submenu className="absolute left-full top-0 bg-white !text-white shadow-lg hidden group-hover:!block">
            <Dropdown.Item
              as={Link}
              to="/Nodejs"
              className="hover:!bg-yellow-400 hover:!text-white"
            >
              Node.js Backend
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to="/Python"
              className="hover:!bg-yellow-400 hover:!text-white"
            >
              Python Backend
            </Dropdown.Item>
          </Dropdown.Submenu>
        </Dropdown.Item>

        {/* Other Dropdown Items */}
        <Dropdown.Item
          as={Link}
          to="/Blockchain"
          className="hover:!bg-yellow-400 hover:!text-white"
        >
          Blockchain
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          to="/Bigdata"
          className="hover:!bg-yellow-400 hover:!text-white"
        >
          Bigdata
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          to="/Branding"
          className="hover:!bg-yellow-400 hover:!text-white"
        >
          Branding
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default Navdropdown;
