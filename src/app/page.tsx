import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
        <div className="w-full max-w-2xl bg-white rounded shadow p-8 text-center">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Bem-vindo ao Portal da Academia Naval
          </h1>
          <p className="text-gray-700 mb-4">Selecione uma opção no menu para começar.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}