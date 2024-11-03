import Image from 'next/image';

interface BlogCardProps {
    image: string;
    title: string;
    excerpt: string;
}

export default function BlogCard({ image, title, excerpt }: BlogCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-gray-800">
            <Image
                src={image}
                alt={title}
                width={500}
                height={160}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200">
                    Leer Blog
                </button>
            </div>
        </div>
    );
}
