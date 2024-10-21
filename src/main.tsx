import ReactDOM from 'react-dom/client'
import App from './features/App/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // 追加


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter> {/*BrowserRouterで囲む*/}
      <App />
    </BrowserRouter>
  );