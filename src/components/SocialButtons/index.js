import React from 'react'
import Icon from 'react-bulma-components/lib/components/icon'
import Container from 'react-bulma-components/lib/components/container'
import Section from 'react-bulma-components/lib/components/section'

import './styles.scss'

const SocialButtons = () => (
    <Section className="social-buttons">
        <Container>
            <SocialButtonIcon name='facebook' />
            <SocialButtonIcon name='instagram' />
            <SocialButtonIcon name='youtube' />
        </Container>
    </Section>
);

const SocialButtonIcon = ({name, href = '#'}) => (
    <a className="social-button" href="#">
        <Icon size="large">
            <span className={`icon-${name} is-large`}></span>
        </Icon>
    </a>
);

export default SocialButtons;

