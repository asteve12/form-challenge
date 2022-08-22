import { useFormik } from "formik";
import { FormEvent, useState } from "react"



interface IVisibility{
    showPersonalInfo: boolean;
    showBilling: boolean;
    showConfirmPayment: boolean;
    showPaymentSumm:boolean

}

//store form filed value and help with form validation
export const useForm = (formField: string[], handleSubmit: (values:any) => void) => {
    let formFields = {};


//generate form field
    (() => {formField.forEach((eachFormField) => {formFields[eachFormField] = ""})})()

// validate form field
    const validateFiled = (values:any) => {
        let fieldKeys = Object.keys(values)
        let error = {
            
        }
        fieldKeys.forEach((eachKeys) => {
            if(!values[eachKeys])  error[eachKeys] = `required`
            
        })

        return error;
        
        
    }

    

    
    let formObj = useFormik({
        initialValues: {
            ...formFields
        },
        validate:validateFiled,
        onSubmit: (values) => {
            handleSubmit(values)
            
        }
    })


    return formObj;
    
} 



//handle form logic and help  preserve form state
const useLogic = () => {
    const [visibilityObj, setVisibilityObj] = useState<IVisibility>({
        showPersonalInfo: true,
        showBilling: false,
        showConfirmPayment: false,
        showPaymentSumm:false
    })

//handle varous form section visibility
    const handleFormToShow = (e:FormEvent):void => {
        let buttonClicked = e.target as HTMLButtonElement;
         let buttonId = buttonClicked.id;

        buttonId === "personaInfo" && setVisibilityObj({
            showPersonalInfo:true,
            showBilling: false,
            showConfirmPayment: false,
            showPaymentSumm:false
       })
        buttonId === "billingInfo" && setVisibilityObj({
            showPersonalInfo:false,
            showBilling: true,
            showConfirmPayment: false,
            showPaymentSumm:false
       })
        buttonId === "confimPayment" && setVisibilityObj({
            showPersonalInfo:false,
            showBilling: false,
            showConfirmPayment: true,
            showPaymentSumm:false
       })
        
    }

    //handle visibility of personal info form
    const handlePersonalSubmit = (value: any): void => {
        alert("form filled successfullly")
        setVisibilityObj({
            showPersonalInfo:false,
            showBilling: true,
            showConfirmPayment: false,
            showPaymentSumm:false
       })
        
    }
  //handle visibility of billing info form
    const handleBillingSubmit = (value: any) => {
        setVisibilityObj({
            showPersonalInfo:false,
            showBilling: true,
            showConfirmPayment: false,
            showPaymentSumm:true
       })
        
        alert("billing form completed")
    }

//handle payment 
    const makeProudctPay = () => {
        setVisibilityObj({
            showPersonalInfo:false,
            showBilling: false,
            showConfirmPayment: true,
            showPaymentSumm:false
       })
    
}


    return {
        handleFormToShow,
        visibilityObj,
        handlePersonalSubmit,
        handleBillingSubmit,
        makeProudctPay

    }
    
    
}


export default useLogic