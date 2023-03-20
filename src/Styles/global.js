import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0 ;
        padding:0;
        background:black;
        color: white;
    }

   .canvas{
        display:grid;
        min-height:100vh;
        grid-auto-flow:row;
        gap:0.5rem;
        text-align:center;
        align-items:center;
   }

   .type-box{
        max-width:1000px;
        height:140px;
        margin-left:auto;
        margin-right:auto;
        overflow:hidden;
   }

   .words-wrapper{
        display:flex;
        flex-wrap:wrap;
        font-size:30px;
   }

   .word{
        margin:5px;
        padding-right:2px;
   }

   .hidden-input{
     opacity:0;
   }

   .correct{
     color: yellow;
   }

   .inCorrect{
     color: red;
   }

   .current{
     border-left : 1px solid;
     animation: blinking 2s infinite;

     @keyframes blinking {
          0%{border-left-color : white}
          25%{border-left-color : black}
          50%{border-left-color : white}
          75%{border-left-color : black}
          100%{border-left-color : white}
     }
   }

   .current-right{
     border-right : 1px solid;
     animation: blinkingRight 2s infinite;

     @keyframes blinkingRight {
          0%{border-right-color : white}
          25%{border-right-color : black}
          50%{border-right-color : white}
          75%{border-right-color : black}
          100%{border-right-color : white}
     }
   }

   .skipped{
     color: grey;
   }

   .extra{
     
   }
`;
