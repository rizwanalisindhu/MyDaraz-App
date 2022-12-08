import '../App.css';
import MyLogo from '../Logo/MyLogo.png';

function Header(props) {
  return (
    <div className='flex shopping-card'>
        
        <div style={{display: 'flex'}} onClick={() => props.handleShow(false)}>
            <img src={MyLogo} style={{width: '50px', height: '60px'}}></img> 
            <h2>
                My Daraz
            </h2> 
        </div>
        
        <div onClick={() => props.handleShow(true)}>
            <h2> Cart
                <sup> {props.count} </sup>
            </h2>
        </div>
    </div>
   
  );
}

export default Header;