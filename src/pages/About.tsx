import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Nexus Corp
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              We're a team of passionate technologists dedicated to transforming
              businesses through innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-slate-400">
                  To empower businesses with cutting-edge technology solutions
                  that drive growth, efficiency, and innovation in the digital
                  age.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-slate-400">
                  To be the leading technology partner for enterprises
                  worldwide, setting new standards for excellence in digital
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
