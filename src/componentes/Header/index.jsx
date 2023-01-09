import './styles.css';
import Close from '../../assets/close-icon.svg';

function CadastrarModal() {
 
  return (
    <div className='container-header'>
      <div className='content-cadastrar'>
      <form >
<div className='header-cadastrar'>
<h2>Cadastrar</h2>
            <img src={Close} alt="logo"/>
</div>

            <div className='container-inputs'>
              <label htmlFor='nome'>Nome</label>
              <input
                type="text"
                name='nome'
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='username'>Usuario</label>
              <input
                type="text"
                name='username'
              />
            </div>

            
            <div className='container-inputs'>
              <label htmlFor='email'>E-mail</label>
              <input
                type="text"
                name='email'
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='password'>Senha</label>
              <input
                type="password"
                name='senha'
              />
            </div>

            <div className='container-inputs'>
              <label htmlFor='confirmPassword'>Confirmação de Senha</label>
              <input
                type="password"
                name='confirmPassword'
              />
            </div>

            <button
              className='btn-blue btn-big'
            >
              Entrar
            </button>
          </form>
      </div>
    </div>
  )
}

export default CadastrarModal