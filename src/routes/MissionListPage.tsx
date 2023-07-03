import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import { Container } from '../styles/Container';

const MissionListPage = () => {
    return (
        <Container>
            <Header />
            <ProgressBar
                onClick={() => {
                    console.log('clicked');
                }}
                number={2} />
        </Container>
    );
};

export default MissionListPage;
