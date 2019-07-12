import {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import PropertyInfoForm from '../PropertyForms/PropertyInfoForm';
import PropertyOwnerForm from '../PropertyForms/PropertyOwnerForm';
import PropertyBuyerForm from '../PropertyForms/PropertyBuyerForm';
import PropertySellerForm from '../PropertyForms/PropertySellerForm';

export default function({property}) {
    const [activeStep, updateStep] = useState(0);

    const form = () => {
        switch(activeStep){
            case 0:
                return <PropertyInfoForm property={property} />;
            case 1:
                return <PropertyOwnerForm property={property} />;
            case 2:
                return <PropertyBuyerForm property={property} />;
            case 3:
                return <PropertySellerForm property={property} />;
            default:
                return 'nothing'
        }
    };

    const changeStep = (x) => {
        if(x !== activeStep) updateStep(x);
        console.log(x);
    };

    return (
        <div className="PropertyDetailForms">
            <Stepper nonLinear activeStep={activeStep}>
                <Step>
                    <StepButton
                        onClick={()=>{changeStep(0)}}>
                        Property Info
                    </StepButton>
                </Step>
                <Step>
                    <StepButton
                        onClick={()=>{changeStep(1)}}>
                        Owner Info
                    </StepButton>
                </Step>
                <Step>
                    <StepButton
                        onClick={()=>{changeStep(2)}}>
                        Purchase Info
                    </StepButton>
                </Step>
                <Step>
                    <StepButton
                        onClick={()=>{changeStep(3)}}>
                        Sales Info
                    </StepButton>
                </Step>
            </Stepper>
            { form() }
        </div>
    )
}