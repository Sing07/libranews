export default function FilterSelection({ label } : {label: string}) {
    return (
        <div className="flex items-center justify-between">
            <span>{label}</span>
            <input
                type="checkbox"
                className="rounded-full appearance-none border border-gray-300 checked:bg-blue-500 checked:border-transparent checked:bg-center bg-no-repeat h-4 w-4"
                // checked={isChecked}
                // onChange={onChange}
            />
        </div>
    );
}
