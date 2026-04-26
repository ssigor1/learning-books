import styled from 'styled-components'

const OptionContainer = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
}
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <OptionContainer>
            { textoOpcoes.map( (texto) => (
                <Option><p>{texto}</p></Option>
            ) ) }
      </OptionContainer>
    )
}

export default OpcoesHeader