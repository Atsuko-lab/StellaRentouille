import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

vi.mock('../../../services', () => ({
  getPlanets: vi.fn(),
  getAsteroids: vi.fn(),
  getSoleil: vi.fn(),
}));

vi.mock('../../ModalInfo', () => ({
  default: ({ isVisible, onClose }) => isVisible
    ? <div data-testid="modal"><button onClick={onClose}>Fermer</button></div>
    : null,
}));

import { getPlanets, getAsteroids, getSoleil } from '../../../services';
import Marche from '../index';

describe('Composant Marche', () => {
  beforeEach(() => {
    getPlanets.mockResolvedValue([]);
    getAsteroids.mockResolvedValue([]);
    getSoleil.mockResolvedValue([]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('devrait afficher "Loading..." au d�marrage', () => {
    getPlanets.mockReturnValue(new Promise(() => {}));
    render(<Marche />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('devrait appeler getPlanets au montage', async () => {
    render(<Marche />);
    await waitFor(() => expect(getPlanets).toHaveBeenCalled());
  });

  it('devrait appeler getAsteroids au montage', async () => {
    render(<Marche />);
    await waitFor(() => expect(getAsteroids).toHaveBeenCalled());
  });

  it('devrait appeler getSoleil au montage', async () => {
    render(<Marche />);
    await waitFor(() => expect(getSoleil).toHaveBeenCalled());
  });

  it('devrait afficher le titre March� quand les donn�es sont charg�es', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000�', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument());
  });

  it('devrait afficher le sous-titre "D�couvrez toutes nos offres"', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000�', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByRole('paragraph')).toBeInTheDocument());
  });

  it('devrait afficher les noms des plan�tes charg�es', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000�', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByText('Mars')).toBeInTheDocument());
  });

  it('devrait afficher les prix des articles', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByText('100000')).toBeInTheDocument());
  });

  it('devrait afficher les états des articles', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByText('Disponible')).toBeInTheDocument());
  });

  it('devrait afficher les astéroïdes chargés', async () => {
    getPlanets.mockResolvedValue([{ id: 1, nom: 'Mars', img: '', prix: '1€', state: 'Disponible' }]);
    getAsteroids.mockResolvedValue([
      { id: 1, nom: 'Ceres', img: 'ceres.jpg', prix: '5000€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByText('Ceres')).toBeInTheDocument());
  });

  it('devrait afficher les soleils chargés', async () => {
    getPlanets.mockResolvedValue([{ id: 1, nom: 'Mars', img: '', prix: '1€', state: 'Disponible' }]);
    getSoleil.mockResolvedValue([
      { id: 1, nom: 'Soleil', img: 'soleil.jpg', prix: '9999€', state: 'Indisponible' },
    ]);
    render(<Marche />);
    await waitFor(() => expect(screen.getByText('Soleil')).toBeInTheDocument());
  });

  it('devrait ouvrir le modal au clic sur une planète', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => screen.getByText('Mars'));
    fireEvent.click(screen.getByText('Mars').closest('.planet-card'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('devrait ouvrir le modal au clic sur un astéroïde', async () => {
    getPlanets.mockResolvedValue([{ id: 1, nom: 'Mars', img: '', prix: '1€', state: 'Disponible' }]);
    getAsteroids.mockResolvedValue([
      { id: 1, nom: 'Ceres', img: 'ceres.jpg', prix: '5000€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => screen.getByText('Ceres'));
    fireEvent.click(screen.getByText('Ceres').closest('.planet-card'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('devrait ouvrir le modal au clic sur un soleil', async () => {
    getPlanets.mockResolvedValue([{ id: 1, nom: 'Mars', img: '', prix: '1€', state: 'Disponible' }]);
    getSoleil.mockResolvedValue([
      { id: 1, nom: 'Soleil', img: 'soleil.jpg', prix: '9999€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => screen.getByText('Soleil'));
    fireEvent.click(screen.getByText('Soleil').closest('.planet-card'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('devrait fermer le modal via onClose', async () => {
    getPlanets.mockResolvedValue([
      { id: 1, nom: 'Mars', img: 'mars.jpg', prix: '100000€', state: 'Disponible' },
    ]);
    render(<Marche />);
    await waitFor(() => screen.getByText('Mars'));
    fireEvent.click(screen.getByText('Mars').closest('.planet-card'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Fermer'));
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
