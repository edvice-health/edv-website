import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'

import ColumnHeading from '../elements/ColumnHeading'
import './styles.scss'

const Story = ({data}) => (
  <Section className='is-fullheight is-centered' id="story">
    <Container>
      <Columns className="is-tablet">
        <ColumnHeading>{data.title}</ColumnHeading>
        <Columns.Column>
          <div className="story-column" dangerouslySetInnerHTML={{__html: data.column1.childMarkdownRemark.html}} />
        </Columns.Column>
        <Columns.Column>
          <div className="story-column" dangerouslySetInnerHTML={{__html: data.column2.childMarkdownRemark.html}} />
        </Columns.Column>
        <Columns.Column>
          <div className="story-column" dangerouslySetInnerHTML={{__html: data.column3.childMarkdownRemark.html}} />
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

export default Story;
