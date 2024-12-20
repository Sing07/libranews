import Image from "next/image";
import fox from "@/public/fox.jpeg";


export default function Bob() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex overflow-hidden pl-4">
                <Image
                    src={"/icon.png"}
                    width={50}
                    height={50}
                    alt="logo"
                    className="rounded-full shadow-lg"
                />
                <div className="flex flex-col pl-2 ">
                    <p className="text-base">John Doe</p>
                    <p className="text-sm font-light">@handle</p>
                </div>
            </div>
            <button className="bg-gray-300 rounded-full px-5 py-1 ml-4 text-small">
                Follow
            </button>
        </div>
    );
}
