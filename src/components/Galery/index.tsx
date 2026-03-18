// Este componente exibe uma galeria de produtos utilizando um grid responsivo.
// Cada card representa um produto ou modelo, com destaque para o principal.
// O overlay do card principal exibe informações e botões de ação.
import galeriaHomem from "@/assets/images/hero-mobile.jpg";
import galeriaTenisRoxo from "@/assets/images/tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/mulher.jpg";
import galeriaTenisColorido from "@/assets/images/tenis-moderno.jpg";
import galeriaTenisBrancoPeto from "@/assets/images/tenis-pb.jpg";
import galeriaTenisCinza from "@/assets/images/tenis-esportivo.jpg";
import styles from "./Galery.module.css";
import { Overlay } from "../Overlay";
import { Button } from "../Button";
import { useRouter } from '@tanstack/react-router'

// Componente principal da galeria
export const Galery = () => {
  const router = useRouter();
  return (
    // Container principal da galeria
    <div className="container">
      {/* Grid da galeria, definido pelo CSS Modules */}
      <div className={styles.galleryGrid}>
        {/* Highlight - Modelo Masculino (galeria-homem.jpg) */}
        {/* Card de destaque com overlay e botões */}
        <div className={`${styles.imageCard} ${styles.highlight}`}>
          <img
            src={galeriaHomem}
            alt="Krypton One - Estilo urbano com atitude"
          />
          <Overlay
            title="Krypton One"
            subtitle="Estilo urbano com atitude"
            className="inset-0 justify-center">
            <Button variant='secondary'  onClick={() => router.navigate({ to : "/products/category/$category", params: {category: "feminino"},})}>Feminino</Button>
            <Button variant='secondary'  onClick={() => router.navigate({ to : "/products/category/$category", params: {category: "masculino"},})}>Masculino</Button>
          </Overlay>
        </div>
        {/* Sneaker Purple - Tênis Roxo (galeria-tenis-roxo.jpg) */}
        {/* Card do tênis roxo */}
        <div className={`${styles.imageCard} ${styles.sneakerPurple}`}>
          <img src={galeriaTenisRoxo} alt="Tênis Roxo" />
        </div>

        {/* Model - Modelo Feminina (galeria-modelo.jpg) */}
        {/* Card da modelo feminina */}
        <div className={`${styles.imageCard} ${styles.model}`}>
          <img src={galeriaModelo} alt="Modelo Feminina" />
        </div>

        {/* Sneaker Color - Tênis Colorido (galeria-tenis-colorido.jpg) */}
        {/* Card do tênis colorido */}
        <div className={`${styles.imageCard} ${styles.sneakerColor}`}>
          <img src={galeriaTenisColorido} alt="Tênis Colorido" />
        </div>

        {/* Sneaker White - Tênis Branco e Preto (galeria-tenis-branco-e-preto.jpg) */}
        {/* Card do tênis branco e preto */}
        <div className={`${styles.imageCard} ${styles.sneakerWhite}`}>
          <img src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" />
        </div>

        {/* Sneaker Silver - Tênis Cinza (galeria-tenis-cinza.jpg) */}
        {/* Card do tênis cinza */}
        <div className={`${styles.imageCard} ${styles.sneakerSilver}`}>
          <img src={galeriaTenisCinza} alt="Tênis Cinza" />
        </div>
      </div>
    </div>
  );
};
