const Tabel = ({ columns, data, isProjectTab, handleViewDetail }) => {

    return (
        <div className="text-xs w-full py-2 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="">
                        {columns.map((thead) => (
                            <th key={thead.key} className="p-2 text-start text-gray-500 border">
                                {thead.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((cell, cellIndex) => {
                                if (cell.key === 'button-view') {
                                    return (
                                        <td key={cellIndex} className="border p-2">
                                            <button
                                                onClick={() => handleViewDetail(value.id)}
                                                className='bg-blue-500 rounded py-2 text-white w-full mt-1'>
                                                View
                                            </button>
                                        </td>
                                    );
                                }
                                if (isProjectTab) {
                                    if (cellIndex === 0) {
                                        return <td key={cellIndex} className="border p-2 text-gray-500">{rowIndex + 1}</td>;
                                    }
                                }
                                return (
                                    <td key={cellIndex} className="border p-2 text-gray-500 text-wrap">
                                        {value[cell.key]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabel;
