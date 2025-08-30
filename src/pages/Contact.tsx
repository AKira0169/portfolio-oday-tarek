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
      id="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      viewport={{ amount: 0.2, once: true }}
      className="py-12"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl space-y-2 text-center"
      >
        <h2 className="font-heading text-4xl md:text-6xl">Contact Me</h2>
        <p className="text-gray-600">
          I'd love to hear from you! Let's discuss how we can work together on
          your next project.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mx-auto mt-10 grid max-w-5xl gap-8 px-6 md:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600">
            Reach out through any of these channels. I'm always open to new
            projects, ideas, or collaborations.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-red-500">
                <MdEmail className="text-xl text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <a
                  href="mailto:odaytarek62@gmail.com"
                  className="text-amber-600 hover:text-amber-700"
                >
                  odaytarek62@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-red-500">
                <FaPhone className="rotate-90 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Phone / WhatsApp
                </h4>
                <a
                  href="tel:+201143776030"
                  className="block text-amber-600 hover:text-amber-700"
                >
                  +20 114 377 6030
                </a>
                <a
                  href="https://wa.me/201143776030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-600 hover:text-amber-700"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4 rounded-lg bg-white p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              {...register("name", { required: true })}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              {...register("subject", { required: true })}
            />
            <textarea
              placeholder="Your Message"
              className="h-32 w-full rounded-lg border border-gray-300 p-3 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              {...register("message", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Collaboration Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-4xl rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 p-6 text-center shadow-md"
      >
        <h3 className="mb-3 text-xl font-bold text-gray-800">
          Looking for Collaboration?
        </h3>
        <p className="mb-5 text-gray-600">
          I'm always interested in exciting projects. Let's discuss how I can
          help bring your ideas to life.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
        >
          Start a Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
