import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumKoonectic from '../public/images/works/koonectic-web.png'

const Works = () => (
  <Layout title="Works">
    <Container>
    
    {/* First Grid */}
    <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Portfolio
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem 
            id="koonectic" 
            title="Koonectic" 
            thumbnail={thumKoonectic}
          >
            Koonectic es una comunidad de desarrolo tech
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            id="koonectic" 
            title="Koonectic" 
            thumbnail={thumKoonectic}
          >
            Koonectic es una comunidad de desarrolo tech
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            id="koonectic" 
            title="Koonectic" 
            thumbnail={thumKoonectic}
          >
            Koonectic es una comunidad de desarrolo tech
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem 
            id="koonectic" 
            title="Koonectic" 
            thumbnail={thumKoonectic}
          >
            Koonectic es una comunidad de desarrolo tech
          </WorkGridItem>
        </Section>        


      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
