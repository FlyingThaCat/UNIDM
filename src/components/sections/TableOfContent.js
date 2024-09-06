import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const TableOfContentSection = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const offset = 0; // Adjust this value for your layout (header height, etc.)

    if (section) {
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div id="toc" className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
          <CardHeader>
          <CardTitle>Table Of Content</CardTitle>
          <CardDescription>A quick shortcut to navigate through the post</CardDescription>
          </CardHeader>
          <CardContent>
          <a
              onClick={() => handleScroll('day1')}
              className="mt-5 block cursor-pointer"
            >
              Day 1
            </a>
            <a
              onClick={() => handleScroll('Sekilas Telkom University')}
              className="ml-2 block cursor-pointer"
            >
              Sekilas Telkom University
            </a>
            <a
              onClick={() => handleScroll('Pengenalan Pedoman Akademik')}
              className="ml-2 block cursor-pointer"
            >
              Pengenalan Pedoman Akademik
            </a>
            <a
              onClick={() => handleScroll('Budaya HEI DI Universitas')}
              className="ml-2 block cursor-pointer"
            >
              Budaya HEI DI Universitas
            </a>
            <a
              onClick={() => handleScroll('Pengenalan Aktifitas dan Layanan')}
              className="ml-2 block cursor-pointer"
            >
              Pengenalan Aktifitas dan Layanan
            </a>
            <a
              onClick={() => handleScroll('Wawasan Kebangsaan')}
              className="ml-2 block cursor-pointer"
            >
              Wawasan Kebangsaan
            </a>
            <a
              onClick={() => handleScroll('Sosialsasi SSO')}
              className="ml-2 block cursor-pointer"
            >
              Sosialsasi SSO
            </a>
            <a
              onClick={() => handleScroll('Mental Health')}
              className="ml-2 block cursor-pointer"
            >
              Mental Health
            </a>
            <a
              onClick={() => handleScroll('day2')}
              className="mt-5 block cursor-pointer"
            >
              Day 2
            </a>
            <a
              onClick={() => handleScroll('Perguruan Tinggi Di Era 5.0')}
              className="ml-2 block cursor-pointer"
            >
              Perguruan Tinggi Di Era 5.0
            </a>
            <a
              onClick={() => handleScroll('Cara Menulis Karya Tulis Ilmiah')}
              className="ml-2 block cursor-pointer"
            >
              Cara Menulis Karya Tulis Ilmiah
            </a>
            <a
              onClick={() => handleScroll('Bagaimana Cara Menjadi Percaya Diri')}
              className="ml-2 block cursor-pointer"
            >
              Bagaimana Cara Menjadi Percaya Diri
            </a>
            <a
              onClick={() => handleScroll('day3')}
              className="mt-5 block cursor-pointer"
            >
              Day 3
            </a>
            <a
              onClick={() => handleScroll('INTEREST')}
              className="ml-2 block cursor-pointer"
            >
              INTEREST
            </a>
            <a
              onClick={() => handleScroll('Sustainibility & Electricity Development')}
              className="ml-2 block cursor-pointer"
            >
              Sustainibility & Electricity Development
            </a>
            <a
              onClick={() => handleScroll('REV')}
              className="ml-2 block cursor-pointer"
            >
              REV
            </a>
            <a
              onClick={() => handleScroll('Motion Technology')}
              className="ml-2 block cursor-pointer"
            >
              Motion Technology
            </a>
            <a
              onClick={() => handleScroll('PPKS')}
              className="ml-2 block cursor-pointer"
            >
              PPKS
            </a>
            <a
              onClick={() => handleScroll('TAK')}
              className="ml-2 block cursor-pointer"
            >
              TAK
            </a>
            <a
              onClick={() => handleScroll('testimonial')}
              className="mt-5 block cursor-pointer"
            >
              Testimonial
            </a>
          </CardContent>
      </Card>
      </div>
    </>
  );
};
