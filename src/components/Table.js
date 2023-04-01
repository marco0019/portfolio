import '../App.css';

export default function Table({ children, borderStyle }) {
    return (
        <div>
            <div className="line bg-[#888]"></div>
            <div className='grid'>
                {children}
            </div>
            <div className="line bg-[#888]"></div>
        </div>
    )
}