import FilterSelection from "./FilterSelection";

export default function Happening() {
    return (
        <div className="card filter">
            <h1 className="text-xl font-bold py-2 pl-4">What&apos;s Happening</h1>

            <div className="px-4">
                <p className="font-bold">Source</p>
                <FilterSelection label="Anyone" />
                <FilterSelection label="You Follow" />
                <br />
            </div>
            <div className="px-4">
                <p className="font-bold">Source</p>
                <FilterSelection label="Anyone" />
                <FilterSelection label="You Follow" />
                <br />
            </div>

            <button className="transition-all px-4 py-2 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md focus:outlin-none duration-200 ease-in-out">
                Show more
            </button>
        </div>
    );
}
