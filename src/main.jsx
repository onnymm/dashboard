import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Router from './routes/Router.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={Router}>
        <App />
        <span></span>
    </RouterProvider> 
)
