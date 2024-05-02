import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Import IoClose icon

const FormCreateContent = ({ isFormContent, handleClose }) => {
    const [formData, setFormData] = useState({
        devTitle: "",
        devtools: "",
        projectTitle: "",
        project: ""
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
        setFormErrors({
            ...formErrors,
            [name]: ""
        });
    };

    const validateForm = () => {
        const errors = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== "file" && !value.trim()) {
                errors[key] = "Harap isi bidang ini";
            }
        });
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                console.log("Data to be sent:", formData); // Print data to be sent
                setFormData({
                    devTitle: "",
                    devtools: "",
                    projectTitle: "",
                    project: ""
                });
            } catch (error) {
                console.error("Error handling form submission:", error);
            }
        }
    };

    return (
        <div className={isFormContent ? 'fixed  w-full h-100vh flex justify-center items-center bg-black bg-opacity-20 xl:p-80 md:p-10 p-5' : 'hidden'}>
            <div className="bg-white rounded w-full flex flex-col p-5">
                <div className="w-full flex flex-row justify-between">
                    <p className="text-xs text-gray-400">POST</p>
                    <button onClick={handleClose} className="bg-red-500 text-white rounded p-1 text-xl hover:bg-red-600"><IoClose /></button>
                </div>
                <div>
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Dev Title</label>
                            <input type="text" name="devTitle" placeholder="Masukan Dev Title" className="border rounded px-3 py-2" value={formData.devTitle} onChange={handleChange} />
                            {formErrors.devTitle && <span className="text-red-500 text-xs">{formErrors.devTitle}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Dev Tools</label>
                            <input type="text" name="devtools" placeholder="Masukan Dev Tools" className="border rounded px-3 py-2" value={formData.devtools} onChange={handleChange} />
                            {formErrors.devtools && <span className="text-red-500 text-xs">{formErrors.devtools}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Project Title</label>
                            <input type="text" name="projectTitle" placeholder="Masukan Project Title" className="border rounded px-3 py-2" value={formData.projectTitle} onChange={handleChange} />
                            {formErrors.projectTitle && <span className="text-red-500 text-xs">{formErrors.projectTitle}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Project</label>
                            <input type="text" name="project" placeholder="Masukan Project" className="border rounded px-3 py-2" value={formData.project} onChange={handleChange} />
                            {formErrors.project && <span className="text-red-500 text-xs">{formErrors.project}</span>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white rounded px-3 py-2">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormCreateContent;
