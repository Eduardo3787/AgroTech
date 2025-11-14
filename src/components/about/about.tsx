import foodPlate from '../../assets/food-plate.png'
import numberOne from '../../assets/number-1-icon.svg'
import numberTwo from '../../assets/number-2-icon.svg'
import numberThree from '../../assets/number-3-icon.svg'
import numberFour from '../../assets/number-4-icon.svg'
import { useNavigate } from 'react-router-dom' 

export const About = () => {
  const navigate = useNavigate() 

  return (
    <section className="w-full flex justify-center px-6 py-[120px]">
      <div className="flex flex-col items-center justify-center gap-10 xl:flex-row">
        <div className="flex flex-col items-center gap-6 text-center xl:text-left xl:items-start">
          <h2 className="text-2xl font-bold text-green-900">Sobre o Nós</h2>
          <p className="text-gray-600 text-base md:text-[22px] w-full max-w-[555px]">
            O <span className="font-semibold">Foodlink</span> visa reduzir o desperdício de alimentos e <br /> 
            aumentar a segurança alimentar. Por meio da <br /> 
            tecnologia, promovemos sustentabilidade e <br/>
            responsabilidade social.
          </p>
          <button
            onClick={() => navigate('/cadastro')} 
            className="w-[150px] text-[22px] bg-green-500 text-white px-[5px] py-[7px] rounded-full shadow hover:bg-green-600 transition"
          >
            Cadastre-se
          </button>
        </div>

        <div>
          <img
            src={foodPlate}
            alt="Prato de alimentos"
            className="w-[540px] h-[540px] object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-6 w-full xl:items-start max-w-[580px]">
          <h2 className="text-2xl font-bold">
            <span>Como Funciona?</span>
          </h2>
          <ol className="flex flex-col gap-3 text-gray-700 text-base md:text-xl md:text-2xl">
            <li className="flex items-start gap-2">
              <img src={numberOne} alt="number-one" className="text-gray-500 mt-[1px] w-5 h-5" />
              Crie sua conta de forma gratuita
            </li>
            <li className="flex items-start gap-2">
              <img src={numberTwo} alt="number-two" className="text-gray-500 mt-[1px] w-5 h-5" />
              <p>
                Decida se deseja se cadastrar como{" "}
                <span className="font-semibold">Doador</span> ou{" "} <br /> 
                <span className="font-semibold">Beneficiário</span>
              </p>
            </li>
            <li className="flex items-start gap-2">
              <img src={numberThree} alt="number-three" className="text-gray-500 mt-[1px] w-5 h-5" />
              Encontre quem precisa ou quem pode doar <br /> alimentos próximos a você
            </li>
            <li className="flex items-start gap-2">
              <img src={numberFour} alt="number-four" className="text-gray-500 mt-[1px] w-5 h-5" />
              Contribua para reduzir o desperdício e levar comida a quem mais precisa
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
