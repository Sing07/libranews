
import Left from "./left/Left";
import Middle from "./middle/Middle";
import Right from "./right/Right";

export default function Home() {
    return (
        <main className="min-h-screen flex-col items-center justify-between ">
            <div className="flex mt-1 max-w-full mx-auto">
                <div className=" w-2/12 h-full">
                    <Left />
                </div>
                <div className=" w-7/12 h-full ">
                    <Middle />
                </div>
                <div className=" w-3/12 h-full ">
                    <Right />
                </div>
            </div>
        </main>
    );
}
