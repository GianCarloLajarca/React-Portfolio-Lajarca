import React from 'react'
import { Link } from 'react-router-dom'
import { devBaseImgUrl } from '../helpers/functions-general'

const PageNotFound = () => {
  return (
<section classNameName="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-24">
        <div className="mx-auto max-w-screen-sm text-center">
            <img src={`${devBaseImgUrl}/404.png`} className="size-52 mx-auto" alt="" />
            <h1 className="mb-8 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p className="mb-8 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. </p>
            <Link to="/login" className="inline-flex border border-accent text-primary bg-accent hover:bg-primary hover:text-accent  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Login Page</Link>
        </div>   
    </div>
</section>
  )
}

export default PageNotFound