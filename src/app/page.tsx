import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div
      className="
        relative min-h-screen flex flex-col
        bg-[url('/login-bg.jpg')] bg-cover bg-center bg-no-repeat
      "
    >
      {/* Opcional: Overlay escuro semi-transparente para melhor contraste com o formulário */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <Header />

      <main className="flex-grow flex items-center justify-center p-4 z-10">
        <LoginForm />
      </main>

      <Footer />
    </div>
  );
}