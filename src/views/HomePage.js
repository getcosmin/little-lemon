import Featured from '../components/Featured';
import HeroLarge from '../components/HeroLarge';
import Display from '../components/Display';
import Reviews from '../components/Reviews';

export default function HomePage() {
    return(
        <>
            <HeroLarge content = {{ 
                title: 'Little Lemon',
                text: 'Welcome to our website.',
                button: 'Reserve Table'
                
            }}/>

            <Featured/>

            <Reviews/>

            <Display content = {{ 
                title: 'Little Lemon',
                text: 'New York',            
            }}/>


            
        </>
    )
}