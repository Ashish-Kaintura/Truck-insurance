import React, { useEffect } from "react";
import Nav from "../component/Nav";
import { Helmet } from "react-helmet";

export default function PivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy | DBA  Jay S Insurance Agency</title>
        <meta
          name="description"
          content="Read the Privacy Policy of DBA  Jay S Insurance Agency to learn how we protect your personal and insurance information with secure and transparent practices."
        />
      </Helmet>

      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <Nav />
        </div>
      </header>

      <main>
        <section className="bg-gray-50">
          <div className=" w-full overflow-hidden flex items-center justify-center">
            <img
              src={require("../images/Privacy Policy banner.jpg")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <article className="max-w-5xl mx-auto my-10 px-4 sm:px-6 text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-2">DBA Jay S Insurance Agency Website Privacy Policy</h2>
          <p className="text-sm text-gray-600 mb-4"><strong>Last Updated:</strong> 16/02/2024</p>

          <div className="space-y-4">
            <p>
              DBA Jay S Insurance Agency (“we” or “us” or “our”) respects the privacy of our users (“user” or “you”).
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website WWW.JSINSUR.COM, including any media form, media channel, mobile website, or mobile
              application related thereto (collectively, the “Site”). Please read this privacy policy carefully. IF YOU
              DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE SITE. We reserve the right
              to update this Privacy Policy at any time. Any changes will be effective immediately upon posting the
              updated Privacy Policy on the Site. You are encouraged to periodically review this Privacy Policy to stay
              informed of updates.
            </p>

            <h3 className="text-xl font-semibold mt-4">Collection of Your Information</h3>
            <p>We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information such as your name, email, phone number,
                and demographic details that you voluntarily provide while interacting with the Site.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information automatically collected when you access the Site, including IP
                address, browser type, operating system, access times, and pages viewed.
              </li>
              <li>
                <strong>Financial Data:</strong> Payment information may be collected when requesting services. Limited financial
                data may be stored by us; otherwise, it is handled securely by our payment processor.
              </li>
              <li>
                <strong>Social Media & Third-Party Data:</strong> Information from social networks, contests, surveys, and
                third-party services if you choose to connect or interact with them.
              </li>
              <li>
                <strong>Mobile Device Data:</strong> Device information, location, and other related data when accessing the Site
                via mobile devices.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Use of Your Information</h3>
            <p>We use collected information to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enhance your experience on the Site.</li>
              <li>Notify you about updates or new services, including commercial truck insurance, fleet insurance, and California truck insurance.</li>
              <li>Perform business operations, prevent fraud, process payments, and resolve disputes.</li>
              <li>Send newsletters or promotional communications with your consent.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Disclosure of Your Information</h3>
            <p>Your information may be disclosed in certain situations:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>By Law or to Protect Rights:</strong> To respond to legal processes or protect the rights and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> For services like payment processing, analytics, email, and customer support.</li>
              <li><strong>Marketing Communications:</strong> With consent, for promotions or recommendations.</li>
              <li><strong>Other Interactions:</strong> Through user interactions, postings, third-party advertisers, affiliates, business partners, or offer walls.</li>
              <li><strong>Sale or Bankruptcy:</strong> In case of business transfer, merger, or acquisition.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">Tracking Technologies</h3>
            <p>
              We use cookies, web beacons, tracking pixels, and similar technologies to customize the Site, improve user
              experience, and manage ads or analytics. You can manage cookie preferences via your browser settings.
            </p>

            <h3 className="text-xl font-semibold mt-4">Third-Party Websites</h3>
            <p>The Site may link to third-party websites. DBA Jay S Insurance Agency is not responsible for their privacy practices.</p>

            <h3 className="text-xl font-semibold mt-4">Security of Your Information</h3>
            <p>
              We implement reasonable administrative, technical, and physical safeguards. However, no system is completely secure,
              and we cannot guarantee absolute protection.
            </p>

            <h3 className="text-xl font-semibold mt-4">Policy for Children</h3>
            <p>We do not knowingly collect data from children under 13. Contact us if you believe we have collected such information.</p>

            <h3 className="text-xl font-semibold mt-4">Controls for Do-Not-Track Features</h3>
            <p>Currently, we do not respond to Do-Not-Track browser signals.</p>

            <h3 className="text-xl font-semibold mt-4">Options Regarding Your Information</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Review, update, or terminate your account via settings or by contacting us.</li>
              <li><strong>Emails and Communications:</strong> Opt-out anytime via account preferences or by contacting us directly.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">California Privacy Rights</h3>
            <p>
              California residents may request information about disclosures of personal data to third parties for direct marketing
              and request removal of publicly posted data if under 18.
            </p>

            <h3 className="text-xl font-semibold mt-4">Contact Us</h3>
            <p>If you have questions about this Privacy Policy, contact:</p>
            <address className="not-italic text-gray-700">
              DBA Jay S Insurance Agency<br />
              Location: Fresno, California, USA<br />
              Email: <a href="mailto:sandy@jsinsur.com" className="text-blue-600 hover:underline">sandy@jsinsur.com</a>
            </address>
          </div>
        </article>
      </main>
    </>
  );
}
