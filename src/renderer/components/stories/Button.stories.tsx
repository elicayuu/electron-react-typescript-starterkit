import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../Button'

export const actionsData = {
  onClick: action('Button click'),
}

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
}

export const Default: React.FC = () => (
  <Button {...actionsData}>
    Apply
  </Button>
)

export const Ghost: React.FC = () => (
  <Button
    ghost
    {...actionsData}>
    Apply
  </Button>
)
