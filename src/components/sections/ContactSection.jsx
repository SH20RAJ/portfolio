const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    setIsSubmitting(true);
    
    try {
        // Create mailto URL with form data
        const mailtoUrl = `mailto:sh20raj@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoUrl;
        
        // Set success status
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
        
        setTimeout(() => {
            setSubmitStatus(null);
        }, 5000);
    }
};
