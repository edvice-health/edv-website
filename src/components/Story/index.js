import React from 'react'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'

import ColumnHeading from '../elements/ColumnHeading'
import './styles.scss'

const Story = () => (
  <Section className='is-fullheight is-centered' id="story">
    <Container>
      <Columns className="is-tablet">
        <ColumnHeading>The Company story.</ColumnHeading>
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
);

export default Story;
