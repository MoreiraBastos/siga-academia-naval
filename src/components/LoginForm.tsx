'use client'; // Necessário para usar hooks como useState

import { useState } from 'react';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'; // Importa os ícones

export default function LoginForm() {
  const [nip, setNip] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticação aqui
    console.log('NIP:', nip);
    console.log('Senha:', password);
    console.log('Lembrar-me:', rememberMe);
    alert('Tentativa de login (verifique o console)');
  };

  return (
    <div
      className="
        bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-2xl
        max-w-md w-full
        flex flex-col items-center justify-center space-y-6
      "
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Iniciar Sessão</h2>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {/* Campo NIP */}
        <div className="relative">
          <input
            type="text"
            id="nip"
            placeholder="NIP"
            value={nip}
            onChange={(e) => setNip(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 bg-transparent text-gray-800 placeholder-gray-600"
            required
          />
          <UserIcon className="h-6 w-6 text-gray-600 absolute left-2 top-1/2 -translate-y-1/2" />
        </div>

        {/* Campo Palavra-passe */}
        <div className="relative">
          <input
            type="password"
            id="password"
            placeholder="Palavra-passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-b border-gray-400 focus:outline-none focus:border-blue-600 bg-transparent text-gray-800 placeholder-gray-600"
            required
          />
          <LockClosedIcon className="h-6 w-6 text-gray-600 absolute left-2 top-1/2 -translate-y-1/2" />
        </div>

        {/* Opções de lembrança e esqueci a senha */}
        <div className="flex flex-col space-y-3 text-sm text-gray-800">
          <label htmlFor="rememberMe" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            Guardar os meus dados de acesso
          </label>
          <a href="#" className="text-blue-700 hover:underline transition-colors duration-200">
            Esqueci-me da palavra-passe
          </a>
        </div>

        {/* Botão Entrar */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300 shadow-md"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}