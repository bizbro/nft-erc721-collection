import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import App from './react/App';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import { ToastContainer } from 'react-toastify';
import "../styles/components/general.scss";

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<>
    <ToastContainer
          position='top-left'
          autoClose={5000}
          closeOnClick={true}
          pauseOnHover={true}
          theme='light' />
  </>, document.getElementById('notifications'));

  ReactDOM.render(<> 

  
    <App/>
  </>, document.getElementById('minting-dapp'));
});
