import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const get_name_and_path = () => routes.map(route => ({name: route.name,path: route.path})) 

export {get_name_and_path}
export default routes;
