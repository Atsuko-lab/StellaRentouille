import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NousContacter from '../index';
describe('Composant NousContacter', () => {
  it('devrait afficher le titre "Transmission"', () => {
    render(<NousContacter />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('devrait afficher le formulaire de contact par défaut', () => {
    const { container } = render(<NousContacter />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('devrait afficher le champ "Identifiant Pilote"', () => {
    render(<NousContacter />);
    expect(screen.getByPlaceholderText('Ex: Neil Armstrong')).toBeInTheDocument();
  });

  it('devrait afficher le champ email', () => {
    render(<NousContacter />);
    expect(screen.getByPlaceholderText('nom@galaxie.com')).toBeInTheDocument();
  });

  it('devrait afficher le champ message', () => {
    render(<NousContacter />);
    expect(screen.getByPlaceholderText(/D.crivez votre requ.te/)).toBeInTheDocument();
  });

  it('devrait afficher le select avec les options', () => {
    render(<NousContacter />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Achat de G.ante Gazeuse/ })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /Autre/ })).toBeInTheDocument();
  });

  it('devrait afficher le bouton de soumission', () => {
    render(<NousContacter />);
    expect(screen.getByRole('button', { name: /Envoyer la transmission/i })).toBeInTheDocument();
  });

  it('devrait afficher le message de succès après soumission', () => {
    const { container } = render(<NousContacter />);
    fireEvent.submit(container.querySelector('form'));
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(container.querySelector('form')).toBeNull();
  });

  it('devrait afficher le bouton "Nouvelle transmission" après soumission', () => {
    const { container } = render(<NousContacter />);
    fireEvent.submit(container.querySelector('form'));
    expect(screen.getByRole('button', { name: /Nouvelle transmission/i })).toBeInTheDocument();
  });

  it('devrait réafficher le formulaire après clic sur "Nouvelle transmission"', () => {
    const { container } = render(<NousContacter />);
    fireEvent.submit(container.querySelector('form'));
    fireEvent.click(screen.getByRole('button', { name: /Nouvelle transmission/i }));
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('devrait avoir le champ email de type email', () => {
    render(<NousContacter />);
    expect(screen.getByPlaceholderText('nom@galaxie.com')).toHaveAttribute('type', 'email');
  });

  it('devrait avoir les champs requis marqués required', () => {
    render(<NousContacter />);
    expect(screen.getByPlaceholderText('Ex: Neil Armstrong')).toBeRequired();
    expect(screen.getByPlaceholderText('nom@galaxie.com')).toBeRequired();
  });
});
