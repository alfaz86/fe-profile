import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import PopupWarningProfile from "../Popups/PopupWarningProfile";

const FormCreate = ({ isFrom, handleClose }) => {
    const [WarningAlready, setWarningAlready] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        name: "",
        status: "",
        bio: "",
        file: null
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
                const formDataToSend = new FormData();
                formDataToSend.append("username", formData.username);
                formDataToSend.append("name", formData.name);
                formDataToSend.append("status", formData.status);
                formDataToSend.append("bio", formData.bio);
                formDataToSend.append("file", formData.file);

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`, {
                    method: 'POST',
                    body: formDataToSend
                });

                if (response.ok) {
                    console.log("Profile created successfully");
                    setFormData({
                        username: "",
                        name: "",
                        status: "",
                        bio: "",
                        file: null
                    });
                } else {
                    setWarningAlready(true);
                    setTimeout(() => {
                        setWarningAlready(false);
                    }, 2000);
                }
            } catch (error) {
                console.error("Error creating profile:");
            }
        }
    };


    return (
        <div className={isFrom ? 'bg-black bg-opacity-20 w-full h-100vh fixed flex justify-center items-center xl:p-80 mx:p-10 p-5' : 'hidden'}>
            <PopupWarningProfile isAlready={WarningAlready} />
            <div className="bg-white w-full rounded flex flex-col p-5">
                <div className="w-full flex flex-row justify-between">
                    <p className="text-xs text-gray-400">POST PROFILE</p>
                    <button onClick={handleClose} className="bg-red-500 text-white rounded p-1 text-xl hover:bg-red-600"><IoClose /></button>
                </div>
                <div>
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Username</label>
                            <input type="text" name="username" placeholder="Masukan username" className="border rounded px-3 py-2" value={formData.username} onChange={handleChange} />
                            {formErrors.username && <span className="text-red-500 text-xs">{formErrors.username}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Name</label>
                            <input type="text" name="name" placeholder="Masukan nama" className="border rounded px-3 py-2" value={formData.name} onChange={handleChange} />
                            {formErrors.name && <span className="text-red-500 text-xs">{formErrors.name}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Status</label>
                            <input type="text" name="status" placeholder="Masukan status" className="border rounded px-3 py-2" value={formData.status} onChange={handleChange} />
                            {formErrors.status && <span className="text-red-500 text-xs">{formErrors.status}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Bio</label>
                            <input type="text" name="bio" placeholder="Masukan bio" className="border rounded px-3 py-2" value={formData.bio} onChange={handleChange} />
                            {formErrors.bio && <span className="text-red-500 text-xs">{formErrors.bio}</span>}
                        </div>
                        <div className="flex flex-col text-xs">
                            <label className="text-gray-700 mb-1">Profil</label>
                            <input type="file" name="file" className="border rounded px-3 py-2" onChange={handleChange} />
                            {formErrors.file && <span className="text-red-500 text-xs">{formErrors.file}</span>}
                        </div>
                        <button type="submit" className="bg-blue-500 text-white rounded px-3 py-2">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormCreate;
