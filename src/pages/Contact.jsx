import React, { useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpqgygbl'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: new FormData(e.target),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <main className="page">
            <h2>Contact</h2>
            <div className="page-content">
                <p className="contact-intro">Use this form for any of the following:</p>
                <ul className="contact-reasons">
                    <li>You have a comment.</li>
                    <li>You have a request.</li>
                    <li>You have an idea for something you'd like built.</li>
                    <li>You have Raiders tickets and need someone to go with.</li>
                    <li>You want my opinion on your musical project.</li>
                    <li>You need advice or help with screen printing.</li>
                    <li>You want someone to go play craps with you.</li>
                    <li>You need dinner recommendations tonight.</li>
                </ul>

                {status === 'success' ? (
                    <p className="contact-status contact-status-success">Thanks, message sent! I'll get back to you soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit" className="control_btn" disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : 'Send'}
                        </button>

                        {status === 'error' && (
                            <p className="contact-status contact-status-error">Something went wrong, please try again or email me directly.</p>
                        )}
                    </form>
                )}
            </div>
        </main>
    )
}

export default Contact
