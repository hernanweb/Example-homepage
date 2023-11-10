import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="koonectic">
    <Container>
      <Title>
        Koonectic <Badge>2020 🏷️</Badge>
      </Title>
      <P>
      Somos Comunidad, somos cultura: "Identidad que conecta comunidad." | Ciencia, Cultura y Tecnología.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://koonectic.com/">
          https://koonectic.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Todas</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Php, Wordpress Framework</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://koonectic.com/2023/03/30/silicon-valley-bank-su-descenso-y-el-fin-de-una-era-cual-sera-el-futuro-del-financiamiento-de-las-startups-ahora/">
          Silicon Valley Bank: Su descenso y el fin de una era ¿Cuál será el futuro del financiamiento de las Startups ahora? <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/koonectic-web.png" alt="koonectic" />
      <br />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/9wbnhwR0bR0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
