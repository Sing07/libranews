import Bob from "./Bob";

export default function MightAlsoLike() {
    return (
        <div className="card">
            <h1 className="text-xl font-bold py-2 pl-4">You might also like</h1>

            <div className="space-y-4">
                <Bob />
                <Bob />
                <Bob />
            </div>

            <button className="transition-all px-4 pt-6 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md focus:outlin-none duration-200 ease-in-out">
                Show more
            </button>
        </div>
    );
}
