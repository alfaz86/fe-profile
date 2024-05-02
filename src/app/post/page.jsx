'use client'
import SectionPost from '@/components/Sections/SectionPost';
import Layout from './layout';
import { useEffect, useState } from 'react';
import PopupDetailProject from '@/components/Popups/PopupDetailProject';
import FormCreate from '@/components/Forms/FormCreate';
import PopupDetailProfile from '@/components/Popups/PopupDetailProfile';
import FormCreateContent from '@/components/Forms/FromCreateContent';
import FormCreateProject from '@/components/Forms/FormCreateProject';

const Page = () => {
    const [isForm, setIsForm] = useState(false);
    const [isFormContent, setIsFormContent] = useState(false);
    const [isFormProject, setIsFormProject] = useState(false);
    const [isPopup, setIsPopup] = useState(false);
    const [isPopupProfile, setIsPopupProfile] = useState(false);
    const [data, setData] = useState([]);
    const [dataProject, setDataProject] = useState([]);
    const [dataContent, setDataContent] = useState([]);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [dataProjectById, setDataProjectById] = useState(null);
    const [selectedProfileId, setSelectedProfileId] = useState(null);
    const [dataProfileById, setDataProfileById] = useState(null);
    const [activeTab, setActiveTab] = useState("Profil Bio");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const thead = [
        { key: 'username', label: 'Username' },
        { key: 'name', label: 'Name' },
        { key: 'status', label: 'Status' },
        { key: 'bio', label: 'Bio' },
        { key: 'button-view', label: 'Actions' }
    ];
    const theadProject = [
        { key: 'index', label: 'No' },
        { key: 'title', label: 'Title' },
        { key: 'description', label: 'Description' },
        { key: 'link', label: 'Link' },
        { key: 'button-view', label: 'Actions' },
    ];

    const theadContent = [
        { key: 'devTitle', label: 'Title' },
        { key: 'devtools', label: 'Description' },
        { key: 'projectTitle', label: 'Title' },
        { key: 'project', label: 'Description' },
        { key: 'button-view', label: 'Actions' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`);
                const responseProject = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
                const responsecontent = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/content`);
                if (!response.ok || !responseProject.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                const resultProject = await responseProject.json();
                const resultContent = await responsecontent.json();
                setData(result.payload.data);
                setDataProject(resultProject.payload.data);
                setDataContent(resultContent.payload.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchDataProjectById = async () => {
            try {
                if (selectedProjectId) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${selectedProjectId}`);
                    if (response.ok) {
                        const result = await response.json();
                        setDataProjectById(result.payload.data);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        const fetchDataProfileById = async () => {
            try {
                if (selectedProfileId) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile/${selectedProfileId}`);
                    if (response.ok) {
                        const result = await response.json();
                        setDataProfileById(result.payload.data)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchDataProfileById()
        fetchDataProjectById();
    }, [selectedProjectId, selectedProfileId]);

    const handleOpenDetail = (id) => {
        if (activeTab === 'Project') {
            setIsPopup(!isPopup);
            setSelectedProjectId(id);
        }
        if (activeTab === 'Profil Bio') {
            setIsPopupProfile(!isPopupProfile)
            setSelectedProfileId(id)
        }
        if (activeTab === 'Content') {

        }
    }
    const handleDeleteProfile = async (id) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log('Profile deleted successfully');
                setIsPopupProfile(!isPopupProfile)
                setIsForm(!isForm)
            } else {
                console.error('Failed to delete profile');
            }
        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    }

    const handleDeleteProject = async (id) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log('Project deleted successfully');
                setIsPopup(!isPopup)
            } else {
                console.error('Failed to delete profile');
            }
        } catch (error) {
            console.error('Error deleting profile:', error);
        }
    }

    return (
        <Layout>
            <PopupDetailProject
                data={dataProjectById}
                isPopup={isPopup}
                handleClose={() => setIsPopup(!isPopup)}
                handleDeleteProject={handleDeleteProject} />
            <PopupDetailProfile
                data={dataProfileById}
                isPopupProfile={isPopupProfile}
                handleClose={() => setIsPopupProfile(false)}
                handleDeleteProfile={handleDeleteProfile} />
            <SectionPost
                handleTabClick={handleTabClick}
                activeTab={activeTab}
                handleCreateContent={() => setIsFormContent(!isFormContent)}
                handleCreate={() => setIsForm(!isForm)}
                columns={thead}
                data={data}
                columnsContent={theadContent}
                dataContent={dataContent}
                columnsProject={theadProject}
                dataProject={dataProject}
                handleViewDetail={handleOpenDetail}
                handleCreateProject={()=> setIsFormProject(!isFormProject)}
            />
            <FormCreateContent isFormContent={isFormContent} handleClose={() => setIsFormContent(!isFormContent)} />
            <FormCreateProject isCreateProject={isFormProject} handleClose={() => setIsFormProject(!isFormProject)} />
            <FormCreate isFrom={isForm} handleClose={() => setIsForm(!isForm)} />
        </Layout>
    );
};

export default Page;
