import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
import image from '../images/heromain.png'

export default function dualinfoblock({ heading }) {
  return (
    <section className='my-4 py-4 bg-theme'>
        <div className='container text-white'>
            <Heading title={ heading }/>
            <div className='row'>
                <div className='col-8 mx-auto'>
                    <p className="lead text-white mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus expedita, fugiat quibusdam 
                        aliquam facilis iste assumenda magni repellendus praesentium deleniti dicta voluptatibus quaerat 
                        qui cupiditate porro alias similique, unde quam maiores doloremque blanditiis labore. Labore fuga modi dolore sunt.
                    </p>
                </div>
                <div className='col-4'>
                <div className="card">
                <img className='card-img-top' src={ image } height="200" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-dark">Harsh</h5>
                        <p className="card-text text-dark">Ceo, Sneakers's Den</p>
                        <Link to='' className="btn btn-primary btn-block">{ heading }</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
