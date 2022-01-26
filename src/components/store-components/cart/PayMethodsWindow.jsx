import './css/PayMethodsWindow.css'
import visaImg from './img/visa.png'
import paypalImg from './img/paypal.png'
import opBankImg from './img/op_bank.png'
import popPankkiImg from './img/pop_pankki.png'

const PayMethodsWindow = (props) => {

    const pay_methods = [
        {
            __id__: "method1",
            __name__: "Credit or debit cart",
            __img__: visaImg
        },
        {
            __id__: "method2",
            __name__: "PayPal",
            __img__: paypalImg
        },
        {
            __id__: "method3",
            __name__: "OP Bank",
            __img__: opBankImg
        },
        {
            __id__: "method4",
            __name__: "Pop Pankki",
            __img__: popPankkiImg
        }
    ]

    function show_pay_methods() {
        return (
            pay_methods.map(method => {
                return (
                    <label key={method.__id__} htmlFor={method.__name__}>
                        <input type="radio" value={method.__name__} name="pay-method" id={method.__name__} />
                        {method.__name__}
                        <div id={method.__id__} className='method-img-container'>
                        </div>
                    </label>
                )
            })
        )
    }


    return (
        <>
            <div className={"pay-methods-window" + " " + (!props.state1 ? "pay-window-hidden" : "pay-window-visible")}>
                <h1>Pay methods:</h1>
                {show_pay_methods()}
                <button className={'continue-btn'}
                    onClick={() => props.toggleFunct(props.state1, props.setFunct1).then(() => props.toggleFunct(props.state2, props.setFunct2))}>
                    Continue
                </button>
            </div>
        </>
    )
};

export default PayMethodsWindow;
