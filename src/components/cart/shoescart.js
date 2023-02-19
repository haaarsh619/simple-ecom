import React, { Component } from 'react'
import Heading from '../Heading'
import { Link } from 'gatsby'

export default class shoescart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoes: props.shoes.edges,
        }
    }
    render() {
    return (
        <section className='p-10 container'>
            <div className="container">
                <Heading title='Shoes' />
            </div>
            <div className="row">
                {this.state.shoes.map(({node}) => {
                    return (
                        <div className='col-11 col-md-6 d-flex mx-auto mb-5 justify-content-center'>
                <div className="card w-50">
                <img className='card-img-top' src={ node.image.url } height="200" alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{node.title}</h5>
                                    <p className="card-text text-dark">{ node.description}</p>
                        <Link to='' className="btn btn-primary btn-block">{ node.price }</Link>
                    </div>
                    </div>
                </div>
                    )       
                })
             }
            </div>
        </section>
    )
  }
}
{/* <button className='btn btn-info snipcart-add-item' */}
                //             data-item-id={ node.id}
                //             data-item-price={node.price}
                //             data-item-url="https://www.youtube.com/"
                //             data-item-image={ node.image.url }
                //             data-item-name={ node.title }>Buy</button>