// import React from "react";
// import { Footer, Navbar } from "../components";
// const ContactPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="background-color: blue;">
//         <div class="bg-blue-200"></div>
//         <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <div class="row my-4 h-10000 bg-blue">
//           <div class="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div class="form my-30000  bg-blue">
//                 <label for="Name">Name</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div class="form my-3">
//                 <label for="Email">Email</label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div class="form  my-3">
//                 <label for="Password">Message</label>
//                 <textarea
//                   rows={5}
//                   class="form-control"
//                   id="Password"
//                   placeholder="Enter your message"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   class="my-2 px-4 mx-auto btn btn-dark"
//                   type="submit"
//                   disabled
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ContactPage;
import React from "react";
import "./contact.css";
import { Footer, Navbar } from "../components";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-VU8EB5UeVRs5OxVGrBVpjpNMuWVLu9tODPqcW3x9NAfO0F/2bvmkNe+ywXPGbQr4LZl5cA5rD6RpEuL8ScT/Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="first">
          <h1 className="text-center">Contact Us</h1>
          <p1 className="p1a">Welcome to Bath Theories! We're your premier destination for high-quality sanitary products. From stylish faucets to durable toilets, we have everything you need for your bathroom renovation or construction project. Our knowledgeable staff is here to assist you every step of the way. Contact us today with any questions or inquiries. Thank you for choosing Bath Theories</p1>
          <hr></hr>
        </div>

        <div className="left">
          <div className="divs">
            <i class="fas fa-phone fa-2x"></i>
            <div className="phone"> 
            <a href="tel:+9541411804">+9541411804</a>
            </div>

          </div>
          <div className="divs">
            <i class="fas fa-envelope fa-2x"></i>
            <div className="phone"> 
            <a href="mailto:example@example.com">example@example.com</a>

          </div>


          </div>
          <div className="divs">
            <i class="fas fa-map-marker-alt fa-2x"></i>
            <div className="phone"> 
            <a href="https://www.google.com/maps/place/BATH+THEORIES/@29.510903,75.4530237,17z/data=!4m16!1m9!3m8!1s0x391165be54e0112d:0x284c630ae86e06f0!2sBATH+THEORIES!8m2!3d29.510903!4d75.4530237!9m1!1b1!16s%2Fg%2F11slrlnsxb!3m5!1s0x391165be54e0112d:0x284c630ae86e06f0!8m2!3d29.510903!4d75.4530237!16s%2Fg%2F11slrlnsxb?entry=ttu" target="none">Google Map</a>

          </div>

          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
