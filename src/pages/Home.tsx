import { Box } from '@chakra-ui/react'
import Hero from '../components/home/Hero'
import SectionAbout from '../components/home/SectionAbout'
import Footer from '../components/Footer'

function Home() {
  return (
    <Box 
    // bgColor="#242424"
    //  h="100vh"
    >
      <Hero/>
      <SectionAbout/>
      <Footer/>
    </Box>
  )
}

export default Home