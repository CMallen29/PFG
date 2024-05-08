import { Button } from "../login.components/ui/button";
import { Input } from "../login.components/ui/input";

const Privacy = () => {
  return (
    <div className=" bg-teal-900 min-w-fit w-full min-h-fit h-full rounded-xl text-white">
      <div>
        <h1 className="text-2xl font-bold  mx-2 p-2">Privacidad</h1>
        <div className="grid grid-cols-2 items-center bg-teal-950 p-4">
          <div>
            <h1></h1>
            <div className="flex flex-col items-center justify-center gap-2 w-3/4 mt-10 m-2 text-black">
            {/* <h1 className="uppercase self-start text-white">mis datos</h1> */}
              <label htmlFor="username" className="self-start text-white">Nombre de usuario  <span className="text-yellow-500 font-bold">* CAMPO ÚNICO</span></label>
              <Input id="username" name="username" placeholder="Username" value={'Pacoskater34'} />
              <label htmlFor="name" className="self-start text-white">Nombre</label>
              <Input id="name" placeholder="Nombre" value={'Francisco'}/>
              <label htmlFor="email" className="self-start text-white">Email</label>
              <Input id="email" type="email" placeholder="Correo" value={'fran89@gmail.com'}/>
              <Button className="self-start mt-6 ml-0" variant={'unify'}>MODIFICAR</Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 w-3/4 mt-10 m-2 text-black">
              <label htmlFor="password" className="self-start text-white">Contraseña actual</label>
              <Input id="password" type="password" placeholder="*********"/>
              <label htmlFor="passNew" className="self-start text-white">Contraseña nueva</label>
              <Input id="passNew" type="password" placeholder="*********"/>
              <label htmlFor="passNewCheck" className="self-start text-white">Repite la contraseña</label>
              <Input id="passNewCheck" type="password" placeholder="*********" />
              <Button className="self-start mt-6 ml-0" variant={'unifyOut'}>MODIFICAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
