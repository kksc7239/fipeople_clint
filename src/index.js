import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

localStorage.setItem('loginYn', true);
localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjE0LCJyb2wiOlsxXSwiZXhwIjoxNTk1MjE0NTc0LCJpc3MiOiJQSUVQRU9QTEUiLCJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJqdGkiOiIwYzg0NzgxZDdiYjc0OTI5OGM2YWI1NmI1ZGQxMmViOSJ9.WSgYzkryScvc9sSlNzhuQ5LnQx1JfUo-3M7J7n6qGOg');
localStorage.setItem('refreshToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQSUVQRU9QTEUiLCJzdWIiOiJSRUZSRVNIX1RPS0VOIiwianRpIjoiMzU1Zjk3MGViOTEwNDM0NzhmMGI4MDg3MTI1MTBlYzUifQ.7CMXVqq7wvi4gvGaAxApO4HTCVFqmfql7hE5WIo-OJE');
localStorage.setItem('name', '테스트');
localStorage.setItem('email', 'test@email.com');
localStorage.setItem('image', null);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
