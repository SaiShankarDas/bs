import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { LoaderCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL;

  // Auto-dismiss success message after 10 seconds
  useEffect(() => {
    if (submissionStatus === 'success') {
      const timer = setTimeout(() => {
        setFeedbackMessage('');
        setSubmissionStatus('idle');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  const resetForm = () => {
      setName('');
      setWhatsapp(undefined);
      setEmail('');
      setPeople('');
      setDateRange([null, null]);
      setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!SCRIPT_URL || SCRIPT_URL.includes("h***")) {
      setFeedbackMessage('The form is not configured. Please contact support.');
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');
    setFeedbackMessage('');

    const formattedDateRange = (startDate && endDate)
      ? `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
      : startDate
      ? startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      : '';

    const submissionData = {
        formType: 'contact',
        name,
        whatsapp: whatsapp || '',
        email,
        people,
        dates: formattedDateRange,
        message,
    };

    try {
      // "Fire-and-forget" request using 'no-cors' mode.
      // We cannot read the response, so we optimistically assume success.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(submissionData),
      });

      setSubmissionStatus('success');
      setFeedbackMessage('Thank you! Your message has been sent successfully.');
      resetForm();

    } catch (error: any) {
      console.error('An unexpected error occurred during form submission:', error);
      setSubmissionStatus('error');
      setFeedbackMessage('A network error occurred. Please check your connection and try again.');
    }
  };

  const inputClasses = "contact-form-input mt-1 w-full p-3 bg-white/10 border border-white/20 rounded-md text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-gold min-h-[48px]";

  return (
    <PageTransition>
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-text-light transition-all duration-500 hover:text-accent-gold hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Get In Touch</h1>
            <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mt-4">Have questions or ready to book your escape? Send us a message, and we'll help you craft your perfect Udaipur journey.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-accent-gold transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Plan My Escape</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="text-sm font-bold text-text-muted">Name</label>
                    <input id="name" type="text" placeholder="Your full name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="whatsapp" className="text-sm font-bold text-text-muted">WhatsApp Number</label>
                    <PhoneInput
                      id="whatsapp"
                      placeholder="Your WhatsApp number"
                      value={whatsapp}
                      onChange={setWhatsapp}
                      international
                      defaultCountry="IN"
                      countryCallingCodeEditable={false}
                      className="phone-input-container mt-1"
                      required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold text-text-muted">Email (Optional)</label>
                    <input id="email" type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="people" className="text-sm font-bold text-text-muted">Number of People</label>
                    <input id="people" type="number" placeholder="e.g., 2" min="1" required value={people} onChange={(e) => setPeople(e.target.value)} className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="dates" className="text-sm font-bold text-text-muted">Travel Dates</label>
                    <DatePicker
                      selectsRange={true}
                      startDate={startDate}
                      endDate={endDate}
                      onChange={(update) => {
                        setDateRange(update as [Date | null, Date | null]);
                      }}
                      isClearable={true}
                      placeholderText="Select your travel dates"
                      wrapperClassName="w-full"
                      dateFormat="MMM d, yyyy"
                      minDate={new Date()}
                      className={inputClasses}
                      required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-bold text-text-muted">Message</label>
                    <textarea id="message" placeholder="Tell us about your dream trip..." rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className={inputClasses}></textarea>
                </div>
                
                <button type="submit" disabled={submissionStatus === 'submitting'} className="w-full bg-active-nav-gradient text-white font-medium py-3 px-6 rounded-[10px] text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-theme-accent-orange-start/40 hover:scale-105 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                  {submissionStatus === 'submitting' ? (
                    <>
                      <LoaderCircle className="animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>

                {feedbackMessage && (
                  <div className={`mt-4 p-3 rounded-md text-sm flex items-center ${submissionStatus === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                    {submissionStatus === 'success' ? <CheckCircle className="mr-2" /> : <AlertTriangle className="mr-2" />}
                    {feedbackMessage}
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-accent-gold transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(255,199,0,0.3)]">Find Us in Udaipur</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border-4 border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116033.55729938061!2d73.6501450431327!3d24.59602493976856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
