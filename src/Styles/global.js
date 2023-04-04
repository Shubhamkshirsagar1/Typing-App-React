import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0 ;
        padding:0;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.titleColor};
      }

      body::-webkit-scrollbar{
        display: none;
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
        color: ${({ theme }) => theme.typeBoxText};
   }

   .word{
        margin:5px;
        padding-right:2px;
   }

   .hidden-input{
     opacity:0;
   }

   .correct{
    color:${({ theme }) => theme.correctTypetext};
   }

   .inCorrect{
    color:${({ theme }) => theme.inCorrectTypetext};
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
     color: #7D3D46;
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

   .time-modes , .counter span{
    border: 1px solid white;
    padding:3px;
    border-radius: 5px;
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
    padding:5px;
    color:${({ theme }) => theme.title};
   }

   .subtitle{
    font-size:35px;
    color:${({ theme }) => theme.subTitle};
   }

   .restart{
    font-size: 40px;
    margin-top: 5px;
    border:3px solid white;
    width:60%;
    margin:auto;
    margin-top:50px;
    cursor: pointer;
    background-color:green;
    border-radius: 20px ;
 }

 .header , .footer{
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  cursor:pointer;
}

.theme-select{
  color:black;
  heigth: 20px;
  width: 150px; 
  border-radius: 10px;
  cursor:pointer !important;
}

.theme-select:hover{
  color:green;
  border: 1px solid green;
  cursor:pointer;
}
.social-links {
  display: flex;
  flex-direction: row;
  gap:10px;
}
.screen-center{
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 5rem;
}
.table, .user-page-graph{
  width: 950px;
  margin: 20px auto;
}
.user-info{
  width: 1000px;
  margin: 10px auto;
  display: flex;
  background: ${({ theme }) => theme.titleColor};
  min-height: 15rem;
  color: ${({ theme }) => theme.background};
  border-radius: 20px;
}
.user{
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top:50px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  border-right: 2px solid;
}
.info{
  width: 60%;
  padding: 1rem;
  margin-top: 1rem;
}
.picture{
  width: 40%;
}
.total-tests-taken{
  width: 50%;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
