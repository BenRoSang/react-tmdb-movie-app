import { ArrowLeft, CheckCircle } from 'lucide-react';
import React from 'react'
import { Form, Link, useActionData, useNavigation } from 'react-router'

function ContactUs() {

  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  if(actionData?.success) {
    return (
      <div className='max-w-md mx-auto py-20 text-center animate-in fade-in zoom-in duration-100'>
        <div className='flex justify-center mb-6'>
          <div className='bg-green-500/10 p-6 rounded-full'>
            <CheckCircle size={80} className='text-green-500' />
          </div>
        </div>

        <h1 className='text-3xl font-bold text-white mb-4'>Message Received!</h1>
        <p className='text-slate-400 mb-8 leading-relaxed'>
          Thank you for reaching out. Our team has received your email and we will get back to you within 24 hours.
        </p>
        <Link to='/' className='inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl transition-all'>
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className='text-4xl font-bold'>Contact Us</h1>
      <p className='leading-7 my-5'>Have a question, suggestion, or need support? We'd love to hear from you. <br/>
       Fill out the form below and we'll get back to you as soon as possible.</p>
       
       <div className="max-w-xl mx-auto p-8 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl">
      <Form method="post" className="space-y-5">
        
        {/* Name Field */}
        <div>
          <label className="block text-sm mb-2 text-slate-400">Name</label>
          <input name="name" type="text" className="contact-input w-full h-10 px-4 border border-slate-200 rounded-2xl" placeholder='Your full name' />
          {actionData?.errors?.name && (
            <p className="text-red-500 text-xs mt-1">{actionData.errors.name[0]}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm mb-2 text-slate-400">Email</label>
          <input name="email" type="email" className="contact-input w-full h-10 px-4 border border-slate-200 rounded-2xl" placeholder='your.email@exmaple.com' />
          {actionData?.errors?.email && (
            <p className="text-red-500 text-xs mt-1">{actionData.errors.email[0]}</p>
          )}
        </div>
        {/* Subject Field */}
        <div>
          <label className='block text-sm mb-2 text-slate-400'>Subject</label>
          <input type="text" className='w-full h-10 px-4 border border-slate-200 rounded-2xl' name='subject' placeholder='What is this about?' />
          {actionData?.errors?.subject && (
            <p className="text-red-500 text-xs mt-1">{actionData.errors.subject[0]}</p>
          )}
        </div>
        {/* Message Field */}
        <div>
          <label htmlFor='message' className='block text-sm mb-2 text-slate-400'>Message</label>
          <textarea name="message" id="message" className='w-full h-20 px-4 py-2 border border-slate-200 rounded-2xl' placeholder='Tell us more about your inquery...'></textarea>
          { actionData?.errors?.message && (
            <p className='text-red-500 text-xs mt-1'>{actionData.errors.message[0]}</p>
          )}
        </div>

        {/* ... (Repeat for Subject and Message) ... */}

        <button 
          disabled={isSubmitting}
          className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* {actionData?.success && <p className="text-green-400 text-center">Message Sent!</p>} */}
      </Form>
    </div>
    </div>
  )
}

export default ContactUs