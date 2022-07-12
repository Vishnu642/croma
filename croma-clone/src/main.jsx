import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import {store} from "./Redux/store"
import axios from 'axios'
import {Provider} from "react-redux"

axios.defaults.baseURL = "http://localhost:8050"
axios.defaults.headers.post['Content-Type'] = 'application/json'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ChakraProvider>
      <Provider store={store} >
    <App />
    </Provider>
    </ChakraProvider>
    </BrowserRouter>
  
)
