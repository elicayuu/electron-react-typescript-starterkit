import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '../Button'

const actionsData = {
  onClick: action('Button click'),
}

export default {
  component: Button,
  title: 'Button',
}

export const Default: React.FC = () => (
  <>
    <Button {...actionsData}>primary</Button>
    <Button color="secondary" {...actionsData}>secondary</Button>
  </>
)

export const Ghost: React.FC = () => (
  <>
    <Button ghost {...actionsData}>primary</Button>
    <Button ghost color="secondary" {...actionsData}>secondary</Button>
  </>
)
