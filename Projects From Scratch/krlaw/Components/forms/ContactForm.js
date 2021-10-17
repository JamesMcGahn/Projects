import React from 'react';

function ContactForm(props) {
    return (
        <div>
            <div className="md:grid md:grid-cols-1 md:gap-6 bg-offWhite rounded">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 focus:ring-greyBlue focus:border-greyBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-greyBlue focus:border-greyBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-greyBlue focus:border-greyBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="email-subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                            <input type="text" name="email-subject" id="email-subject" autoComplete="email-subject" className="mt-1 focus:ring-greyBlue focus:border-greyBlue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                        </div>
                                        <div className="col-span-6">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Message
                                            </label>
                                            <div className="mt-1">
                                                <textarea id="about" name="about" rows="5" className="shadow-sm focus:ring-greyBlue focus:border-greyBlue mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="px-4 py-3 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md hover:bg-greyBlue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greyBlue">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;