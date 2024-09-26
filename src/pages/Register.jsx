import { Link } from "react-router-dom";
import Button from "../components/Button";
import { Input } from 'antd';

function Register() {
  return (
    <div className="flex justify-center gap-3 p-6 h-screen">
      <div className="hidden lg:flex md:flex w-[50%] rounded-2xl overflow-hidden">
        <img
          className=" object-cover "
          src="https://s3-alpha-sig.figma.com/img/d703/064a/3964ba217a784d145ec31cf171c822ca?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SZDUN5Ics4n-00g8Uhez4TTfbH41PFeu6BjhjuCvQvwfgpeY5BWOEQYAVXBaT9LZ3J3Lbanf4O3ETctlhrAEFXc0zTCUgx3If~HInzNqbWVNfxMgROarFuKFMYLakMVy--68GS3EpCjKozvlRPFLn8hWOeofUZP5axpqOGBYE6tUPph3R39V8jWPs6NgrQTXNn5OWl6rqV0ZgvQt4Qj7FYFosIM5ezFNoNi9CR0ApcIxx6DiRuiRJe7wampHj~1cuoGnRESYaRIfLkvbMU3rJYbj3bYaVMk4-dzb9yGtA8VGq~2t9ZnkQXMstk2pwP6z20DG1oB19rRUbHoHnz7crw__"
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
        <Link to={"/signin"}><Button  title={'Login'} className={'lightColor min-w-36'}/></Link>
        <Button title={'Register'} className={'min-w-36 darkColor'}  />
        </div>
        <div>
          <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ab facere, </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <p>Email Address</p>
          <Input className="min-w-full rounded-full borderColor text-lg px-3 py-2" placeholder="Enter your Email Address"/>
          <p>User name</p>
          <Input className="min-w-full rounded-full borderColor text-lg px-3 py-2" placeholder="Enter your User name"/>
          <p>Password</p>
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
export default Register;
