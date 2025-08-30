import { motion } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import { ExternalLink } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("access_key", "a6952fe5-f7d1-49d6-b87d-353577265bac");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      }}
      viewport={{ amount: 0.1 }}
      className="relative min-h-screen py-12 md:py-24"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
        >
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-[85rem] leading-normal sm:text-lg sm:leading-7">
            I'd love to hear from you! Let's discuss how we can work together on
            your next project.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
            <p className="text-gray-600">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-red-500">
                  <MdEmail className="text-xl text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-amber-600 hover:text-amber-700"
                  >
                    odaytarek62@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-red-500">
                  <FaPhone className="rotate-90 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Phone / WhatsApp
                  </h4>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="tel:+201143776030"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      +20 114 377 6030
                    </a>
                    <a
                      href="https://wa.me/201143776030"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-600 hover:text-amber-700"
                    >
                      <FaWhatsapp /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-6 rounded-lg bg-white p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
            <p className="text-sm text-gray-500">
              Please fill out the form below and I'll get back to you as soon as
              possible.
            </p>
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                {...register("subject", { required: true })}
              />
              <textarea
                placeholder="Your Message"
                className="h-32 w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 transition-all duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                {...register("message", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 hover:shadow-xl focus:ring-2 focus:ring-amber-500 focus:ring-offset-1 focus:outline-none"
            >
              Send Message
            </button>
          </motion.form>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-8 shadow-lg"
        >
          <h3 className="mb-4 text-xl font-bold text-gray-800">
            Looking for Project Collaboration?
          </h3>
          <p className="mb-6 text-gray-600">
            I'm always interested in exciting projects. Whether you need a
            complete web application, API development, or frontend
            implementation, let's discuss how I can help bring your ideas to
            life.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start a Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
