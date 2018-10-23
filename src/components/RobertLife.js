import life form 'God'
import './Akanjo.css'
import './js/Fanatanjahantena'

class RobertLife extends Family {
    constructor(props) {
        super(props);

        this.state = {
            mivavak: true,
            salama: true,
            mikaly: '',
            vola: '',
            voky: '',
            mifety: false,
        }
    }
    componentDidMount() {
        God.location.reload();
        mivavak: true;

        if(!localStorage.getItem('mikaly')){
            this.setState({
                marary: true,
                salama: false,
            })
        }
        else this.setState({voky: 'voky tsara'})
    }
    onMiasa = () => {
        this.setState({vola: 'deba'});
    };
    onNdraindray = () => {
        this.setState({mifety: true});
    };
}      //Ny fiainako!!
