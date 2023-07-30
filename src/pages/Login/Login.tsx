import { useForm } from "react-hook-form";
import { LoginStyle } from "./LoginStyled";
import { loginData } from "../../interfaces/LoginTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginShcema } from "../../schemas/LoginSchema";
import { useAuth } from "../../hooks/useAuth";
import { Header } from "../../components/Header/Header";

const Login = () => {
  const { register, handleSubmit } = useForm<loginData>({
    resolver: zodResolver(loginShcema),
  });
  const { signIn } = useAuth();
  return (
    <LoginStyle>
      <Header />
      <section>
        <div className="pinkColorBackground">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(signIn)}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" {...register("email")} />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input type="password" id="password" {...register("password")} />
            </div>
            <button type="submit">
              Clique para <span>logar!</span>
            </button>
          </form>
        </div>
      </section>
    </LoginStyle>
  );
};

export { Login };
