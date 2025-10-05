export default function Footer() {
  return (
    <footer className="bg-[#050B2A] text-white py-6 text-center">
      <p className="text-sm tracking-wide">
        © {new Date().getFullYear()} <span className="font-semibold">Mollar</span>.  
        Built with ❤️, passion, and clean code.
      </p>
    </footer>
  );
}
