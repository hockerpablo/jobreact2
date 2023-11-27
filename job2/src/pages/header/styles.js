import styled from "styled-components";

export const HeadreContainer = styled.div`
display: block;
justify-content: center;
align-items: center;
text-align: center;
font-family: 'chewy';
font-size: 35px;
color: #51825B;
text-shadow: 1px 1px 2px black;
border:none;

@media (max-width: 1350px){
    img{
        width: 900px;
    }
}

@media (max-width: 1200px){
    img{
        width: 800px;
    }
}

@media (max-width: 768px){
    img{
        width: 600px;
    }
}
@media (max-width: 605px){
    img{
        width: 400px;
    }
}
` 