import LogoWhite from '../../img/logo_white.svg';
import './Logo.scss';

function Logo(){
    return (
        <h1 id="title" ><img src={LogoWhite} id='title-logo' alt='Autonoma Logo'/> Autonoma</h1>
    );
}

export default Logo