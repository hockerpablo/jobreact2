import styled from "styled-components";

export const AboutContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center; 
h1{
    font-family: 'chewy';
    font-size: 55px;
    color: #51825B;
    text-shadow: 1px 1px 2px black;
}

img{
    width: 700px;
    border-radius: 5px;
}
p{
    text-align: center;
    width: 30%;
    border-radius: 20px;
    border: 1px solid black;
    background-color: var(--cream-bg);
    font-family: 'Playpen Sans';
    font-size: 20px;
    font-weight: 300;
    color: black;
    margin: 10px;
    padding: 10px;
}

@media (max-width: 1800px)
{

}
`
export const AboutCont = styled.div`
display: block;
position: relative;
left: 18rem;
@media (max-width: 1800px)
{
    position: relative;
    left: 16rem;
}
@media (max-width: 1600px)
{
    position: relative;
    left: 14rem;

    p{
        width: 40%;
    }
}
@media (max-width: 1400px)
{
    position: relative;
    left: 12rem;
    p{
        width: 50%;
    }
}
@media (max-width: 1200px)
{
    position: relative;
    left: 8rem;
    p{
        width: 60%;
    }
}
@media (max-width: 968px)
{
    position: relative;
    left: 4rem;
    img{
        width: 600px;
    }

    p{
        width: 70%;
    }
}
@media (max-width: 768px)
{
    position: relative;
    img{
        position: relative;
        left: -3rem;
        width: 500px ;
    }

    p{
        position: relative;
        left: 0;
        width: 80%;
        font-size: 20px;
    }
}
@media (max-width: 568px)
{
    position: relative;
    left: 0;

    p{
        position: relative;
        left: 0;
        width: 90%;
        font-size: 15px;
    }
    img{
        width: 400px;
        position: relative;
        left: auto;
    }
}
@media (max-width: 320px)
{
   p{
    position: relative;
    left: -5px;
   }
   img{
    width: 300px;
   }
}

`