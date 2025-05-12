'use client'
import { submitQueryForm } from '@/actions/mail.actions'
import React, { useState } from 'react'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Initialize SweetAlert with React content
const MySwal = withReactContent(Swal)

interface QueryformProps {
    modal?: boolean
    onClose?: () => void
}

export default function Queryform({ modal = false, onClose }: QueryformProps) {

    const [loading, setLoading] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)

        try {
            // Create a plain object from form data
            const formData = new FormData(formRef.current as HTMLFormElement)
            const formEntries = Array.from(formData.entries());
            
            // Create a simple object with primitive values only
            const data = formEntries.reduce((acc: Record<string, string | number>, [key, value]) => {
                if (typeof value === 'string') {
                    acc[key] = value;
                } else if (value instanceof File) {
                    // Handle file objects if needed
                    acc[key] = value.name;
                }
                return acc;
            }, {});
            
            console.log('Sending form data:', data);
            
            const response = await submitQueryForm(data);
            console.log('Response:', response);

            if (response.success) {
                setSubmitted(true)
                formRef.current?.reset()

                // Show success message
                MySwal.fire({
                    title: 'Success!',
                    text: 'We have recorded your query and our team will contact you shortly.',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#10B981'
                })
            } else {
                // Show error message
                MySwal.fire({
                    title: 'Error!',
                    text: response.message || 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#EF4444'
                })
            }
        } catch (error) {
            console.error('Form submission error:', error)

            // Show error message
            MySwal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#EF4444'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`bg-white w-full max-w-[500px] self-stretch min-[707px]:self-center ${!modal && 'min-[1100px]:max-w-1/2'} p-4 min-[415px]:p-6 min-[490px]:p-8 rounded-xl flex flex-col`}>
            {!submitted ? (
                <>
                    <h1 className='text-brand-secondary text-2xl font-bold mb-2 text-center'>Get Umrah Quote</h1>
                    <p className='text-brand-secondary-800 text-base font-medium text-center'>We will contact you via whatsapp or email within a few minutes.</p>
                    <form onSubmit={handleSubmit} ref={formRef} className='mt-10 flex flex-col'>
                        {/* form content wrapper */}
                        <div>
                            <div className='flex flex-col gap-y-6 text-base'>
                                <div>
                                    <input required type="text" name='name' placeholder='Passenger Name' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                </div>
                                <div>
                                    <input required type="tel" name='phone' placeholder='Contact Number' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                </div>
                                <div>
                                    <input required type="email" name='email' placeholder='Email Address' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                </div>
                                <div>
                                    <input required type="number" min={1} max={20} name='passengers' placeholder='Total Number of Passengers' className='rounded border border-gray-300 px-5 py-3 w-full' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 mt-4.5'>
                                <input required type="checkbox" name='privacy_policy_check' id='privacy_policy_checkbox' className='size-[20px]' />
                                <label htmlFor="privacy_policy_checkbox" className='text-sm text-gray-500'>I accept the <span className='text-brand-primary font-semibold'>Privacy Policy</span></label>
                            </div>
                            <button
                                type='submit'
                                disabled={loading}
                                className='btn-secondary-mixed text-xl w-full mt-7 relative'
                            >
                                {loading ? (
                                    <>
                                        <span className="opacity-0">Send Inquiry</span>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    </>
                                ) : 'Send Inquiry'}
                            </button>
                        </div>
                    </form>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-brand-secondary mb-2 text-center">Thank You!</h2>
                    <p className="text-center text-gray-600 mb-6">
                        We have recorded your query and our team will contact you shortly via WhatsApp or Email.
                    </p>
                    {modal && onClose && (
                        <button
                            onClick={onClose}
                            className="btn-secondary-mixed px-6 py-2"
                        >
                            Close
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}
