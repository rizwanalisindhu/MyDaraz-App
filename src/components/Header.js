import '../App.css';
import MyLogo from '../Logo/MyLogo.png';

function Header() {
  return (
    <div className='flex shopping-card'>
        <div style={{display: 'flex'}}>
            <img src={MyLogo} style={{width: '50px', height: '60px'}}></img> 
            <h2>
                My Daraz
            </h2> 
        </div>
        
        <div>
            <h2> Cart
                <sup> {'4'} </sup>
            </h2>
        </div>
    </div>
   
  );
}

export default Header;