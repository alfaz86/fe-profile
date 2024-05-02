'use client'
import SectionBiodata from "@/components/Sections/SectionBiodata";
import Layout from "./post/layout";
import { useEffect, useState } from "react";
import SectionDevToll from "@/components/Sections/SectionDevToll";
import SectionProject from "@/components/Sections/SectionProject";
import Header from "@/components/Header/Header";
import SidebarMain from "@/components/Sidebar/SidebarMain";
import AOS from 'aos';
import Loading from "./loading";
import 'aos/dist/aos.css';

const Page = () => {
  const [Data, setData] = useState([]);
  const [dataProject, setDataProject] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isColors, setIsColors] = useState("#6100FF");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataContent, setDataContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/profile`);
        const responseProject = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`);
        const responseContent = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/content`);
        if (!response.ok && !responseProject.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json()
        const resultProject = await responseProject.json()
        const resultContent = await responseContent.json()
        const data = result.payload.data
        const dataProject = resultProject.payload.data
        setData(data);
        setDataProject(dataProject)
        setDataContent(resultContent.payload.data)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []);

  const handleToggleMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

  const handleColorChange = (color) => {
    setIsColors(color);
  }

  const nextProject = (nextImage) => {
    setCurrentPage(nextImage);
  };

  return (
    <Layout>
      <Header
        header={'main'}
        handleSidebar={() => setIsOpen(!isOpen)}
        isLightMode={isLightMode}
        setCollor={isColors} />
      <SidebarMain
        isOpen={isOpen}
        isLightMode={isLightMode}
        setCollor={isColors}
        onToggleMode={handleToggleMode}
        onColorChange={handleColorChange} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SectionBiodata
            data={Data}
            handleSidebar={() => setIsOpen(!isOpen)} isOpen={isOpen}
            isLightMode={isLightMode}
            setCollor={isColors}
            onToggleMode={handleToggleMode}
            onColorChange={handleColorChange}
          />
          <SectionDevToll data={dataContent} isLightMode={isLightMode} />
          <SectionProject
            dataContent={dataContent}
            data={dataProject}
            isLightMode={isLightMode}
            setCollor={isColors}
            currentPage={currentPage}
            changePage={nextProject} />
        </>
      )}
    </Layout>
  );
}

export default Page
