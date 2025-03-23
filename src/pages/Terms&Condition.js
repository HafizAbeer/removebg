import React from "react";

const Terms = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Hero Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Please read our terms carefully before using BG Remover. By accessing
          or using our services, you agree to these terms.
        </p>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using our services, you acknowledge that you have
            read, understood, and agree to be bound by these terms.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            2. Use of Service
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You may use the service for personal, lawful, and non-commercial
            purposes only. Any unauthorized or abusive use is strictly
            prohibited.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            3. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content, branding, logos, and materials on this website are
            owned by BG Remover and protected by copyright and intellectual
            property laws.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            BG Remover is not liable for any direct, indirect, or consequential
            damages arising from the use or inability to use our services.
          </p>
        </section>
        <hr />

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            5. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued
            use of the services after such changes constitutes acceptance of the
            new terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
