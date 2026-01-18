"use client";

import { useRouter } from 'next/navigation';
import ProductsPage from '../../components/ProductsPage';

export default function Products() {
    const router = useRouter();

    const handleNavigate = (path: string) => {
        router.push(path);
    };

    return (
        <ProductsPage />
    );
}
