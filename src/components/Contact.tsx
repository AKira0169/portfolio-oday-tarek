import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

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
      className="justify-center-100 flex h-screen items-center px-6"
      id="contact"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800">Contact Me</h2>
        <p className="text-sm text-gray-500">
          I'd love to hear from you! Please fill out the form below.
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            {...register("name", { required: true })}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            {...register("subject", { required: true })}
          />
          <textarea
            placeholder="Your Message"
            className="h-32 w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            {...register("message", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-hidden"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
