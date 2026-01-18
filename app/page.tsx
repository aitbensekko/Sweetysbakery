import { MainContentWrapper } from '../components/MainContentWrapper';

export default function Home() {
    return (
        <main>
            <MainContentWrapper activeTool="home" activePost={null} />
        </main>
    );
}
