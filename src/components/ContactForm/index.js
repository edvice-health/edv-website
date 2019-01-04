import React from 'react'

import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'
import * as Form from 'react-bulma-components/lib/components/form';

import ColumnHeading from '../elements/ColumnHeading'
import './styles.scss'

const ContactForm = () => (
    <Section className='is-fullheight is-centered' id="contact">
      <Container>
        <form url="#">
          <Columns className="is-tablet">
            <ColumnHeading size='one-quarter'>Contact us.<br/>Get listed.</ColumnHeading>
            <Columns.Column className='contact-form-column'>
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
              <Form.Field className='contact-form-field-message'>
                <Form.Label className="is-sr-only">Message</Form.Label>
                <Form.Control>
                  <Form.Textarea placeholder="Write something here..." />
                </Form.Control>
              </Form.Field>
            </Columns.Column>
          </Columns>
          <Button fullwidth={true} color='dark' size='large' className="has-font-bold">
            Submit.
          </Button>
        </form>
      </Container>
    </Section>
);

export default ContactForm;
