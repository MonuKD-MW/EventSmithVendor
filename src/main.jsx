import '@fontsource/noto-sans'; 
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/mainStore.js';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>
)
