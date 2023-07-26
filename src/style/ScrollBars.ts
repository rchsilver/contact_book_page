import { createGlobalStyle } from "styled-components";

export const StyledScrollBars = createGlobalStyle`
body {
	background-color:var(--color-blue-04);

}

::-webkit-scrollbar-track {
    background-color:transparent;
	
}
::-webkit-scrollbar {
    width: 10px;
    background: none;
}
::-webkit-scrollbar-thumb {
	background-color:var(--color-blue-04);
	border:1px solid white;
	border-radius: 10px;
	filter: drop-shadow(0 0 0.75rem crimson);
	
}
::-webkit-scrollbar-thumb:hover {
	background-color:var(--color-grey-00);

}
`;
