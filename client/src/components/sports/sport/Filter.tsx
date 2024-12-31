

type Props = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    code: string,
    setCode: React.Dispatch<React.SetStateAction<string>>
}
const Filter = ({ name, setName, code, setCode }: Props) => {
    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-4'>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Enter code" value={code} onChange={(e) => setCode(e.target.value)} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Enter game" value={name} onChange={(e) => setName(e.target.value)} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
        </div>

    )
}

export default Filter