import './styles/main.css';
import logoImg from './assets/nlw-esports-logo.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="NLW ESports" />
      <h1 className='text-6xl text-white font-black mt-20'
        >Seu <span className='text-transparent bg-nlw-gradient bg-clip-text' >duo</span> esta aqui.
      </h1>
    </div>
  )
}

export default App
