"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/linear-manicure-nail-salon-logo_23-2149852738.jpg"
      logoAlt="Unha de Gel Capão Redondo logo"
      brandName="Unha de Gel Capão Redondo"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Unha de Gel Capão Redondo"
      description="Transforme suas unhas em obras de arte. Qualidade e beleza em cada detalhe, bem no coração de Capão Redondo, Zona Sul SP."
      buttons={[
        {
          text: "Agende Seu Horário",
          href: "#contact",
        },
        {
          text: "Nossos Serviços",
          href: "#services",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/expensive-hotel-reception-with-empty-modern-front-desk_482257-98967.jpg",
          imageAlt: "Modern and elegant nail salon interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-female-hands-finger-nail-treatment-making-process-professional-nail-file-drill-action-beauty-hand-care-concept_343596-1827.jpg",
          imageAlt: "Close-up of beautiful gel nails with artistic decoration",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/male-female-friends-getting-manicure-together_23-2150285925.jpg",
          imageAlt: "Nail technician meticulously working on a client's nails",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-frame-with-birthday-whistles-copy-space_23-2148425715.jpg",
          imageAlt: "Collection of vibrant nail polish bottles and colors",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/masseuse-use-two-hand-foot-massage-with-young-female_1150-20444.jpg",
          imageAlt: "Client enjoying a relaxing spa pedicure treatment",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-nail-care-items-arrangement_23-2149046495.jpg",
          imageAlt: "Clean and sanitized professional nail tools",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Quem Somos"
      title="Sua Beleza em Primeiro Lugar"
      description="Na Unha de Gel Capão Redondo, dedicamos paixão e expertise para realçar a beleza das suas mãos e pés."
      subdescription="Oferecemos um ambiente acolhedor e serviços personalizados, utilizando produtos de alta qualidade e as últimas tendências em nail art para garantir sua satisfação."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/illuminated-couch-armchair_1203-771.jpg"
      mediaAnimation="opacity"
      imageAlt="friendly nail salon staff smiling"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "s1",
          title: "Unhas de Gel Duradouras",
          author: "Tecnologia Avançada",
          description: "Gel de alta resistência para um acabamento impecável e durabilidade prolongada.",
          tags: [
            "Gel",
            "Durabilidade",
            "Brilho",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-woman-s-hand-with-white-manicure_181624-61773.jpg",
          imageAlt: "Beautiful, long-lasting gel nails",
        },
        {
          id: "s2",
          title: "Unhas Decoradas Exclusivas",
          author: "Criatividade e Arte",
          description: "Designs únicos e personalizados que refletem sua personalidade e estilo.",
          tags: [
            "Nail Art",
            "Personalizado",
            "Tendência",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-hands-holding-multicolored-ribbons_23-2147988536.jpg",
          imageAlt: "Intricate and creative decorated nail art",
        },
        {
          id: "s3",
          title: "Manicure e Pedicure Completas",
          author: "Cuidado Total",
          description: "Tratamentos completos para a saúde e beleza das suas mãos e pés, com hidratação profunda.",
          tags: [
            "Manicure",
            "Pedicure",
            "Spa",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-manicure-pink-t-shirt-with-black-gloves-black-mask-sitting-front-table-using-phone-blue_140725-24236.jpg",
          imageAlt: "Relaxing manicure and pedicure spa treatment",
        },
      ]}
      title="Nossos Serviços de Destaque"
      description="Descubra a variedade e excelência que temos a oferecer para suas unhas."
      tag="Especialidades"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Elegância Clássica",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-manicured-womans-hands-knees_343596-718.jpg",
          imageAlt: "Minimalist white gel nails",
        },
        {
          id: "p2",
          name: "Vermelho Paixão",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-hand-with-red-manicure-two-rings-fingers-beautiful-green-palm-leaf-tropical-gray-wall_343596-3251.jpg",
          imageAlt: "Vibrant red gel nails",
        },
        {
          id: "p3",
          name: "Brilho Estrelar",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/manicurist-doing-gel-nail-design-client-close-up_127675-2376.jpg",
          imageAlt: "Sparkling glitter gradient gel nails",
        },
        {
          id: "p4",
          name: "Jardim Secreto",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-manicure-yellow-flower_23-2149311593.jpg",
          imageAlt: "Delicate floral painted nail art",
        },
        {
          id: "p5",
          name: "Arte Moderna",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-with-beautiful-nails_23-2149921690.jpg",
          imageAlt: "Geometric abstract nail art",
        },
        {
          id: "p6",
          name: "Francesinha Perfeita",
          price: "Consulte",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-her-nail-art-fingernails-with-glass_23-2149820409.jpg",
          imageAlt: "Luxurious french tip gel nails",
        },
      ]}
      title="Nossa Galeria de Nail Art"
      description="Inspire-se com alguns dos nossos trabalhos mais recentes e deslumbrantes."
      tag="Inspiração"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ana Clara S.",
          handle: "@anaclaranails",
          testimonial: "As melhores unhas de gel que já fiz! Duram muito e o atendimento é impecável. Recomendo de olhos fechados!",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-getting-her-nails-fixed-by-manicurist-inside-room-beauty-manicure-nails-hand-self-care_140725-65113.jpg",
          imageAlt: "Happy client Ana Clara S.",
        },
        {
          id: "t2",
          name: "Beatriz M.",
          handle: "@beatrizmarques",
          testimonial: "Minhas unhas decoradas ficaram exatamente como eu queria, superou minhas expectativas. Trabalho de artista!",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-stylish-make-up-red-lips-green-sweater-posing-pink_285396-189.jpg",
          imageAlt: "Client Beatriz M. with elegant decorated nails",
        },
        {
          id: "t3",
          name: "Carla P.",
          handle: "@carlapereira",
          testimonial: "Ambiente super agradável e as meninas são muito atenciosas. Minha manicure e pedicure estão sempre perfeitas aqui.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-makeup-artist-with-client-choosing-eyeshadow_23-2148113255.jpg",
          imageAlt: "Client Carla P. with perfectly shaped nails",
        },
        {
          id: "t4",
          name: "Daniella R.",
          handle: "@daniellaramos",
          testimonial: "Sempre saio daqui com as unhas lindas e um sorriso no rosto. Profissionalismo e carinho em cada detalhe!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-enjoying-ice-cream-sandwich_23-2148161738.jpg",
          imageAlt: "Smiling client Daniella R.",
        },
        {
          id: "t5",
          name: "Elisa F.",
          handle: "@elisafreitas",
          testimonial: "O melhor lugar para fazer as unhas na Zona Sul! Os produtos são de primeira e o resultado é sempre maravilhoso.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-lipstick-looking-mirror_23-2148332467.jpg",
          imageAlt: "Client Elisa F. looking at her newly done nails",
        },
      ]}
      title="O Que Nossas Clientes Dizem"
      description="Veja os depoimentos de quem já experimentou a excelência dos nossos serviços."
      tag="Satisfação"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Quais são os horários de atendimento?",
          content: "Nosso salão funciona de Terça a Sábado, das 9h às 18h. Para feriados, favor consultar nossa disponibilidade.",
        },
        {
          id: "q2",
          title: "Preciso agendar um horário?",
          content: "Sim, para garantir o melhor atendimento e evitar esperas, recomendamos que você agende seu horário com antecedência, especialmente para unhas de gel e decoradas.",
        },
        {
          id: "q3",
          title: "Quanto tempo dura a unha de gel?",
          content: "As unhas de gel da Unha de Gel Capão Redondo podem durar de 20 a 30 dias, dependendo do crescimento natural da sua unha e dos cuidados pós-aplicação.",
        },
        {
          id: "q4",
          title: "Quais formas de pagamento são aceitas?",
          content: "Aceitamos Pix, dinheiro e cartões de débito/crédito das principais bandeiras.",
        },
      ]}
      sideTitle="Dúvidas Frequentes"
      sideDescription="Encontre as respostas para as perguntas mais comuns sobre nossos serviços."
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Agende Seu Horário"
      description="Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento em nossa unidade de Capão Redondo, Zona Sul SP."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Seu Nome Completo",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Seu Telefone",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Seu Melhor E-mail",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Qual serviço você deseja agendar?",
        rows: 4,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/female-remote-worker-smiling-virtual-meeting-with-her-trainer_482257-121075.jpg"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Confirmar Agendamento"
      imageAlt="front desk of a modern nail salon"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="http://img.b2bpic.net/free-vector/linear-manicure-nail-salon-logo_23-2149852738.jpg"
      logoAlt="nail salon logo elegant"
      logoText="Unha de Gel Capão Redondo"
      leftLink={{
        text: "Termos de Uso",
        href: "#",
      }}
      rightLink={{
        text: "Política de Privacidade",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
