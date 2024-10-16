import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import { Input } from 'antd';


function SignIn() {
  const [visible, setVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

 
  return (
    
    <div className="flex justify-center gap-3 p-6 h-screen">
      <div className="hidden lg:flex md:flex w-[50%] rounded-2xl overflow-hidden">
        <img
          className=" object-cover "
          src="https://s3-alpha-sig.figma.com/img/3d22/12c2/6d48440cd871897408ac64c61604bb17?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RIVNi3h3KWiybnVu5A9Bgs8vru2~Ne0NVhzsUAcNYkc9OrKX~Y2wQ56jMIPVQdoUDdo71qa3jIQ8RhAhjyg5DLYid-1O-r~Z8XsJJD0x405jQylf5L2ffkOn-hOL5C1NJB0mOiYSGCsacsC-GLnU~Dl50Wxw6F7TlbkZFwUJNkK4d63IlZzksVK~EJnH3YW8X4pcCMN~z--ktIdJfx-8~Ao3RSb0NgrOkbWi7U64srvVHPqUv0jkYrBhWLb7-mgJqRcwCGNL2c8nFaX~iBVqoGoVlNyoRg1sLpjJTb5quyVjco6iilvK47QhUC6r9qWMPil8cA3BW3QTjLlGLEpkQg__"
          alt=""
        />
       <div className="absolute bottom-12 left-12 flex flex-col gap-3 justify-start items-start ">
        <h1 className="text-white lg:text-4xl md:text-3xl font-bold">Lorem ipsum is simply</h1>
        <p className="text-white lg:text-2xl md:text-lg">Lorem ipsum is simply</p>
        </div>
      </div>
      <div className="flex w-[80%] lg:w-[50%] md:w-[50%] justify-center items-center lg:p-12 md:p-6">
      <div className="w-full lg:w-[80%] flex flex-col justify-center items-center gap-5  ">
       <div className="">
          <p>Welcome to Lorem..!</p>
        </div>
        <div className="flex gap-2 xl:max-w-[70%] lg:max-w-[80%] w-full justify-between lightColor py-1 px-1 rounded-full">
        <Button title={'Login'} className={'min-w-36 darkColor'}  />
        <Link to={"/register"}><Button  title={'Register'} className={'lightColor min-w-36'}/></Link>
        </div>
        <div>
          <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ab facere, </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <p>User name</p>
          <Input className="min-w-full rounded-full borderColor text-lg px-3 py-2" placeholder="Enter your User name"/>
          <p>password</p>
         <Input.Password className="min-w-full rounded-full borderColor text-lg px-3 py-2" placeholder="Enter your Password"/>
        </div>
        <div className="flex flex-row justify-between w-full mb-8">
        <label htmlFor="remember"> 
          <input type="checkbox" name="remember" id="remember" className="mx-1"/> 
          Remember me</label>
          <Link>Forgot Password ?</Link>
        </div>
        <div className="w-full flex justify-end">
          <Button title={'Login'} className={"min-w-48 darkColor"} />
        </div>
       </div>
      </div>
    </div>
  );
}
export default SignIn;
