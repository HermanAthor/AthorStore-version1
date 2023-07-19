 "use client"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MainLayout from '../../../../components/LayoutComponents/MainLayout'
import Detailcorousel from '../../../../components/Detailcorousel'

const CompTry = () => {
  return (
    <MainLayout>
        <Container className=' pt-16'>
            <Grid container spacing={1} className='p-4'>
                <Grid item xs={12} md={6}>
                    <Detailcorousel/>
                    {/* <Box className="w-full h-full mb-3">
                        <img className=' object-contain h-full w-full'  src="https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600" alt="plant photo" />
                    </Box> */}
                </Grid>
                <Grid item xs={12} md={6} className=''>
                    <Box>
                        <Typography className="text-xl font-sans mb-4" variant='body2'>Herbs seeds, indoor Plants, Medium Plants</Typography>
                        <Typography className=' text-3xl font-serif mb-4' variant='h6'>Zz Plants</Typography>
                        <Typography className=' text-2xl font-sans' variant='body1'>
                            <span className='font-bold'>
                            $124.90
                            </span>
                            <span className='text-[16px]'>
                            + Free shipping
                            </span>
                        </Typography>
                        <Box className="flex flex-col">
                            <p className='text-[16px] mb-4'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam, blanditiis nisi repellat eligendi architecto quos id delectus, quae esse dolor tenetur. Molestiae placeat eum quam enim sequi expedita in?
                            </ p>
                            <p className='text-[16px] mb-4' >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, enim quidem laudantium iure non voluptatibus voluptates tenetur modi qui quia blanditiis aliquid nobis sit quae quos, sunt totam, vero beatae.
                            </p>
                        </Box>
                        <Box className="flex flex-row ">
                            <Box className="p-2 m-2">1</Box>
                            <Box>
                                <Button variant='outlined' color='secondary'>Add to Cart</Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </MainLayout>
  )
}

export default CompTry
 