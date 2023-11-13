import styled from "styled-components";

const _in = styled.div`
    color: black;
    min-height: 100vh;
    height: auto;
    margin: 0; /* Reset margin to ensure full height */
    display: grid; 
    gap: 5%;

    grid-template-columns: 1fr; 
    grid-template-rows: 0.2fr 1.8fr 0.2fr;  
    grid-template-areas: 
    "_head"
    "_middle"
    "_footer";
    overflow:auto;
    @media (max-width: 1000px) {
        gap: 0%;

    }

    `

const _head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h1{
        margin-top: 2%;
        border-radius: 40px;
        border: 1px solid;
        padding: 1%;
        font-size: 25px;
        width: 500px;
        text-align: center;
        @media (max-width:1000px){
            margin: 2% 0;
        }


    }
    @media (max-width:700px){
            h1{width: 100%;border:none;font-size:100%;}
            border: 1px solid;
        }
`
const _middle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .map{
        height: 100%;
        width: 70%;
        @media (max-width:1000px){
            width: 100%;
            height: 100%;
        }
        @media(max-width:500px){
            height: 100%;
        }
    }
`
const _footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgb(223, 223, 223);
    @media (max-width:700px){
            
            font-size:70%;
        }
`

export {_in,_head,_middle,_footer}