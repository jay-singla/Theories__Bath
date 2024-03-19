import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At Bath Theories we provide comprehensive and integrated collections of Sanitaryware, Faucets, Bathroom Fittings, & Artisanal Wash Basins which have been developed to meet the needs of all our discerning customers at wholesale rates.
Bath Theories is a multi-brand showroom where we address all types of costumers and their needs . We are the only multi-brand showroom in our city with a large collection of products and always prioritise the satisfaction of costumers.
        </p>

        <h2 className="text-center py-4">Glimpse of Showroom</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            
             <a href='https://www.google.com/maps/place/BATH+THEORIES/@29.510903,75.4530237,15z/data=!4m6!3m5!1s0x391165be54e0112d:0x284c630ae86e06f0!8m2!3d29.510903!4d75.4530237!16s%2Fg%2F11slrlnsxb?entry=ttu' target="_blank"> <img className="card-img-top img-fluid" src="./assets/showroom/1.jpg" alt="" height={160} /></a>
             
            
          </div>
         
          <div className="col-md-3 col-sm-6 mb-3 px-3">
          <a href='https://www.google.com/maps/place/BATH+THEORIES/@29.510903,75.4530237,15z/data=!4m6!3m5!1s0x391165be54e0112d:0x284c630ae86e06f0!8m2!3d29.510903!4d75.4530237!16s%2Fg%2F11slrlnsxb?entry=ttu' target="_blank">
              <img className="card-img-top img-fluid" src="./assets/showroom/2.jpeg" alt="" height={160} />
              </a>
           
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
          <a href='https://www.google.com/maps/place/BATH+THEORIES/@29.510903,75.4530237,15z/data=!4m6!3m5!1s0x391165be54e0112d:0x284c630ae86e06f0!8m2!3d29.510903!4d75.4530237!16s%2Fg%2F11slrlnsxb?entry=ttu' target="_blank">
              <img className="card-img-top img-fluid" src="./assets/showroom/3.jpeg" alt="" height={160} />
              </a>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
          <a href='https://www.google.com/maps/place/BATH+THEORIES/@29.510903,75.4530237,15z/data=!4m6!3m5!1s0x391165be54e0112d:0x284c630ae86e06f0!8m2!3d29.510903!4d75.4530237!16s%2Fg%2F11slrlnsxb?entry=ttu' target="_blank">
              <img className="card-img-top img-fluid" src="./assets/showroom/4.jpeg" alt="" height={160} />
              </a>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage