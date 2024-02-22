import React, { useEffect } from "react";
import Nav from "../component/Nav";
import userEvent from "@testing-library/user-event";

export default function Termscondition() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            <div className="text-center pt-12 px-5">
              <div>
                <p className=" font-cormorantgaramond">
                  J&S INSURANCE AGENCY INC. (“we” or “us” or “our”) respects the
                  privacy of our users (“user” or “you”). This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website WWW.JSINSUR.COM
                  including any other media form, media channel, mobile website,
                  or mobile application related or connected thereto
                  (collectively, the “Site”). Please read this privacy policy
                  carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY
                  POLICY, PLEASE DO NOT ACCESS THE SITE. We reserve the right to
                  make changes to this Privacy Policy at any time and for any
                  reason. We will alert you about any changes by updating the
                  “Last Updated” date of this Privacy Policy. Any changes or
                  modifications will be effective immediately upon posting the
                  updated Privacy Policy on the Site, and you waive the right to
                  receive specific notice of each such change or modification.
                  You are encouraged to periodically review this Privacy Policy
                  to stay informed of updates. You will be deemed to have been
                  made aware of, will be subject to, and will be deemed to have
                  accepted the changes in any revised Privacy Policy by your
                  continued use of the Site after the date such revised Privacy
                  Policy is posted.
                </p>
              </div>
              <div className="pt-8 text-center flex justify-center">
                <h1 className="text-3xl  font-robotoflex pb-2 border-b-4 border-blue-700 ">
                  You may print or save a copy (PDF) of these Terms of Use for
                  your records.
                </h1>
              </div>
              {/* pointer  */}
              <div className="pt-10 px-2">
                <ol className=" font-cormorantgaramond text-start list-decimal">
                  <li className="pt-2">
                    License Grant. You are granted a personal, revocable,
                    limited, non-exclusive, non-transferable license to access
                    and use the J&S Insurance Agency website conditioned on your
                    continued acceptance of, and compliance with, these Terms of
                    Use. You may use the J&S Insurance Agency website and the
                    J&S Insurance Agency content (as defined below) for your
                    noncommercial personal use and for no other purpose. J&S
                    Insurance Agency reserves the right to bar, restrict or
                    suspend any user’s access to the J&S Insurance Agency
                    website, and/or to terminate this license at any time for
                    any reason. J&S Insurance Agency reserves any rights not
                    explicitly granted in these Terms of Use.
                  </li>
                  <li className="pt-2">
                    License Restrictions. Unless otherwise expressly stated in
                    these Terms of Use or unless you receive J&S Insurance
                    Agency’ prior written consent, you may not modify,
                    translate, create derivative works of, copy, distribute,
                    market, display, remove or alter any proprietary notices or
                    labels from, lease, sell, sublicense, clone, transfer,
                    decompile, reverse engineer, or incorporate into any
                    information retrieval system (electronic or mechanical), the
                    J&S Insurance Agency website, any J&S Insurance Agency
                    content (as defined below), or any portion thereof. Further,
                    you may not (i) use the J&S Insurance Agency website for any
                    unauthorized or illegal purpose or activity including, but
                    not limited to, any activity to obtain or attempt to obtain
                    unauthorized access to the J&S Insurance Agency website,
                    including J&S Insurance Agency content; (ii) interfere with
                    the proper working of the J&S Insurance Agency website
                    including, but not limited to, the transmission of any
                    virus, worm, trap door, back door, timer, clock, Trojan
                    horse, or other limiting routines, instruction or design; or
                    (iii) interfere with any other person’s use and enjoyment of
                    the J&S Insurance Agency website.
                  </li>
                  <li className="pt-2">
                    Your Acceptance; Revisions to Terms of Use. The J&S
                    Insurance Agency website is available only to individuals
                    who can enter into legally binding contracts under
                    applicable law. These Terms of Use constitute a legally
                    binding agreement between you and the J&S Insurance Agency
                    regarding your use and access to the J&S Insurance Agency
                    website. By accessing or using the J&S Insurance Agency
                    website you agree to the Terms of Use. J&S Insurance Agency
                    reserves the right to revise these Terms of Use at any time
                    in its sole discretion, and without specific notice to you,
                    by posting revised Terms of Use to the J&S Insurance Agency
                    website. Your use after such change signifies your
                    acceptance of all the terms and conditions contained within
                    the Terms of Use effective at that time. You will be
                    responsible for regularly reviewing these Terms of Use for
                    updates and/or changes.
                  </li>
                  <li className="pt-2">
                    J&S Insurance Agency Policies; Additional Terms and
                    Conditions. J&S Insurance Agency' Privacy Policy, as well as
                    other additional terms and conditions applicable to certain
                    portions of the J&S Insurance Agency website (collectively
                    “Additional Terms and Conditions”) are incorporated herein
                    by reference. To the extent that there is a conflict between
                    these Terms of Use and any Additional Terms and Conditions
                    for the activity in which you choose to participate, the
                    Additional Terms and Conditions shall govern.
                  </li>
                  <li className="pt-2">
                    Click-Through Agreements. Before using certain areas of the
                    J&S Insurance Agency website you may be asked to indicate
                    your acceptance of additional special terms and conditions
                    by clicking a button marked “I Accept” or “I Agree” or
                    “Okay.” To the extent there is a conflict between these
                    Terms of Use and any Click through Agreement for the
                    activity in which you choose to participate, the Click
                    Through Agreement will govern.
                  </li>
                  <li className="pt-2">
                    Personal Login Information. Certain features and areas of
                    the J&S Insurance Agency website are available only with
                    registration, login, and/or a paid subscription. If you are
                    required to register and select a unique login and password
                    (“Personal Login Information”), you must keep your Personal
                    Login Information confidential. Your Personal Login
                    Information is personal to you and you may not allow any
                    third party to use it under any circumstances. J&S Insurance
                    Agency is not liable for any harm caused by or related to
                    the theft, misappropriation, disclosure, or unauthorized use
                    of your Personal Login Information. You must contact J&S
                    Insurance Agency immediately if you become aware of or
                    believe there is or may have been any unauthorized use of
                    your Personal Login Information, or otherwise wish to
                    deactivate your Personal Login Information due to security
                    concerns.
                  </li>
                  <li className="pt-2">
                    Privacy Policy. For information about J&S Insurance Agency’
                    data protection practices and J&S Insurance Agency' use and
                    protection of your personal information, please read J&S
                    Insurance Agency' Privacy Policy which is incorporated into
                    and made a part of these Terms of Use.
                  </li>
                  <li className="pt-2">
                    User Obligations. You warrant that you will abide by all
                    applicable local, state, national and international laws and
                    regulations with respect to your use of the J&S Insurance
                    Agency website and not interfere with the use and enjoyment
                    of the J&S Insurance Agency website by other users or with
                    J&S Insurance Agency' operation and management of the J&S
                    Insurance Agency website. You will, at all times, provide
                    true, accurate, current, authorized, and complete
                    information when submitting information or materials on the
                    J&S Insurance Agency website, including, without limitation,
                    information required to be provided through a J&S Insurance
                    Agency Website registration form. If any false, inaccurate,
                    untrue, unauthorized, or incomplete information is submitted
                    by you, J&S Insurance Agency reserves the right to terminate
                    your access and use of the J&S Insurance Agency website. You
                    warrant that you will not impersonate any other person or
                    entity, whether actual or fictitious, when using the J&S
                    Insurance Agency website, or defame or otherwise harm any
                    party, including J&S Insurance Agency, through your use of
                    the J&S Insurance Agency website.
                  </li>
                  <li className="pt-2">
                    User Generated Content. The J&S Insurance Agency does not
                    claim ownership of content that you post on or through the
                    J&S Insurance Agency website, such as comments or posts that
                    you submit on forums, blogs, listservs, or other electronic
                    means of communication (“User-Generated Content”). When
                    submitting User-Generated Content, you will abide by the
                    Code of Conduct which is incorporated herein by reference.
                    You also acknowledge that you alone are fully responsible
                    for the User-Generated Content you submit and that you own
                    or have the rights to use the User-Generated Content. You
                    agree that by submitting the User-Generated Content, you
                    hereby grant to the J&S Insurance Agency a perpetual,
                    non-exclusive, fully paid and royalty-free, transferable,
                    sub-licensable, worldwide license to use, download,
                    duplicate, display, distribute, modify and creative
                    derivative works of the User-Generated Content, subject to
                    the J&S Insurance Agency.
                  </li>
                  <li className="pt-2">
                    Proprietary Rights. The content of the J&S Insurance Agency
                    website includes, without limitation, (i) J&S Insurance
                    Agency' trademarks, service marks, seal, logos, brands, and
                    brand names, trade dress and trade names and other
                    distinctive identification (collectively “J&S Insurance
                    Agency Marks”); and (ii) information, data, materials,
                    interfaces, computer code, databases, products, services,
                    software applications and tools, text, images, photographs,
                    audio and video material, and artwork, and (iii) the design,
                    structure, selection, compilation, assembly, coordination,
                    expression, functionalities, applications, look and feel,
                    and arrangement of any content contained in or available
                    through the J&S Insurance Agency website (the items
                    identified in subsections (i) (ii) and (iii) shall be
                    collectively referred to herein as “J&S Insurance Agency
                    content”). J&S Insurance Agency content is the property of
                    the J&S Insurance Agency, its licensors, sponsors, partners,
                    advertisers, content providers or other third parties and is
                    protected by law including, but not limited to, United
                    States copyright, trade secret, patent, and trademark law,
                    as well as other state, national and international laws,
                    treaties and regulations. The reproduction, transmission,
                    distribution, sale, publication, broadcast, circulation or
                    dissemination of any J&S Insurance Agency content by you, or
                    by you through any other person or entity, is prohibited
                    unless express written consent is separately obtained from
                    the J&S Insurance Agency or the owner of such content if the
                    J&S Insurance Agency is not the owner. Any use of the J&S
                    Insurance Agency Marks without J&S Insurance Agency’s
                    express written consent is strictly prohibited. You may not
                    alter, delete, obscure or conceal any copyright or other
                    notices appearing in the J&S Insurance Agency content,
                    including any such notices appearing on any J&S Insurance
                    Agency content you are permitted to download, transmit,
                    display, print, or reproduce from the J&S Insurance Agency
                    website.
                  </li>
                  <li className="pt-2">
                    Responsibility for Use of the Internet and J&S Insurance
                    Agency website. Use of the Internet and the J&S Insurance
                    Agency website is solely at your risk and is subject to all
                    applicable local, state, national and international laws and
                    regulations. J&S Insurance Agency does not guarantee the
                    confidentiality or security of any communication or other
                    material transmitted to or from the J&S Insurance Agency
                    website over the Internet or other communication network.
                    J&S Insurance Agency shall not be obligated to correct or
                    update the J&S Insurance Agency website or the J&S Insurance
                    Agency content and J&S Insurance Agency shall not be liable
                    for omissions, typographical errors, or out-of-date
                    information which may appear on the J&S Insurance Agency
                    website.
                  </li>
                  <li className="pt-2">
                    Medical Disclaimer. The information available on and through
                    the J&S Insurance Agency website is presented in summary
                    form as a supplement to, and NOT a substitute for, the
                    knowledge, skill and judgment of qualified psychiatrists,
                    psychologists, physicians and health care professionals. The
                    information has been obtained from sources believed to be
                    accurate and reliable. However, J&S Insurance Agency makes
                    no warranty as to the accuracy, reliability or completeness
                    of this information. Should you have any health, medical or
                    disability questions or concerns, please consult a physician
                    or other health care professional. Information accessed on
                    or through J&S Insurance Agency website is neither complete
                    nor exhaustive and does not cover all disabilities,
                    diseases, illnesses and physical conditions or their
                    management or treatment. Information accessed on and through
                    J&S Insurance Agency website is provided “AS IS ” and
                    without warranty, express or implied, including, but not
                    limited to, any implied warranty of merchantability or of
                    fitness for a particular purpose. The information provided
                    on the J&S Insurance Agency website is provided for general
                    information only.
                  </li>
                  <li className="pt-2">
                    Patient Information. The J&S Insurance Agency website,
                    including any public forums which you may access via the J&S
                    Insurance Agency website, may contain confidential patient
                    information (“Patient Information”). State and federal laws,
                    as well as ethical and licensure requirements, may impose
                    obligations with respect to patient confidentiality that may
                    limit your ability to receive, disclose, or make use of
                    Patient Information, including transmitting Patient
                    Information to others. You warrant that you will comply with
                    all laws that may directly or indirectly govern your
                    retrieval, use, transmission, processing, receipt,
                    reporting, disclosure, or storage of Patient Information.
                    You are solely responsible for obtaining and maintaining any
                    patient consents, if applicable, and all other consents or
                    permissions required by law or advisable with respect to
                    your retrieval, use, transmission, processing, receipt,
                    reporting, disclosure or storage of Patient Information. You
                    shall be solely responsible for your retrieval, use or
                    misuse, transmission, processing, receipt, reporting,
                    disclosure or storage of Patient Information.
                  </li>
                  <li className="pt-2">
                    Third-Party Information. The J&S Insurance Agency website
                    may feature materials, information, products, and services
                    provided by third parties. Any such information, including
                    but not limited to articles, press clippings, opinions,
                    advice, statements, services, offers or other information
                    made available by third parties such as content providers
                    and other users of the J&S Insurance Agency website are
                    those of the respective third party and not of J&S Insurance
                    Agency or its affiliates. J&S Insurance Agency makes no
                    representation with respect to, nor does it guarantee or
                    endorse, the quality, non-infringement, accuracy,
                    completeness, timeliness, or reliability of such third-party
                    materials, information, services or products. Comments
                    posted in the blog section of the J&S Insurance Agency
                    website do not necessarily reflect the position of the J&S
                    Insurance Agency or any of its subsidiaries or related
                    organizations.
                  </li>
                  <li className="pt-2">
                    Links to Third Party websites. The J&S Insurance Agency
                    website may provide links (including any link through an
                    on-line banner advertisement) to other sites on the Internet
                    for your convenience. These other sites are maintained by
                    third parties over which J&S Insurance Agency exercises no
                    control. The appearance of any such third-party links is not
                    intended to endorse any particular company or product. If
                    you decide to access any of the third-party sites linked to
                    the J&S Insurance Agency website, you do so entirely at your
                    own risk. The J&S Insurance Agency shall not be responsible
                    for any loss or damage of any kind incurred as a result of
                    the presence of such advertisements on the J&S Insurance
                    Agency website. Further, the J&S Insurance Agency shall not
                    be responsible or liable for the statements or conduct of
                    any third party advertisers appearing on the J&S Insurance
                    Agency website. You shall be solely responsible for any
                    correspondence or transactions you have with any third party
                    advertisers.
                  </li>
                  <li className="pt-2">
                    Links to J&S Insurance Agency website and J&S Insurance
                    Agency content. Links posted by third parties to the J&S
                    Insurance Agency website and/or J&S Insurance Agency content
                    may not use the J&S Insurance Agency trademark or logo and
                    shall not suggest that J&S Insurance Agency promotes or
                    otherwise endorses any third-party products, business
                    relationships, services, causes, campaigns, websites,
                    content, or information. Any links to any portion of the J&S
                    Insurance Agency website shall be the responsibility of the
                    linking party. J&S Insurance Agency reserves the right to
                    require any linking party to disable or remove any link that
                    violates J&S Insurance Agency' rights or causes interruption
                    or deterioration of J&S Insurance Agency content.
                  </li>
                  <li className="pt-2">
                    Warranties Disclaimed. THE J&S Insurance Agency website AND
                    J&S Insurance Agency content ARE PROVIDED “AS IS” AND “AS
                    AVAILABLE.” NEITHER J&S Insurance Agency, ITS AFFILIATES,
                    SUBSIDIARIES, EMPLOYEES, OFFICERS, OR TRUSTEES NOR ANY OF
                    ITS AGENTS, REPRESENTATIVES, SUPPLIERS, ADVERTISERS,
                    PROMOTIONAL PARTNERS, OR LICENSORS (COLLECTIVELY “J&S
                    Insurance Agency PARTIES”) PROVIDE ANY EXPRESS OR IMPLIED
                    REPRESENTATION OR WARRANTY OF ANY KIND, INCLUDING WITHOUT
                    LIMITATION, ANY REPRESENTATION OR WARRANTY THAT (i) THE J&S
                    Insurance Agency website OR J&S Insurance Agency content, OR
                    ANY RESULTS THAT MAY BE OBTAINED BY YOU, ARE COMPLETE,
                    ACCURATE, RELIABLE OR NON-INFRINGING; (ii) ACCESS TO THE J&S
                    Insurance Agency website WILL BE UNINTERRUPTED, TIMELY,
                    SECURE, OR ERROR FREE; (iii) THE QUALITY OF ANY PRODUCTS,
                    SERVICES, INFORMATION OR OTHER MATERIAL PURCHASED OR
                    OBTAINED BY YOU THROUGH THE J&S Insurance Agency website
                    WILL MEET YOUR EXPECTATIONS; OR (iv) J&S Insurance Agency
                    content WILL REMAIN UNCHANGED OR ACCESSIBLE ON THE J&S
                    Insurance Agency website. ALL WARRANTIES, EXPRESS OR
                    IMPLIED, ARE DISCLAIMED TO THE FULLEST EXTENT PERMITTED BY
                    LAW INCLUDING, WITHOUT LIMITATION, ANY WARRANTY OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND/OR
                    NON INFRINGEMENT OF INTELLECTUAL PROPERTY.
                  </li>
                  <li className="pt-2">
                    Limitation of Liability. THE J&S Insurance Agency PARTIES
                    SHALL NOT BE LIABLE, AND DISCLAIM ANY LIABILITY, FOR ANY
                    CLAIM, LOSS OR DAMAGE, DIRECT OR INDIRECT, INCLUDING,
                    WITHOUT LIMITATION, COMPENSATORY, CONSEQUENTIAL, INCIDENTAL,
                    INDIRECT, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES OF ANY KIND
                    WHATSOEVER IN CONNECTION WITH, AS A RESULT OF, OR ARISING
                    (i) OUT OF THE USE OF OR INABILITY TO USE THE J&S Insurance
                    Agency's website AND/OR ANY J&S Insurance Agency content;
                    (ii) FROM ANY INTERRUPTION IN THE AVAILABILITY OF THE J&S
                    Insurance Agency website AND/OR J&S Insurance Agency
                    content; (iii) FROM ANY LOSS OF DATA AND/OR FROM ANY
                    EQUIPMENT FAILURE; (iv) OUT OF THE PROCUREMENT OF SUBSTITUTE
                    GOODS OR SERVICES RESULTING FROM ANY PROBLEMS WITH THE
                    GOODS, CONTENT AND/OR SERVICES PURCHASED OR OBTAINED FROM
                    THE J&S Insurance Agency website, OR TRANSACTIONS ENTERED
                    INTO, THROUGH OR FROM THE J&S Insurance Agency website; (v)
                    FROM UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
                    TRANSMISSIONS OR DATA; (vi) FROM STATEMENTS OR CONDUCT OF
                    ANY THIRD PARTY ON THE J&S Insurance Agency website; (vii)
                    FROM ANY DELAY OR FAILURE OF THE J&S Insurance Agency
                    website ARISING OUT OF CAUSES BEYOND J&S Insurance Agency’
                    CONTROL; (viii) OUT OF THE USE OF, REFERENCE TO, OR RELIANCE
                    ON, THE J&S Insurance Agency content; (ix) OUT OF ANY THIRD
                    PARTY MATERIALS, INFORMATION, PRODUCTS AND SERVICES
                    CONTAINED ON, OR ACCESSED THROUGH, THE J&S Insurance Agency
                    website (x) OUT OF ANY CONTENT, MATERIALS, ACCURACY OF
                    INFORMATION, AND/OR QUALITY OF THE PRODUCTS, SERVICES OR
                    MATERIALS PROVIDED BY OR ADVERTISED ON THIRD-PARTY websites;
                    OR (xi) OUT OF ANY OTHER MATTER RELATING TO THE J&S
                    Insurance Agency website OR J&S Insurance Agency content. In
                    the event, you are dissatisfied with, or dispute, these
                    Terms of Use, the J&S Insurance Agency website, and/or the
                    J&S Insurance Agency content, your sole right and exclusive
                    remedy are to terminate your use of the J&S Insurance Agency
                    website, even if that right or remedy is deemed to fail of
                    its essential purpose. You confirm that J&S Insurance Agency
                    has no other obligation, liability, or responsibility to you
                    or any other party.
                  </li>
                  <li className="pt-2">
                    Exclusions are permitted by law. SOME JURISDICTIONS DO NOT
                    ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR CONDITIONS OR
                    THE LIMITATION OR EXCLUSION OF LIABILITY FOR LOSS OR DAMAGE
                    CAUSED BY NEGLIGENCE, BREACH OF CONTRACT OR BREACH OF
                    IMPLIED TERMS, OR INCIDENTAL OR CONSEQUENTIAL DAMAGES.
                    ACCORDINGLY, ONLY THE ABOVE LIMITATIONS IN SECTIONS 17 AND
                    18 WHICH ARE LAWFUL IN YOUR JURISDICTION WILL APPLY TO YOU
                    AND J&S Insurance Agency' LIABILITY WILL BE LIMITED TO THE
                    MAXIMUM EXTENT PERMITTED BY LAW.
                  </li>
                  <li className="pt-2">
                    Indemnification. To the fullest extent permitted by law, you
                    shall defend, indemnify, and hold harmless the J&S Insurance
                    Agency Parties from and against all claims arising from or
                    in any way related to your use of the J&S Insurance Agency
                    website and/or J&S Insurance Agency's content, a violation
                    by you of these Terms of Use, or any other actions connected
                    with your use of the J&S Insurance Agency website and/or J&S
                    Insurance Agency content, including any liability or
                    expense, losses, damages (actual and consequential), suits,
                    judgments, litigation costs, and attorneys fees. J&S
                    Insurance Agency will provide prompt written notice of any
                    such claims, but failure to provide such notice will not
                    release you from any of your obligations pursuant to this
                    Section except to the extent that you are actually
                    prejudiced by such failure, and will not relieve you from
                    any other liability that you may have to the J&S Insurance
                    Agency Parties other than under this Section.
                  </li>
                  <li className="pt-2">
                    Term and Termination. These Terms of Use will take effect at
                    the time you begin accessing the J&S Insurance Agency
                    website. J&S Insurance Agency reserves the right, with or
                    without notice, at any time and for any reason to deny you
                    access to the J&S Insurance Agency website or to any portion
                    thereof and to terminate these Terms of Use. These Terms of
                    Use will terminate automatically if you fail to comply with
                    the terms set forth herein. You may terminate these Terms of
                    Use at any time by ceasing to use the J&S Insurance Agency
                    Website, but all applicable provisions of these Terms of Use
                    will survive such termination. Upon termination, you must
                    destroy all copies of any portion of the J&S Insurance
                    Agency website, including any J&S Insurance Agency content,
                    in your possession.
                  </li>
                  <li className="pt-2">
                    Arbitration; Venue. Any controversy or claim you have
                    arising out of or relating to these Terms of Use shall be
                    brought solely by you as an individual and not as part of,
                    or as a representative of, a class. To the fullest extent
                    permitted by law, any controversy or claim you have shall be
                    resolved by a single impartial arbitrator pursuant to
                    proceedings administered by the American Arbitration
                    Association under its rules for resolution of commercial
                    disputes. The arbitration shall be ,held in the District of
                    Columbia. All submissions to the arbitrator, the proceedings
                    and the award shall be confidential. The arbitration shall
                    be conducted on an expedited basis with minimal discovery.
                    The arbitrator’s award shall be final and binding. The
                    courts of the District of Columbia shall have exclusive
                    jurisdiction and venue over (i) any action concerning the
                    enforcement of an arbitration award, or (ii) if arbitration
                    is not permitted by law, then any controversy or claim you
                    have arising out of or relating to these Terms of Use. You
                    agree to unconditionally and irrevocably submit to the
                    exclusive jurisdiction and venue of such courts and you will
                    not object to such jurisdiction and venue on the grounds of
                    lack of personal jurisdiction, inconvenient forum or
                    otherwise. EACH PARTY IRREVOCABLY WAIVES ANY AND ALL RIGHT
                    TO TRIAL BY JURY IN ANY LEGAL PROCEEDING ARISING OUT OF OR
                    RELATED TO THESE TERMS OF USE. J&S Insurance Agency reserves
                    all rights and remedies available to it, in law or equity,
                    with respect to any matter relating to these Terms of Use.
                  </li>
                  <li className="pt-2">
                    Governing Law. These Terms of Use and all matters regarding
                    your use of the J&S Insurance Agency website shall be
                    governed by, construed in accordance with, and enforced
                    under the laws of the District of Columbia applicable to
                    contracts made and executed and wholly performed in the
                    District of Columbia, without regard to choice of law
                    principles. Neither the Uniform Computer Information
                    Transaction Act nor the United Nations Convention on
                    Contracts for International Sale of Goods apply and their
                    applicability is expressly excluded. Printed copies of any
                    and all agreements and/or notices in electronic form shall
                    be admissible in any legal, investigative, or regulatory
                    proceedings.
                  </li>
                  <li className="pt-2">
                    Waiver and Severability. The failure of J&S Insurance Agency
                    to exercise or enforce any right or provision in these Terms
                    of Use shall not constitute a waiver of such right or
                    provision. If any provision of these Terms of Use is found
                    by a court of competent jurisdiction to be invalid, illegal,
                    or unenforceable, such provision shall be enforced to the
                    fullest extent of the law, and all other provisions shall
                    remain in full force and effect.
                  </li>
                  <li className="pt-2">
                    Click-through Agreement, constitutes the entire agreement
                    between you and the J&S Insurance Agency relating to the J&S
                    Insurance Agency website and its use by you and supersedes
                    any previous written or oral communication regarding use of
                    the J&S Insurance Agency website. The J&S Insurance Agency
                    website is intended to be consistent with and in furtherance
                    of the J&S Insurance Agency policies adopted by the J&S
                    Insurance Agency Board of Trustees.
                  </li>
                  <li className="pt-2">
                    Contact Information. If you have any questions or concerns
                    regarding these Terms of Use or the J&S Insurance Agency
                    website, please visit our “Contact Us” page.
                  </li>
                  <li className="pt-2">
                    Statute of Limitations. Regardless of any statute or law to
                    the contrary, any claim or cause of action arising out of or
                    related to your use of the J&S Insurance Agency website must
                    be filed by you within one (1) year after such claim or
                    cause of action arose or be forever barred.
                  </li>
                  <li className="pt-2">
                    Use of J&S Insurance Agency website and J&S Insurance Agency
                    content outside of the United States. J&S Insurance Agency
                    makes no claims regarding access or use of the J&S Insurance
                    Agency website or the J&S Insurance Agency content outside
                    of the United States. If you use or access the J&S Insurance
                    Agency website or the J&S Insurance Agency content outside
                    of the United States, you do so at your own risk and are
                    responsible for compliance with the laws and regulations of
                    your jurisdiction as well as these Terms of Use.
                  </li>
                </ol>
              </div>
              {/* //  */}

              <div className="text-left flex flex-col justify-start font-cormorantgaramond pt-5">
                {/* <h1 className="text-2xl text-gray-600 font-semibold">
                  CONTACT US
                </h1>
                <h2 className="py-4 ">
                  If you have questions or comments about this Privacy Policy,
                  please contact us at:
                </h2> */}
                <h3 className="pt-4 font-semibold">
                  J&S INSURANCE AGENCY INC.
                </h3>
                <h3 className="pb-4">DBA Jay S Insurance Agency</h3>
                <h4>
                  {" "}
                  <span className="font-semibold">Location:</span> Fresno
                  California - USA
                </h4>
                <h4>
                  {" "}
                  <span className="font-semibold">Email: </span>{" "}
                  sandy@jsinsur.com
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
