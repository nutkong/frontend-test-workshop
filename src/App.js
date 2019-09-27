import React from 'react'
import emotionNormalize from 'emotion-normalize'
import { Global, css } from '@emotion/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppContainer, Content, Header } from './components/common'
import Menu, { MenuItem } from './components/Menu'

const Home = React.lazy(() => import('./Home'))

const AppMenu = [
  { id: 'item-01', title: 'Home' },
  { id: 'item-02', title: 'Explore' },
  { id: 'item-03', title: 'Notifications' },
  { id: 'item-04', title: 'Messages' },
  { id: 'item-05', title: 'Bookmarks' },
  { id: 'item-06', title: 'Lists' },
  { id: 'item-07', title: 'Profile' },
  { id: 'item-08', title: 'More' }
]

function App() {
  return (
    <AppContainer>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      <Router>
        <React.Suspense fallback="...loading">
          <Header>
            <Menu data={AppMenu}>
              {({ item }) => <MenuItem key={item.id}>{item.title}</MenuItem>}
            </Menu>
          </Header>
          <Content>
            <Route exact path="/" component={Home} />
          </Content>
        </React.Suspense>
      </Router>
    </AppContainer>
  )
}

export { App as default, App }
