import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4 animate-pulse">
                    <Image
                        src="/icon.png"
                        alt="Loading..."
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="w-8 h-8 border-4 border-brand-pink border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
