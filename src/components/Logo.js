import './Logo.css'
import logo from '../images/LOGO.svg';
function Container(props) {
    return (
        <div className={'inverted-color'}>{props.children}</div>
    )
}
export default function Logo({ width }) {
    return (
        <Container>
            <img src={logo} width={width} />
        </Container>
    )
}