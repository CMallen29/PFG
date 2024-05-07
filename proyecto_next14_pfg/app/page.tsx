import {authOptions} from '../lib/auth';
import { getServerSession } from 'next-auth';

const Home= async() => {
  const session = await getServerSession(authOptions);

  if(session?.user){
    return <h2 className='text-2xl'>Inicio de sesion correcto, bienvenido {session?.user.username} </h2>
  }

  return <h1>Hola, estas en la Home</h1>
}


export default Home;