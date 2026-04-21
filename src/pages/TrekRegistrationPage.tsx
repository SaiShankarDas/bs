import React, { useRef, useEffect, useState, useCallback } from 'react';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { LoaderCircle, CheckCircle, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import SignaturePad from 'signature_pad';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwfOxsoezCPzAACWCkGiiRJyDGYLVAPMmXriAxslps5IATQ9rw7-7eisT1y28yxaUYe/exec';

// Add new destinations here as you expand
const DESTINATIONS = [
  'Chopta-Tungnath Trek',
  'Shangarh',
  'Bir Barot',
  'Kedarnath',
  'Munsiyari Khaliya Top',
  'Chakrata',
  'Manali Sissu Rohtang Pass',
  'Mcleodganj Dharamkot Triund',
  'Jibhi Shoja Tirthan',
  'Kasol Kheerganga Trek',
  'Harshil Valley',
  'Rishikesh',
  'Char Dham',
];

const indemnityTerms = [
  {
    title: '1. Acknowledgment of Risk',
    content: 'I, the undersigned participant, acknowledge that trekking and travel activities involve inherent risks including but not limited to:',
    bullets: [
      'Slips, falls, or physical injuries',
      'Adverse weather conditions',
      'Altitude sickness',
      'Remote locations with limited medical facilities',
    ],
    footer: 'I voluntarily assume all such risks associated with participation in this tour.',
  },
  {
    title: '2. Medical Fitness',
    content: 'I confirm that I am physically and mentally fit to participate in this trek. I do not suffer from any medical condition that may affect my ability to safely undertake this journey.',
  },
  {
    title: '3. Liability Waiver',
    content: 'I hereby release, indemnify, and hold harmless Bharatescapes, its organizers, guides, employees, and affiliates from any and all liability, claims, demands, or causes of action arising out of or related to any loss, damage, injury, or illness that may occur during the tour.',
  },
  {
    title: '4. Responsibility Clause',
    content: 'I agree to follow all safety instructions provided by the tour organizers and guides. Any misconduct or negligence on my part that results in harm to myself or others will be solely my responsibility.',
  },
  {
    title: '5. Insurance',
    content: 'I understand that travel/medical insurance is not included in the tour cost unless otherwise stated, and I am responsible for obtaining my own insurance coverage.',
  },
  {
    title: '6. Change of Itinerary (Weather & Unforeseen Conditions)',
    content: 'The organizer reserves the right to modify, alter, or cancel the itinerary in case of adverse weather conditions, natural calamities, roadblocks, or any unforeseen circumstances beyond control. Any such changes will be made in the interest of safety and smooth conduct of the tour. No claims or disputes shall be raised regarding such changes.',
  },
  {
    title: '7. Consent',
    content: 'I have read, understood, and voluntarily agree to the terms and conditions stated in this indemnity form.',
  },
];

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const TrekRegistrationPage: React.FC = () => {
  // Destination
  const [destination, setDestination] = useState('');

  // Personal details
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');

  // Contact
  const [phone, setPhone] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Emergency
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyRelationship, setEmergencyRelationship] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState<string | undefined>();

  // Travel
  const [tripDates, setTripDates] = useState<[Date | null, Date | null]>([null, null]);
  const [departureCity, setDepartureCity] = useState('');
  const [participants, setParticipants] = useState('');

  // Health
  const [hasMedicalCondition, setHasMedicalCondition] = useState('');
  const [medicalDetails, setMedicalDetails] = useState('');
  const [physicallyFit, setPhysicallyFit] = useState('');
  const [allergies, setAllergies] = useState('');

  // ID
  const [idType, setIdType] = useState('');
  const [idPhotoBase64, setIdPhotoBase64] = useState('');
  const [idPhotoName, setIdPhotoName] = useState('');

  // Accommodation
  const [accommodation, setAccommodation] = useState('');

  // Payment
  const [totalCost, setTotalCost] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [paymentProofBase64, setPaymentProofBase64] = useState('');
  const [paymentProofName, setPaymentProofName] = useState('');

  // T&Cs
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  // Signature
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const padRef = useRef<SignaturePad | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [signatureError, setSignatureError] = useState('');

  // Submission
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // --- Signature pad setup ---
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(ratio, ratio);
    padRef.current?.clear();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    padRef.current = new SignaturePad(canvas, {
      penColor: '#1C82A3',
      backgroundColor: 'rgba(255,255,255,0)',
    });
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (submissionStatus === 'success') {
      const timer = setTimeout(() => { setFeedbackMessage(''); setSubmissionStatus('idle'); }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submissionStatus]);

  // Convert file to base64 immediately on selection
  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    setBase64: (v: string) => void,
    setName: (v: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) { setBase64(''); setName(''); return; }
    setName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      console.log('File converted:', file.name, 'base64 length:', result.length);
      setBase64(result);
    };
    reader.onerror = () => { console.error('FileReader error for', file.name); setBase64(''); };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setDestination(''); setFullName(''); setDob(null); setGender(''); setNationality('');
    setPhone(undefined); setEmail(''); setAddress('');
    setEmergencyName(''); setEmergencyRelationship(''); setEmergencyPhone(undefined);
    setTripDates([null, null]); setDepartureCity(''); setParticipants('');
    setHasMedicalCondition(''); setMedicalDetails(''); setPhysicallyFit(''); setAllergies('');
    setIdType(''); setIdPhotoBase64(''); setIdPhotoName('');
    setAccommodation('');
    setTotalCost(''); setAmountPaid(''); setPaymentMode(''); setPaymentProofBase64(''); setPaymentProofName('');
    setIsTermsAgreed(false);
    padRef.current?.clear();
    setSignatureError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage('');
    setSignatureError('');

    if (!isTermsAgreed) {
      setFeedbackMessage('You must agree to the terms and conditions.');
      setSubmissionStatus('error');
      return;
    }

    if (!padRef.current || padRef.current.isEmpty()) {
      setSignatureError('Signature is required');
      setFeedbackMessage('Please provide your signature before submitting.');
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');

    try {
      const [startDate, endDate] = tripDates;
      const formattedDates = (startDate && endDate)
        ? `${startDate.toLocaleDateString('en-IN')} – ${endDate.toLocaleDateString('en-IN')}`
        : startDate ? startDate.toLocaleDateString('en-IN') : '';

      // Validate file data exists before sending
      if (idPhotoBase64.length < 100) {
        alert('ERROR: ID Photo was not converted properly. Please re-select the file.');
        setSubmissionStatus('error');
        setFeedbackMessage('ID Photo upload failed. Please re-select the file and try again.');
        return;
      }

      const submissionData: Record<string, string> = {
        formType: 'trip-registration',
        // Put file data FIRST in the object
        idPhoto: idPhotoBase64,
        paymentProof: paymentProofBase64,
        signature: padRef.current.toDataURL('image/png'),
        // Then text fields
        destination,
        fullName,
        dob: dob ? dob.toLocaleDateString('en-IN') : '',
        gender,
        nationality,
        phone: phone || '',
        email,
        address,
        emergencyName,
        emergencyRelationship,
        emergencyPhone: emergencyPhone || '',
        tripDates: formattedDates,
        departureCity,
        participants,
        hasMedicalCondition,
        medicalDetails,
        physicallyFit,
        allergies,
        idType,
        accommodation,
        totalCost,
        amountPaid,
        paymentMode,
      };

      const payload = JSON.stringify(submissionData);
      console.log('=== SUBMISSION DEBUG ===');
      console.log('Total payload size:', (payload.length / 1024).toFixed(1), 'KB');
      console.log('idPhoto starts with:', idPhotoBase64.substring(0, 30));
      console.log('idPhoto base64 length:', idPhotoBase64.length);
      console.log('paymentProof base64 length:', paymentProofBase64.length);
      console.log('signature base64 length:', submissionData.signature.length);
      console.log('JSON has idPhoto key:', payload.includes('"idPhoto"'));
      console.log('JSON has paymentProof key:', payload.includes('"paymentProof"'));

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body: payload,
      });

      setSubmissionStatus('success');
      setFeedbackMessage('🎉 Registration submitted successfully! We will get back to you shortly.');
      resetForm();
    } catch {
      setSubmissionStatus('error');
      setFeedbackMessage('A network error occurred. Please check your connection and try again.');
    }
  };

  const sectionClasses = 'bg-white/5 p-6 md:p-8 rounded-xl shadow-lg border border-black/10 relative';
  const inputClasses = 'mt-1 w-full p-3 bg-white/5 border border-black/10 rounded-md text-warm-text placeholder:text-warm-text/50 focus:outline-none focus:ring-2 focus:ring-warm-gold-light min-h-[48px]';
  const labelClasses = 'text-sm font-bold text-warm-text/80';
  const radioOuterClasses = 'flex items-center gap-2 p-3 border border-black/10 rounded-md cursor-pointer hover:bg-white/10 transition-colors';

  return (
    <PageTransition>
      <div className="bg-warm-bg text-warm-text pt-32 pb-20 font-poppins">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-start transition-all duration-500 hover:text-warm-gold-dark hover:drop-shadow-[0_0_15px_rgba(181,98,5,0.3)]">
              Trip Registration
            </h1>
            <p className="text-base text-warm-text/60 max-w-2xl mx-auto mt-2">
              Please complete all sections below and provide your signature to confirm your registration.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            {/* 0. Select Destination */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">Select Destination *</legend>
              <select required value={destination} onChange={e => setDestination(e.target.value)} className={inputClasses}>
                <option value="" disabled>Choose your trip destination</option>
                {DESTINATIONS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </fieldset>
            {/* 1. Personal Details */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">1. Personal Details</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelClasses}>Full Name *</label>
                  <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClasses} placeholder="Your full name" />
                </div>
                <div>
                  <label className={labelClasses}>Date of Birth *</label>
                  <DatePicker
                    required
                    selected={dob}
                    onChange={(date: Date | null) => setDob(date)}
                    maxDate={new Date()}
                    placeholderText="DD/MM/YYYY"
                    className={inputClasses}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    yearDropdownItemNumber={80}
                    popperPlacement="top-start"
                    popperProps={{ strategy: 'fixed' }}
                    popperClassName="!z-[9999]"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Gender *</label>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {['Male', 'Female', 'Other'].map(g => (
                      <label key={g} className={`${radioOuterClasses} flex-1 min-w-[100px] ${gender === g ? 'bg-warm-gold-light/10 border-warm-gold-light ring-1 ring-warm-gold-light' : ''}`}>
                        <input type="radio" name="gender" required value={g} checked={gender === g} onChange={e => setGender(e.target.value)} className="accent-warm-gold-light" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Nationality</label>
                  <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} className={inputClasses} placeholder="e.g., Indian" />
                </div>
              </div>
            </fieldset>

            {/* 2. Contact Information */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">2. Contact Information</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Phone Number *</label>
                  <PhoneInput required international defaultCountry="IN" value={phone} onChange={setPhone} className="phone-input-container mt-1 warm-theme" />
                </div>
                <div>
                  <label className={labelClasses}>Email Address</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={inputClasses} placeholder="your@email.com" />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Address</label>
                  <textarea value={address} onChange={e => setAddress(e.target.value)} className={inputClasses} rows={2} placeholder="Your full address" />
                </div>
              </div>
            </fieldset>

            {/* 3. Emergency Contact */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">3. Emergency Contact</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Name *</label>
                  <input type="text" required value={emergencyName} onChange={e => setEmergencyName(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Relationship *</label>
                  <input type="text" required value={emergencyRelationship} onChange={e => setEmergencyRelationship(e.target.value)} className={inputClasses} placeholder="e.g., Parent, Spouse" />
                </div>
                <div>
                  <label className={labelClasses}>Phone Number *</label>
                  <PhoneInput required international defaultCountry="IN" value={emergencyPhone} onChange={setEmergencyPhone} className="phone-input-container mt-1 warm-theme" />
                </div>
              </div>
            </fieldset>

            {/* 4. Travel Details */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">4. Travel Details</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Preferred Trip Dates *</label>
                  <DatePicker
                    required
                    selectsRange
                    startDate={tripDates[0]}
                    endDate={tripDates[1]}
                    onChange={(update) => setTripDates(update as [Date | null, Date | null])}
                    minDate={new Date()}
                    placeholderText="Select date range"
                    className={inputClasses}
                    dateFormat="dd/MM/yyyy"
                    popperProps={{ strategy: 'fixed' }}
                    popperClassName="!z-[9999]"
                    popperPlacement="top-start"
                  />
                </div>
                <div>
                  <label className={labelClasses}>Departure City *</label>
                  <input type="text" required value={departureCity} onChange={e => setDepartureCity(e.target.value)} className={inputClasses} placeholder="e.g., Delhi" />
                </div>
                <div>
                  <label className={labelClasses}>Number of Participants *</label>
                  <input type="number" required min="1" value={participants} onChange={e => setParticipants(e.target.value)} className={inputClasses} placeholder="e.g., 2" />
                </div>
              </div>
            </fieldset>

            {/* 5. Health & Fitness */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">5. Health & Fitness Information</legend>
              <div className="space-y-6">
                <div>
                  <label className={labelClasses}>Do you have any medical conditions? *</label>
                  <div className="flex gap-4 mt-2">
                    {['Yes', 'No'].map(v => (
                      <label key={v} className={`${radioOuterClasses} flex-1 ${hasMedicalCondition === v ? 'bg-warm-gold-light/10 border-warm-gold-light ring-1 ring-warm-gold-light' : ''}`}>
                        <input type="radio" name="medicalCondition" required value={v} checked={hasMedicalCondition === v} onChange={e => setHasMedicalCondition(e.target.value)} className="accent-warm-gold-light" />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
                <AnimatePresence>
                  {hasMedicalCondition === 'Yes' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      <label className={labelClasses}>If yes, please specify *</label>
                      <textarea required value={medicalDetails} onChange={e => setMedicalDetails(e.target.value)} className={inputClasses} rows={2} />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div>
                  <label className={labelClasses}>Are you physically fit for trekking (moderate difficulty)? *</label>
                  <div className="flex gap-4 mt-2">
                    {['Yes', 'No'].map(v => (
                      <label key={v} className={`${radioOuterClasses} flex-1 ${physicallyFit === v ? 'bg-warm-gold-light/10 border-warm-gold-light ring-1 ring-warm-gold-light' : ''}`}>
                        <input type="radio" name="physicallyFit" required value={v} checked={physicallyFit === v} onChange={e => setPhysicallyFit(e.target.value)} className="accent-warm-gold-light" />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Any allergies (food/medicine)?</label>
                  <input type="text" value={allergies} onChange={e => setAllergies(e.target.value)} className={inputClasses} placeholder="e.g., Penicillin, Peanuts" />
                </div>
              </div>
            </fieldset>

            {/* 6. ID Proof */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">6. ID Proof Details</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>ID Type *</label>
                  <select required value={idType} onChange={e => setIdType(e.target.value)} className={inputClasses}>
                    <option value="" disabled>Select ID type</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Upload ID Photo *</label>
                  <input
                    type="file"
                    required={!idPhotoBase64}
                    accept="image/*"
                    onChange={e => handleFileSelect(e, setIdPhotoBase64, setIdPhotoName)}
                    className={`${inputClasses} file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-warm-gold-light/20 file:text-warm-gold-dark file:font-semibold file:cursor-pointer`}
                  />
                  {idPhotoName && <p className="mt-1 text-xs text-green-600 font-semibold">✓ {idPhotoName} ready</p>}
                </div>
              </div>
            </fieldset>

            {/* 7. Accommodation */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">7. Accommodation Preference</legend>
              <div className="flex flex-col md:flex-row gap-4 mt-2">
                {[
                  { value: 'Triple Sharing', label: 'Triple Sharing' },
                  { value: 'Double Sharing', label: 'Double Sharing' },
                  { value: 'Solo', label: 'Solo' },
                ].map(opt => (
                  <label key={opt.value} className={`${radioOuterClasses} flex-1 ${accommodation === opt.value ? 'bg-warm-gold-light/10 border-warm-gold-light ring-1 ring-warm-gold-light' : ''}`}>
                    <input type="radio" name="accommodation" required value={opt.value} checked={accommodation === opt.value} onChange={e => setAccommodation(e.target.value)} className="accent-warm-gold-light" />
                    {opt.label}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* 8. Payment Details */}
            <fieldset className={sectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">8. Payment Details</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Total Package Cost (₹)</label>
                  <input type="text" value={totalCost} onChange={e => setTotalCost(e.target.value)} className={inputClasses} placeholder="e.g., 8999" />
                </div>
                <div>
                  <label className={labelClasses}>Amount Paid (₹)</label>
                  <input type="text" value={amountPaid} onChange={e => setAmountPaid(e.target.value)} className={inputClasses} placeholder="e.g., 3000" />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Payment Mode</label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {['UPI', 'Bank Transfer', 'Cash'].map(mode => (
                      <label key={mode} className={`${radioOuterClasses} flex-1 min-w-[120px] ${paymentMode === mode ? 'bg-warm-gold-light/10 border-warm-gold-light ring-1 ring-warm-gold-light' : ''}`}>
                        <input type="radio" name="paymentMode" value={mode} checked={paymentMode === mode} onChange={e => setPaymentMode(e.target.value)} className="accent-warm-gold-light" />
                        {mode}
                      </label>
                    ))}
                  </div>
                </div>
                <AnimatePresence>
                  {(paymentMode === 'UPI' || paymentMode === 'Bank Transfer') && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="md:col-span-2"
                    >
                      <label className={labelClasses}>Upload Payment Proof *</label>
                      <input
                        type="file"
                        required={!paymentProofBase64}
                        accept="image/*,.pdf"
                        onChange={e => handleFileSelect(e, setPaymentProofBase64, setPaymentProofName)}
                        className={`${inputClasses} file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-warm-gold-light/20 file:text-warm-gold-dark file:font-semibold file:cursor-pointer`}
                      />
                      {paymentProofName && <p className="mt-1 text-xs text-green-600 font-semibold">✓ {paymentProofName} ready</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </fieldset>

            {/* 9. Terms & Conditions + Signature */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-black/5 space-y-6">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center">
                Indemnity Form{destination ? ` — ${destination}` : ''}
              </h2>

              <p className="text-warm-text/80 text-center text-sm">
                This Indemnity Agreement is executed on this day of registration.
              </p>

              {/* Always-visible first section */}
              <div>
                <h3 className="font-bold text-lg mb-2">{indemnityTerms[0].title}</h3>
                <p className="text-warm-text/80">{indemnityTerms[0].content}</p>
                {indemnityTerms[0].bullets && (
                  <ul className="list-disc pl-6 mt-2 text-warm-text/80 space-y-1">
                    {indemnityTerms[0].bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
                {indemnityTerms[0].footer && <p className="text-warm-text/80 mt-2 italic">{indemnityTerms[0].footer}</p>}
              </div>

              {/* Expandable rest */}
              <AnimatePresence>
                {isTermsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden space-y-4"
                  >
                    {indemnityTerms.slice(1).map((term, i) => (
                      <div key={i}>
                        <h3 className="font-bold text-lg mb-1">{term.title}</h3>
                        <p className="text-warm-text/80">{term.content}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsTermsExpanded(!isTermsExpanded)}
                  className="inline-flex items-center gap-1 font-bold text-warm-gold-dark hover:text-warm-gold-light transition-colors"
                >
                  {isTermsExpanded ? <><ChevronUp className="w-4 h-4" /> Read Less</> : <><ChevronDown className="w-4 h-4" /> Read Full Indemnity</>}
                </button>
              </div>

              {/* Agree Checkbox */}
              <label className="flex items-start gap-3 p-4 bg-warm-bg border border-black/10 rounded-lg cursor-pointer hover:bg-black/5 transition-colors">
                <input
                  type="checkbox"
                  required
                  checked={isTermsAgreed}
                  onChange={e => setIsTermsAgreed(e.target.checked)}
                  className="h-5 w-5 mt-0.5 rounded accent-warm-gold-dark flex-shrink-0"
                />
                <span className="text-warm-text/90 font-semibold text-sm leading-relaxed">
                  I hereby declare that I am aware of the risks involved in trekking and adventure activities. I am medically fit to participate in this trip. I will follow all instructions given by the organizers (BharatEscapes). I have read and agree to all Terms & Conditions.
                </span>
              </label>

              {/* Signature Pad */}
              <div>
                <label className={`${labelClasses} mb-2 block`}>Participant Signature *</label>
                <div
                  ref={containerRef}
                  className="relative w-full h-40 sm:h-48 rounded-xl border-2 border-black/15 bg-white overflow-hidden cursor-crosshair"
                >
                  <canvas ref={canvasRef} className="absolute inset-0 touch-none" />
                  <div className="pointer-events-none absolute bottom-8 left-6 right-6 border-b border-dashed border-black/15" />
                  <span className="pointer-events-none absolute bottom-2 right-4 text-[10px] uppercase tracking-widest text-black/25 select-none">
                    Sign here
                  </span>
                </div>
                {signatureError && <p className="mt-2 text-sm text-red-600 font-medium">{signatureError}</p>}
                <button
                  type="button"
                  onClick={() => { padRef.current?.clear(); setSignatureError(''); }}
                  className="mt-3 text-sm font-medium text-warm-gold-dark hover:text-warm-gold-light transition-colors"
                >
                  Clear Signature
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={!isTermsAgreed || submissionStatus === 'submitting'}
                className="w-full bg-gradient-to-r from-warm-gold-light to-warm-gold-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-warm-gold-light/40 hover:scale-[1.02] flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {submissionStatus === 'submitting' ? (
                  <><LoaderCircle className="animate-spin mr-2" /> Submitting...</>
                ) : 'Submit Registration'}
              </button>

              {feedbackMessage && (
                <div className={`p-4 rounded-md text-sm font-semibold flex items-center justify-center ${submissionStatus === 'success' ? 'bg-green-500/20 text-green-700' : 'bg-red-500/20 text-red-700'}`}>
                  {submissionStatus === 'success' ? <CheckCircle className="mr-2" /> : <AlertTriangle className="mr-2" />}
                  {feedbackMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default TrekRegistrationPage;
