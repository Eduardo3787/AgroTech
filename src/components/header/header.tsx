import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoIcon from "../../assets/logo-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import userIcon from "../../assets/user-icon.svg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Função de rolagem suave
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 400);
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  // Link WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/5599999999999", "_blank");
  };

  // Navegar para cadastro
  const goToCadastro = () => {
    navigate("/cadastro");
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#0c1f03] text-white shadow-md">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto py-3 px-6 lg:px-10">
        
        {/* Logo */}
        <img src={logoIcon} alt="AgroTech Logo" className="w-10 h-auto" />

        {/* ===== MENU DESKTOP ===== */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-semibold">
            <li
              className="hover:text-emerald-300 cursor-pointer transition"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </li>
            <li
              className="hover:text-emerald-300 cursor-pointer transition"
              onClick={() => scrollToSection("fale-conosco")}
            >
              FALE CONOSCO
            </li>
            <li
              className="hover:text-emerald-300 cursor-pointer transition"
              onClick={goToCadastro}
            >
              ÁREA DO USUÁRIO
            </li>
          </ul>
        </nav>

        {/* ===== ÁREA DIREITA DESKTOP ===== */}
        <div className="hidden lg:flex items-center gap-4">
          
          {/* Campo de pesquisa */}
          <div className="flex items-center bg-white rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Ex: frutas"
              className="text-sm text-gray-700 focus:outline-none w-32"
            />
            <Search size={16} className="text-emerald-700" />
          </div>

          {/* WhatsApp */}
          <button onClick={openWhatsApp}>
            <img
              src={phoneIcon}
              alt="WhatsApp"
              className="w-5 h-5 hover:opacity-80 transition"
            />
          </button>

          {/* Usuário */}
          <button onClick={goToCadastro}>
            <img
              src={userIcon}
              alt="Usuário"
              className="w-5 h-5 hover:opacity-80 transition"
            />
          </button>

          {/* DOAR AGORA */}
          <button className="text-sm bg-white text-emerald-900 font-bold rounded-full px-4 py-1 hover:bg-gray-200 transition">
            DOAR AGORA
          </button>
        </div>

        {/* ===== BOTÃO MOBILE (MENU / X) ===== */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* ===== MENU MOBILE ===== */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-[#0c1f03] text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        {/* Botão X dentro do menu */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6"
        >
          <X size={32} className="text-white" />
        </button>

        <div className="flex flex-col items-center justify-center gap-8 mt-24 text-lg font-semibold">
          <a onClick={() => scrollToSection("home")}>HOME</a>
          <a onClick={() => scrollToSection("fale-conosco")}>FALE CONOSCO</a>
          <a onClick={goToCadastro}>ÁREA DO USUÁRIO</a>

          <div className="flex items-center gap-4 mt-6">
            <button onClick={openWhatsApp}>
              <img src={phoneIcon} alt="WhatsApp" className="w-6 h-6" />
            </button>
            <button onClick={goToCadastro}>
              <img src={userIcon} alt="Usuário" className="w-6 h-6" />
            </button>

            <button className="text-sm bg-white text-emerald-900 font-bold rounded-full px-4 py-1 hover:bg-gray-200 transition">
              DOAR AGORA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
