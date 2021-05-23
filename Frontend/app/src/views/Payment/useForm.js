import {useState, useEffect} from 'react';


const useForm = (callback, validateForm) => {

    const [values, setValues] = useState({
        id: '',
        firstName: '',
        lastName: '',
        // email: '',
        age: '',
        username: '',
        password: '',
        rePassword: '',

        //Pay Via phone 
        phone: '',
        nameOfCustomer: '',

        //Delivery and Payment Details
        fullName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        nameOnCard: '',
        cardNum: '',
        expDate: '',
        cvv: ''
    });
    const [errors, setErrors] = useState ({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(values));
        setIsSubmitting(true);
        this.useState({
            showPonePay: e.target.value ===1,
            showCardPay: e.target.value ===2
        });
    };

    const handleOnChange = e => {
        
    };

    useEffect (
        () => {
            if(Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        },
    );

    return { handleChange, values, handleSubmit, handleOnChange, errors };
};

export default useForm;