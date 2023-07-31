 "use client"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import MainLayout from '../../../../components/LayoutComponents/MainLayout'
//import Detailcorousel from '../../../../components/Detailcorousel'
import { getProductsDetails } from '@/api/utils'
import { useContext } from 'react'
import  CartContext  from '@/context/cart'





export default async function Details({params}) {
    
    const detailsData = await getProductsDetails(params.productId)

  return (
    <>
        <ProductDetails details={detailsData} />

        {/* <p>{detailsData.title}</p> */}
    </>
  )
}







const ProductDetails =  ({details}) => {
    const {addToCart}= useContext(CartContext)
    
  
  return (
    <MainLayout>
        <Container className=' pt-16'> 
                <Grid container spacing={1} className='p-4'>
                    <Grid item xs={12} md={6}>
                        {/* <Detailcorousel/> */}
                        <Box className="w-full h-full mb-3">
                            <img className=' object-contain h-full w-full'  src={details.image} alt={details.title} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className=''>
                        <Box>
                            <Typography className="text-xl font-sans mb-4" variant='body2'>{details.category}</Typography>
                            <Typography className=' text-3xl font-serif mb-4' variant='h6'>{details.title}</Typography>
                            <Typography className=' text-2xl font-sans' variant='body1'>
                                <span className='font-bold'>
                                DKK {details.price}
                                </span>
                                <span className='text-[16px]'>
                                + Free shipping
                                </span>
                            </Typography>
                            <Box className="flex flex-col">
                                <p className='text-[16px] mb-4'>
                                    {details.description}
                                </p>
                                <p className='text-[16px] mb-4' >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, enim quidem laudantium iure non voluptatibus voluptates tenetur modi qui quia blanditiis aliquid nobis sit quae quos, sunt totam, vero beatae.
                                </p>
                            </Box>
                            <Box className="flex flex-row ">
                                <Box className="p-2 m-2">1</Box>
                                <Box>
                                    <Button onClick={()=> addToCart(details)} variant='outlined' color='secondary'>Add to Cart</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
         </Container>
    </MainLayout>
  )
}


 