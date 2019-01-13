import React from 'react'
import Img from 'gatsby-image'

const ContentfulImage = ({ image, ...rest }) => (
  <Img {...rest}
    fluid={image.fluid} />
);
export default ContentfulImage
