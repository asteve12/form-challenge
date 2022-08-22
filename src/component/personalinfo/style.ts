import styled from "styled-components"


const ApplyStyle = styled.div`
width:710px;
min-height:60vh;
@media(max-width:550px){
    width:100%;
    padding-left:3%;
    padding-right:3%;
    box-sizing:border-box;
}


.errorMsg{
    font-size:12px;
    color:red;
}
.personalInfoHeader{
font-size:36px;
color:#4E598C;
font-weight:700;
@media(max-width:420px){
    font-size:25px ;
}
}

.navHeader{
    width:100%;
    display:flex;
    justify-content:space-between;
    border-bottom:solid 1px rgba(0, 0, 0, 1);
    margin-bottom:10%;
    button{
        display:block;
        height:34px;
        padding-bottom:50px;
        font-size:24px;
        font-weight:700;
        color:rgba(189, 189, 189, 1);
        background:none;
        border:none;
        cursor:pointer;
        @media(max-width:560px){
            font-size:14px;
            padding-bottom:35px;
        }
    }
}
.activeForm{
    border-bottom:solid 13px rgba(242, 153, 74, 1) !important;
    border-bottom-left-radius:10px !important;
    border-bottom-right-radius:10px !important;
    border-top-left-radius:10px !important;
    border-top-right-radius:10px !important;
    margin:0px;
    position:relative;
    top:15px;
    left:-6px;
    width:170px;
    @media(max-width:534px){
        width:100% !important;
    }
}

.namelabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px
}

.emaillabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:2px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}

.receiptInfo{
    margin-top:5px;
    font-size:16px;
    color:#817E9E

}

.addrlabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
}

.originBx{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
}
.localGovermentBx{
    width:55%;
   
}

.stateBX{
    width:30%;
  
     select{
        width:100%;
        height:64px;
        padding:20px;
        box-sizing:border-box;
        border-radius:10px;SS
        outline:none;
        border:solid 1px rgba(78, 89, 140, 1);
        font-size:20px;
        font-weight:400
        font-family:"Product Sans";
        background:none;
        option{
            padding:20px;
        box-sizing:border-box;
        }

      

    }
}

.activeForm{
    border-bottom:solid 13px rgba(242, 153, 74, 1) !important;
    border-bottom-left-radius:10px !important;
    border-bottom-right-radius:10px !important;
    border-top-left-radius:10px !important;
    border-top-right-radius:10px !important;
    border-bottom-radius:10px !important;
    margin:0px;
    position:relative;
    top:15px;
    left:-6px;
    width:170px;

}

.cardNamelabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}




.cardTypeBx{
    width:100%;
  
     select{
        width:100%;
        height:64px;
        padding:20px;
        box-sizing:border-box;
        border-radius:10px;SS
        outline:none;
        border:solid 1px rgba(78, 89, 140, 1);
        font-size:20px;
        font-weight:400
        font-family:"Product Sans";
        background:none;
        option{
            padding:20px;
        box-sizing:border-box;
        }

      

    }
}
.cardlabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}

.cardDetailsBx{
    width:100%;
    display:flex;
    justify-content:space-between;
    @media(max-width:530px){
        flex-direction:column;
    }
}


.cardDetailslabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}

.cardDetWrap{
    width:50%;
    @media(max-width:530px){
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }
}

.expiryDatelabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}

.expiryDateBx{
    width:132px;
    @media(max-width:530px){
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }
}


.cvvlabel{
    font-size:20px;
    font-weight:700;
  display:block;
  margin-bottom:10px;
  margin-top:35px;
  position:relative;
  span{
      position:relative;
    top:-5px;
      left:5px;
      color:rgba(235, 87, 87, 1)
  }
}

.cvvBx{
    width:104px;
    @media(max-width:530px){
        width:100%;
        margin-left:auto;
        margin-right:auto;
    }
}

.paymentSummary{
    width:100%;
    border-radius:10px;
    height:405px;
    background-color:white;
    box-shadow: 0px 10px 15px 0px rgba(33, 30, 67, 0.08);

}

.paySumHeader{
    width:100%;
    height:70px;
    background-color:#2F80ED;
    border-top-left-radius:10px !important;
    border-top-right-radius:10px !important;
    padding-left:80px;
    padding-right:80px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-sizing:border-box;
  margin-bottom:30px;
p{
        font-size:20px;
        font-weight:700;
        color:white;
    };
    @media(max-width:560px){
        width:100%;
        padding:0px;
        padding-left:10px;
        padding-right:10px;
    }
    
}

.productPrice{
    justify-content:space-between;
    display:flex;
    padding-left:80px;
    padding-right:80px;
    box-sizing:border-box;
    margin-bottom:30px;
    p{
        font-size:20px;
        font-weight:400;
        color:#4E598C
    };
    @media(max-width:560px){
        width:100%;
        padding:0px;
        padding-left:10px;
        padding-right:10px;
    }

   
}

.totalBx{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:60px;
    margin-right:60px;
    border:solid 1px #817E9E;
    box-sizing:border-box;
    padding-left:19px;
    padding-right:10px;
    border-radius:5px;
    margin-top:20px;
    @media(max-width:560px){
        width:95%;
        padding:0px;
        padding-left:10px;
        padding-right:10px;
        margin:0px;
        margin-left:auto;
        margin-right:auto;
    }

  
}

.rule{
    padding-left:60px;
    padding-right:60px;

}
.totalTxt{
    font-size:20px;
    color:#817E9E;
    font-weight:400
}

.totalAmt{
    font-size:20px;
    color:#4E598C;
    font-weight:700

}

.purchasedCard{
    width:801px;
    height:480px;
    border-radius:10px;
    background-color:white;
    box-shadow: 0px 6px 10px 0px rgba(33, 30, 67, 0.08);
  
}

`

export default ApplyStyle;


export const ApplyPurStyle = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;

.purchasedCard{
    width:801px;
    height:480px;
    background-color:white;
    border-radius:10px;
    box-shadow: 0px 6px 10px 0px rgba(33, 30, 67, 0.08);
    margin-top:

}
.mark{
    width:84px;
    height:84px;
    border-radius:84px;
    background-color:white;
    box-shadow: 0px 6px 10px 0px rgba(33, 30, 67, 0.08);
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;
    margin-top:67px;
}

.purchaseComp{
    font-weight:700;
    color:#4E598C;
    font-size:48px;
   text-align:center;
   margin-top:0px;
   margin-bottom:26px;
   @media(max-width:550px){
       font-size:30px;
   }

}

.emailDetails{
   width:55%;
   margin-left:auto;
   margin-right:auto;
   font-size:20px;
   margin-top:0px;
   @media(max-width:750px){
       width:100%;
       text-align:center;
   }
}
.instructDetail{
    margin:0px;
    font-size:20px;
    color:rgba(79, 79, 79, 1);

}
.homeLink{
    color:#F2C94C;
}






`