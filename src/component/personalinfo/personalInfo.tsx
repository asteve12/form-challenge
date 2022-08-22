//component
import Footer from "../footer/footer"
import InputBox from "../inputBx/input"
import useLogic, { useForm } from "../../context/personal"

//style
import ApplyStyle, { ApplyPurStyle } from "./style"
//asssets
import markIcon from "../../assets/form/mark.png"
  



const PersonalInfo = () => {
    const { handleFormToShow, visibilityObj,handlePersonalSubmit, handleBillingSubmit,  makeProudctPay } = useLogic()
    const personalInfoObj = useForm(["name", "email","firstAddr","secAddr","localGov","state"],handlePersonalSubmit)
    const billingInfoObj = useForm(["cardName","cardType","cardDetails","ExpiryDate","cvv"],handleBillingSubmit)

    
    
    return (
        <>
        {
                visibilityObj.showConfirmPayment && <ApplyPurStyle className="purchasedCard" >
                    <section className="purchasedCard">
                        <div className="mark">
                            <img src={markIcon} alt="mark" />
                           
                        </div>
                        <p className="purchaseComp">
                            Purchase Completed
                        </p>
                        <div className="emailDetails">
                            <p className="instructDetail">
                            Please check your email for details concerning 
                            this transaction
                            </p>
                            <br></br>
                            <br></br>
                            <a className="homeLink" href="/">Return Home</a>
                        </div>
                       


                       

                        </section>
                 
           
                    </ApplyPurStyle>
          

            }
            { !visibilityObj.showConfirmPayment && <ApplyStyle>
            <h3 className="personalInfoHeader">Complete your Purchase</h3>
            <div className="navHeader" onClick={handleFormToShow} >
                <button id="personaInfo" style={visibilityObj.showPersonalInfo ===true ? {color:"#F2994A"}:null} >
                    Personal Info
                    {visibilityObj.showPersonalInfo ===true &&  <p className="activeForm"></p> }
                   
                </button>
                <button id="billingInfo">
                    Billing Info
                    {visibilityObj.showBilling ===true &&  <p className="activeForm"></p> }

                </button>
                <button id="confimPayment">
                    Confirm Payment
                    {visibilityObj.showConfirmPayment ===true &&  <p className="activeForm" style={{marginLeft:"auto",right:"-10px",left:"auto"}}></p> }

                </button>
            </div>

            {visibilityObj.showPersonalInfo &&             <form onSubmit={personalInfoObj.handleSubmit}>
                <div>
                <label className="namelabel" htmlFor="name">Name</label>
                    <InputBox className="name" id="name" formObj={personalInfoObj} placeholder="name" ></InputBox>
                    {personalInfoObj.touched.name && personalInfoObj.errors.name ? (
            
                <div className="errorMsg"><>{personalInfoObj.errors.name}</></div>
           ) : null}
                </div>

                <div>
                    <label className="emaillabel" htmlFor="name">Email Address <span className="importantTag">*</span></label>
                    <p className="receiptInfo">The purchase reciept would be sent to this address</p>
                    <InputBox className="email" id="email" formObj={personalInfoObj} placeholder="OparaLinusAhmed@devmail.com" ></InputBox>
                    {personalInfoObj.touched.email && personalInfoObj.errors.email ? (
            
                    <div className="errorMsg"><>{personalInfoObj.errors.email}</></div>
       ) : null}
                </div>

                <div>
                <label className="addrlabel" htmlFor="firstAddr">Address 1</label>
                <InputBox className="firstAddr" id="firstAddr" formObj={personalInfoObj} placeholder="The address of the user goes here" ></InputBox>
                {personalInfoObj.touched.firstAddr && personalInfoObj.errors.firstAddr ? (
                <div className="errorMsg"><>{personalInfoObj.errors.firstAddr}</></div>) : null}
                </div>

                <div>
                <label className="addrlabel" htmlFor="secAddr">Address 2</label>
                <InputBox className="secAddr" id="secAddr" formObj={personalInfoObj} placeholder="and here" ></InputBox>
                {personalInfoObj.touched.secAddr && personalInfoObj.errors.secAddr ? (
                <div className="errorMsg"><>{personalInfoObj.errors.secAddr}</></div>) : null}
                </div>

                <div className="originBx">
                <section className="localGovermentBx">
                    <label className="addrlabel" htmlFor="localGov">Local Government</label>
                        <InputBox className="localGov" id="localGov" formObj={personalInfoObj} placeholder="Surulere" ></InputBox>
                        {personalInfoObj.touched.localGov && personalInfoObj.errors.localGov ? (
                <div className="errorMsg"><>{personalInfoObj.errors.localGov}</></div>) : null}
                    </section>
                    <section className="stateBX" >
                    <label className="addrlabel" htmlFor="localGov">state</label>
                        <select name="state" className="state" id="state" placeholder="state" value={personalInfoObj.values.state} onChange={personalInfoObj.handleChange} onBlur={personalInfoObj.handleBlur}
                        >   <option> State</option>
                            <option >lagos</option>
                            <option >ondo</option>
                           
                            </select>
                            {personalInfoObj.touched.state && personalInfoObj.errors.state ? (
                <div className="errorMsg"><>{personalInfoObj.errors.state}</></div>) : null}
                 </section>
                    

                </div>
               
               <Footer></Footer>
            </form> }
            {visibilityObj.showBilling && !visibilityObj.showPaymentSumm && <form onSubmit={billingInfoObj.handleSubmit}>
                <div>
                <label className="cardNamelabel" htmlFor="cardName">Name on Card <span className="importantTag">*</span></label>
                    <InputBox className="cardName" id="cardName" formObj={billingInfoObj} placeholder="Opara Linus Ahmed" ></InputBox>
                    {billingInfoObj.touched.cardName && billingInfoObj.errors.cardName ? (
                    <div className="errorMsg"><>{billingInfoObj.errors.cardName}</></div>
           ) : null}
                </div>

                <div className="cardTypeBx" >
                   <label className="cardlabel" htmlFor="cardType">Card Type <span className="importantTag">*</span></label>
                        <select name="cardType" className="cardType" id="cardType"  value={billingInfoObj.values.state} onChange={billingInfoObj.handleChange} onBlur={billingInfoObj.handleBlur}
                        >
                            <option> select card</option>
                            <option> visa</option>
                            <option >lagos</option>
                            <option >ondo</option>
                       
                        </select>
                        {billingInfoObj.touched.cardType && billingInfoObj.errors.cardType ? (
                <div className="errorMsg"><>{billingInfoObj.errors.cardType}</></div>) : null}
                 </div>


                <div className="cardDetailsBx">
                    <section className="cardDetWrap">
                    <label className="cardDetailslabel" htmlFor="cardDetails">Card details <span className="importantTag">*</span></label>
                    <InputBox className="cardDetails" id="cardDetails" formObj={billingInfoObj} placeholder="44960      44960     44960    44960" ></InputBox>
                    {billingInfoObj.touched.cardDetails && billingInfoObj.errors.cardDetails ? (
                    <div className="errorMsg"><>{billingInfoObj.errors.cardDetails}</></div>) : null}
                        
                    </section>

                    <section className="expiryDateBx">
                    <label className="expiryDatelabel" htmlFor="ExpiryDate">Expiry date <span className="importantTag">*</span></label>
                    <InputBox className="ExpiryDate" id="ExpiryDate" formObj={billingInfoObj} placeholder="  04  /  23" ></InputBox>
                    {billingInfoObj.touched.ExpiryDate && billingInfoObj.errors.ExpiryDate ? (
                    <div className="errorMsg"><>{billingInfoObj.errors.ExpiryDate}</></div>) : null}

                    </section>

                    <section className="cvvBx">
                    <label className="cvvlabel" htmlFor="cvv">CVV <span className="importantTag">*</span></label>
                    <InputBox className="cvv" id="cvv" formObj={billingInfoObj} placeholder="923" ></InputBox>
                    {billingInfoObj.touched.cvv && billingInfoObj.errors.cvv ? (
                    <div className="errorMsg"><>{billingInfoObj.errors.cvv}</></div>) : null}

                    </section>

                </div>

                <Footer></Footer>

            </form>}
            {
                visibilityObj.showBilling && visibilityObj.showPaymentSumm && <form onSubmit={makeProudctPay}>
                    <div className="paymentSummary">
                        <section className="paySumHeader">
                            <p>Item Name</p>
                            <p>Price</p>

                        </section>
                        <section className="productPrice">
                            <p>Data science and usability</p>
                            <p>50,000.00</p>

                        </section>
                        <section className="productPrice">
                            <p>Shipping</p>
                            <p>0.00</p>

                        </section>
                        <section className="rule">
                        <hr />
                        </section>
                        
                        <section className="totalBx">
                            <p className="totalTxt">Total</p>
                            <p className="totalAmt">50,000.00</p>
                        </section>

                    </div>
                    <Footer  btnName="Pay"></Footer>

                </form>
            }
      
   </ApplyStyle>

            }
       
      </>
    )
}


export default PersonalInfo