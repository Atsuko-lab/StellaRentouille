import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getPlanets, getAsteroids, getSoleil } from '../index';

let fetchMock;

describe('Services', () => {
  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('getPlanets', () => {
    it('devrait appeler fetch avec /planets.json', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ planets: [] }),
      });
      await getPlanets();
      expect(fetchMock).toHaveBeenCalledWith('/planets.json');
    });

    it('devrait retourner la liste des planètes', async () => {
      const planets = [{ id: 1, nom: 'Mars' }, { id: 2, nom: 'Venus' }];
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ planets }),
      });
      const result = await getPlanets();
      expect(result).toEqual(planets);
    });

    it('devrait retourner un tableau vide si aucune planète', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ planets: [] }),
      });
      const result = await getPlanets();
      expect(result).toEqual([]);
    });
  });

  describe('getAsteroids', () => {
    it('devrait appeler fetch avec /asteroides.json', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ asteroides: [] }),
      });
      await getAsteroids();
      expect(fetchMock).toHaveBeenCalledWith('/asteroides.json');
    });

    it('devrait retourner la liste des astéroïdes', async () => {
      const asteroides = [{ id: 1, nom: 'Ceres' }];
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ asteroides }),
      });
      const result = await getAsteroids();
      expect(result).toEqual(asteroides);
    });

    it('devrait retourner un tableau vide si aucun astéroïde', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ asteroides: [] }),
      });
      const result = await getAsteroids();
      expect(result).toEqual([]);
    });
  });

  describe('getSoleil', () => {
    it('devrait appeler fetch avec /soleil.json', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ soleils: [] }),
      });
      await getSoleil();
      expect(fetchMock).toHaveBeenCalledWith('/soleil.json');
    });

    it('devrait retourner la liste des soleils', async () => {
      const soleils = [{ id: 1, nom: 'Soleil' }];
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ soleils }),
      });
      const result = await getSoleil();
      expect(result).toEqual(soleils);
    });

    it('devrait retourner un tableau vide si aucun soleil', async () => {
      fetchMock.mockResolvedValue({
        json: () => Promise.resolve({ soleils: [] }),
      });
      const result = await getSoleil();
      expect(result).toEqual([]);
    });
  });
});
