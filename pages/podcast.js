import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { Divider } from '@chakra-ui/react'

import thumbSlipknot from '../public/images/contents/slipknot.jpg'
import thumbJulioJaramillo from '../public/images/contents/juliojaramillo1.jpg'
import thumbBusta from '../public/images/contents/busta.jpg'
import thumbAladino from '../public/images/contents/aladino.jpg'

const Podcast = () => (
  <Layout title="Podcast">
    <Container>

      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
      🔥 En Frecuencia FM📻 a 45rpm 🎙️
      </Heading>

      {/* First Grid */}
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
            title="Slipknot - Duality at BBC Maida Vale Studios for the Radio 1 Rock Show"
            thumbnail={thumbSlipknot}
            href="https://www.youtube.com/watch?v=KVtdUqVKVEY"
          />

          <GridItem
            title="JULIO JARAMILLO - De Cigarro en Cigarro"
            thumbnail={thumbJulioJaramillo}
            href="https://www.youtube.com/watch?v=NU4I-NDmYH8"
          />

          <GridItem
            title="Look at Me Now (Official Video) ft. Lil Wayne, Busta Rhymes"
            thumbnail={thumbBusta}
            href="https://www.youtube.com/watch?v=8gyLR4NfMiI"
          />

          <GridItem
            title="Aladino (El Mago de la Rockola) - Penas"
            thumbnail={thumbAladino}
            href="https://www.youtube.com/watch?v=WYagFh5KXW4"
          />

        </SimpleGrid>
      </Section>

      
    </Container>
  </Layout>
)

export default Podcast
export { getServerSideProps } from '../components/chakra'
