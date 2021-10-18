import { useState } from 'react'
import { Message, Layout, SEO, Container } from 'components'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/accordion'
import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import Styled from '@emotion/styled'

const Tabs = Styled.div`
  border-bottom: 1px solid #CACACA;
  overflow-x: scroll;
`

const StyledContainer = Styled(Container)`
  padding-bottom: unset;
  min-width: fit-content;
  display: flex
`

const Logo = Styled.div`
  background: #F5F5F5;
`

const Update = Styled.div`
  color: #00dcc8;
  font-weight: 400;
  font-weight: ;400;
`

const SlNo = Styled.label`
  color: #31B4A1;
  height: 23px;
  font-size:20px;
  line-height:40px;
  padding-right:10px;
`

const Title = Styled.label`
  height: 40px;
  font-size:24px;
  line-height:40px;
  font-weight:bold;
`

const EndNote = Styled.div`
  padding: 50px 0
`

const StyledAnchor = Styled.a`
  color: #00dcc8;
  font-weight: 400;
`

const TableContainer = Styled.div`
  max-width: 100vw;
  overflow-x: auto;
`

const TableHeaderCell = Styled.th`
  border: 1px solid black;
  padding: 10px;
`

const TableCell = Styled.td`
  border: 1px solid black;
  padding: 10px;
`

const UlList = Styled.ul`
  width: 85%;
  margin-bottom: 20px;
  margin-left: 40px;
`

const ButtonLabel = Styled.div`
  text-align: left;
  line-height: 24px;
`

const ButtonCaption = Styled.div`
  font-size: 18px;
  font-weight: normal;
`

export default function TandC({ tabs, headerTitle, tabContent, labels }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0].key)
  const { introduction, content, logoUrl = null } = tabContent[selectedTab]
  const { lastUpdated, note } = labels
  const formatNumber = (num) => {
    if (num < 10) {
      return '0' + num
    } else {
      return num
    }
  }

  return (
    <Layout useWhiteHeader showHeaderActions={false}>
      <SEO title={headerTitle.title} />
      <Flex
        w="100%"
        h={['400px']}
        backgroundImage="url(/images/t_and_c_header.svg)"
        backgroundPosition={['65% 50%', '80%']}
        backgroundSize="cover"
        color="white"
        position="relative"
        alignItems={['flex-end', 'flex-end', 'center', 'center']}
        justifyContent={['flex-end', 'flex-end', 'normal', 'normal']}
      >
        {getHeader(headerTitle)}
      </Flex>

      <Tabs className="t-and-c-tabs">
        <StyledContainer>
          {tabs.map(({ label, key, caption = null }, ind) => {
            return (
              <Button
                _focus={{ outline: 'none' }}
                _hover={{ background: 'white' }}
                _active={{ background: 'white' }}
                key={ind}
                width="245px"
                padding="40px"
                marginRight={['50px', '100px']}
                borderBottom={
                  selectedTab === key ? '4px solid #31B4A1' : '4px solid white'
                }
                borderBottomLeftRadius="0px"
                borderBottomRightRadius="0px"
                backgroundColor="white"
                fontWeight={selectedTab === key ? '700' : '400'}
                fontSize="24px"
                lineHeight="40px"
                onClick={() => {
                  setSelectedTab(key)
                }}
              >
                <ButtonLabel>
                  {label}
                  <br />
                  {caption && <ButtonCaption>{caption}</ButtonCaption>}
                </ButtonLabel>
              </Button>
            )
          })}
        </StyledContainer>
      </Tabs>
      {logoUrl && (
        <Logo>
          <Container>
            <Image
              src={logoUrl}
              alt="partner_logo"
              height="71.56px"
              width="174px"
            />
          </Container>
        </Logo>
      )}
      <div className="content">
        <Container>
          <Update>{lastUpdated}</Update>
          {introduction.map((item, key) => {
            return (
              <Message
                as={Text}
                color="#6D6D6D"
                fontWeight="400"
                lineHeight="24px"
                fontSize="14px"
                key={key}
                message={item}
              />
            )
          })}
          <Accordion allowMultiple borderColor="#6D6D6D" marginTop="40px">
            {content.map(({ title, description = [] }, index) => {
              return (
                <AccordionItem key={index}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        marginTop="20px"
                        marginBottom="20px"
                        _focus={{ outline: 'none' }}
                      >
                        <Box flex="1" textAlign="left">
                          <SlNo>{formatNumber(index + 1)}</SlNo>
                          <Title>{title}</Title>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={'/images/minus.svg'}
                            height="2px"
                            width="31px"
                            color="#6D6D6D"
                            alt=""
                          />
                        ) : (
                          <Image
                            src={'/images/plus.svg'}
                            height="31.2px"
                            width="31.2px"
                            color="#6D6D6D"
                            alt=""
                          />
                        )}
                      </AccordionButton>
                      <AccordionPanel
                        pb={4}
                        color="#6D6D6D"
                        fontSize="18px"
                        lineHeight="32px"
                      >
                        <div>
                          {description.length > 0 && (
                            <div>
                              {description.map((descr, index) => {
                                return getInnerContent(descr, index)
                              })}
                            </div>
                          )}
                        </div>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              )
            })}
          </Accordion>
          <EndNote>
            {note.subNote1}
            <StyledAnchor href="mailto:care@uni.club">
              {note.subNote2}
            </StyledAnchor>
            {note.subNote3}
          </EndNote>
        </Container>
      </div>
    </Layout>
  )
}

function getTableContent(body) {
  const {
    data: { headers, tableData },
  } = body
  const keys = []
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {headers.map(({ label, accessor }, headerId) => {
              keys.push(accessor)
              return <TableHeaderCell key={headerId}>{label}</TableHeaderCell>
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, rowId) => {
            return (
              <tr key={rowId}>
                {keys.map((key, colId) => {
                  return <TableCell key={colId}>{item[key]}</TableCell>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}

function getHeader({ title, caption }) {
  return (
    <Container>
      <Heading
        as="h3"
        fontSize={['3xl', '4xl', '5xl']}
        width={['100%', '100%', '60%', '60%']}
      >
        {title}
      </Heading>
      {caption && <Text fontSize="3xl">{caption}</Text>}
    </Container>
  )
}

function getInnerContent(item, num = '') {
  if (typeof item === 'object') {
    switch (item.type) {
      case 'table':
        return getTableContent(item)

      case 'ul':
        const { styles } = item
        return (
          <UlList style={{ ...styles }} key={num}>
            {item.data.map((item, num) => {
              return <li key={num}>{getInnerContent(item)}</li>
            })}
          </UlList>
        )

      case 'nested':
        const {
          description,
          nestedStyle,
          nestedHeader,
          nestedContent,
          nestedHeaderStyle = {},
          contentType: Type,
        } = item
        return (
          <>
            {description && <Message message={description} />}
            {nestedHeader && (
              <Message
                message={nestedHeader}
                style={{ ...nestedHeaderStyle }}
              />
            )}
            <Type style={{ ...nestedStyle }}>
              {nestedContent.map((item, index) => {
                return <li key={index}>{getInnerContent(item)}</li>
              })}
            </Type>
          </>
        )
      default:
        return <Message size="xl" message={item} />
    }
  } else {
    return (
      <Text key={num} marginBottom="20px">
        <Message size="xl" message={item} />
      </Text>
    )
  }
}
