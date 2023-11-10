import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Ups! 😥</Heading>
      <Text>La página buscada no ha sido encontrada. Pero no te preocupes, aquí 👇 puedes regresar a ver más  </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Retornar a la Homepage
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
