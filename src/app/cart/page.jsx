"use client"
import React from 'react'
import MainLayout from '../../../components/LayoutComponents/MainLayout'
import { Container, Grid } from '@mui/material'

const CartPage = () => {
  return (
    <MainLayout>
      <Container>
        <Grid container className='flex w-full flex-row justify-between items-center content-center md:bg-white md:h-56 mt-24 rounded-lg'>
          <Grid item xs={12} md={2}>
            <div className=' flex md:justify-center md:items-center content-center rounded-lg'>
              <img className='h-56 w-56 object-cover rounded-lg' src="https://images.pexels.com/photos/2946956/pexels-photo-2946956.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shoe" />
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className='flex flex-row md:flex-col md:ml-4 md:mb-4 gap-10'>
              <p>Price <span className='md:hidden'>:</span></p>
              <p>DKK 300</p>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className='flex flex-row md:flex-col md:ml-4 md:mb-4 gap-10'>
              <p>Product <span className='md:hidden'>:</span></p>
              <p>Sweater</p>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className='flex flex-row md:flex-col md:ml-4 md:mb-4 gap-10'>
              <p>Quantity <span className='md:hidden'>:</span></p>
              <div className='flex flex-row border border-black justify-between items-center'>
                <button className='border border-black items-center content-center w-full sm:py-4 sm:px-4'>-</button>
                <div className='border flex justify-center border-black items-center content-center w-full sm:py-4 sm:px-4'><p className='items-center'>2</p></div>
                <button className='border border-black items-center content-center w-full sm:py-4 sm:px-4'>+</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <div className='flex flex-row md:flex-col md:ml-6 md:mb-4 gap-10'>
              <p>Total <span className='md:hidden'>:</span></p>
              <p>300</p>
            </div>
          </Grid>
          <Grid item xs={12} md={2}>
            <button>clear Cart</button>
          </Grid>
          
        </Grid>
        
      </Container>
    </MainLayout>
  )
}

export default CartPage

//className='flex flex-row justify-between items-center content-center bg-white h-56 mt-24 rounded-lg'
//<div className=' flex justify-center items-center content-center rounded-lg'>
//<img className='h-56 w-56 object-cover rounded-lg' src="https://images.pexels.com/photos/2946956/pexels-photo-2946956.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shoe" />
//</div>