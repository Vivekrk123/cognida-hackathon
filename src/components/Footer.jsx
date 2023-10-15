import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor='rgb(0,0,0,0.9)'>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        
      >
        <Box >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color='white'
          >
            ECFASHION
            </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color='white'>
            About Us
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color='white'>
            Customer Care
          </Typography>
          
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color='white'>
            Contact Us
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;