import { Metadata } from 'next';
import { MainContentWrapper } from '../../../components/MainContentWrapper';
import { slugToToolId } from '../../../components/utils/slugs';
import { getToolSeoData } from '../../../components/utils/seo';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const { allToolIds, toolIdToSlug } = await import('../../../components/utils/slugs');
    return allToolIds
        .map(id => {
            const path = toolIdToSlug(id);
            if (path.startsWith('/tools/')) {
                return { slug: path.replace('/tools/', '') };
            }
            return null;
        })
        .filter(Boolean);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const toolId = slugToToolId(`/tools/${slug}`);
    if (!toolId) return {};
    const seoData = getToolSeoData(toolId);
    return {
        title: seoData.title,
        description: seoData.description,
        keywords: seoData.keywords,
    };
}

export default async function ToolPage({ params }: Props) {
    const { slug } = await params;
    const fullSlug = `/tools/${slug}`;
    const toolId = slugToToolId(fullSlug);

    if (!toolId) {
        notFound();
    }

    return (
        <MainContentWrapper activeTool={toolId} activePost={null} />
    );
}
