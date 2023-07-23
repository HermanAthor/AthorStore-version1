"use client"
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Ourstory = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} className='flex justify-center items-center content-center'>
            <Box className="mx-auto">
                <Typography className=" mx-auto" variant='h2'> Why shop with us</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box className="w-full h-full">
                <img className="object-cover w-full" src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=600" alt="our-story-pic" />
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box className="flex flex-col justify-center items-center content-center w-full h-full bg-no-repeat bg-cover bg-center ">
                <Typography className="uppercase text-2xl mt-2 mb-2" variant='body1'>our story</Typography>
                <Typography className="text-3xl mb-4" variant='h6'> For People who Love Shopping</Typography>
                <Typography className="text-sm mb-4" variant='body2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aspernatur autem dolorum optio et nobis pariatur quibusdam quis ab nostrum doloribus deleniti quasi voluptatem quia, repellat aperiam incidunt provident veritatis.
                </Typography>
                <Typography className="text-sm mb-4" variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum non quidem unde ut. Quae facere maxime expedita odio aspernatur, possimus doloremque harum voluptate consectetur voluptatibus veniam soluta reiciendis odit?
                </Typography>
                <Typography className="bg-green-500 text-white py-2 px-2" variant='body1'>Read More</Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default Ourstory