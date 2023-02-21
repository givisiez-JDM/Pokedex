import React from 'react'; 
import { FooterContainer } from './style';
import { InformationsContainer } from './style';


export default class Footer extends React.Component {

	render() {

		return (
			
			<FooterContainer>
			
				<InformationsContainer>
					<p>Copyright © 2023-2023 Givisiez <br/>
						Projeto desenvolvido por Danilo Sousa e Rani Cristina  - Pokedex S.A.</p>
				</InformationsContainer>

					
			</FooterContainer>
		)

	}
	
}