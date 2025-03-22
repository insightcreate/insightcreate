import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import JoinTagline from "./JoinTagline";
import axios from "axios"; // Added axios for API requests
import { toast } from "react-toastify";

const Join = ({ join, arrow_right, logodark, logo, whatsapp, email, call, socialIcons, insightcreate, insight, create, copy }) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resume: null, // Changed to null for file handling
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === "resume") {
            setFormData({ ...formData, resume: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate form fields
        if (!formData.name) {
            toast("Please add name");
            setLoading(false);
            return;
        }

        if (!formData.email) {
            toast("Please add email");
            setLoading(false);
            return;
        }

        if (!formData.resume) {
            toast("Please upload Resume/CV");
            setLoading(false);
            return;
        }

        // Prepare FormData to send file
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("resume", formData.resume);

        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const response = await axios.post(`${API_URL}/api/recruit`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast(response.data.message);
            setFormData({ name: "", email: "", resume: null });
        } catch (error) {
            toast(error.response?.data?.error || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative flex flex-col items-center text-center lg:py-10 md:py-10 py-6 px-6 bg-iccardpurple">
                <div className="w-full max-w-7xl mx-auto m-3">
                    <p className="text-icblack text-sm text-left">
                        <span className="bg-iclightdark p-2 rounded-xl">
                            <Link to={'/'}>Home</Link> / <span className="font-bold">Join Us</span>
                        </span>
                    </p>
                </div>

                <h1 className="lg:text-8xl md:text-5xl text-4xl font-bold text-icblack">
                    Collaborate<span className="text-iccardpink">.</span> Innovate<span className="text-iccardyellow">.</span> Create<span className="text-iccardgreen">.</span>
                </h1>

                <p className="text-icblack text-sm md:text-xl mt-4 max-w-8xl z-10 relative">
                    At InsightCreate, we believe in innovation, collaboration, and growth. Whether you're a passionate professional, an aspiring talent, or an industry expert, we offer exciting opportunities to learn, contribute, and excel.
                </p>
            </div>

            <div className="bg-icdark md:p-10 pt-10 pb-10 w-full flex flex-col items-center text-center">
                <p className="text-iclightdark text-4xl font-medium mb-4">Apply now and be part of our journey!</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iclightdark"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iclightdark"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            className="peer w-full bg-icwhite md:min-w-96 min-w-72 p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-iclightdark"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-icblack text-icwhite py-4 rounded-md text-lg border border-iccardpurple font-semibold transform hover:scale-110 transition-transform duration-500 cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Apply"}
                    </button>
                </form>

                <p className="text-iclightdark font-medium text-2xl md:text-2xl mt-4 max-w-2xl z-10 relative">
                    OR <br />
                    simply share your resume/CV at
                </p>

                <div className="md:flex md:space-x-4 mt-4 text-3xl text-icwhite z-10 relative">
                    <button className="bg-icblack min-w-60 md:m-0 m-4 justify-center text-icwhite px-4 py-3 rounded-md text-sm font-medium transform hover:scale-110 transition-transform duration-500 cursor-pointer flex items-center relative overflow-hidden"
                        onClick={() => window.location.href = "mailto:contact@insightcreate.com"}>
                        <img src={email} alt="Insight Create Email" className="h-4 w-4 mr-2" />
                        nayanshinde@insightcreate.com
                    </button>
                </div>
            </div>

            <JoinTagline />
            <Footer logodark={logodark} logo={logo} socialIcons={socialIcons} whatsapp={whatsapp} email={email} call={call} arrow_right={arrow_right} insightcreate={insightcreate} insight={insight} create={create} copy={copy} />
        </>
    );
};

export default Join;
