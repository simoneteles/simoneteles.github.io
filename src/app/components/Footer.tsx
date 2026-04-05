export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Simone Teles. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}