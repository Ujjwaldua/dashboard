import React from 'react'
import { NavLink } from 'react-router-dom'

const Buttons = () => {
  return (
   <>
   	<main class="content">
  <div className="container-fluid p-0">
  <div className="mb-3">
    <h1 className="h3 d-inline align-middle">Buttons</h1>
    
    <NavLink to="/Upgrade" className="badge bg-dark text-white ms-2" >
    
      Get more button examples
      </NavLink>
  </div>
  <div className="row">
    <div className="col-12 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Basic Buttons</h5>
          <h6 className="card-subtitle text-muted">Default Bootstrap buttons style.</h6>
        </div>
        <div className="card-body text-center">
          <div className="mb-3">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-danger">Danger</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-info">Info</button>
          </div>
          <div>
            <button className="btn btn-primary" disabled>Primary</button>
            <button className="btn btn-secondary" disabled>Secondary</button>
            <button className="btn btn-success" disabled>Success</button>
            <button className="btn btn-danger" disabled>Danger</button>
            <button className="btn btn-warning" disabled>Warning</button>
            <button className="btn btn-info" disabled>Info</button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Button Sizes</h5>
          <h6 className="card-subtitle text-muted">Fancy larger or smaller buttons.</h6>
        </div>
        <div className="card-body text-center">
          <div className="mb-3">
            <button className="btn btn-primary btn-sm">Small</button>
            <button className="btn btn-primary">Medium</button>
            <button className="btn btn-primary btn-lg">Large</button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Button Group</h5>
          <h6 className="card-subtitle text-muted">Button group components.</h6>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Horizontal button group</h6>
          <div className="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
          </div>
          <br />
          <div className="btn-group mb-3" role="group" aria-label="Default button group">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
          </div>
          <br />
          <div className="btn-group btn-group-sm mb-4" role="group" aria-label="Small button group">
            <button type="button" className="btn btn-secondary">Left</button>
            <button type="button" className="btn btn-secondary">Middle</button>
            <button type="button" className="btn btn-secondary">Right</button>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">Button toolbar</h6>
          <div className="btn-toolbar mb-4" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
              <button type="button" className="btn btn-secondary">1</button>
              <button type="button" className="btn btn-secondary">2</button>
              <button type="button" className="btn btn-secondary">3</button>
              <button type="button" className="btn btn-secondary">4</button>
            </div>
            <div className="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" className="btn btn-secondary">5</button>
              <button type="button" className="btn btn-secondary">6</button>
              <button type="button" className="btn btn-secondary">7</button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary">8</button>
            </div>
          </div>
          <h6 className="card-subtitle mb-2 text-muted">Vertical button group</h6>
          <div className="btn-toolbar">
            <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
              <button type="button" className="btn btn-primary">Button</button>
              <button type="button" className="btn btn-primary">Button</button>
              <button type="button" className="btn btn-primary">Button</button>
            </div>
            <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
              <button type="button" className="btn btn-success">Button</button>
              <button type="button" className="btn btn-success">Button</button>
              <button type="button" className="btn btn-success">Button</button>
            </div>
            <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
              <button type="button" className="btn btn-warning">Button</button>
              <button type="button" className="btn btn-warning">Button</button>
              <button type="button" className="btn btn-warning">Button</button>
            </div>
            <div className="btn-group-vertical me-2" role="group" aria-label="Vertical button group">
              <button type="button" className="btn btn-danger">Button</button>
              <button type="button" className="btn btn-danger">Button</button>
              <button type="button" className="btn btn-danger">Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>

   </>
  )
}

export default Buttons