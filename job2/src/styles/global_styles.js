import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --black-grow:#141513;
    --white-bg: #f3f3f3;
    --cream-bg:#F3E5D1;
    --green: #51825B;
    --text-nav: #B2DF78 ;
    --yellow: #FFC300;
    --yellow-card: #E7B514 ;
    --redapple: #A75151;
    --btn-gradient: linear-gradient(83deg, #283c86, #45a247);
    --btn-gradient-sec: linear-gradient:( 140deg, #a8ff78, #78ffd6);
}
html{
    scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    background: var(--white-bg);
    font-family:  'Poppins', sans-serif;
    color: black;
    overflow-x: hidden;
}
a{
    text-decoration:none;
    color:white;
}
a:visited{
    color: white;
}
li{
    list-style: none;
}`