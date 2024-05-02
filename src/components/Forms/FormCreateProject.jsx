import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const FormCreateProject = ({ isCreateProject, handleClose }) => {
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        link: "",
        file: null // Mengubah menjadi null untuk mengindikasikan tidak ada file yang dipilih secara default
    });

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
                const formDataToSend = new FormData();
                formDataToSend.append("title", formData.title); // Mengubah dari 'username' ke 'title' sesuai properti di server
                formDataToSend.append("description", formData.description); // Mengubah dari 'name' ke 'description' sesuai properti di server
                formDataToSend.append("link", formData.link); // Mengubah dari 'status' ke 'link' sesuai properti di server
                formDataToSend.append("file", formData.file);

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
                    method: 'POST',
                    body: formDataToSend
                });

                if (response.ok) {
                    console.log("Project created successfully");
                    setFormData({
                        title: "",
                        description: "",
                        link: "",
                        file: null
                    });
                } 
            } catch (error) {
                console.error("Error creating project:", error)
            }
        }
    };

    return (
        <div className={isCreateProject ? 'fixed w-full h-100vh top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 p-5' : 'hidden'}>
            <div className='bg-white w-full rounded flex flex-col p-5'>
                <div className="w-full flex flex-row justify-between">
                    <p className="text-xs text-gray-400">POST PROJECT</p>
                    <button onClick={handleClose} className="bg-red-500 text-white rounded p-1 text-xl hover:bg-red-600">
                        <IoClose />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col text-sm'>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className='mb-2 px-3 py-2 border rounded'
                        placeholder='Masukan title'
                    />
                    {formErrors.title && <span className="text-red-500 text-xs">{formErrors.title}</span>}
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className='mb-2 px-3 py-2 border rounded'
                        placeholder='Masukan Description'
                    />
                    {formErrors.description && <span className="text-red-500 text-xs">{formErrors.description}</span>}
                    <label>Link</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className='mb-2 px-3 py-2 border rounded'
                        placeholder='Masukan Link'
                    />
                    {formErrors.link && <span className="text-red-500 text-xs">{formErrors.link}</span>}
                    <label>Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleChange}
                        className='mb-2 px-3 py-2 border rounded'
                    />
                    {formErrors.file && <span className="text-red-500 text-xs">{formErrors.file}</span>}
                    <button type="submit" className="bg-blue-500 text-white rounded px-3 py-2">Upload</button>
                </form>
            </div>
        </div>
    );
}

export default FormCreateProject;
