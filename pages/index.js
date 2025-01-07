import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Badge
} from '@chakra-ui/react'
import { ChevronRightIcon, InfoOutlineIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoFacebook
} from 'react-icons/io5'
import Image from 'next/image'
//import Flag from '../components/flagec'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        display="flex"
        justifyContent={'center'}
      >

      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            HernánWeb
          </Heading>
          <Badge>Web Developer</Badge>
          <br />
          <Badge>Make Internet Great Again! 🔥</Badge>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/hernan.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Acerca 👾
        </Heading>
        <Paragraph>
          Hola🫵, te doy la bienvenida a mi sitio web, donde podrás encontrar
          algunos de mis proyectos personales en el cual además; comparto
          artículos de tecnología, negocios y reflexiones personales. En la
          actualidad soy fundador de{' '}
          <NextLink
            href="https://koonectic.com/"
            passHref
            scroll={false}
            target="_blank"
          >
            <Link>Koonectic</Link>
          </NextLink>
          , una plataforma de desarrollo y comunidad Tech. Te invito a visitar
          mi blog y a que te suscribas a mi newsletter donde cada semana
          comparto un resumen de lo que está pasando en el mundo de la
          tecnología y los negocios digitales
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Mis Proyectos
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio 🧔‍♂️
        </Heading>
        <BioSection>
          <BioYear>1993</BioYear>
          10/31 Cuenca (🎃), Ecuador.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Fundador HomeMedia - Sitio Web dedicado al SEO y Marketing Digital
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Fundador de Nómada Coworking - Espacio dedicado al desarrollo y
          Consultoría de Tecnologías y Startups
        </BioSection>
        <BioSection>
          <BioYear>2020 - presente</BioYear>
          Fundador de Koonectic - Comunidad digital enfocada en Ciencia,
          Tecnología y Desarrollo de Sistemas
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I * R🤘CK
        </Heading>
        <Paragraph>
          Radio Locución 🎙️, Música 🎸,{' '}
          <Link href="https://github.com/hernanweb" target="_blank">
            Code ⌨️
          </Link>
          , Deportes ⚽🥎{' '}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          En la web 🤙
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hernanweb" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#eb5db4"
                leftIcon={<IoLogoGithub />}
              >
                @hernanweb
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hernanwebec" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#eb5db4"
                leftIcon={<IoLogoTwitter />}
              >
                @hernanwebec
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/hernanwebec" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#eb5db4"
                leftIcon={<IoLogoFacebook />}
              >
                @hernanwebec
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/hernanwebec" target="_blank">
              <Button
                variant="ghost"
                colorScheme="#eb5db4"
                leftIcon={<IoLogoInstagram />}
              >
                @hernanwebec
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Contacto
        </Heading>

        <Badge> ✉️ contacto@hernanweb.com</Badge>
        <br />
        <br />
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://blog.hernanweb.com/"
            scroll={false}
            leftIcon={<InfoOutlineIcon />}
            colorScheme="teal"
            target="_blank"
          >
            Mira mi blog aquí 👈
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
