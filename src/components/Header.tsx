import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src="/logo.png" alt="Logo Academia Naval" className="h-10 w-auto mr-2" />
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200 cursor-pointer">
            Academia Naval
          </Link>
          <Link href="/contactos" className="hover:text-gray-300 transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
            Contactos
          </Link>
        </div>
        {/* Aqui você pode adicionar um logotipo ou outros elementos se desejar */}
      </nav>
    </header>
  );
}