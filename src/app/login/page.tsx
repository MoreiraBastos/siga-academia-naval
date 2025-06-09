import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: 'url(/login-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 w-full max-w-md flex-1 flex items-center justify-center">
          <LoginForm />
        </div>
        <div className="relative z-10 w-full">
          <Footer />
        </div>
      </div>
    </>
  );
}
