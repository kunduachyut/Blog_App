'use client'
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import HoverMenu from "@/Components/HoverMenu";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
    <HoverMenu/>
    <Header/>
    <BlogList/>
    <Footer/>
    </>
  );
}
