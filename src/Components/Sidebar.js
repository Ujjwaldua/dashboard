import React from 'react';
import { NavLink } from 'react-router-dom'
function Sidebar(){

    return(<>
    <nav id="sidebar" className="sidebar js-sidebar">
  <div className="sidebar-content js-simplebar">
    <a className="sidebar-brand" >
    <NavLink to="/">
      <span className="align-middle">AdminKit</span>
      </NavLink>
    </a>
    <ul className="sidebar-nav">
      <li className="sidebar-header">
        Pages
      </li>
      <li className="sidebar-item active">
        <a className="sidebar-link" >
        <NavLink to="/">
          <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link" >
        <NavLink to="/Profile">
          <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Signin">
          <i className="align-middle" data-feather="log-in" /> <span className="align-middle">Sign In</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
          <NavLink to="/Signup">
          <i className="align-middle" data-feather="user-plus" /> <span className="align-middle">Sign Up</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link" >
        <NavLink to="/Blank">
          <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-header">
        Tools &amp; Components
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Buttons">
          <i className="align-middle" data-feather="square" /> <span className="align-middle">Buttons</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Forms">
          <i className="align-middle" data-feather="check-square" /> <span className="align-middle">Forms</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Cards">
          <i className="align-middle" data-feather="grid" /> <span className="align-middle">Cards</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link" >
        <NavLink to="/Typo">
          <i className="align-middle" data-feather="align-left" /> <span className="align-middle">Typography</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link" >
        <NavLink to="/Icons">
          <i className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-header">
        Plugins &amp; Addons
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Charts">
          <i className="align-middle" data-feather="bar-chart-2" /> <span className="align-middle">Charts</span>
          </NavLink>
        </a>
      </li>
      <li className="sidebar-item">
        <a className="sidebar-link">
        <NavLink to="/Maps">
          <i className="align-middle" data-feather="map" /> <span className="align-middle">Maps</span>
          </NavLink>
        </a>
      </li>
    </ul>
    <div className="sidebar-cta">
      <div className="sidebar-cta-content">
        <strong className="d-inline-block mb-2">Upgrade to Pro</strong>
        <div className="mb-3 text-sm">
          Are you looking for more components? Check out our premium version.
        </div>
        <div className="d-grid">
        <NavLink to="/Upgrade">
          <a  className="btn btn-primary">Upgrade to Pro</a>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</nav>

    </>)

}

export default Sidebar;