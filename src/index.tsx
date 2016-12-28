import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './index.css';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./App.tsx', () => {
        const NextApp = require<RequireImport>('./App').default
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
