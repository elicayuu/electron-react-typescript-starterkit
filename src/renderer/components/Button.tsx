import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  ghost?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  ghost,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <Root
      ghost={ghost}
      onClick={onClick && onClick}>
      {children}
    </Root>
  )
}

export default Button

const ghostCss = css`
  border: 1px solid currentColor;
  background-color: transparent;
  color: #00b8d8;
`

const Root = styled.button<ButtonProps>`
  min-width: 6em;
  height: 3em;
  border: 0;
  border-radius: 4px;
  background-color: #00b8d8;
  color: #fff;

  ${props => props.ghost && ghostCss}
`
