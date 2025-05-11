import Bob from "../_components/Bob";

export default function MightAlsoLike() {
    return (
        <div className="card">
            <h1 className="text-xl font-bold py-2 pl-4">You might also like</h1>

            <div className="space-y-4">
                <Bob />
                <Bob />
                <Bob />
            </div>

            <button className="transition-all px-4 py-2 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md focus:outline-none duration-200 self-center">
                Show more
            </button>
        </div>
    );
}
