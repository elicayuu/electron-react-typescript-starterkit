import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './globalStyle'

export const storyGlobalStyle = (storyFn: () => React.ReactNode): React.ReactNode => (
  <StoryWrap>
    <GlobalStyle/>
    <StoryContent>
      {storyFn()}
    </StoryContent>
  </StoryWrap>
)

const StoryWrap = styled.div`
  padding: 1em;
  background-color: #f6f6f6;
`

const StoryContent = styled.div`
  & > *:not(:last-child) {
    margin-right: 1em;
  }
`
