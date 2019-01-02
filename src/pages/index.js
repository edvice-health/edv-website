import React from 'react'

import Section from 'react-bulma-components/lib/components/section'
import Hero from 'react-bulma-components/lib/components/hero'
import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import * as Form from 'react-bulma-components/lib/components/form';

import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'

const IndexPage = () => (
  <Layout>
    <Hero size='fullheight'>
      <HeroImage/>
      <Hero.Body >
        <Container className='has-text-centered has-text-right-tablet'>
          <Heading className='has-font-bold'>
            your health is our PRIORITY
          </Heading>
          <Heading subtitle size={4} renderAs="h2" className='has-font-cursive'>
            some curvy polish text ^_^
          </Heading>
        </Container>
      </Hero.Body>
    </Hero>
    <Section size='fullheight' id="story">
      <Container>
        <Columns>
          <Columns.Column>
            <div className="story-column-title">
              <Heading>The Company story.</Heading>
            </div>
          </Columns.Column>
          <Columns.Column>
            <div className="story-column">
              <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non metus lacinia, scelerisque lectus in, gravida mauris. Aliquam fermentum massa ac sapien ultrices, eu mollis massa porta. In hac habitasse platea dictumst. Fusce ut tellus non nulla convallis efficitur. Sed nec velit ut elit tempus tincidunt. Cras suscipit posuere odio, eget tempus diam pharetra a.</strong>
            </div>
          </Columns.Column>
          <Columns.Column>
            <div className="story-column">
              Proin congue leo velit, ac ornare arcu pretium id. Nam lobortis justo sed arcu commodo, at gravida augue euismod. Praesent euismod congue ipsum, at faucibus turpis lobortis feugiat. Vivamus faucibus id enim nec luctus. Morbi suscipit maximus risus, sed auctor erat vulputate et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec accumsan augue. Donec elit ipsum, pulvinar eu imperdiet quis, sagittis quis leo.
            </div>
          </Columns.Column>
          <Columns.Column>
            <div className="story-column">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum lobortis est et massa tempus lobortis. Mauris fringilla felis lobortis sem aliquet, at congue nunc egestas. Sed et sagittis dui. Cras sit amet augue massa. Vestibulum ac ipsum eget velit bibendum ultrices. Maecenas quam nisi, congue ac vestibulum non, tincidunt in neque.
            </div>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Section size='fullheight' id="contact">
      <form url="#">
        <Container>
          <Columns>
            <Columns.Column size="one-quarter">
              <div className="story-column-title">
                <Heading>Contact us.<br/>Get listed.</Heading>
              </div>
            </Columns.Column>
            <Columns.Column >
              <Columns>
                <Columns.Column>
                  <Form.Field>
                    <Form.Label className="is-sr-only">Your name</Form.Label>
                    <Form.Control>
                      <Form.Input type="text" defaultValue='' placeholder="Your name"/>
                    </Form.Control>
                  </Form.Field>
                </Columns.Column>
                <Columns.Column>
                  <Form.Field>
                    <Form.Label className="is-sr-only">Your email</Form.Label>
                    <Form.Control>
                      <Form.Input type="email" defaultValue='' placeholder="Your email"/>
                    </Form.Control>
                  </Form.Field>
                </Columns.Column>
              </Columns>
              <Form.Field>
                <Form.Label className="is-sr-only">Message</Form.Label>
                <Form.Control>
                  <Form.Textarea placeholder="Write something here..." />
                </Form.Control>
              </Form.Field>
            </Columns.Column>
          </Columns>
          <Button fullwidth={true} color='dark' size='large' className="font-title">
            Submit.
          </Button>
        </Container>
      </form>
    </Section>
  </Layout>
)

export default IndexPage
