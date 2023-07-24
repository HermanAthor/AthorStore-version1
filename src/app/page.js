
import Products from '../../components/PageComponents/Products'
import Sponsers from '../../components/PageComponents/Sponsers'
import MainLayout from '../../components/LayoutComponents/MainLayout'
import Footer from '../../components/PageComponents/Footer'
import Ourstory from '../../components/PageComponents/Ourstory'
import Testimonials from '../../components/PageComponents/Testmonials'

export default function Home() {

  const Landing = () =>{
    return(
      <div className="w-full h-[100vh] flex flex-row justify-center items-center bg-no-repeat bg-cover bg-fixed bg-[url('https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?b=1&s=612x612&w=0&k=20&c=mwZYTXRUffNG-igVygp49KPbBT4Dp0va1MxomnP3j9M=')]">
        <div>
          <h4 className='text-1xl m-5 text-gray-700 text-center'>WELCOME TO THE ATHORSTORE</h4>
          <h1 className='text-5xl text-gray-500 text-center'>Let's Bring the Spring to Your Home</h1>
          <div className='flex justify-center items-center mt-8'>
            <button className='p-4 m-4 rounded-full items-center text-white bg-black px-8'>Shop Now</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <MainLayout>
      <Landing/>
      <div className="flex min-h-screen flex-col items-center justify-between md:p-4">
        <Products/>
        <Ourstory/>
        <Sponsers/>
        <Testimonials/>
      </div>
    </MainLayout>
  )
}
