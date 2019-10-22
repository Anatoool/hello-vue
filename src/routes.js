import Home from './components/Home';
import About from './components/About';
import User from './components/User';

export const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User },
];
