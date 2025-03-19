"use client";
import { useState } from 'react';
import ButtonCustom from './ui/button-custom';

type FormData = {
    email: string;
    contactNumber: string;
    companyName: string;
    companySize: string;
    productTypes: string[];
    businessType: string;
    city: string;
    state: string;
    message: string;
}

const productOptions = [
    'Solar Panels Systems',
    'EV Charging Systems', 
    'Energy Storage & Batteries',
    'HVAC Systems',
    'Solar Heaters',
    'Smart Energy',
    'Devices'
];

const businessOptions = [
    'Door to Door',
    'Phone Calls',
    'Emails'
];

type InquiryFormProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export default function InquiryForm({ isOpen, setIsOpen }: InquiryFormProps) {
    const [errors, setErrors] = useState<{
        email?: string;
        contactNumber?: string;
        companyName?: string;
        companySize?: string;
        productTypes?: string;
        businessType?: string;
        city?: string;
        state?: string;
        message?: string;
    }>({});
    const [formData, setFormData] = useState<FormData>({
        email: '',
        contactNumber: '',
        companyName: '',
        companySize: '',
        productTypes: [],
        businessType: '',
        city: '',
        state: '',
        message: ''
    });

    const validateForm = () => {
        const newErrors: {
            email?: string;
            contactNumber?: string;
            companyName?: string;
            companySize?: string;
            productTypes?: string;
            businessType?: string;
            city?: string;
            state?: string;
            message?: string;
        } = {};
        
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
        if (!formData.companyName) newErrors.companyName = 'Company name is required';
        if (!formData.companySize) newErrors.companySize = 'Company size is required';
        if (formData.productTypes.length === 0) newErrors.productTypes = 'Select at least one product';
        if (!formData.businessType) newErrors.businessType = 'Business type is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/inquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }

                // Reset form data
                setFormData({
                    email: '',
                    contactNumber: '',
                    companyName: '',
                    companySize: '',
                    productTypes: [],
                    businessType: '',
                    city: '',
                    state: '',
                    message: ''
                });

                // Show success message
                alert('Thank you for your inquiry! We will get back to you soon.');
                setIsOpen(false);
            } catch (error) {
                // Show error message
                alert('Failed to submit form. Please try again later.');
                console.error('Form submission error:', error);
            }
        }
    };

    const handleProductChange = (product: string) => {
        setFormData(prev => ({
            ...prev,
            productTypes: prev.productTypes.includes(product)
                ? prev.productTypes.filter(p => p !== product)
                : [...prev.productTypes, product]
        }));
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-4 max-w-xl w-full max-h-[90vh] overflow-hidden">
                        <div className="flex justify-between items-center mb-4 sticky top-0 bg-gradient-to-br from-white to-blue-50 py-2 z-10 border-b border-blue-100">
                            <h2 className="text-2xl font-bold text-[#21606A]">Inquiry Form</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">
                                ✕
                            </button>
                        </div>

                        <div className="max-h-[80vh] overflow-y-auto hide-scrollbar">
                            <form action="https://formsubmit.co/team@climateforge.ai" method="POST" className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">Email</label>
                                    <div className="w-3/4">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.email ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">Contact Number</label>
                                    <div className="w-3/4">
                                        <input
                                            type="tel"
                                            name="contactNumber"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.contactNumber ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.contactNumber}
                                            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                                        />
                                        {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">Company Name</label>
                                    <div className="w-3/4">
                                        <input
                                            type="text"
                                            name="companyName"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.companyName ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.companyName}
                                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                        />
                                        {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">Company Size</label>
                                    <div className="w-3/4">
                                        <input
                                            type="number"
                                            name="companySize"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.companySize ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.companySize}
                                            onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                                        />
                                        {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">Products you sell</label>
                                    <div className="w-3/4">
                                        <div className={`space-y-2 p-2 border rounded-md ${errors.productTypes ? 'border-red-500' : 'border-blue-200'}`}>
                                            {productOptions.map((product) => (
                                                <div key={product} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        name="productTypes"
                                                        value={product}
                                                        checked={formData.productTypes.includes(product)}
                                                        onChange={() => handleProductChange(product)}
                                                        className="mr-2 text-blue-600"
                                                    />
                                                    <label htmlFor={product} className="text-sm text-gray-600">{product}</label>
                                                </div>
                                            ))}
                                        </div>
                                        {errors.productTypes && <p className="text-red-500 text-xs mt-1">{errors.productTypes}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">What is Your Main Business?</label>
                                    <div className="w-3/4">
                                        <select
                                            name="businessType"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.businessType ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.businessType}
                                            onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                                        >
                                            <option value="" className="text-xs">Select business type</option>
                                            {businessOptions.map((option) => (
                                                <option key={option} value={option} className="text-xs">{option}</option>
                                            ))}
                                        </select>
                                        {errors.businessType && <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">City</label>
                                    <div className="w-3/4">
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.city ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.city}
                                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                                        />
                                        {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700">State</label>
                                    <div className="w-3/4">
                                        <input
                                            type="text"
                                            name="state"
                                            required
                                            className={`w-full p-1 border rounded-md text-sm ${errors.state ? 'border-red-500' : 'border-blue-200'}`}
                                            value={formData.state}
                                            onChange={(e) => setFormData({...formData, state: e.target.value})}
                                        />
                                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <label className="w-1/4 text-sm font-medium text-gray-700 pt-2">Message</label>
                                    <div className="w-3/4">
                                        <textarea
                                            name="message"
                                            className="w-full p-1 border border-blue-200 rounded-md"
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 pt-3 pb-6">
                                    <ButtonCustom variant="outline" onClick={() => setIsOpen(false)}>
                                        Cancel
                                    </ButtonCustom>
                                    <ButtonCustom type="submit">
                                        Submit
                                    </ButtonCustom>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}