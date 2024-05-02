import Tabel from "../Tabel/Tabel";

const SectionPost = ({
    columns,
    data,
    columnsProject,
    dataProject,
    dataContent,
    columnsContent,
    handleViewDetail,
    handleCreate,
    handleCreateContent,
    handleCreateProject,
    handleTabClick,
    activeTab }) => {

    return (
        <div className='md:p-10 p-3 min:h-100vh flex'>
            <div className='w-full max-h-full border rounded-xl flex flex-col p-5'>
                <h1 className='px-3 py-2 font-bold'>POSTING</h1>
                {/* Button tab */}
                <div className='flex flex-row gap-5 pl-3'>
                    <button className={`py-2 text-xs ${activeTab === "Profil Bio" ? "border-b border-purple-500 text-purple-500" : ""}`}
                        onClick={() => handleTabClick("Profil Bio")}>
                        Profil Bio
                    </button>
                    <button className={`py-2 text-xs ${activeTab === "Content" ? "border-b border-purple-500 text-purple-500" : ""}`}
                        onClick={() => handleTabClick("Content")}>
                        Content
                    </button>
                    <button className={`py-2 text-xs ${activeTab === "Project" ? "border-b border-purple-500 text-purple-500" : ""}`}
                        onClick={() => handleTabClick("Project")}>
                        Project
                    </button>
                </div>
                <div className="px-3 py-2 flex flex-col">
                    {activeTab === "Profil Bio" && (
                        <div>
                            <div className="flex flex-row gap-3">
                                <button onClick={handleCreate} className="bg-blue-500 px-3 py-2 rounded text-white text-xs">Create</button>
                            </div>
                            <Tabel columns={columns} data={data} handleViewDetail={handleViewDetail} />
                        </div>
                    )}
                    {activeTab === "Content" && (
                        <div>
                            <div className="flex flex-row gap-3">
                                <button onClick={handleCreateContent} className="bg-blue-500 px-3 py-2 rounded text-white text-xs">Create</button>
                            </div>
                            <Tabel columns={columnsContent} data={dataContent} handleViewDetail={handleViewDetail} />
                        </div>
                    )}
                    {activeTab === "Project" && (
                        <div>
                            <button onClick={handleCreateProject} className="bg-blue-500 px-3 py-2 rounded text-white text-xs">Create</button>
                            <Tabel
                                columns={columnsProject}
                                data={dataProject}
                                isProjectTab={true}
                                handleViewDetail={handleViewDetail} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SectionPost;
