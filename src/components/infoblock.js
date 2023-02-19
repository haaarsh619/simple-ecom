import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function infoblock({ heading, desc }) {
  return (
    <section className='bg-theme my-5 py-4'>
        <div className='text-white'>
            <Heading title={ heading }/>
                <div className='row'>
                    <div className='col-10 col-sm-8 mx-auto text-center'>
                        <p className='lead text-white mb-4'>
                            { desc }
                        </p>
                    <Link to='/about/'>
                        <button className='btn btn-info btn-lg'>
                            { heading }
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
