'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// We don't import 'leaflet' or its CSS at the top level to avoid SSR 'window' errors.
// Instead, we import CSS dynamically or assume it's loaded globally, OR we just let the MapContainer handle it carefully.
// Actually, standard practice is to import CSS, but 'L' might be the issue.
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { Shop } from '../data/shops';

// Component to handle map bounds updates
const MapUpdater = ({ shops }: { shops: Shop[] }) => {
    const map = useMap();
    const [L, setL] = useState<any>(null);

    useEffect(() => {
        // Load Leaflet dynamically
        import('leaflet').then((module) => {
            setL(module.default);
        });
    }, []);

    useEffect(() => {
        if (!L || shops.length === 0) return;

        const bounds = L.latLngBounds(shops.map(s => s.coordinates));
        map.fitBounds(bounds, { padding: [50, 50] });
    }, [shops, map, L]);

    return null;
};

// Component to configure default icons once on client
const LeafletConfig = () => {
    useEffect(() => {
        import('leaflet').then((L) => {
            // @ts-ignore
            delete L.default.Icon.Default.prototype._getIconUrl;
            L.default.Icon.Default.mergeOptions({
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        });
    }, []);
    return null;
}

const ShopMap = ({ shops }: { shops: Shop[] }) => {
    const defaultCenter: [number, number] = [39.8283, -98.5795];
    const defaultZoom = 4;
    const [L, setL] = useState<any>(null);

    useEffect(() => {
        import('leaflet').then(module => {
            setL(module.default);
        });
    }, []);

    const validShops = shops.filter(s => s.coordinates[0] !== 0 && s.coordinates[1] !== 0);

    const createCustomIcon = (type: 'bakery' | 'coffee_shop') => {
        if (!L) return undefined;

        const color = type === 'bakery' ? '#E65A88' : '#D97706';
        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="36" height="36" stroke="white" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5" fill="white"/>
        </svg>`;

        return L.divIcon({
            className: 'custom-icon',
            html: svg,
            iconSize: [36, 36],
            iconAnchor: [18, 36],
            popupAnchor: [0, -36]
        });
    };

    if (!L) {
        return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">Loading Maps...</div>;
    }

    return (
        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-sm border border-brand-border z-0">
            <MapContainer
                center={defaultCenter}
                zoom={defaultZoom}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
            >
                <LeafletConfig />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapUpdater shops={validShops} />

                {validShops.map((shop) => (
                    <Marker
                        key={shop.id}
                        position={shop.coordinates}
                        icon={createCustomIcon(shop.type)}
                    >
                        <Popup>
                            <div className="p-1">
                                <h3 className="font-bold text-sm text-brand-text-title mb-1">{shop.name}</h3>
                                <p className="text-xs text-brand-text-body mb-2">{shop.address}, {shop.city}</p>
                                <Link
                                    href={`/coffee-shop-directory/${shop.slug}`}
                                    className="text-xs font-bold text-brand-pink hover:underline"
                                >
                                    View Details
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default ShopMap;
