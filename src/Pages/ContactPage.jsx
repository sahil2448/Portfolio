export const ContactPage = () => {
  return (
    <div className="contact-form-container min-h-screen flex flex-col justify-center items-center py-16 px-4">
      <h1 className="relative text-5xl font-bold text-center font-heading    bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
        Contact me{" "}
      </h1>
      <div className="w-full max-w-2xl py-12">
        <form
          style={{ backgroundColor: "rgba(4, 50, 86, 0.521)" }}
          className="contact-form rounded-xl shadow-lg p-8 border border-white/20 "
        >
          <div className="space-y-6">
            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500  focus:border-transparent transition-all duration-200 outline-none"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500  focus:border-transparent transition-all duration-200 outline-none"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="Your Contact Number"
              />
            </div>

            <div className="form-group">
              <input
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500  focus:border-transparent transition-all duration-200 outline-none"
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject Of Messeging"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                className="w-full p-3 rounded-lg border border-white/40 focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 outline-none resize-vertical"
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message Goes Here..."
                required
                style={{ backgroundColor: "rgba(7, 26, 47, 0.878)" }}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
