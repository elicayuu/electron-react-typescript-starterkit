import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  color?: 'primary' | 'secondary';
  ghost?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  color = 'primary',
  ghost,
  onClick,
  children,
}) => {
  return (
    <Root
      color={color}
      ghost={ghost}
      onClick={onClick && onClick}>
      {children}
    </Root>
  )
}

export default Button

const ghostCss = css<ButtonProps>`
  border: 1px solid currentColor;
  background-color: transparent;
  color: var(--${props => props.color});
`

const Root = styled.button<ButtonProps>`
  min-width: 4em;
  height: 2em;
  padding: 0 .8em;
  border: 0;
  border-radius: 4px;
  background-color: var(--${props => props.color});
  color: #fff;
  font-family: sans-serif;
  font-size: 0.93em;
  cursor: pointer;
  transition: box-shadow .3s ease-out;

  &:hover {
    box-shadow: 0 0 6px var(--${props => props.color});
  }

  &:focus {
    outline: 0;
  }

  &:active {
    box-shadow: none;
  }

  ${props => props.ghost && ghostCss}
`
