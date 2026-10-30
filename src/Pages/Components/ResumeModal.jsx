import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import {
  FaFileDownload,
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaAlignLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const ResumeModal = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  // Open / close the native dialog based on the isOpen prop
  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Sync state when the dialog closes natively (Escape key / backdrop click)
  useEffect(() => {
    const dialog = dialogRef.current;
    const handleDialogClose = () => {
      setSent(false);
      setError(null);
      onClose();
    };
    dialog.addEventListener("close", handleDialogClose);
    return () => dialog.removeEventListener("close", handleDialogClose);
  }, [onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSent(false);
    setIsSending(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      company_name: formData.company,
      purpose: formData.purpose,
      subject: `Resume Download Request from ${formData.name}`,
      message: [
        "A visitor has requested your resume.",
        "",
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company || "Not provided"}`,
        `Purpose: ${formData.purpose}`,
        "",
        "Please review this request and send the resume if you approve.",
      ].join("\n"),
    };

    try {
      await emailjs.send(
        "service_j1ctd4i",
        "template_p8fz13h",
        templateParams,
        "QgX-s_IwezohJE97p",
      );
      setSent(true);
      setFormData({ name: "", email: "", company: "", purpose: "" });
    } catch {
      setError(
        "Something went wrong while sending your request. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
      className="modal w-full h-full justify-center items-center m-0 p-0 bg-transparent"
    >
      <style>{`
        @keyframes modalPopIn {
          0% { opacity: 0; transform: scale(0.85) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-card {
          animation: modalPopIn 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes fieldFadeIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-field {
          opacity: 0;
          animation: fieldFadeIn 0.4s ease-out forwards;
        }
      `}</style>

      <div className="w-[92vw] sm:w-[85vw] md:w-[65vw] lg:w-[45vw] xl:w-[40vw] max-w-[560px] max-h-[88vh] overflow-y-auto rounded-2xl border border-violet-500/30 shadow-2xl shadow-violet-900/50 bg-[#071A2C]/95 backdrop-blur-xl p-5 sm:p-7 md:p-8 animate-modal-card">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg shadow-violet-700/40">
              <FaFileDownload className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Request My Resume
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Fill in your details and I will get back to you
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-white hover:bg-violet-500/20 hover:scale-110 transition-all duration-200 shrink-0"
          >
            <FaXmark className="w-5 h-5" />
          </button>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-lg bg-red-500/15 border border-red-500/40 flex items-center justify-between gap-3 animate-field">
            <span className="text-red-300 text-xs sm:text-sm font-medium">
              {error}
            </span>
            <button
              type="button"
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-200 transition-colors shrink-0"
              aria-label="Dismiss error"
            >
              <FaXmark className="w-4 h-4" />
            </button>
          </div>
        )}

        {sent ? (
          /* ---------- Success State ---------- */
          <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 animate-field">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500/15 border-2 border-emerald-500/50 flex items-center justify-center mb-4 sm:mb-5">
              <FaCheckCircle className="text-emerald-400 w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2">
              Request Sent Successfully!
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm leading-relaxed">
              Your details have been received. If approved, the resume will be
              sent to{" "}
              <span className="text-violet-400 font-semibold">
                {formData.email}
              </span>
              .
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:opacity-90 hover:scale-105 transition-all duration-300 font-semibold text-white text-sm sm:text-base shadow-lg shadow-violet-700/40"
            >
              Close
            </button>
          </div>
        ) : (
          /* ---------- Form State ---------- */
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div className="animate-field" style={{ animationDelay: "0.05s" }}>
              <label
                htmlFor="resume-name"
                className="flex items-center gap-2 text-sm sm:text-base font-medium text-violet-300 mb-1.5 sm:mb-2"
              >
                <FaUser className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                Full Name
              </label>
              <input
                id="resume-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[rgba(7,26,47,0.878)] border border-white/20 focus:border-transparent focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 hover:border-violet-400 text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div className="animate-field" style={{ animationDelay: "0.1s" }}>
              <label
                htmlFor="resume-email"
                className="flex items-center gap-2 text-sm sm:text-base font-medium text-violet-300 mb-1.5 sm:mb-2"
              >
                <FaEnvelope className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                Email Address
              </label>
              <input
                id="resume-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[rgba(7,26,47,0.878)] border border-white/20 focus:border-transparent focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 hover:border-violet-400 text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Company */}
            <div className="animate-field" style={{ animationDelay: "0.15s" }}>
              <label
                htmlFor="resume-company"
                className="flex items-center gap-2 text-sm sm:text-base font-medium text-violet-300 mb-1.5 sm:mb-2"
              >
                <FaBuilding className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                Company Name
              </label>
              <input
                id="resume-company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[rgba(7,26,47,0.878)] border border-white/20 focus:border-transparent focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 hover:border-violet-400 text-white placeholder-gray-400 text-sm sm:text-base"
              />
            </div>

            {/* Purpose */}
            <div className="animate-field" style={{ animationDelay: "0.2s" }}>
              <label
                htmlFor="resume-purpose"
                className="flex items-center gap-2 text-sm sm:text-base font-medium text-violet-300 mb-1.5 sm:mb-2"
              >
                <FaAlignLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" />
                Purpose for Resume
              </label>
              <textarea
                id="resume-purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                placeholder="Briefly describe why you need the resume (e.g. recruitment, collaboration...)"
                rows="3"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[rgba(7,26,47,0.878)] border border-white/20 focus:border-transparent focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 hover:border-violet-400 text-white placeholder-gray-400 text-sm sm:text-base resize-y min-h-[80px]"
              />
            </div>

            {/* Submit */}
            <div className="animate-field" style={{ animationDelay: "0.25s" }}>
              <button
                className="btn px-3 !h-[45px] !min-h-[45px] sm:!h-[45px] sm:!min-h-[45px] btn-primary hover:scale-105 transition-transform duration-200"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending Request..." : "Request Resume"}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};

ResumeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResumeModal;
