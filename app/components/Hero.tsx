import React from 'react'
import { Carousel } from 'flowbite-react';

const Hero = () => {
  return (
    // <div className="h-80 sm:h-126 xl:h-180 2xl:h-140m object-cover border-none">
    //   <Carousel>
    //     <div className="relative h-full object-cover border-none">
    //       <img
    //         src="/assets/Udaipur.jpg"
    //         alt="Udaipur"
    //         className="object-cover w-full h-full rounded-none"
    //       />
    //       <div className="absolute top-0 left-0 w-full h-ful"></div>
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
    //         <h2 className="text-4xl font-bold mb-2">Udaipur</h2>
    //         <p className="text-lg">
    //           Romantic lakeside city, Udaipur enchants with palaces, vibrant
    //           markets, and regal charm.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="relative ">
    //       <img
    //         src="/assets/Goa.jpg"
    //         alt="Goa"
    //         className=" h-full w-full rounded-none"
    //       />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
    //         <h2 className="text-4xl font-bold ">Goa</h2>
    //         <p className="text-lg ">
    //           Sun-kissed beaches, vibrant nightlife, and Portuguese architecture
    //           make Goa a tropical paradise.{" "}
    //         </p>
    //       </div>
    //     </div>

    //     <div className="relative h-full">
    //       <img
    //         src="/assets/jaipur.jpg"
    //         alt="Goa"
    //         className="w-full h-full rounded-none"
    //       />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    //         <h2 className="text-4xl font-bold mb-2">Jaipur</h2>
    //         <p className="text-lg">
    //           The Pink City, Jaipur dazzles with palaces, vibrant markets, and
    //           rich Rajasthani culture.{" "}
    //         </p>
    //       </div>
    //     </div>

    //     <div className="relative h-full">
    //       <img
    //         src="/assets/Mysore.jpg"
    //         alt="Goa"
    //         className="w-full h-full rounded-none"
    //       />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    //         <h2 className="text-4xl font-bold mb-2">Mysore</h2>
    //         <p className="text-lg">
    //           Cultural gem, Mysore charms with majestic palaces, silk markets,
    //           and a regal heritage.{" "}
    //         </p>
    //       </div>
    //     </div>

    //     <div className="relative h-full">
    //       <img
    //         src="/assets/Shimla.jpg"
    //         alt="Goa"
    //         className="w-full h-full rounded-none"
    //       />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    //         <h2 className="text-4xl font-bold mb-2">Shimla</h2>
    //         <p className="text-lg">
    //           Beautiful destination with stunning views.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="relative h-full">
    //       <img
    //         src="/assets/uttarakhand.jpg"
    //         alt="Goa"
    //         className="w-full h-full rounded-none"
    //       />
    //       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
    //         <h2 className="text-4xl font-bold mb-2">Uttrakhand</h2>
    //         <p className="text-lg">
    //           Beautiful destination with stunning views.
    //         </p>
    //       </div>
    //     </div>
    //   </Carousel>
    // </div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="relative h-full object-cover border-none">
           <img
            src="/assets/Udaipur.jpg"
            alt="Udaipur"
            className="object-cover w-full h-full rounded-none"
          />
          <div className="absolute top-0 left-0 w-full h-ful"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
            <h2 className="text-4xl font-bold mb-2">Udaipur</h2>
            <p className="text-lg">
              Romantic lakeside city, Udaipur enchants with palaces, vibrant
              markets, and regal charm.
            </p>
          </div>
        </div>
        <div className="relative ">
           <img
            src="/assets/Goa.jpg"
            alt="Goa"
            className=" h-full w-full rounded-none"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white ">
            <h2 className="text-4xl font-bold ">Goa</h2>
            <p className="text-lg ">
              Sun-kissed beaches, vibrant nightlife, and Portuguese architecture
              make Goa a tropical paradise.{" "}
            </p>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="/assets/jaipur.jpg"
            alt="Goa"
            className="w-full h-full rounded-none"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Jaipur</h2>
            <p className="text-lg">
              The Pink City, Jaipur dazzles with palaces, vibrant markets, and
              rich Rajasthani culture.{" "}
            </p>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="/assets/Mysore.jpg"
            alt="Goa"
            className="w-full h-full rounded-none"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Mysore</h2>
            <p className="text-lg">
              Cultural gem, Mysore charms with majestic palaces, silk markets,
              and a regal heritage.{" "}
            </p>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="/assets/Shimla.jpg"
            alt="Goa"
            className="w-full h-full rounded-none"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Shimla</h2>
            <p className="text-lg">
              Beautiful destination with stunning views.
            </p>
          </div>
        </div>

        <div className="relative h-full">
          <img
            src="/assets/uttarakhand.jpg"
            alt="Goa"
            className="w-full h-full rounded-none"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h2 className="text-4xl font-bold mb-2">Uttrakhand</h2>
            <p className="text-lg">
              Beautiful destination with stunning views.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero


// relative: Establishes a positioning context for the absolute positioning of the overlay.
// absolute: Positions the overlay absolutely within the relative container.
// top-1/2 and left-1/2: Moves the overlay to the center of the container.
// transform -translate-x-1/2 -translate-y-1/2: Centers the overlay precisely.