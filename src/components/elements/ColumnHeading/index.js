import React from 'react'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'

import './styles.scss'

const ColumnHeading = ({children, ...columnProps}) => (
    <Columns.Column className='column-title' {...columnProps}>
      <Heading  size={4} renderAs="h2">{children}</Heading>
    </Columns.Column>
);

export default ColumnHeading;
