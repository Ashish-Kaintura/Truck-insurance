import React, { useEffect } from "react";
import Nav from "../component/Nav";
import userEvent from "@testing-library/user-event";
import { Helmet } from "react-helmet";

export default function Termscondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Helmet>
            <meta charSet="utf-8" />
        <title>Terms & Conditions | DBA  Jay S Insurance Agency</title>
            <meta
              name="description"
          content="Review the terms and conditions for using the DBA  Jay S Insurance Agency website, including our service policies, disclaimers, and user responsibilities."
            />
        <h2>DBA  Jay S Insurance Agency Terms & Conditions</h2>
          </Helmet>
      <header>
        <Nav />
      </header>
      <main>
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              overflow: "hidden",
            }}
          >
            <img
              src={require("../images/truck 5.jpg")}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        <section>
          <div className="py-2 pb-10">
            <div className="pt-8 text-center flex justify-center">
              <h1 className="text-5xl  font-robotoflex pb-2 border-b-4 border-blue-700 ">
                Terms & Conditions of Use
              </h1>
            </div>
          <article
            className="prose lg:prose-lg max-w-6xl mx-auto px-4 text-left mt-4"
            aria-labelledby="terms-heading"
          >
            <p>
              DBA Jay S Insurance Agency (“we”, “us”, or “our”) respects the privacy of our users (“user” or
              “you”). These Terms & Conditions explain the rules for using our website WWW.JSINSUR.COM,
              including any media form, media channel, mobile website, or mobile application related thereto
              (collectively, the “Site”). Please read carefully. IF YOU DO NOT AGREE WITH THESE TERMS,
              PLEASE DO NOT ACCESS THE SITE. We reserve the right to update these Terms at any time.
              Updates are effective immediately upon posting. You are encouraged to review these Terms
              periodically, and your continued use signifies acceptance of any revisions.
            </p>

            <p>You may print or save a copy (PDF) of these Terms for your records.</p>

            <h3>License Grant</h3>
            <p>
              You are granted a personal, revocable, limited, non-exclusive, non-transferable license to
              access and use the DBA Jay S Insurance Agency website, conditioned on your continued acceptance
              of these Terms. You may use the Site and its content for non-commercial personal use only.
              DBA Jay S Insurance Agency reserves the right to restrict or suspend access for violations or
              at our discretion.
            </p>

            <h3>License Restrictions</h3>
            <p>
              Unless expressly authorized, you may not copy, modify, distribute, sell, sublicense, reverse
              engineer, or interfere with the Site or any DBA Jay S Insurance Agency content, including
              trademarks, logos, or proprietary notices. Unauthorized use, including attempts to obtain illegal
              access, introducing malware, or interfering with other users’ experience, is strictly
              prohibited.
            </p>

            <h3>Acceptance; Revisions to Terms</h3>
            <p>
              These Terms constitute a binding agreement between you and DBA Jay S Insurance Agency. Your
              access signifies acceptance. We may revise these Terms at any time by posting updated Terms on
              the Site. Continued use confirms acceptance of changes.
            </p>

            <h3>Privacy Policy; Additional Terms</h3>
            <p>
              Our Privacy Policy and any other Additional Terms for specific services are incorporated herein.
              Conflicts between Terms will be resolved in favor of the applicable Additional Terms.
            </p>

            <h3>Click-Through Agreements</h3>
            <p>
              Certain areas of the Site may require acceptance of additional terms via “I Accept” or similar
              buttons. Those agreements govern the activity in question.
            </p>

            <h3>Personal Login Information</h3>
            <p>
              Some features require registration. Keep your login information confidential. Report
              unauthorized use immediately. DBA Jay S Insurance Agency is not liable for misuse of login
              credentials.
            </p>

            <h3>User Obligations</h3>
            <p>
              You agree to abide by all laws and regulations. Provide accurate information when registering or
              submitting content. Misrepresentation may result in termination of access.
            </p>

            <h3>User-Generated Content</h3>
            <p>
              You retain ownership of your content submitted on forums, blogs, or other platforms. By posting,
              you grant DBA Jay S Insurance Agency a perpetual, non-exclusive, royalty-free license to use and
              distribute your content.
            </p>

            <h3>Proprietary Rights</h3>
            <p>
              Site content, including trademarks, logos, brands, software, and multimedia (“DBA Jay S
              Insurance Agency content”) is protected by law. Unauthorized use or reproduction is prohibited.
            </p>

            <h3>Responsibility for Use</h3>
            <p>Use of the Site is at your own risk. We do not guarantee security, accuracy, or currency of information.</p>

            <h3>Medical Disclaimer</h3>
            <p>
              Content on the Site is for informational purposes and is not a substitute for professional
              advice. Consult qualified health or insurance professionals for guidance.
            </p>

            <h3>Third-Party Information & Links</h3>
            <p>
              The Site may feature third-party materials or links. DBA Jay S Insurance Agency does not
              guarantee accuracy or endorse third-party content. Use third-party resources at your own risk.
            </p>

            <h3>Warranties Disclaimed</h3>
            <p>
              The Site and its content are provided “AS IS” without warranties of any kind, express or
              implied, including merchantability or fitness for a particular purpose.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              DBA Jay S Insurance Agency and affiliates are not liable for damages arising from use,
              inability to use, data loss, unauthorized access, third-party interactions, or reliance on
              content.
            </p>

            <h3>Indemnification</h3>
            <p>
              You agree to defend and hold harmless DBA Jay S Insurance Agency from claims related to your
              use of the Site, violation of Terms, or content submission.
            </p>

            <h3>Term and Termination</h3>
            <p>Terms take effect upon access. We may terminate access for violations. Provisions survive termination.</p>

            <h3>Arbitration; Venue</h3>
            <p>
              Disputes will be resolved individually via arbitration under the American Arbitration
              Association, held in the District of Columbia. Courts of the District of Columbia have exclusive
              jurisdiction over enforcement or disputes if arbitration is not permitted.
            </p>

            <h3>Governing Law</h3>
            <p>Terms are governed by the laws of the District of Columbia. Exclusions under federal or international law do not apply.</p>

            <h3>Waiver and Severability</h3>
            <p>
              Failure to enforce any provision does not constitute a waiver. Invalid provisions are severed,
              and remaining Terms remain in effect.
            </p>

            <h3>Contact Information</h3>
            <p>
              For questions, visit our “Contact Us” page or contact:
            </p>
            <address>
              <strong>DBA Jay S Insurance Agency</strong>
              <br />
              Location: Fresno, California, USA
              <br />
              Email: <a href="mailto:sandy@jsinsur.com">sandy@jsinsur.com</a>
            </address>
          </article>
          </div>
        </section>
      </main>
    </>
  );
}
