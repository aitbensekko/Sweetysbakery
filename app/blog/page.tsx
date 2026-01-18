import { MainContentWrapper } from '../../components/MainContentWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Baking Blog | Sweety's Bakery - Tips, Tricks & Recipes",
    description: "Explore our baking blog for expert tips, comprehensive guides, cake pricing strategies, and delicious recipes to elevate your baking game.",
};

export default function BlogIndexPage() {
    return (
        <MainContentWrapper activeTool="baking-blog" activePost={null} />
    );
}
