import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { LayoutContainer } from './layouts/DefaultLayout/styles'
import { Search } from './components/Search'
import { Filter } from './components/Filter'
import { List } from './components/List'
import { Form } from './components/FormCreate'
import { CyclesContextProvider } from './components/contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <CyclesContextProvider>
          <Header />
          <Search />
          <Filter />
          <List />
          <Form />
        </CyclesContextProvider>
      </LayoutContainer>
      <GlobalStyle />
    </ThemeProvider>
  )
}
