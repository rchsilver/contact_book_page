import { useForm } from "react-hook-form";
import { LoginStyle } from "./LoginStyled";
import { loginData } from "../../interfaces/LoginTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginShcema } from "../../schemas/LoginSchema";

const Login = () => {
  const { register, handleSubmit } = useForm<loginData>({
    resolver: zodResolver(loginShcema),
  });
  return (
    <LoginStyle>
      <h2>Login</h2>
      <form onSubmit={handleSubmit()}>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <button>Entrar</button>
      </form>
    </LoginStyle>
  );
};

export { Login };
