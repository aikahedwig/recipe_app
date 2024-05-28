// components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email, password };
    axios.post('/api/login', user)
      .then(response => {
        alert('ログイン成功！');
      })
      .catch(error => console.error('ログインエラー:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">ログイン</h2>
      <div className="mb-2">
        <label className="block">メールアドレス:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">送信</button>
    </form>
  );
}

export default LoginForm;
