import Link from 'next/link'
import Image from 'next/image'
import { useColorModeValue, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const zhumirImg = `/images/zhumir.png`
  return (
    <Link href="/">
      <Link href="./">
        <LogoBox>
          <Image src={zhumirImg} width={35} height={35} alt="Logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Hern&#225;n Quillay Cevallos
          </Text>
        </LogoBox>
      </Link>
    </Link>
  )
}

export default Logo
