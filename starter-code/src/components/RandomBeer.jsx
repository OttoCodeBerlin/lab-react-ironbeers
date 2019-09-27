import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class RandomBeer extends Component {


  state= {
    beer: {}
  }

  componentDidMount() {
    axios
    .get(`https://ih-beer-api.herokuapp.com/beers/random`)
    .then (({ data }) => {
      this.setState({ beer: data })

    })
    .catch((error)=> {})
      }

  render() {
    return (
      <div>
      <div className="container">
      <div className="card text-center">
        <div className="card-body">
          <p>
          <Link to="/">
                  Home
                  </Link>
          </p>
        </div>
    </div>
 </div>
      <h1>A Random Beer</h1>
      <div className="card">
<div className="card-body">
  <h5 className="card-title">{this.state.beer.name}</h5>
  <p className="card-text">Tagline: {this.state.beer.tagline}</p>
  <p className="card-text">First Brewed: {this.state.beer.first_brewed}</p>
  <p className="card-text">Some comments about taste: {this.state.beer.attenuation_level}</p>
  <p className="card-text">Description: {this.state.beer.description}</p>
  <p className="card-text"><small className="text-muted">Contributed By: {this.state.beer.contributed_by}</small></p>
</div>
<div className="container">
<img src={this.state.beer.image_url} className="card-img-top" alt={this.state.beer.name}  style={{width: '200px', height: 'auto'}}/>
</div>
</div>
<Link to={"/"} className="btn btn-primary">Return to Home</Link>
    </div>
    )
  }
}
