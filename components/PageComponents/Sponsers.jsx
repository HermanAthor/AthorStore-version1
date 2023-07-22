import React from 'react'

const Sponsers = () => {

    const logos = [
        {
            id:1, 
            url:'https://cdn.tuk.dev/assets/adidas-dark.png'
        },
        {
            id:2, 
            url:'https://cdn.tuk.dev/assets/channel-dark.png'
        },
        {
            id:3, 
            url:'https://cdn.tuk.dev/assets/nike-dark.png'
        },
        {
            id:4, 
            url:'https://cdn.tuk.dev/assets/toyota-dark.png'
        },
        {
            id:5, 
            url:'https://cdn.tuk.dev/assets/gs1-dark.png'
        },
        {
            id:6, 
            url:'https://cdn.tuk.dev/assets/berry-dark.png'
        },
        {
            id:7, 
            url:'https://cdn.tuk.dev/assets/min-dark.png'
        },
        {
            id:8, 
            url:'https://cdn.tuk.dev/assets/honda-dark.png'
        },
    ]
    

  return (
    <div className="container mx-auto pt-16">
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
            {logos.map((url, id) => (
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                    <img className="focus:outline-none" src={url} alt={url} />
                </div>)
            )}
        </div>
    </div>
  )
}

export default Sponsers