import React from 'react';
import Alert from '../ui/Alert'

function ContactForm({ form, handleChange, handleSubmit, errors, captcha, children, validated }) {
    const inputStyle = 'mt-1 focus:ring-greyBlue focus:border-greyBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
    const textStyle = 'shadow-sm focus:ring-greyBlue focus:border-greyBlue mt-1 block w-full sm:text-sm border border-gray-300 rounded-md'

    return (

        <div className="md:grid md:grid-cols-1 md:gap-6 bg-white rounded">
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="pt-2 px-4">
                            {errors.error ? <Alert message={errors.message} type='fail' /> : null}
                        </div>
                        <div className="px-1 pt-1 pb-5 bg-white space-y-6 sm:p-6">

                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input type="text" name="first_name" id="first_name" value={form.first_name} required onChange={handleChange} autoComplete="given-name"
                                            className={`${validated && !form.first_name ? `border border-red-400  ${inputStyle}` : `${inputStyle}`} `} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input type="text" name="last_name" id="last_name" value={form.last_name} required onChange={handleChange} autoComplete="family-name"
                                            className={`${validated && !form.last_name ? `border border-red-400  ${inputStyle}` : `${inputStyle}`} `} />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input type="text" name="user_email" id="user_email" value={form.user_email} required onChange={handleChange} autoComplete="email"
                                            className={`${validated && !form.user_email ? `border border-red-400  ${inputStyle}` : `${inputStyle}`} `} />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input type="text" name="subject" id="subject" value={form.subject} required onChange={handleChange} autoComplete="email-subject"
                                            className={`${validated && !form.subject ? `border border-red-400  ${inputStyle}` : `${inputStyle}`} `} />
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                            Message
                                        </label>
                                        <div className="mt-1">
                                            <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5"
                                                className={`${validated && !form.message ? `border border-red-400  ${textStyle}` : `${textStyle}`} `} placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {children}
                        </div>
                        <div className="text-center sm:px-6">
                            {!captcha.captcha && !captcha.loading ? <span className=''>Fill out captcha</span> : null}
                            {captcha.loading ? <span className=''>Validating Captcha</span> : null}
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button type="submit" className="bg-greyBlue inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-greyBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greyBlue">
                                Send
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;