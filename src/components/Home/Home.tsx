import { HomeStyled } from "./HomeStyle"

const Home = () => {
	return <HomeStyled>
		<header>
			<span>Contactland</span>
			<span>Já tenho uma conta!</span>
		</header>
		<div>
			<button type="button">Registre-se</button>
		</div>
	</HomeStyled>
}

export {Home}