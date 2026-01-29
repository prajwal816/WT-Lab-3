import Layout from "@/components/Layout";

const Services = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-400">
              Comprehensive technology solutions tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-slate-400">
                Migrate to the cloud with confidence. We provide end-to-end
                cloud migration, optimization, and management services.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
              <p className="text-slate-400">
                Turn your data into actionable insights with our advanced
                analytics and business intelligence solutions.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
              <p className="text-slate-400">
                Protect your business with enterprise-grade security solutions
                and 24/7 monitoring services.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4">AI & Machine Learning</h3>
              <p className="text-slate-400">
                Leverage artificial intelligence to automate processes and gain
                competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
