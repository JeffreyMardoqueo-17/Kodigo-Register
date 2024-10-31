"use client";
import React from 'react';
import BlogCard from '@/components/BlogCard';
import StatsCard from '@/components/StatsCard';
import TestimonialCard from '@/components/TestimonialCard';
import { FaUser, FaTrophy, FaLaptop, FaRocket } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800 min-h-screen p-8 w-full">
        {/* Hero Section */}
        <section className="w-full  mb-3 mx-auto min-h-screen p-8 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 bg-gradient-to-r from-purple-700 via-purple-800 to-orange-500 text-white">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold ">
              Transforma tu pasión <br />
              <span className="text-white shadow-lg text-7xl lg:text-8xl">en tu profesión</span>
            </h1>
            <p className="text-lg lg:text-2xl text-gray-200 max-w-md lg:max-w-lg">
              Estudia una carrera tecnológica y descubre tu potencial para <span className="text-orange-300 font-semibold">rekodificar</span> el futuro.
            </p>
            <button className="bg-white text-purple-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition duration-200 text-lg lg:text-xl">
              Aplica
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:w-1/2">
            <img src="https://st2.depositphotos.com/1017228/9855/i/450/depositphotos_98555688-stock-photo-thoughtful-programmer-coding-in-the.jpg" alt="Tech Career" className="w-full h-44 lg:h-52 object-cover rounded-lg shadow-lg" />
            <img src="https://st3.depositphotos.com/5392356/14145/i/450/depositphotos_141456724-stock-photo-business-people-in-office.jpg" alt="Tech Career" className="w-full h-44 lg:h-52 object-cover rounded-lg shadow-lg" />
            <img src="https://www.azulweb.net/wp-content/uploads/2020/01/aprende-a-programar.png" alt="Tech Career" className="w-full h-44 lg:h-52 object-cover rounded-lg shadow-lg" />
            <img src="https://img.freepik.com/fotos-premium/gente-negocios-reunida-planificando-lluvia-ideas-estrategica-o-programando-sala-juntas-grupo-trabajadores-empleados-compartiendo-ideas-plan-proyecto-discusion-equipo-o-colaboracion-oficina_590464-158797.jpg" alt="Tech Career" className="w-full h-44 lg:h-52 object-cover rounded-lg shadow-lg" />
          </div>
        </section>


        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
          <StatsCard icon={<FaUser />} value="4 MILLONES" label="DE VACANTES EN TECNOLOGÍA PARA 2030" />
          <StatsCard icon={<FaTrophy />} value="70%" label="EMPLEADOS EN COMPAÑÍAS TOP TECH" />
          <StatsCard icon={<FaLaptop />} value="67%" label="DE NUEVOS EMPLEOS EN TECNOLOGÍA" />
          <StatsCard icon={<FaRocket />} value="40%" label="MÁS DE INGRESOS PROMEDIO" />
        </section>

        {/* Blog Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Nuestro Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BlogCard
              image="https://st2.depositphotos.com/1017228/9855/i/450/depositphotos_98555688-stock-photo-thoughtful-programmer-coding-in-the.jpg"
              title="¿Tu código tiene un error? Consejos para solucionarlo"
              excerpt="No te preocupes si tu código falla. ¡Los errores son parte de la aventura de programar!"
            />
            <BlogCard
              image="https://innovacioneducativa.upc.edu.pe/wp-content/uploads/2021/01/shutterstock_1404621860-1170x532.jpg"
              title="Python: El lenguaje de programación que todos están usando"
              excerpt="Python es un lenguaje popular entre desarrolladores y analistas de datos."
            />
            <BlogCard
              image="https://dplnews.com/wp-content/uploads/2019/12/dplnews_mujeresprogramadoras_vr131219.jpg"
              title="Lenguajes de Programación Favoritos en 2024"
              excerpt="El panorama de lenguajes de programación en 2024 sigue mostrando a JavaScript como líder."
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Testimonios de Nuestros Estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              image="https://www.zonadeobras.com/wp-content/uploads/2023/08/karl-750.jpg"
              name="Kevin Kark"
              position="Full Stack Jr"
              videoLink="#"
            />
            <TestimonialCard
              image="https://bogota.gov.co/sites/default/files/inline-images/ana-perez.jpg"
              name="Ana Pérez"
              position="Data Analyst"
              videoLink="#"
            />
            <TestimonialCard
              image="https://techsenati.edu.pe/wp-content/uploads/2022/06/Luis-E.-Garcia-S.jpg"
              name="Luis García"
              position="Backend Developer"
              videoLink="#"
            />
          </div>
        </section>
      </div>
    </>

  );
}
