import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalInfo from '../index';

const basePlanet = {
  nom: 'Mars',
  img: 'mars.jpg',
  prix: '100000',
  state: 'Disponible',
};

describe('Composant ModalInfo', () => {
  it('ne devrait rien afficher si isVisible est false', () => {
    const { container } = render(
      <ModalInfo stellarObject={basePlanet} isVisible={false} onClose={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('ne devrait rien afficher si stellarObject est null', () => {
    const { container } = render(
      <ModalInfo stellarObject={null} isVisible={true} onClose={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('devrait afficher le nom de l\'objet', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByText('Mars')).toBeInTheDocument();
  });

  it('devrait afficher le prix', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={false} onClose={vi.fn()} />);
    expect(screen.getByText('100000')).toBeInTheDocument();
  });

  it('devrait afficher le statut', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByText('Disponible')).toBeInTheDocument();
  });

  it('devrait afficher l\'image avec le bon alt', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByAltText('Mars')).toBeInTheDocument();
  });

  it('devrait appliquer la classe "available" quand l\'état est Disponible', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={vi.fn()} />);
    const state = screen.getByText('Disponible');
    expect(state).toHaveClass('available');
  });

  it('devrait appliquer la classe "unavailable" quand l\'état n\'est pas Disponible', () => {
    const planet = { ...basePlanet, state: 'Indisponible' };
    render(<ModalInfo stellarObject={planet} isVisible={true} onClose={vi.fn()} />);
    const state = screen.getByText('Indisponible');
    expect(state).toHaveClass('unavailable');
  });

  it('devrait afficher le bouton "Louer cet astre" si disponible', () => {
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByRole('button', { name: /louer cet astre/i })).toBeInTheDocument();
  });

  it('ne devrait pas afficher le bouton "Louer" si indisponible', () => {
    const planet = { ...basePlanet, state: 'Indisponible' };
    render(<ModalInfo stellarObject={planet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.queryByRole('button', { name: /louer cet astre/i })).toBeNull();
  });

  it('devrait appeler onClose au clic sur le bouton de fermeture', () => {
    const onClose = vi.fn();
    render(<ModalInfo stellarObject={basePlanet} isVisible={true} onClose={onClose} />);
    fireEvent.click(screen.getByText('✕'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('devrait appeler onClose au clic sur l\'overlay', () => {
    const onClose = vi.fn();
    const { container } = render(
      <ModalInfo stellarObject={basePlanet} isVisible={true} onClose={onClose} />
    );
    fireEvent.click(container.querySelector('.modal-overlay'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('ne devrait pas propager le clic depuis le contenu modal', () => {
    const onClose = vi.fn();
    const { container } = render(
      <ModalInfo stellarObject={basePlanet} isVisible={true} onClose={onClose} />
    );
    fireEvent.click(container.querySelector('.modal-content'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('devrait afficher taille_km si fourni', () => {
    const planet = { ...basePlanet, taille_km: 6779 };
    render(<ModalInfo stellarObject={planet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByText(/6779 km/)).toBeInTheDocument();
  });

  it('devrait afficher le type si fourni', () => {
    const planet = { ...basePlanet, type: 'Tellurique' };
    render(<ModalInfo stellarObject={planet} isVisible={true} onClose={vi.fn()} />);
    expect(screen.getByText(/Tellurique/)).toBeInTheDocument();
  });
});
