import React from 'react'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'

import './styles.scss'

const ColumnHeading = ({children, size="one-quarter"}) => (
    <Columns.Column size={size}>
      <Heading className='column-title'>{children}</Heading>
    </Columns.Column>
);

export default ColumnHeading;
