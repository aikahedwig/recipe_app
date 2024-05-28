// components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { name, email, password, password_confirmation: passwordConfirmation };
    axios.post('/api/signup', user)
      .then(response => {
        alert('サインアップ成功！');
      })
      .catch(error => console.error('サインアップエラー:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">サインアップ</h2>
      <div className="mb-2">
        <label className="block">名前:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
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
      <div className="mb-2">
        <label className="block">パスワード確認:</label>
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="border p-2 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">送信</button>
    </form>
  );
}

export default SignupForm;
