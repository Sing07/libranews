
import FilterSelection from "./FilterSelection";

export default function Filter() {
    return (
        <div className="card">
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

            <button className="transition-all px-4 py-2 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md duration-200 ease-in-out">
                Advanced Search
            </button>
        </div>
    );
}
