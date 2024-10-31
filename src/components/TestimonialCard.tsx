interface TestimonialCardProps {
    image: string;
    name: string;
    position: string;
    videoLink: string;
}

export default function TestimonialCard({ image, name, position, videoLink }: TestimonialCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center text-gray-800">
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{position}</p>
                <a href={videoLink} target="_blank" className="text-blue-500 underline hover:text-blue-700">
                    Ver video
                </a>
            </div>
        </div>
    );
}
