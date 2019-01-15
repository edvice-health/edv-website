import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import * as Form from 'react-bulma-components/lib/components/form';

import CMSImage from '../elements/CMSImage'
import './styles.scss'


class SearchMap extends React.Component {
  constructor(props) {
    super(props);
    this.allSpecialists = props.data.specialists.map(({node}) => node);
    this.state = { query: '' };
    this.setQuery = this.setQuery.bind(this);
  }
  setQuery (ev) {
    this.setState({query: ev.target.value});
  }
  render () {
    const { query } = this.state;
    const specialists = filter(this.allSpecialists, {query});
    return (
      <Section>
        <Container>
          <Form.Field>
            <Form.Label className="is-sr-only">Search</Form.Label>
            <Form.Control>
              <Form.Input type="text" value={query} onChange={this.setQuery} placeholder="Search"/>
            </Form.Control>
          </Form.Field>
        </Container>
        <Results specialists={specialists} />
      </Section>
    );
  }
}

function filter(specialists, {query}) {
  if (!query) {
    return specialists;
  }
  return specialists.filter(({name}) => name.toLowerCase().indexOf(query.toLowerCase()) >= 0);
}

function Results ({ specialists }) {
  return (
    <Container className=''>
      { specialists.map((node) => (
        <Card key={node.id}>
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
  );
}

export default SearchMap;
