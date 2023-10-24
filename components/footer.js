import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} HernánWeb 🤘😎. All Rights Reserved. <br />
      This website is built based on the <Link href="https://www.craftz.dog/">Takuya Matsuyama's website</Link>
    </Box>
  )
}

export default Footer
