import React from 'react'
import { NavLink } from 'react-router-dom'
function Charts() {
  return (
  <>
<main className="content">
  <div className="container-fluid p-0">
    <div className="mb-3">
      <h1 className="h3 d-inline align-middle">Chart.js</h1>
      <NavLink to="/Upgrade" className="badge bg-dark text-white ms-2">
        Get more chart examples
        </NavLink>
    </div>
    <div className="row">
      <div className="col-12 col-lg-6">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <h5 className="card-title">Line Chart</h5>
            <h6 className="card-subtitle text-muted">A line chart is a way of plotting data points on a line.</h6>
          </div>
          <div className="card-body">
            <div className="chart">
              <canvas id="chartjs-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Bar Chart</h5>
            <h6 className="card-subtitle text-muted">A bar chart provides a way of showing data values represented as vertical bars.</h6>
          </div>
          <div className="card-body">
            <div className="chart">
              <canvas id="chartjs-bar" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Doughnut Chart</h5>
            <h6 className="card-subtitle text-muted">Doughnut charts are excellent at showing the relational proportions between data.</h6>
          </div>
          <div className="card-body">
            <div className="chart chart-sm">
              <canvas id="chartjs-doughnut" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Pie Chart</h5>
            <h6 className="card-subtitle text-muted">Pie charts are excellent at showing the relational proportions between data.</h6>
          </div>
          <div className="card-body">
            <div className="chart chart-sm">
              <canvas id="chartjs-pie" />
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

export default Charts