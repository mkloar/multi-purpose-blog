import styled from 'styled-components'

export const Template = styled.div`
    margin: 20px;
    box-sizing: border-box;
    box-shadow: 3px 3px 3px 3px #aaaaaa;
    display: flex;
    justify-content: center;
`;

export const Blog = styled.div`
    margin: 10px;
    box-shadow: 3px 3px 3px 3px #000000;
    text-align: center;
`;


export const BackButton = styled.div`
    position: absolute;
    left: 10px;
`;

export const MainContent = styled.div`
margin-left: 32px;
margin-right: 32px;
display: flex;
justify-content: center;
width: 100%;
`

export const IndexContent = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding: 10px;
margin: 10px;
flex-direction: row;
flex-wrap: wrap;
`

export const RootDir = styled.div`
margin: 20px;
box-sizing: border-box;
box-shadow: 1px 1px 1px 1px #000;
display: flex;
justify-content: center;
border: 1px solid;
border-radius: 8px;
min-width: 200px;
min-height: 200px;
align-items: center;
`