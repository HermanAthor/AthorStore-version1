// "use client";
// import { Carousel } from "@mantine/carousel";
// import { testimonyData } from "./testimonyData";
// //import { useMediaQuery } from '@mantine/hooks';
// //import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

// const Testimonials = () => {
//   //const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`)
//   //const autoplay = useRef(Autoplay({ delay: 2000 }));

//   return (
//     <>
//       <div className="flex flex-col mx-auto text-3xl text-black">
//         <h1>What People say about our site</h1>
//         <span className="block h-2 w-24 bg-indigo-500 mt-6 m-4 rounded mx-auto"></span>
//       </div>
//       <Carousel
//         slideSize="50%"
//         breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
//         slideGap="xl"
//         align="start"
//         slidesToScroll={2}
//         loop
//         // plugins={[autoplay.current]}
//         // onMouseEnter={autoplay.current.stop}
//         // onMouseLeave={autoplay.current.reset}
//         className="container px-4 mx-auto py-24"
//       >
//         {testimonialsCards}
//       </Carousel>
//     </>
//   );
// };

// export default Testimonials;

// const testimonialsCards = testimonyData.map(
//   ({ id, img, message, name, title }) => {
//     return (
//       <Carousel.Slide key={id}>
//         <div className="lg:w-full lg:mb-0 mb-6 p-4 w-full">
//           <div className="h-full text-center">
//             <img
//               alt="testimonial"
//               className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
//               src={img}
//             />
//             <p className="leading-relaxed">{message}</p>
//             <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
//             <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
//               {name}
//             </h2>
//             <p className="text-gray-500">{title}</p>
//           </div>
//         </div>
//       </Carousel.Slide>
//     );
//   }
// );
