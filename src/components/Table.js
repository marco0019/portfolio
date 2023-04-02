import '../App.css';
import Line from './Line';

export default function Table({ children, theme }) {
    return (
        <div>
            <Line theme={theme} type={'solid'} />
            <div className='m mb-72'>
                <div className='grid flex-wrap'>
                    {children}
                </div>
            </div>
            <Line theme={theme} type={'solid'} delay={250} />
        </div>
    )
}