import NewsBob from "../_components/NewsBob";

export default function OtherNews() {
    return (
        <div className="card my-5">
            <h1 className="text-xl font-bold py-2 pl-4">Similar News</h1>

            <div className="space-y-4">
                <NewsBob />
                <NewsBob />
                <NewsBob />
            </div>

            <button className="transition-all px-4 pt-6 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md focus:outlin-none duration-200 ease-in-out">
                Show more
            </button>
        </div>
    );
}
