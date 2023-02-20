import React from 'react'
import { NavLink } from 'react-router-dom'
function Cards() {
  return (
    <>
    <main className="content">
  <div className="container-fluid p-0">
    <div className="mb-3">
      <h1 className="h3 d-inline align-middle">Cards</h1>
      <NavLink to="/Upgrade" className="badge bg-dark text-white ms-2" >
        Get more card examples
        </NavLink>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <div className="card">
          <img className="card-img-top" src="img/photos/unsplash-1.jpg" alt="Unsplash" />
          <div className="card-header">
            <h5 className="card-title mb-0">Card with image and links</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <img className="card-img-top" src="img/photos/unsplash-2.jpg" alt="Unsplash" />
          <div className="card-header">
            <h5 className="card-title mb-0">Card with image and button</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Card with links</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Card with button</h5>
          </div>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    </>
  )
}

export default Cards