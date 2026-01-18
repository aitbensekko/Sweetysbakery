import { Metadata } from 'next';
import { getToolSeoData } from '../../components/utils/seo';

export const metadata: Metadata = {
    title: getToolSeoData('recipe-index').title,
    description: getToolSeoData('recipe-index').description,
    alternates: {
        canonical: 'https://sweetysbakery.com/recipes/',
    },
};

export default function RecipesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
