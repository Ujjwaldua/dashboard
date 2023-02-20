import React from 'react'
import { NavLink } from 'react-router-dom'
const Forms = () => {
  return (
  <>
  	<main className="content">
  <div className="container-fluid p-0">
    <div className="mb-3">
      <h1 className="h3 d-inline align-middle">Forms</h1>
      <NavLink to="/Upgrade" className="badge bg-dark text-white ms-2">
        Get more form examples
        </NavLink>
    </div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Input</h5>
          </div>
          <div className="card-body">
            <input type="text" className="form-control" placeholder="Input" />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Textarea</h5>
          </div>
          <div className="card-body">
            <textarea className="form-control" rows={2} placeholder="Textarea" defaultValue={""} />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Checkboxes</h5>
          </div>
          <div className="card-body">
            <div>
              <label className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue />
                <span className="form-check-label">
                  Option one is this and that—be sure to include why it's great
                </span>
              </label>
              <label className="form-check">
                <input className="form-check-input" type="checkbox" defaultValue disabled />
                <span className="form-check-label">
                  Option two is disabled
                </span>
              </label>
            </div>
            <div>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue="option1" />
                <span className="form-check-label">
                  1
                </span>
              </label>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue="option2" />
                <span className="form-check-label">
                  2
                </span>
              </label>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" defaultValue="option3" disabled />
                <span className="form-check-label">
                  3
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Read only</h5>
          </div>
          <div className="card-body">
            <input className="form-control" type="text" placeholder="Readonly input" readOnly />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Radios</h5>
          </div>
          <div className="card-body">
            <div>
              <label className="form-check">
                <input className="form-check-input" type="radio" defaultValue="option1" name="radios-example" defaultChecked />
                <span className="form-check-label">
                  Option one is this and that—be sure to include why it's great
                </span>
              </label>
              <label className="form-check">
                <input className="form-check-input" type="radio" defaultValue="option2" name="radios-example" />
                <span className="form-check-label">
                  Option two can be something else and selecting it will deselect option one
                </span>
              </label>
              <label className="form-check">
                <input className="form-check-input" type="radio" defaultValue="option3" name="radios-example" disabled />
                <span className="form-check-label">
                  Option three is disabled
                </span>
              </label>
            </div>
            <div>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inline-radios-example" defaultValue="option1" />
                <span className="form-check-label">
                  1
                </span>
              </label>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inline-radios-example" defaultValue="option2" />
                <span className="form-check-label">
                  2
                </span>
              </label>
              <label className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inline-radios-example" defaultValue="option3" disabled />
                <span className="form-check-label">
                  3
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Selects</h5>
          </div>
          <div className="card-body">
            <select className="form-select mb-3">
              <option selected>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
            <select multiple className="form-control">
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
            </select>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Disabled</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Disabled input</label>
              <input type="text" className="form-control" placeholder="Disabled input" disabled />
            </div>
            <div className="mb-3">
              <label className="form-label">Disabled select menu</label>
              <select className="form-control" disabled>
                <option>Disabled select</option>
              </select>
            </div>
            <label className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue disabled />
              <span className="form-check-label">
                Can't check this
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

  </>
  )
}

export default Forms