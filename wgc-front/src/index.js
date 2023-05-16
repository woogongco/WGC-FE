import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { worker } from './mocks/browser';
import { Provider } from 'react-redux';
import store from 'store/store';

//service worker
if (process.env.NODE_ENV === 'development') {
	worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
