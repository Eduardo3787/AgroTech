import { ArrowRight } from "lucide-react";
import { CategoriaCardProps } from "../../interfaces";
import { useNavigate } from "react-router-dom";

export const CategoriaCard = ({ titulo, imagem }: CategoriaCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (titulo === "Frutas Frescas" || titulo === "Fritas Frescas") {
      navigate("/frutas");
    } else if (titulo === "Hortaliças") {
      navigate("/hortaliças");
    }
  };

  return (
    <div className="relative flex w-full max-w-[544px] h-[209px] rounded-xl">
      <img
        src={imagem}
        alt={titulo}
        className="absolute mb-5 inset-0 w-full h-full object-cover rounded-xl"
      />

      <div className="absolute flex flex-col w-full h-full justify-center items-end p-6">
        <h3 className="text-green-600 font-bold text-[31px]">{titulo}</h3>
        <button
          onClick={handleClick}
          className="absolute right-10 bottom-5 mt-2 flex items-center text-sm font-medium text-gray-800 hover:cursor-pointer hover:text-green-600 transition"
        >
          Ver tudo <ArrowRight className="ml-1 w-4 h-5" />
        </button>
      </div>
    </div>
  );
};
