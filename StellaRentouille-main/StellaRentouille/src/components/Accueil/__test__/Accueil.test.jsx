import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Accueil from '../index';

// Mock les images
vi.mock('../../assets/image1.jpg', () => ({ default: 'image1.jpg' }));
vi.mock('../../assets/image2.jpg', () => ({ default: 'image2.jpg' }));
vi.mock('../../assets/image3.jpg', () => ({ default: 'image3.jpg' }));

describe('Composant Accueil', () => {
  it('devrait afficher le composant sans erreur', () => {
    render(<Accueil />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('devrait afficher le titre principal', () => {
    render(<Accueil />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Accueil - StellarRentouille');
  });

  it('devrait afficher 3 images avec les bons alt texts', () => {
    render(<Accueil />);
    
    const image1 = screen.getByAltText('Univers');
    const image2 = screen.getByAltText('Planète Vénus');
    const image3 = screen.getByAltText('Planète Saturne');
    
    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(image3).toBeInTheDocument();
  });

  it('devrait afficher le texte descriptif sur StellarRentouille', () => {
    render(<Accueil />);
    
    expect(screen.getByText(/StellarRentouille est la plateforme de référence/i)).toBeInTheDocument();
  });

  it('devrait afficher le texte sur les certificats', () => {
    render(<Accueil />);
    
    expect(screen.getByText(/Chaque achat inclut une jouissance exclusive/i)).toBeInTheDocument();
  });

  it('devrait afficher le texte sur les utilisations possibles', () => {
    render(<Accueil />);
    
    expect(screen.getByText(/Utilisez votre astre comme base de recherche/i)).toBeInTheDocument();
  });

  it('devrait avoir 3 conteneurs avec la classe container', () => {
    const { container } = render(<Accueil />);
    
    const containers = container.querySelectorAll('.container');
    expect(containers).toHaveLength(3);
  });

  it('devrait avoir la classe page-wrapper sur le main', () => {
    const { container } = render(<Accueil />);
    
    const main = container.querySelector('main');
    expect(main).toHaveClass('page-wrapper');
  });

  it('devrait avoir des images avec la classe image', () => {
    const { container } = render(<Accueil />);
    
    const images = container.querySelectorAll('.image');
    expect(images).toHaveLength(3);
  });

  it('devrait avoir des paragraphes avec la classe text', () => {
    const { container } = render(<Accueil />);
    
    const texts = container.querySelectorAll('.text');
    expect(texts).toHaveLength(3);
  });
});
