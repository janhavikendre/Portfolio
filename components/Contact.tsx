"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm({...form, [name]: value})
  }

  // service_oz5bdhx

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send('service_oz5bdhx', 'template_9f91ugl', {
      from_name: form.name,
      to_name: 'Janhavi kendre',
      from_email: form.email,
      to_email: 'janhavikendre717@gmail.com',
      message: form.message
    }, "pllWBoO2jNL6TLNYr"
  );

    setLoading(false);

    alert('Message sent successfully')

    } catch (error) {
      setLoading(false);
      console.log(error)

      alert('An error occured. Please try again later')
    }

    
  }


  return (
    <section id='contact' className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="relative mx-auto max-w-3xl">
          {/* Animated gradient border */}
          <div className="absolute -inset-[2px] rounded-lg outline-dashed opacity-75 blur-sm transition-all animate-gradient-xy"></div>

          {/* Content container */}
          <div className="relative rounded-lg bg-black p-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
                  Contact
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out to me via email or the contact form below. I&apos;m always excited to connect and collaborate!
                </p>
                <p className="text-blue-400 hover:text-blue-300">
                  <a href="mailto:janhavikendre717@gmail.com">janhavikendre717@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-[600px] mt-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit} 
              className="space-y-6">
                <div className="space-y-2">
                  <input
                    type='text'
                    placeholder="Name"
                    name='name'
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={form.name}
                  onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <textarea
                    placeholder="Message"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]"
                  />
                </div>
                <div className='flex justify-center items-center'>
                <button 
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type='submit'
                disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
    
    </button>
    </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
