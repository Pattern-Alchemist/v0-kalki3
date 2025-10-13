import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Terms of Service | AstroKalki",
  description: "Terms of Service for AstroKalki - Read our terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Terms of Service</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <p className="text-sm text-muted-foreground mb-6">
                  Last Updated:{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p>
                  Welcome to AstroKalki. These Terms of Service ("Terms") govern your access to and use of our website,
                  services, and consultations. By accessing or using our services, you agree to be bound by these Terms.
                  If you do not agree with any part of these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By creating an account, booking a consultation, or using any of our services, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy. These
                  Terms constitute a legally binding agreement between you and AstroKalki.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services Description</h2>
                <p>AstroKalki provides:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Astrological consultations and readings</li>
                  <li>Intuitive astrology guidance</li>
                  <li>Psychic healing services</li>
                  <li>Life coaching sessions</li>
                  <li>Birth chart analysis and interpretations</li>
                  <li>Tarot readings and spiritual guidance</li>
                  <li>Educational content and tools related to astrology and spirituality</li>
                </ul>
                <p>
                  Our services are provided for entertainment, guidance, and personal development purposes. They are not
                  a substitute for professional medical, legal, financial, or psychological advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Eligibility</h2>
                <p>
                  You must be at least 18 years of age to use our services. By using our services, you represent and
                  warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Account Registration</h2>
                <p>To access certain features, you may need to create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent
                  or inappropriate behavior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Booking and Consultations</h2>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Booking Process</h3>
                <p>
                  Consultations can be booked through our website or via WhatsApp. When booking, you must provide
                  accurate birth details and contact information. Confirmation of your booking will be sent via email or
                  WhatsApp.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Payment</h3>
                <p>
                  Payment is required at the time of booking unless otherwise specified. We accept payments through
                  secure payment gateways. All prices are listed in Indian Rupees (INR) and are subject to change
                  without notice.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cancellation and Rescheduling</h3>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>
                    Cancellations made at least 24 hours before the scheduled consultation are eligible for a full
                    refund
                  </li>
                  <li>
                    Cancellations made less than 24 hours before the consultation may be subject to a cancellation fee
                  </li>
                  <li>Rescheduling requests should be made at least 12 hours in advance</li>
                  <li>No-shows without prior notice will not be eligible for refunds</li>
                  <li>
                    We reserve the right to cancel or reschedule consultations due to unforeseen circumstances, in which
                    case a full refund or alternative date will be offered
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Consultation Conduct</h3>
                <p>During consultations, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Be respectful and courteous to our practitioners</li>
                  <li>Provide honest and accurate information</li>
                  <li>Not record sessions without prior written consent</li>
                  <li>Maintain confidentiality of any personal information shared by the practitioner</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Disclaimer of Warranties</h2>
                <p className="font-semibold">IMPORTANT: Please read this section carefully.</p>
                <p>
                  Astrological readings, psychic guidance, and spiritual consultations are subjective interpretations
                  based on ancient wisdom, intuition, and symbolic systems. While we strive to provide meaningful and
                  insightful guidance, we make no guarantees about:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>The accuracy or completeness of any reading or prediction</li>
                  <li>Specific outcomes or results from following our guidance</li>
                  <li>The resolution of personal, professional, or health-related issues</li>
                </ul>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or
                  implied. You acknowledge that:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Astrology and spiritual guidance are not exact sciences</li>
                  <li>Free will and personal choices ultimately determine outcomes</li>
                  <li>
                    Our services should not replace professional advice from licensed practitioners in medical, legal,
                    financial, or mental health fields
                  </li>
                  <li>You are solely responsible for decisions made based on our guidance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, AstroKalki, its practitioners, and affiliates shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Your use of or inability to use our services</li>
                  <li>Any decisions or actions taken based on our guidance</li>
                  <li>Unauthorized access to your personal information</li>
                  <li>Technical errors or interruptions in service</li>
                  <li>Any other matter relating to our services</li>
                </ul>
                <p>
                  Our total liability for any claims arising from our services shall not exceed the amount you paid for
                  the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, images, audio clips, and software, is the
                  property of AstroKalki or its content suppliers and is protected by intellectual property laws. You
                  may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Reproduce, distribute, or create derivative works from our content without permission</li>
                  <li>Use our content for commercial purposes without authorization</li>
                  <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                  <li>Frame or mirror any portion of our website</li>
                </ul>
                <p>
                  Personal readings and reports provided to you are for your personal use only and may not be shared,
                  published, or distributed without our written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Use our services for any unlawful purpose or in violation of these Terms</li>
                  <li>Harass, abuse, or harm our practitioners or other users</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt our services or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Upload or transmit viruses, malware, or harmful code</li>
                  <li>Collect or harvest information about other users</li>
                  <li>Use automated systems (bots, scrapers) to access our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Confidentiality</h2>
                <p>
                  We respect the confidential nature of consultations. Information shared during sessions will be kept
                  confidential, except where:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Required by law or legal process</li>
                  <li>Necessary to protect the safety of individuals</li>
                  <li>You have given explicit consent to share</li>
                </ul>
                <p>
                  Similarly, we ask that you respect the confidentiality of our practitioners and not share their
                  personal information or proprietary methods.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">11. Refund Policy</h2>
                <p>
                  Due to the personalized nature of our services, refunds are generally not provided once a consultation
                  has been completed. However, we may offer refunds or credits in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Technical issues prevented the consultation from taking place</li>
                  <li>The practitioner failed to show up for a scheduled session</li>
                  <li>Cancellation made in accordance with our cancellation policy</li>
                </ul>
                <p>
                  Refund requests must be submitted within 7 days of the service date and will be reviewed on a
                  case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">12. Third-Party Services</h2>
                <p>
                  Our website may integrate with third-party services (payment processors, communication platforms,
                  etc.). Your use of these services is subject to their respective terms and privacy policies. We are
                  not responsible for the practices or content of third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  13. Modifications to Services and Terms
                </h2>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without
                  notice. We may also update these Terms periodically. Continued use of our services after changes
                  constitutes acceptance of the modified Terms. Material changes will be communicated via email or
                  website notification.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">14. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our services immediately, without prior
                  notice, for any reason, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Abusive behavior toward practitioners or staff</li>
                  <li>Non-payment for services</li>
                </ul>
                <p>
                  Upon termination, your right to use our services will immediately cease, and we may delete your
                  account and associated data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  15. Governing Law and Dispute Resolution
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                  conflict of law principles. Any disputes arising from these Terms or our services shall be resolved
                  through:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Binding arbitration in accordance with Indian arbitration laws</li>
                </ul>
                <p>
                  The courts of Delhi, India shall have exclusive jurisdiction over any disputes that cannot be resolved
                  through arbitration.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">16. Severability</h2>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
                  shall continue in full force and effect. The invalid provision shall be modified to the minimum extent
                  necessary to make it valid and enforceable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">17. Entire Agreement</h2>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                  AstroKalki regarding the use of our services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">18. Contact Information</h2>
                <p>
                  If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-muted/50 p-6 rounded-lg mt-4">
                  <p className="font-semibold">AstroKalki</p>
                  <p>WhatsApp: +91 8920862931</p>
                  <p>Website: www.astrokalki.com</p>
                </div>
              </section>

              <section className="border-t pt-8 mt-12">
                <p className="text-sm text-muted-foreground italic">
                  By using AstroKalki's services, you acknowledge that you have read, understood, and agree to be bound
                  by these Terms of Service. Thank you for choosing AstroKalki for your spiritual journey.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
