import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.email || !formData.password) {
      setStatus('Please enter both your email and password.')
      return
    }

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.')
      return
    }

    setStatus('Signing in...');

    window.setTimeout(() => {
      setStatus(`Welcome back, ${formData.email}!`)
    }, 600)
  }

  return (
    <div className="auth-page">
      <div className="login-panel">
        <div className="login-header">Welcome back</div>
        <p className="login-copy">Sign in to your account to access the dashboard.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="input"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input"
              required
            />
          </div>

          <div className="options-row">
            <label className="checkbox">
              <input
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <button type="button" className="secondary" onClick={() => setStatus('Forgot password flow not implemented yet')}>
              Forgot password?
            </button>
          </div>

          <button type="submit" className="button">
            Sign in
          </button>
        </form>

        {status && <p className="login-status">{status}</p>}
      </div>
    </div>
  )
}

export default Login