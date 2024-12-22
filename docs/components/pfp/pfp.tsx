import Image from 'next/image';
import denilsonImage from './denilsoncvpfp.png';

const Pfp = () => {
    return (
        <div>
            <Image 
                src={denilsonImage} 
                alt="Denilson" 
                width={400} 
                height={400} 
            />
        </div>
    );
};

export default Pfp;
