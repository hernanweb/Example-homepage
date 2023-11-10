import Head from 'next/head'
/* import dynamic from 'next/dynamic' */
import NavBar from '../navbar'
import { Box, Container, Divider } from '@chakra-ui/react'
import Footer from '../footer'
import TMfooter from '../tmfooter'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hernan's homepage" />
        <meta name="author" content="HernánWeb" />
        <meta name="author" content="HernánWeb" />
        <link rel="apple-touch-icon" href="zhumir.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Hernán Quillay Cevallos" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hernanwebec" />
        <meta name="twitter:creator" content="@hernanwebec" />
        <meta name="twitter:image" content="https://www.hernanweb/hernan.png" />
        <meta property="og:site_name" content="HernánWeb" />
        <meta name="og:title" content="HernánWeb" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.hernanweb/hernan.png" />
        <meta charSet="UTF-8" />
        <title>HernánWeb - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <br />
        <Divider my={6} />
        <Footer />
        <TMfooter />
      </Container>
    </Box>
  )
}

export default Main
