import Image from "next/image";
import fox from "@/public/fox.jpeg";


export default function NewsBob() {
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
                    <p className="font-bold">News Title</p>
                    <p className="text-base">Sample content description...</p>
                </div>
            </div>

        </div>
    );
}
