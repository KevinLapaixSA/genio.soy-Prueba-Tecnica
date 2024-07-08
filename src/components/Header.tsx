import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black text-white fixed top-0 w-full py-4 z-50 shadow-md">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center">
          <Image src="/images/logo-white.png" alt="Logo" width={40} height={40} className="mr-4" />
          <h1 className="text-3xl font-bold font-old-london">The Genio.soy Post</h1>
        </div>
        <p className="text-gray-500 text-sm italic">&quot;Si no está en Internet, no existe.&quot;</p>
      </div>
    </header>
  );
};

export default Header;
