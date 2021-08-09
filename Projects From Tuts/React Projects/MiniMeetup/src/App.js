import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorites'
import NewMeetupsPage from './pages/NewMeetups'
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/new-meetup'>
          <NewMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/'>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
