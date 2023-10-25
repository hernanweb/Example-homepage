import Link from 'next/link'
import Image from 'next/image'
import { useColorModeValue, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const FlagBox = styled.span`
    font-weight: regular;
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

const Flag = () => {
    const flagImg = `/images/flagec.png`
    return (
        <Link href="/">
        <Link href="">
            <FlagBox>
            <Text
                color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                fontFamily="M PLUS Rounded 1c"
                fontWeight="regular"
                ml={3}
                padding={2}
            >
            Hi there! I&apos;m a web developer based in 
            </Text>

            <Image src={flagImg} width={35} height={25} alt="flag" />
            </FlagBox>
        </Link>
        </Link>
    )
}

export default Flag
