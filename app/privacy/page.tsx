import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata = {
  title: "Privacy Policy | AstroKalki",
  description: "Privacy Policy for AstroKalki - Learn how we protect and handle your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">Privacy Policy</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none space-y-8 text-foreground/80">
              <section>
                <p className="text-sm text-muted-foreground mb-6">
                  Last Updated:{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <p>
                  At AstroKalki, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Register for an account</li>
                  <li>Book a consultation or service</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our website</li>
                  <li>Participate in our community forums</li>
                </ul>
                <p>This information may include:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Name and contact information (email, phone number, WhatsApp number)</li>
                  <li>Birth details (date, time, and place of birth for astrological readings)</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide during consultations</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect certain information about your device,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your bookings and consultations</li>
                  <li>Generate personalized astrological readings and reports</li>
                  <li>Communicate with you about appointments, services, and updates</li>
                  <li>Send you newsletters and promotional materials (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Service Providers</h3>
                <p>
                  We may share your information with trusted third-party service providers who assist us in operating
                  our website, conducting our business, or servicing you, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Payment processors (for secure transaction processing)</li>
                  <li>Email service providers (for newsletters and communications)</li>
                  <li>Cloud hosting services (for data storage)</li>
                  <li>Analytics providers (to understand website usage)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by
                  public authorities (e.g., court orders, government agencies).
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part
                  of that transaction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2 my-4">
                  <li>Encryption of sensitive data during transmission (SSL/TLS)</li>
                  <li>Secure storage of personal information</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights and Choices</h2>
                <p>You have the following rights regarding your personal information:</p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Access and Correction</h3>
                <p>
                  You may access, update, or correct your personal information by logging into your account or
                  contacting us directly.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Deletion</h3>
                <p>
                  You may request deletion of your personal information, subject to certain legal obligations that may
                  require us to retain certain data.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing Communications</h3>
                <p>
                  You may opt out of receiving promotional emails by clicking the "unsubscribe" link in any marketing
                  email or by contacting us directly. Note that you may still receive transactional emails related to
                  your bookings and services.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Cookies</h3>
                <p>
                  You can control cookies through your browser settings. However, disabling cookies may affect your
                  ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us, and we will take steps to delete such
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on servers located outside of your state,
                  province, country, or other governmental jurisdiction where data protection laws may differ. By using
                  our services, you consent to the transfer of your information to India and other countries where we
                  operate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices or content of these external sites. We encourage you to review the privacy policies of any
                  third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                  requirements. We will notify you of any material changes by posting the updated policy on our website
                  with a new "Last Updated" date. Your continued use of our services after such changes constitutes your
                  acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
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
                  by this Privacy Policy.
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
