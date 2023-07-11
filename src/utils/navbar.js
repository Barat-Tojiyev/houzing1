import  useId  from '../hooks/useUniqueId'
import HomePage from '../pages/HomePage'
import PropertiesPage from '../pages/PropertiesPage'

export const navbar=[
     {
        id:useId,
        title:'Home',
        path:'/home',
        element:<HomePage/>,
        private:false,
        hidden:false
    },
    {
        id:useId,
        title:'Properties',
        path:'/properties',
        element:<PropertiesPage/>,
        private:false,
        hidden:false
    }
]