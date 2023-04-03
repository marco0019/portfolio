import imgs from '../images/image1.jpg'
const Parallax = () => {
    return (
        <div data-scroll data-scroll-speed="0" style={{ overflow: 'hidden', borderRadius: 15, width: 400, height: 400 }}>
            <img src={imgs} style={{ width: '100%', height: '100%', borderRadius: 15 }} data-scroll data-scroll-speed="-2" />
        </div>
    )
}
export default Parallax;