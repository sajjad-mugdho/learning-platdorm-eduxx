import React from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const CourseDetails = () => {
    const courses = useLoaderData();
    const { id, name, details, img, price } = courses;

    // Download page as a PDF
    const exportPDF = () => {
        const input = document.getElementById('htmlToPdf');
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img / png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("eduxxx.pdf")
        })
    }
    return (
        <div id='htmlToPdf' className="card w-100 glass">
            <button onClick={() => exportPDF()} className='btn btn-outline w-[200px] my-5 mx-auto '>DownLoad PDF <FaFilePdf></FaFilePdf></button>
            <figure><img className='rounded-lg mt-5' src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p className='font-semibold '>Price: <span className='text-orange-500'>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/checkout/${id}`}>Get Premium Access</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;