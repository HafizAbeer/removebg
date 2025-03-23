import React from "react";

const Privacy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Hero Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Your privacy is important to us. This policy explains how we collect,
          use, and protect your personal information.
        </p>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information such as your name and email address
            when you submit inquiries through our contact form.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            2. Use of Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your information is used solely to respond to your inquiries,
            provide support, and improve our services. We do not use your
            information for marketing purposes without consent.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            3. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement industry-standard security measures to safeguard your
            personal information from unauthorized access, disclosure, or
            alteration.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share, sell, or disclose your personal data to third
            parties. Any third-party links or services are subject to their own
            privacy policies.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            5. Changes to Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update our privacy policy at any time. Any
            changes will be posted on this page with a revised effective date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
