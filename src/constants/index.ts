import { categoriasCardProps, CategoryProps, TestimonyProps } from "../interfaces";
import freshFruitsImg from '../assets/fresh-fruits.png';
import flatLayImg from '../assets/flat-lay.png';
import tomateImg from '../assets/tomato.svg';
import beansImg from '../assets/beans-icon.svg';
import beefImg from '../assets/beef-icon.svg';
import riceImg from '../assets/rice-icon.svg';
import soyBeansImg from '../assets/soybean-icon.svg';
import pastaImg from '../assets/pasta-icon.svg';
import isaqueImg from '../assets/isaque-testimony.png';
import lauraImg from '../assets/laura-testimony.png';
import mariImg from '../assets/mari-testimony.png';

//  Novas imagens
import melanciaImg from '../assets/melancia.png';
import bananaImg from '../assets/banana.png';
import abacaxiImg from '../assets/abacaxi.png';
import berigeraImg from '../assets/berigera.png';
import repolhoImg from '../assets/repolho.png';
import couveImg from '../assets/couve.png';

//  Depoimentos
export const testimonials: TestimonyProps[] = [
  {
    nome: "Isaque Silva",
    message:
      "Receber essa doação foi um alívio imenso para minha família. Não é apenas comida, é dignidade e cuidado que renovam nossas forças para seguir em frente",
    image: isaqueImg,
  },
  {
    nome: "Laura Souza",
    message:
      "Participar como voluntário me ensinou o verdadeiro significado de comunidade. Cada alimento entregue é um elo que fortalece nossa união e solidariedade",
    image: lauraImg,
  },
  {
    nome: "Mari Oliveira",
    message:
      "Ver o sorriso das crianças ao receber alimentos frescos é uma alegria indescritível. São gestos assim que renovam nossa esperança na humanidade",
    image: mariImg,
  },
];

//  Cards da seção “Categorias”
export const categoriasCard: categoriasCardProps[] = [
  { titulo: "Frutas Frescas", imagem: freshFruitsImg },
  { titulo: "Hortaliças", imagem: flatLayImg },
];

//  Categorias em Destaque (com novas frutas e verduras)
export const categories: CategoryProps[] = [
  { nome: "Tomate", imagem: tomateImg },
  { nome: "Carne", imagem: beefImg },
  { nome: "Arroz Branco", imagem: riceImg },
  { nome: "Feijão", imagem: beansImg },
  { nome: "Óleo", imagem: soyBeansImg },
  { nome: "Macarrão", imagem: pastaImg },
  { nome: "Melancia", imagem: melanciaImg },
  { nome: "Banana", imagem: bananaImg },
  { nome: "Abacaxi", imagem: abacaxiImg },
  { nome: "Berinjela", imagem: berigeraImg },
  { nome: "Repolho", imagem: repolhoImg },
  { nome: "Couve", imagem: couveImg },
];
