import { Header } from "@/components/common/Header";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { headerData, footerData } from "@/data";

export const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header {...headerData} />
            <Navbar />
            <div className="container mx-auto px-4 py-8 mt-16 md:mt-0">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-dealership-navy mb-8">About Us</h1>

                    <div className="prose prose-lg">
                        <p className="text-gray-600 mb-6">
                            Welcome to our marketplace platform, where we connect buyers and sellers in a seamless and efficient way.
                            Our mission is to provide a trusted and user-friendly platform for all your buying and selling needs.
                        </p>

                        <h2 className="text-2xl font-semibold text-dealership-navy mt-8 mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-6">
                            Founded with a vision to revolutionize online marketplaces, we've grown from a small startup to a
                            comprehensive platform serving thousands of users daily. Our commitment to quality, security, and
                            user satisfaction drives everything we do.
                        </p>

                        <h2 className="text-2xl font-semibold text-dealership-navy mt-8 mb-4">What We Offer</h2>
                        <ul className="list-disc pl-6 text-gray-600 mb-6">
                            <li className="mb-2">Wide range of categories and listings</li>
                            <li className="mb-2">Secure and easy-to-use platform</li>
                            <li className="mb-2">Verified sellers and quality products</li>
                            <li className="mb-2">24/7 customer support</li>
                            <li className="mb-2">Advanced search and filtering options</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-dealership-navy mt-8 mb-4">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-dealership-navy mb-2">Trust & Security</h3>
                                <p className="text-gray-600">
                                    We prioritize the security of our users and their transactions, implementing
                                    robust verification systems and secure payment methods.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-dealership-navy mb-2">User Experience</h3>
                                <p className="text-gray-600">
                                    Our platform is designed with users in mind, offering an intuitive interface
                                    and seamless navigation for both buyers and sellers.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-dealership-navy mb-2">Quality Assurance</h3>
                                <p className="text-gray-600">
                                    We maintain high standards for listings and sellers, ensuring that our users
                                    have access to quality products and services.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold text-dealership-navy mb-2">Community Focus</h3>
                                <p className="text-gray-600">
                                    We believe in building a strong community of users who can trust and rely on
                                    each other for their buying and selling needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer {...footerData} />
        </div>
    );
}; 