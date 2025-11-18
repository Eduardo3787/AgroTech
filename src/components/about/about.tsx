import foodPlate from '../../assets/food-plate.png'
import numberOne from '../../assets/number-1-icon.svg'
import numberTwo from '../../assets/number-2-icon.svg'
import numberThree from '../../assets/number-3-icon.svg'
import numberFour from '../../assets/number-4-icon.svg'
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 py-16 md:py-[120px]">
      <div className="flex flex-col xl:flex-row items-center justify-center gap-16 w-full max-w-[1500px]">

        {/* ---- BLOCO ESQUERDO ---- */}
        <div className="flex flex-col items-center xl:items-start gap-6 text-center xl:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900">
            Sobre o Nós
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl w-full max-w-[550px] leading-relaxed">
            O <span className="font-semibold">Foodlink</span> visa reduzir o desperdício de alimentos
            e aumentar a segurança alimentar. Por meio da tecnologia,
            promovemos sustentabilidade e responsabilidade social.
          </p>

          <button
            onClick={() => navigate('/cadastro')}
            className="
              text-base sm:text-xl 
              bg-green-500 text-white 
              px-6 sm:px-8 py-2 sm:py-3 
              rounded-full shadow 
              hover:bg-green-600 
              transition
            "
          >
            Cadastre-se
          </button>
        </div>

        {/* ---- IMAGEM CENTRAL ---- */}
        <div className="flex justify-center">
          <img
            src={foodPlate}
            alt="Prato de alimentos"
            className="
              w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] 
              h-auto object-contain
            "
          />
        </div>

        {/* ---- BLOCO DIREITO ---- */}
        <div className="flex flex-col items-center xl:items-start gap-6 w-full max-w-[580px]">
          <h2 className="text-2xl sm:text-3xl font-bold text-center xl:text-left">
            Como Funciona?
          </h2>

          <ol className="flex flex-col gap-4 text-gray-700 text-base sm:text-lg md:text-xl">
            <li className="flex items-start gap-3">
              <img src={numberOne} alt="1" className="w-5 h-5 mt-1" />
              Crie sua conta de forma gratuita
            </li>

            <li className="flex items-start gap-3">
              <img src={numberTwo} alt="2" className="w-5 h-5 mt-1" />
              <p>
                Decida se deseja se cadastrar como
                <span className="font-semibold"> Doador </span>
                ou 
                <span className="font-semibold"> Beneficiário</span>
              </p>
            </li>

            <li className="flex items-start gap-3">
              <img src={numberThree} alt="3" className="w-5 h-5 mt-1" />
              Encontre quem precisa ou quem pode doar alimentos próximos a você
            </li>

            <li className="flex items-start gap-3">
              <img src={numberFour} alt="4" className="w-5 h-5 mt-1" />
              Contribua para reduzir o desperdício e levar comida a quem mais precisa
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
