import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../index';

// Mock react-router-dom Link
vi.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
}));

describe('Composant Header', () => {
  it('devrait afficher le composant sans erreur', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('devrait afficher le logo avec le texte StellaRentouille', () => {
    render(<Header />);
    const logo = screen.getByText(/🌌 StellaRentouille/i);
    expect(logo).toBeInTheDocument();
  });

  it('devrait afficher le lien Accueil', () => {
    render(<Header />);
    const accueilLink = screen.getByRole('link', { name: /Accueil/i });
    expect(accueilLink).toBeInTheDocument();
  });

  it('devrait afficher le lien Marché', () => {
    render(<Header />);
    const marcheLink = screen.getByRole('link', { name: /Marché/i });
    expect(marcheLink).toBeInTheDocument();
  });

  it('devrait afficher le lien Contact', () => {
    render(<Header />);
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    expect(contactLink).toBeInTheDocument();
  });

  it('devrait avoir la classe site-header sur le header', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('site-header');
  });

  it('devrait avoir la classe site-logo sur le lien logo', () => {
    const { container } = render(<Header />);
    const logo = container.querySelector('a.site-logo');
    expect(logo).toBeInTheDocument();
  });

  it('devrait avoir la classe site-nav sur la nav', () => {
    const { container } = render(<Header />);
    const nav = container.querySelector('nav.site-nav');
    expect(nav).toBeInTheDocument();
  });

  it('devrait avoir 4 liens au total', () => {
    const { container } = render(<Header />);
    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(4);
  });

  it('le lien Accueil devrait pointer vers /', () => {
    render(<Header />);
    const accueilLink = screen.getByRole('link', { name: /Accueil/i });
    expect(accueilLink).toHaveAttribute('href', '/');
  });

  it('le lien Marché devrait pointer vers /marche', () => {
    render(<Header />);
    const marcheLink = screen.getByRole('link', { name: /Marché/i });
    expect(marcheLink).toHaveAttribute('href', '/marche');
  });

  it('le lien Contact devrait pointer vers /contact', () => {
    render(<Header />);
    const contactLink = screen.getByRole('link', { name: /Contact/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('le logo devrait pointer vers /', () => {
    render(<Header />);
    const logo = screen.getByRole('link', { name: /🌌 StellaRentouille/i });
    expect(logo).toHaveAttribute('href', '/');
  });

  it('devrait avoir 3 liens de navigation dans la nav', () => {
    const { container } = render(<Header />);
    const nav = container.querySelector('nav.site-nav');
    const navLinks = nav.querySelectorAll('a');
    expect(navLinks).toHaveLength(3);
  });
});
