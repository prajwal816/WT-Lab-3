import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Now Accepting New Clients
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We help enterprises modernize their infrastructure, streamline
              operations, and unlock new growth opportunities through innovative
              digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                500+
              </div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                98%
              </div>
              <div className="text-slate-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                50+
              </div>
              <div className="text-slate-400">Expert Engineers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                12+
              </div>
              <div className="text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-medium">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We combine deep technical expertise with business acumen to
              deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">
                Lightning Fast Delivery
              </h3>
              <p className="text-slate-400 mb-4">
                Our agile methodology ensures rapid deployment without
                compromising quality. Get to market faster with our streamlined
                processes.
              </p>
              <Link
                to="/services"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">
                Enterprise Security
              </h3>
              <p className="text-slate-400 mb-4">
                Bank-grade security protocols protect your data. SOC 2 compliant
                infrastructure with 24/7 monitoring and threat detection.
              </p>
              <Link
                to="/services"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-slate-400 mb-4">
                Build for today, scale for tomorrow. Our cloud-native
                architecture grows seamlessly with your business demands.
              </p>
              <Link
                to="/services"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-slate-400 mb-4">
                Your success is our priority. Get access to dedicated account
                managers and 24/7 technical support teams.
              </p>
              <Link
                to="/contact"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-3">
                Seamless Integration
              </h3>
              <p className="text-slate-400 mb-4">
                Connect with your existing tools effortlessly. We integrate with
                200+ platforms including Salesforce, SAP, and Oracle.
              </p>
              <Link
                to="/services"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-slate-400 mb-4">
                Stay ahead of the competition with AI, ML, and emerging
                technologies. We bring tomorrow's solutions today.
              </p>
              <Link
                to="/services"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have accelerated their growth with
            our technology solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
