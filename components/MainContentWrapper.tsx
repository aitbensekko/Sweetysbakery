"use client";

import { useRouter } from 'next/navigation';
import { MainContent } from './MainContent';
import { ToolId, toolIdToSlug } from './utils/slugs';
import { BlogPost } from '../data/blogPosts';

interface Props {
    activeTool: ToolId;
    activePost: BlogPost | null;
}

export const MainContentWrapper: React.FC<Props> = ({ activeTool, activePost }) => {

    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    const setActiveTool = (toolId: ToolId) => {
        const path = toolIdToSlug(toolId);
        router.push(path);
    };

    return (
        <MainContent
            activeTool={activeTool}
            setActiveTool={setActiveTool}
            activePost={activePost}
            handleNavigate={handleNavigate}
        />
    );
};
