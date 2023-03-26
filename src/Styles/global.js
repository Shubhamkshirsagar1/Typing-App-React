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

   .upper-menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    font-size:20px;
    padding: 10px 0px;
   }
   .counter{
    margin-left: 4px;
   }
   .modes{
    display: flex;
    gap: 10px;
    margin-right: 43px;
    align-items: center;
   }
   .time-modes{
    border: 1px solid white;
    padding:3px;
   }
   .time-modes:hover{
    color:green;
    border: 1px solid green;
    cursor:pointer;
   }
   .stats-box{
    display:flex;
    width:1000px;
    margin-left:auto;
    margin-right:auto;
   }
   .left{
    width:30%;
    border:1px solid yellow;
   }
   .right{
    width:70%;
    border:1px solid yellow;
   }
   .title{
    font-size:25px;
   }
   .subtitle{
    font-size:20px;
    color:gold;
   }
   .restart{
    font-size: 40px;
    margin-top: 5px;
    border:3px solid white;
    width:50%;
    margin:auto;
    margin-top:50px;
    cursor: pointer;
    background-color:green;
    border-radius: 20px ;
 }
 .header{
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  cursor:pointer;
}
`;
