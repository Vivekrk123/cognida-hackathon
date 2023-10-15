import React from 'react'
import { Badge , Box , IconButton ,} from "@mui/material";
//import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <Box
        display='flex'
        width='100%'
        height='auto'
        backgroundColor='white'
    >
      <Box
        display='flex'
        flexDirection='row'
        margin="100px"
      >
        <Box
          display='flex'
          flexDirection='column'
          marginRight="50px">
        
          <Box
          width="480px"
          height="auto"
          fontFamily="Pair Fair Display SC"
          fontSize='60px'
          >
            Welcome to the 
            Future of 
            Fashion!
          </Box>
          <Box
          width="480px"
          height="auto"
          fontFamily="Pair Fair Display SC"
          fontSize='20px'
          marginTop='50px'
          >
            Discover the world of sustainable fashion with our eco-friendly clothing range where style meets environmental consciousness.
          </Box>

          </Box>
          <Box
              component="img"
              sx={{
              height: 350,
              width: 450,
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
              }}
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        
            />
      <Box>
      </Box>
      </Box>
      
    </Box>
  );
}

export default Home
