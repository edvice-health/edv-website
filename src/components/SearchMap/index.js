import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';

import CMSImage from '../elements/CMSImage'
import './styles.scss'

class SearchMap extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <Section>
        <Container className=''>
          { data.specialists.map(({ node }) => (
            <Card>
              <Card.Content>
                <Media>
                  <Media.Item renderAs="figure" position="left" size={64}>
                    <CMSImage style={{ width: '6em', height: '6em' }} image={node.picture} />
                  </Media.Item>
                  <Media.Item>
                    <Heading size={4}>{node.name}</Heading>
                    <Heading subtitle size={6}>{node.profession}</Heading>
                  </Media.Item>
                </Media>
                <Content dangerouslySetInnerHTML={{__html: node.desctiption.childMarkdownRemark.html}} />
              </Card.Content>
            </Card>
          ))}
        </Container>
      </Section>
    );
  }
}

export default SearchMap;
