import Image from "next/image";
import fox from "@/public/fox.jpeg";


export default function Bob() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex overflow-hidden pl-4">
                <Image
                    src={fox}
                    width={50}
                    height={50}
                    alt="logo"
                    className="rounded-full"
                />
                <div className="flex flex-col pl-2 ">
                    <p className="text-base">First</p>
                    <p className="text-base">Second</p>
                </div>
            </div>
            <button className="bg-gray-300 rounded-full px-4 py-1 ml-4 text-small">
                Follow
            </button>
        </div>
    );
}
