import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import FrontProjects from './components/FrontProjects';
import TasksProjects from './components/TasksProjects';
import MernProjects from './components/MernProjects';
import { AnimatePresence } from 'framer-motion'
import Main from './components/Main';
import NotFound from './components/NotFound'



function App() {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key} >
        <Route path='/' exact > <Main /> </Route>
        <Route path='/front'> <FrontProjects /> </Route>
        <Route path='/tasks'> <TasksProjects /> </Route>
        <Route path='/mern'> <MernProjects /> </Route>
        <Route path='/*'> <NotFound /> </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;