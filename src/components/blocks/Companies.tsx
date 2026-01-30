export default function Companies() {
  const logos = [
    { name: 'Dropbox', src: './assets/images/logo-dropbox.svg' },
    { name: 'Norton', src: './assets/images/logo-norton.svg' },
    { name: 'Intercom', src: './assets/images/logo-intercom.svg' },
    { name: 'Decrypt', src: './assets/images/logo-decrypt.svg' },
    { name: 'Cryptoland', src: './assets/images/logo-cryptoland.svg' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1180px] mx-auto px-6">
        <h2 className="text-[32px] lg:text-[40px] font-bold text-text-dark text-center mb-12">
          More than 25,000 teams use Collabs
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={`${logo.name} logo`}
              className="h-8 lg:h-10 opacity-70 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
