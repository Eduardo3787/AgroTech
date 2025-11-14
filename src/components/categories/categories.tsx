import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "../../constants";

export const Categories = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((fav) => fav !== name)
        : [...prev, name]
    );
  };

  const itemsPerPage = 6;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < categories.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="w-full max-w-[1920px] mx-auto py-12 text-center relative">
      <div className="flex flex-col items-center justify-center w-full xl:pl-[200px]">
        {/* Título */}
        <div className="flex items-center flex-col xl:items-start">
          <h2 className="text-3xl lg:text-[45px] font-bold text-green-600">
            Categorias em Destaque
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-[22px]">
            Descubra as categorias que fazem a diferença. Alimentos essenciais
            para quem mais precisa!
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative w-full flex items-center justify-center mt-[100px] px-3">
          {/* Botão Esquerda */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-4 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition ${
              currentIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft className="text-green-700 w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="flex justify-center items-center gap-6">
            {visibleCategories.map((category) => (
              <div
                key={category.nome}
                className="relative flex flex-col justify-end items-center w-[200px] h-[230px] bg-white rounded-xl shadow-md p-4 hover:scale-105 transition"
              >
                <img
                  src={category.imagem}
                  alt={category.nome}
                  className="absolute top-[-55px] w-[100px] h-[100px] object-contain"
                />

                <h3 className="font-semibold text-[20px] mt-[60px]">
                  {category.nome}
                </h3>

                {/* Ícone de coração */}
                <button
                  onClick={() => toggleFavorite(category.nome)}
                  className="mt-4"
                >
                  <Heart
                    className={`w-5 h-5 transition-all ${
                      favorites.includes(category.nome)
                        ? "fill-red-500 text-red-500"
                        : "text-green-700 hover:text-red-400"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Botão Direita */}
          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= categories.length}
            className={`absolute right-4 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition ${
              currentIndex + itemsPerPage >= categories.length
                ? "opacity-40 cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight className="text-green-700 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
