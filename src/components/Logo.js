import './Logo.css'
import logo from '../images/LOGO.svg';
function Container(props) {
    return (
        <div className={'inverted-color link'} style={{ position: 'fixed', top: 20, right: 20 }} data-text="logo">{props.children}</div>
    )
}
export default function Logo({ invert }) {
    return (
        <Container>
            <img src={logo} width={80} />
        </Container>
    )
}