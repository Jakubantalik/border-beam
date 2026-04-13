import type { SizeConfig, ThemeColors, BorderBeamColorVariant } from './types';

/**
 * Size presets for border radius and dimensions
 */
export const sizePresets: Record<'sm' | 'md' | 'line', SizeConfig> = {
  sm: {
    borderRadius: 18,
    borderWidth: 1,
    width: 70,
    height: 36,
  },
  md: {
    borderRadius: 16,
    borderWidth: 1,
  },
  line: {
    borderRadius: 16,
    borderWidth: 1,
  },
};

/**
 * Per-size theme presets matching the tuned v5 control panel defaults
 */
export const sizeThemePresets: Record<'sm' | 'md' | 'line', Record<'dark' | 'light', ThemeColors>> = {
  sm: {
    dark: {
      strokeOpacity: 0.48,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: 'rgba(255, 255, 255, 0.3)',
      saturation: 1.2,
    },
    light: {
      strokeOpacity: 0.33,
      innerOpacity: 0.46,
      bloomOpacity: 0.54,
      innerShadow: 'rgba(0, 0, 0, 0.14)',
      saturation: 0.96,
    },
  },
  md: {
    dark: {
      strokeOpacity: 0.48,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: 'rgba(255, 255, 255, 0.27)',
      saturation: 1.2,
    },
    light: {
      strokeOpacity: 0.33,
      innerOpacity: 0.46,
      bloomOpacity: 0.54,
      innerShadow: 'rgba(0, 0, 0, 0.14)',
      saturation: 0.96,
    },
  },
  line: {
    dark: {
      strokeOpacity: 0.72,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: 'rgba(255, 255, 255, 0.1)',
      saturation: 1.2,
    },
    light: {
      strokeOpacity: 0.72,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: 'rgba(0, 0, 0, 0.14)',
      saturation: 1.2,
    },
  },
};

/**
 * @deprecated Use `sizeThemePresets` for per-size theme values.
 * Retained for backward compatibility — maps to `md` size presets.
 */
export const themeColors: Record<'dark' | 'light', ThemeColors> = {
  dark: { ...sizeThemePresets.md.dark },
  light: { ...sizeThemePresets.md.light },
};

/**
 * Color palettes for each color variant
 */
const colorPalettes = {
  colorful: {
    border: [
      { color: 'rgb(255, 50, 100)', pos: '33% -7.4%', size: '70px 40px' },
      { color: 'rgb(40, 140, 255)', pos: '12% -5%', size: '60px 35px' },
      { color: 'rgb(50, 200, 80)', pos: '2.1% 68.3%', size: '40px 70px' },
      { color: 'rgb(30, 185, 170)', pos: '2.1% 68.3%', size: '20px 35px' },
      { color: 'rgb(100, 70, 255)', pos: '74.4% 100%', size: '180px 32px' },
      { color: 'rgb(40, 140, 255)', pos: '55% 100%', size: '85px 26px' },
      { color: 'rgb(255, 120, 40)', pos: '93.9% 0%', size: '74px 32px' },
      { color: 'rgb(240, 50, 180)', pos: '100% 27.1%', size: '26px 42px' },
      { color: 'rgb(180, 40, 240)', pos: '100% 27.1%', size: '52px 48px' },
    ],
    spike: { primary: 'rgb(255, 60, 80)', secondary: 'rgba(40, 190, 180, 0.98)' },
    spikeLt: { primary: 'rgb(200, 30, 60)', secondary: 'rgb(20, 150, 140)' },
  },
  mono: {
    border: [
      { color: 'rgb(180, 180, 180)', pos: '33% -7.4%', size: '70px 40px' },
      { color: 'rgb(140, 140, 140)', pos: '12% -5%', size: '60px 35px' },
      { color: 'rgb(160, 160, 160)', pos: '2.1% 68.3%', size: '40px 70px' },
      { color: 'rgb(130, 130, 130)', pos: '2.1% 68.3%', size: '20px 35px' },
      { color: 'rgb(170, 170, 170)', pos: '74.4% 100%', size: '180px 32px' },
      { color: 'rgb(150, 150, 150)', pos: '55% 100%', size: '85px 26px' },
      { color: 'rgb(190, 190, 190)', pos: '93.9% 0%', size: '74px 32px' },
      { color: 'rgb(145, 145, 145)', pos: '100% 27.1%', size: '26px 42px' },
      { color: 'rgb(165, 165, 165)', pos: '100% 27.1%', size: '52px 48px' },
    ],
    spike: { primary: 'rgb(200, 200, 200)', secondary: 'rgb(170, 170, 170)' },
    spikeLt: { primary: 'rgb(80, 80, 80)', secondary: 'rgb(120, 120, 120)' },
  },
  ocean: {
    border: [
      { color: 'rgb(100, 80, 220)', pos: '33% -7.4%', size: '70px 40px' },
      { color: 'rgb(60, 120, 255)', pos: '12% -5%', size: '60px 35px' },
      { color: 'rgb(80, 100, 200)', pos: '2.1% 68.3%', size: '40px 70px' },
      { color: 'rgb(50, 140, 220)', pos: '2.1% 68.3%', size: '20px 35px' },
      { color: 'rgb(120, 80, 255)', pos: '74.4% 100%', size: '180px 32px' },
      { color: 'rgb(70, 130, 255)', pos: '55% 100%', size: '85px 26px' },
      { color: 'rgb(140, 100, 240)', pos: '93.9% 0%', size: '74px 32px' },
      { color: 'rgb(90, 110, 230)', pos: '100% 27.1%', size: '26px 42px' },
      { color: 'rgb(130, 70, 255)', pos: '100% 27.1%', size: '52px 48px' },
    ],
    spike: { primary: 'rgb(100, 120, 255)', secondary: 'rgba(130, 100, 220, 0.98)' },
    spikeLt: { primary: 'rgb(60, 60, 180)', secondary: 'rgb(80, 100, 200)' },
  },
  sunset: {
    border: [
      { color: 'rgb(255, 80, 50)', pos: '33% -7.4%', size: '70px 40px' },
      { color: 'rgb(255, 160, 40)', pos: '12% -5%', size: '60px 35px' },
      { color: 'rgb(255, 120, 60)', pos: '2.1% 68.3%', size: '40px 70px' },
      { color: 'rgb(255, 200, 50)', pos: '2.1% 68.3%', size: '20px 35px' },
      { color: 'rgb(255, 100, 80)', pos: '74.4% 100%', size: '180px 32px' },
      { color: 'rgb(255, 180, 60)', pos: '55% 100%', size: '85px 26px' },
      { color: 'rgb(255, 60, 60)', pos: '93.9% 0%', size: '74px 32px' },
      { color: 'rgb(255, 140, 50)', pos: '100% 27.1%', size: '26px 42px' },
      { color: 'rgb(255, 90, 70)', pos: '100% 27.1%', size: '52px 48px' },
    ],
    spike: { primary: 'rgb(255, 140, 80)', secondary: 'rgba(255, 100, 60, 0.98)' },
    spikeLt: { primary: 'rgb(200, 80, 40)', secondary: 'rgb(220, 120, 30)' },
  },
};

/**
 * Small size color palettes (compact gradients for button-sized elements)
 */
const smallColorPalettes = {
  colorful: {
    border: [
      { color: 'rgb(50, 200, 80)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgb(30, 185, 170)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgb(255, 120, 40)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgb(100, 70, 255)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgb(240, 50, 180)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgb(180, 40, 240)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgb(40, 140, 255)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgb(255, 50, 100)', pos: '100% 27%', size: '11px 12px' },
    ],
    inner: [
      { color: 'rgba(50, 200, 80, 0.5)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgba(30, 185, 170, 0.45)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgba(255, 120, 40, 0.35)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgba(100, 70, 255, 0.35)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgba(240, 50, 180, 0.3)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgba(180, 40, 240, 0.4)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgba(40, 140, 255, 0.3)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgba(255, 50, 100, 0.3)', pos: '100% 27%', size: '11px 12px' },
    ],
  },
  mono: {
    border: [
      { color: 'rgb(160, 160, 160)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgb(140, 140, 140)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgb(180, 180, 180)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgb(150, 150, 150)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgb(170, 170, 170)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgb(155, 155, 155)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgb(145, 145, 145)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgb(165, 165, 165)', pos: '100% 27%', size: '11px 12px' },
    ],
    inner: [
      { color: 'rgba(160, 160, 160, 0.25)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgba(140, 140, 140, 0.22)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgba(180, 180, 180, 0.17)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgba(150, 150, 150, 0.17)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgba(170, 170, 170, 0.15)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgba(155, 155, 155, 0.20)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgba(145, 145, 145, 0.15)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgba(165, 165, 165, 0.15)', pos: '100% 27%', size: '11px 12px' },
    ],
  },
  ocean: {
    border: [
      { color: 'rgb(60, 140, 200)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgb(50, 120, 180)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgb(100, 80, 220)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgb(80, 100, 255)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgb(120, 70, 240)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgb(90, 80, 220)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgb(70, 110, 255)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgb(110, 90, 230)', pos: '100% 27%', size: '11px 12px' },
    ],
    inner: [
      { color: 'rgba(60, 140, 200, 0.5)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgba(50, 120, 180, 0.45)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgba(100, 80, 220, 0.35)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgba(80, 100, 255, 0.35)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgba(120, 70, 240, 0.3)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgba(90, 80, 220, 0.4)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgba(70, 110, 255, 0.3)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgba(110, 90, 230, 0.3)', pos: '100% 27%', size: '11px 12px' },
    ],
  },
  sunset: {
    border: [
      { color: 'rgb(255, 180, 50)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgb(255, 150, 40)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgb(255, 80, 60)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgb(255, 100, 80)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgb(255, 60, 80)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgb(255, 120, 60)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgb(255, 200, 50)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgb(255, 90, 70)', pos: '100% 27%', size: '11px 12px' },
    ],
    inner: [
      { color: 'rgba(255, 180, 50, 0.5)', pos: '2% 68%', size: '9px 18px' },
      { color: 'rgba(255, 150, 40, 0.45)', pos: '2% 68%', size: '4px 8px' },
      { color: 'rgba(255, 80, 60, 0.35)', pos: '72% -3%', size: '59px 9px' },
      { color: 'rgba(255, 100, 80, 0.35)', pos: '74% 100%', size: '42px 7px' },
      { color: 'rgba(255, 60, 80, 0.3)', pos: '100% 27%', size: '10px 17px' },
      { color: 'rgba(255, 120, 60, 0.4)', pos: '100% 27%', size: '10px 18px' },
      { color: 'rgba(255, 200, 50, 0.3)', pos: '100% 27%', size: '5px 10px' },
      { color: 'rgba(255, 90, 70, 0.3)', pos: '100% 27%', size: '11px 12px' },
    ],
  },
};

function getSmallColorGradients(colorVariant: BorderBeamColorVariant): string {
  const palette = smallColorPalettes[colorVariant];
  return palette.border
    .map(c => `radial-gradient(ellipse ${c.size} at ${c.pos}, ${c.color}, transparent)`)
    .join(',\n    ');
}

function getSmallInnerGradients(colorVariant: BorderBeamColorVariant): string {
  const palette = smallColorPalettes[colorVariant];
  return palette.inner
    .map(c => `radial-gradient(ellipse ${c.size} at ${c.pos}, ${c.color}, transparent)`)
    .join(',\n    ');
}

function getColorGradients(colorVariant: BorderBeamColorVariant): string {
  const palette = colorPalettes[colorVariant];
  return palette.border
    .map(c => `radial-gradient(ellipse ${c.size} at ${c.pos}, ${c.color}, transparent)`)
    .join(',\n    ');
}

function getInnerGradients(colorVariant: BorderBeamColorVariant): string {
  const palette = colorPalettes[colorVariant];
  // Mono variant gets 50% lower opacity
  const baseOpacity = colorVariant === 'mono' ? 0.225 : 0.45;
  return palette.border
    .map(c => {
      const rgba = c.color.replace('rgb(', 'rgba(').replace(')', `, ${baseOpacity})`);
      const smallerSize = c.size.split(' ').map(s => {
        const val = parseInt(s);
        return `${Math.round(val * 0.9)}px`;
      }).join(' ');
      return `radial-gradient(ellipse ${smallerSize} at ${c.pos}, ${rgba}, transparent)`;
    })
    .join(',\n    ');
}

function getSpikeColors(colorVariant: BorderBeamColorVariant, isDark: boolean) {
  const palette = colorPalettes[colorVariant];
  return isDark ? palette.spike : palette.spikeLt;
}

const lineColorPalettes = {
  colorful: {
    dark: [
      { color: 'rgb(255, 50, 100)', sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(40, 180, 220)', sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: 'rgb(50, 200, 80)', sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: 'rgb(180, 40, 240)', sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: 'rgb(255, 160, 30)', sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: 'rgb(100, 70, 255)', sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: 'rgb(40, 140, 255)', sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: 'rgb(240, 50, 180)', sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: 'rgb(30, 185, 170)', sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 },
    ],
    light: [
      { color: 'rgb(255, 50, 100)', sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(40, 140, 255)', sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: 'rgb(50, 200, 80)', sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: 'rgb(180, 40, 240)', sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: 'rgb(30, 185, 170)', sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: 'rgb(100, 70, 255)', sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: 'rgb(40, 140, 255)', sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: 'rgb(255, 120, 40)', sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: 'rgb(240, 50, 180)', sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 },
    ],
  },
  mono: {
    dark: [
      { color: 'rgb(200, 200, 200)', sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(170, 170, 170)', sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: 'rgb(155, 155, 155)', sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: 'rgb(185, 185, 185)', sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: 'rgb(165, 165, 165)', sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: 'rgb(180, 180, 180)', sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: 'rgb(160, 160, 160)', sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: 'rgb(175, 175, 175)', sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: 'rgb(190, 190, 190)', sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 },
    ],
    light: [
      { color: 'rgb(100, 100, 100)', sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(80, 80, 80)', sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: 'rgb(90, 90, 90)', sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: 'rgb(70, 70, 70)', sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: 'rgb(85, 85, 85)', sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: 'rgb(95, 95, 95)', sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: 'rgb(75, 75, 75)', sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: 'rgb(105, 105, 105)', sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: 'rgb(65, 65, 65)', sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 },
    ],
  },
  ocean: {
    dark: [
      { color: 'rgb(100, 80, 220)', sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(60, 120, 255)', sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: 'rgb(80, 100, 200)', sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: 'rgb(130, 70, 255)', sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: 'rgb(70, 130, 255)', sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: 'rgb(120, 80, 255)', sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: 'rgb(90, 110, 230)', sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: 'rgb(110, 90, 240)', sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: 'rgb(140, 100, 255)', sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 },
    ],
    light: [
      { color: 'rgb(80, 60, 200)', sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(50, 100, 220)', sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: 'rgb(70, 90, 190)', sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: 'rgb(110, 60, 220)', sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: 'rgb(60, 110, 230)', sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: 'rgb(100, 70, 240)', sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: 'rgb(80, 100, 210)', sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: 'rgb(90, 80, 225)', sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: 'rgb(120, 90, 245)', sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 },
    ],
  },
  sunset: {
    dark: [
      { color: 'rgb(255, 100, 60)', sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(255, 180, 50)', sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: 'rgb(255, 140, 70)', sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: 'rgb(255, 80, 80)', sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: 'rgb(255, 200, 60)', sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: 'rgb(255, 120, 50)', sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: 'rgb(255, 160, 80)', sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: 'rgb(255, 90, 60)', sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: 'rgb(255, 70, 70)', sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 },
    ],
    light: [
      { color: 'rgb(220, 80, 40)', sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: 'rgb(230, 150, 30)', sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: 'rgb(210, 110, 50)', sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: 'rgb(200, 60, 60)', sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: 'rgb(220, 170, 40)', sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: 'rgb(210, 100, 30)', sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: 'rgb(230, 130, 60)', sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: 'rgb(190, 70, 50)', sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: 'rgb(180, 50, 50)', sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 },
    ],
  },
};

function getLineColorGradients(colorVariant: BorderBeamColorVariant, isDark: boolean, id: string): string {
  const palette = lineColorPalettes[colorVariant][isDark ? 'dark' : 'light'];
  return palette
    .map(c => {
      const offsetXStr = c.offsetX === 0 ? '' : (c.offsetX > 0 ? ` + ${c.offsetX}px` : ` - ${Math.abs(c.offsetX)}px`);
      const offsetYStr = c.offsetY === 0 ? '' : (c.offsetY > 0 ? ` + ${c.offsetY}px` : ` - ${Math.abs(c.offsetY)}px`);
      return `radial-gradient(ellipse calc(${c.sizeW}px * var(--beam-w-${id})) calc(${c.sizeH}px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%${offsetXStr}) calc(100%${offsetYStr}), ${c.color}, transparent)`;
    })
    .join(',\n       ');
}

// Inner gradient data matching v5.css exactly
const lineInnerGradientData = {
  colorful: [
    { color: 'rgba(255, 50, 100, 0.48)', sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: 'rgba(40, 180, 220, 0.42)', sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: 'rgba(50, 200, 80, 0.48)', sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: 'rgba(180, 40, 240, 0.42)', sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: 'rgba(255, 160, 30, 0.50)', sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: 'rgba(100, 70, 255, 0.45)', sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: 'rgba(40, 140, 255, 0.40)', sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: 'rgba(240, 50, 180, 0.45)', sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: 'rgba(30, 185, 170, 0.52)', sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 },
  ],
  mono: [
    { color: 'rgba(200, 200, 200, 0.48)', sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: 'rgba(170, 170, 170, 0.42)', sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: 'rgba(155, 155, 155, 0.48)', sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: 'rgba(185, 185, 185, 0.42)', sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: 'rgba(165, 165, 165, 0.50)', sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: 'rgba(180, 180, 180, 0.45)', sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: 'rgba(160, 160, 160, 0.40)', sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: 'rgba(175, 175, 175, 0.45)', sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: 'rgba(190, 190, 190, 0.52)', sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 },
  ],
  ocean: [
    { color: 'rgba(100, 80, 220, 0.48)', sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: 'rgba(60, 120, 255, 0.42)', sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: 'rgba(80, 100, 200, 0.48)', sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: 'rgba(130, 70, 255, 0.42)', sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: 'rgba(70, 130, 255, 0.50)', sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: 'rgba(120, 80, 255, 0.45)', sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: 'rgba(90, 110, 230, 0.40)', sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: 'rgba(110, 90, 240, 0.45)', sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: 'rgba(140, 100, 255, 0.52)', sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 },
  ],
  sunset: [
    { color: 'rgba(255, 100, 60, 0.48)', sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: 'rgba(255, 180, 50, 0.42)', sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: 'rgba(255, 140, 70, 0.48)', sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: 'rgba(255, 80, 80, 0.42)', sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: 'rgba(255, 200, 60, 0.50)', sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: 'rgba(255, 120, 50, 0.45)', sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: 'rgba(255, 160, 80, 0.40)', sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: 'rgba(255, 90, 60, 0.45)', sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: 'rgba(255, 70, 70, 0.52)', sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 },
  ],
};

function getLineInnerGradients(colorVariant: BorderBeamColorVariant, id: string): string {
  const data = lineInnerGradientData[colorVariant];
  return data
    .map(c => {
      const offsetXStr = c.offsetX === 0 ? '' : (c.offsetX > 0 ? ` + ${c.offsetX}px` : ` - ${Math.abs(c.offsetX)}px`);
      const offsetYStr = c.offsetY === 0 ? '' : ` - ${Math.abs(c.offsetY)}px`;
      return `radial-gradient(ellipse calc(${c.sizeW}px * var(--beam-w-${id})) calc(${c.sizeH}px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%${offsetXStr}) calc(100%${offsetYStr}), ${c.color}, transparent)`;
    })
    .join(',\n    ');
}

const lineBloomColors = {
  colorful: {
    dark: {
      spikes: [
        { color1: 'rgb(100, 70, 255)', color2: 'rgba(100, 70, 255, 1)' },              // 36%
        { color1: 'rgba(255, 170, 40, 0.59)', color2: 'rgba(255, 170, 40, 0.29)' },    // 50%
        { color1: 'rgb(50, 200, 100)', color2: 'rgba(50, 200, 100, 1)' },              // 64%
        { color1: 'rgba(200, 50, 240, 0.91)', color2: 'rgba(200, 50, 240, 0.45)' },    // 78%
        { color1: 'rgb(40, 140, 255)', color2: 'rgba(40, 140, 255, 1)' },              // 92%
      ],
    },
    light: {
      spikes: [
        { color1: 'rgb(80, 50, 200)', color2: 'rgba(80, 50, 200, 0.8)' },      // 36%
        { color1: 'rgba(210, 130, 0, 0.7)', color2: 'rgba(210, 130, 0, 0.46)' }, // 50%
        { color1: 'rgb(30, 160, 70)', color2: 'rgba(30, 160, 70, 0.82)' },     // 64%
        { color1: 'rgb(160, 30, 190)', color2: 'rgba(160, 30, 190, 0.7)' },    // 78%
        { color1: 'rgb(30, 100, 200)', color2: 'rgba(30, 100, 200, 0.78)' },   // 92%
      ],
    },
  },
  mono: {
    dark: {
      spikes: [
        { color1: 'rgb(200, 200, 200)', color2: 'rgba(200, 200, 200, 1)' },
        { color1: 'rgba(180, 180, 180, 0.59)', color2: 'rgba(180, 180, 180, 0.29)' },
        { color1: 'rgb(190, 190, 190)', color2: 'rgba(190, 190, 190, 1)' },
        { color1: 'rgba(170, 170, 170, 0.91)', color2: 'rgba(170, 170, 170, 0.45)' },
        { color1: 'rgb(185, 185, 185)', color2: 'rgba(185, 185, 185, 1)' },
      ],
    },
    light: {
      spikes: [
        { color1: 'rgb(80, 80, 80)', color2: 'rgba(80, 80, 80, 0.8)' },
        { color1: 'rgba(100, 100, 100, 0.7)', color2: 'rgba(100, 100, 100, 0.46)' },
        { color1: 'rgb(70, 70, 70)', color2: 'rgba(70, 70, 70, 0.82)' },
        { color1: 'rgb(90, 90, 90)', color2: 'rgba(90, 90, 90, 0.7)' },
        { color1: 'rgb(85, 85, 85)', color2: 'rgba(85, 85, 85, 0.78)' },
      ],
    },
  },
  ocean: {
    dark: {
      spikes: [
        { color1: 'rgb(100, 80, 255)', color2: 'rgb(100, 80, 255)' },
        { color1: 'rgba(80, 130, 220, 0.59)', color2: 'rgba(80, 130, 220, 0.29)' },
        { color1: 'rgb(60, 100, 255)', color2: 'rgb(60, 100, 255)' },
        { color1: 'rgba(90, 120, 200, 0.91)', color2: 'rgba(90, 120, 200, 0.45)' },
        { color1: 'rgb(120, 90, 255)', color2: 'rgb(120, 90, 255)' },
      ],
    },
    light: {
      spikes: [
        { color1: 'rgb(50, 40, 180)', color2: 'rgba(50, 40, 180, 0.8)' },
        { color1: 'rgba(40, 80, 200, 0.7)', color2: 'rgba(40, 80, 200, 0.46)' },
        { color1: 'rgb(30, 50, 190)', color2: 'rgba(30, 50, 190, 0.82)' },
        { color1: 'rgb(60, 90, 180)', color2: 'rgba(60, 90, 180, 0.7)' },
        { color1: 'rgb(70, 60, 200)', color2: 'rgba(70, 60, 200, 0.78)' },
      ],
    },
  },
  sunset: {
    dark: {
      spikes: [
        { color1: 'rgb(255, 100, 80)', color2: 'rgb(255, 100, 80)' },
        { color1: 'rgba(255, 150, 80, 0.59)', color2: 'rgba(255, 150, 80, 0.29)' },
        { color1: 'rgb(255, 80, 60)', color2: 'rgb(255, 80, 60)' },
        { color1: 'rgba(255, 120, 50, 0.91)', color2: 'rgba(255, 120, 50, 0.45)' },
        { color1: 'rgb(255, 140, 70)', color2: 'rgb(255, 140, 70)' },
      ],
    },
    light: {
      spikes: [
        { color1: 'rgb(200, 60, 30)', color2: 'rgba(200, 60, 30, 0.8)' },
        { color1: 'rgba(220, 100, 20, 0.7)', color2: 'rgba(220, 100, 20, 0.46)' },
        { color1: 'rgb(180, 40, 20)', color2: 'rgba(180, 40, 20, 0.82)' },
        { color1: 'rgb(210, 80, 10)', color2: 'rgba(210, 80, 10, 0.7)' },
        { color1: 'rgb(190, 70, 30)', color2: 'rgba(190, 70, 30, 0.78)' },
      ],
    },
  },
};

function withAlpha(color: string, alpha: number): string {
  const rgbaMatch = color.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);
  if (rgbaMatch) return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${alpha})`;
  const rgbMatch = color.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  if (rgbMatch) return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${alpha})`;
  return color;
}

function attenuateSpike(color: string, factor: number): string {
  const rgbaMatch = color.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  if (rgbaMatch) return `rgba(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}, ${(parseFloat(rgbaMatch[4]) * factor).toFixed(2)})`;
  const rgbMatch = color.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  if (rgbMatch) return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${factor.toFixed(2)})`;
  return color;
}

function getLineBloomGradients(colorVariant: BorderBeamColorVariant, isDark: boolean, id: string): string {
  const spikeColors = getSpikeColors(colorVariant, isDark);
  const bloomData = lineBloomColors[colorVariant][isDark ? 'dark' : 'light'];
  const isMono = colorVariant === 'mono';

  // Mono uses uniform gray so thin spikes at full opacity look like harsh bars.
  // Attenuate opacity and widen the thin gradients so they appear as soft glows.
  const att = isMono ? 0.28 : 1;
  const sc1     = isMono ? attenuateSpike(spikeColors.primary, 0.28) : spikeColors.primary;
  const sc1_mid = isMono ? attenuateSpike(spikeColors.primary, 0.18) : spikeColors.primary;
  const sc2     = isMono ? attenuateSpike(spikeColors.secondary, 0.25) : spikeColors.secondary;
  const sc2_mid = isMono ? withAlpha(spikeColors.secondary, 0.12) : withAlpha(spikeColors.secondary, 0.49);

  const spikes = bloomData.spikes.map(s => isMono
    ? { color1: attenuateSpike(s.color1, att), color2: attenuateSpike(s.color2, att * 0.7) }
    : s
  );

  // Mono: widen narrow spikes (original 0.6–2px) to 4–8px soft glows; shorten heights
  const thinW1 = isMono ? '5px'   : '0.8px';
  const thinW2 = isMono ? '6px'   : '2px';
  const thinW3 = isMono ? '5px'   : '1.2px';
  const thinW4 = isMono ? '4px'   : '0.6px';
  const thinH1 = isMono ? '42px'  : '92px';
  const thinH2 = isMono ? '38px'  : '72px';
  const thinH3 = isMono ? '40px'  : '85px';
  const thinH4 = isMono ? '32px'  : '60px';
  const thinLW = isMono ? '5px'   : '1px'; // light-mode last thin spike

  if (isDark) {
    return `radial-gradient(ellipse calc(${thinW1} * var(--beam-spike-${id})) calc(${thinH1} * var(--beam-h-${id})) at 8% calc(100% - 2px), ${sc1}, ${sc1_mid} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${id})) calc(35px * var(--beam-h-${id})) at 22% calc(100% - 4px), ${sc2}, ${sc2_mid} 50%, transparent 95%),
       radial-gradient(ellipse calc(${thinW2} * (2 - var(--beam-spike-${id}))) calc(${thinH2} * var(--beam-h-${id})) at 36% calc(100% - 3px), ${spikes[0].color1}, ${spikes[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${id})) calc(28px * var(--beam-h-${id})) at 50% calc(100% - 2px), ${spikes[1].color1}, ${spikes[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${thinW3} * (2 - var(--beam-spike2-${id}))) calc(${thinH3} * var(--beam-h-${id})) at 64% calc(100% - 4px), ${spikes[2].color1}, ${spikes[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${id})) calc(45px * var(--beam-h-${id})) at 78% calc(100% - 2px), ${spikes[3].color1}, ${spikes[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${thinW4} * (2 - var(--beam-spike-${id}))) calc(${thinH4} * var(--beam-h-${id})) at 92% calc(100% - 3px), ${spikes[4].color1}, ${spikes[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${id})) calc(15px * var(--beam-spike2-${id})) at calc(var(--beam-x-${id}) * 100%) calc(100% + 1px), rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${id})) calc(40px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.03) 55%, transparent 80%)`;
  } else {
    const sc1_lt = isMono ? attenuateSpike(spikeColors.primary, 0.22) : withAlpha(spikeColors.primary, 0.85);
    const sc2_lt = isMono ? attenuateSpike(spikeColors.secondary, 0.18) : withAlpha(spikeColors.secondary, 0.7);
    return `radial-gradient(ellipse calc(${thinW1} * var(--beam-spike-${id})) calc(${thinH1} * var(--beam-h-${id})) at 8% calc(100% - 2px), ${sc1}, ${sc1_lt} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${id})) calc(35px * var(--beam-h-${id})) at 22% calc(100% - 4px), ${sc2}, ${sc2_lt} 50%, transparent 95%),
       radial-gradient(ellipse calc(${thinW2} * (2 - var(--beam-spike-${id}))) calc(${thinH2} * var(--beam-h-${id})) at 36% calc(100% - 3px), ${spikes[0].color1}, ${spikes[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${id})) calc(28px * var(--beam-h-${id})) at 50% calc(100% - 2px), ${spikes[1].color1}, ${spikes[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${thinW3} * (2 - var(--beam-spike2-${id}))) calc(${thinH3} * var(--beam-h-${id})) at 64% calc(100% - 4px), ${spikes[2].color1}, ${spikes[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${id})) calc(45px * var(--beam-h-${id})) at 78% calc(100% - 2px), ${spikes[3].color1}, ${spikes[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${thinLW} * (2 - var(--beam-spike-${id}))) calc(${thinH4} * var(--beam-h-${id})) at 92% calc(100% - 3px), ${spikes[4].color1}, ${spikes[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${id})) calc(32px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`;
  }
}

interface GenerateStylesOptions {
  id: string;
  borderRadius: number;
  borderWidth: number;
  duration: number;
  strokeOpacity: number;
  innerOpacity: number;
  bloomOpacity: number;
  innerShadow: string;
  size: 'sm' | 'md' | 'line';
  colorVariant: BorderBeamColorVariant;
  staticColors: boolean;
  brightness: number;
  saturation: number;
  hueRange: number;
  theme: 'dark' | 'light';
}

/**
 * Generate complete CSS for a BorderBeam instance
 */
export function generateBeamCSS(options: GenerateStylesOptions): string {
  const { size } = options;

  if (size === 'line') {
    return generateLineVariantCSS(options);
  }
  
  if (size === 'sm') {
    return generateSmallVariantCSS(options);
  }

  return generateBorderVariantCSS(options);
}

function generateSmallVariantCSS(options: GenerateStylesOptions): string {
  const {
    id,
    borderRadius,
    borderWidth,
    duration,
    strokeOpacity,
    innerOpacity,
    bloomOpacity,
    innerShadow,
    colorVariant,
    staticColors,
    brightness,
    saturation,
    hueRange,
    theme,
  } = options;

  const innerRadius = Math.max(0, borderRadius - borderWidth);
  
  const monoOpacityMultiplier = colorVariant === 'mono' ? 0.5 : 1.0;
  const finalStrokeOpacity = strokeOpacity * monoOpacityMultiplier;
  const finalInnerOpacity = innerOpacity * monoOpacityMultiplier;
  const finalBloomOpacity = bloomOpacity * monoOpacityMultiplier;
  
  const hueShiftAnimation = staticColors 
    ? '' 
    : `animation: beam-hue-shift-${id} 12s ease-in-out infinite;`;
  
  const hueShiftKeyframes = staticColors ? '' : `
@keyframes beam-hue-shift-${id} {
  0% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  50% { filter: hue-rotate(${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  100% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
}`;

  const isDark = theme === 'dark';
  
  const whiteGradient = isDark
    ? `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`
    : `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`;

  const colorGradients = getSmallColorGradients(colorVariant);
  const innerGradients = getSmallInnerGradients(colorVariant);

  const bloomGradient = isDark
    ? `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`
    : `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;

  // Small variant uses wider mask to show more of the beam around the smaller element
  const smallMask = `conic-gradient(
    from var(--beam-angle-${id}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;

  return `
@property --beam-angle-${id} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${id} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${id}"] {
  position: relative;
  border-radius: ${borderRadius}px;
  overflow: hidden;
}

[data-beam="${id}"][data-active] {
  animation:
    beam-spin-${id} ${duration}s linear infinite,
    beam-fade-in-${id} 0.6s ease forwards;
}

[data-beam="${id}"][data-fading] {
  animation:
    beam-spin-${id} ${duration}s linear infinite,
    beam-fade-out-${id} 0.5s ease forwards;
}

[data-beam="${id}"][data-active]::after,
[data-beam="${id}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  padding: ${borderWidth}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${whiteGradient},${colorGradients};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${id}) * ${finalStrokeOpacity.toFixed(2)} * var(--beam-strength, 1));
  ${hueShiftAnimation}
}

[data-beam="${id}"][data-active]::before,
[data-beam="${id}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${borderRadius}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${innerGradients};
  box-shadow: inset 0 0 5px 1px ${innerShadow};
  -webkit-mask-image: ${smallMask};
  -webkit-mask-composite: source-over;
  mask-image: ${smallMask};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${id}) * ${finalInnerOpacity.toFixed(2)} * var(--beam-strength, 1));
  ${hueShiftAnimation}
}

[data-beam="${id}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${bloomGradient};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${borderWidth}px;
  filter: blur(8px) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${id}"][data-active] [data-beam-bloom],
[data-beam="${id}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${id}) * ${finalBloomOpacity.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${id} {
  to { --beam-angle-${id}: 360deg; }
}

@keyframes beam-fade-in-${id} {
  to { --beam-opacity-${id}: 1; }
}

@keyframes beam-fade-out-${id} {
  from { --beam-opacity-${id}: 1; }
  to { --beam-opacity-${id}: 0; }
}
${hueShiftKeyframes}
`;
}

function generateBorderVariantCSS(options: GenerateStylesOptions): string {
  const {
    id,
    borderRadius,
    borderWidth,
    duration,
    strokeOpacity,
    innerOpacity,
    bloomOpacity,
    innerShadow,
    colorVariant,
    staticColors,
    brightness,
    saturation,
    hueRange,
    theme,
  } = options;

  const innerRadius = Math.max(0, borderRadius - borderWidth);
  
  // Mono variant gets 50% lower opacity
  const monoOpacityMultiplier = colorVariant === 'mono' ? 0.5 : 1.0;
  const finalStrokeOpacity = strokeOpacity * monoOpacityMultiplier;
  const finalInnerOpacity = innerOpacity * monoOpacityMultiplier;
  const finalBloomOpacity = bloomOpacity * monoOpacityMultiplier;
  
  const hueShiftAnimation = staticColors 
    ? '' 
    : `animation: beam-hue-shift-${id} 12s ease-in-out infinite;`;
  
  const hueShiftKeyframes = staticColors ? '' : `
@keyframes beam-hue-shift-${id} {
  0% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  50% { filter: hue-rotate(${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  100% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
}`;

  const isDark = theme === 'dark';
  
  const whiteGradient = isDark
    ? `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`
    : `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`;

  const colorGradients = getColorGradients(colorVariant);
  const innerGradients = getInnerGradients(colorVariant);

  const bloomGradient = isDark
    ? `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`
    : `conic-gradient(
        from var(--beam-angle-${id}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;

  return `
@property --beam-angle-${id} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${id} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${id}"] {
  position: relative;
  border-radius: ${borderRadius}px;
  overflow: hidden;
}

[data-beam="${id}"][data-active] {
  animation:
    beam-spin-${id} ${duration}s linear infinite,
    beam-fade-in-${id} 0.6s ease forwards;
}

[data-beam="${id}"][data-fading] {
  animation:
    beam-spin-${id} ${duration}s linear infinite,
    beam-fade-out-${id} 0.5s ease forwards;
}

[data-beam="${id}"][data-active]::after,
[data-beam="${id}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  padding: ${borderWidth}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${whiteGradient},${colorGradients};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${id}) * ${finalStrokeOpacity.toFixed(2)} * var(--beam-strength, 1));
  ${hueShiftAnimation}
}

[data-beam="${id}"][data-active]::before,
[data-beam="${id}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${borderRadius}px;
  background: ${innerGradients};
  box-shadow: inset 0 0 9px 1px ${innerShadow};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${id}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${id}) * ${finalInnerOpacity.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${borderRadius}px);
  ${hueShiftAnimation}
}

[data-beam="${id}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${bloomGradient};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${borderWidth}px;
  filter: blur(8px) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${id}"][data-active] [data-beam-bloom],
[data-beam="${id}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${id}) * ${finalBloomOpacity.toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${id} {
  to { --beam-angle-${id}: 360deg; }
}

@keyframes beam-fade-in-${id} {
  to { --beam-opacity-${id}: 1; }
}

@keyframes beam-fade-out-${id} {
  from { --beam-opacity-${id}: 1; }
  to { --beam-opacity-${id}: 0; }
}
${hueShiftKeyframes}
`;
}

function generateLineVariantCSS(options: GenerateStylesOptions): string {
  const {
    id,
    borderRadius,
    borderWidth,
    duration,
    strokeOpacity,
    innerOpacity,
    bloomOpacity,
    innerShadow,
    colorVariant,
    staticColors,
    brightness,
    saturation,
    hueRange,
    theme,
  } = options;

  const innerRadius = Math.max(0, borderRadius - borderWidth);
  const isDark = theme === 'dark';
  
  const finalStrokeOpacity = strokeOpacity;
  const finalInnerOpacity = innerOpacity;
  const finalBloomOpacity = bloomOpacity;
  
  const hueShiftAnimation = staticColors 
    ? '' 
    : `animation: beam-hue-shift-${id} 12s ease-in-out infinite;`;

  const hueShiftBloomAnimation = staticColors
    ? ''
    : `animation: beam-hue-shift-bloom-${id} 8s ease-in-out infinite;`;
  
  const hueShiftKeyframes = staticColors ? '' : `
@keyframes beam-hue-shift-${id} {
  0% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  50% { filter: hue-rotate(${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  100% { filter: hue-rotate(-${hueRange}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${id} {
  0% { filter: blur(8px) hue-rotate(-${hueRange + 10}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(${hueRange + 10}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(-${hueRange + 10}deg) brightness(${brightness.toFixed(2)}) saturate(${saturation.toFixed(2)}); }
}`;

  const whiteHighlight = isDark
    ? `radial-gradient(
        ellipse calc(24px * var(--beam-w-${id})) calc(28px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`
    : `radial-gradient(
        ellipse calc(35px * var(--beam-w-${id})) calc(28px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`;

  const colorGradients = getLineColorGradients(colorVariant, isDark, id);
  const innerGradients = getLineInnerGradients(colorVariant, id);

  const bloomGradients = getLineBloomGradients(colorVariant, isDark, id);

  return `
@property --beam-x-${id} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${id} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${id} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${id} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${id} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${id} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${id} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${id}"] {
  position: relative;
  border-radius: ${borderRadius}px;
  overflow: hidden;
}

[data-beam="${id}"][data-active] {
  animation:
    beam-travel-${id} ${duration}s linear infinite,
    beam-edge-fade-${id} ${duration}s linear infinite,
    beam-breathe-${id} ${(duration * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${id} ${(duration * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${id} ${(duration * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${id} 0.6s ease forwards;
}

[data-beam="${id}"][data-fading] {
  animation:
    beam-travel-${id} ${duration}s linear infinite,
    beam-edge-fade-${id} ${duration}s linear infinite,
    beam-breathe-${id} ${(duration * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${id} ${(duration * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${id} ${(duration * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${id} 0.5s ease forwards;
}

[data-beam="${id}"][data-active]::after,
[data-beam="${id}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  padding: ${borderWidth}px;
  clip-path: inset(0 round ${borderRadius}px);
  background: ${whiteHighlight}, ${colorGradients};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${id})) calc(60px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${id})) calc(60px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${id}) * var(--beam-edge-${id}) * ${finalStrokeOpacity.toFixed(2)} * var(--beam-strength, 1));
  ${hueShiftAnimation}
}

[data-beam="${id}"][data-active]::before,
[data-beam="${id}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${borderRadius}px;
  background: ${innerGradients};
  box-shadow: inset 0 0 9px 1px ${innerShadow};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${id})) calc(60px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${id})) calc(60px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${id}) * var(--beam-edge-${id}) * ${finalInnerOpacity.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${borderRadius}px);
  ${hueShiftAnimation}
}

[data-beam="${id}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${innerRadius}px;
  clip-path: inset(0 round ${borderRadius}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${id})) calc(110px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${id})) calc(110px * var(--beam-h-${id})) at calc(var(--beam-x-${id}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${bloomGradients};
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${id}"][data-active] [data-beam-bloom],
[data-beam="${id}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${id}) * var(--beam-edge-${id}) * ${finalBloomOpacity.toFixed(2)} * var(--beam-strength, 1));
  ${hueShiftBloomAnimation}
}

@keyframes beam-travel-${id} {
  0%   { --beam-x-${id}: 0.06;  --beam-w-${id}: 0.5; }
  10%  { --beam-x-${id}: 0.15;  --beam-w-${id}: 0.8; }
  20%  { --beam-x-${id}: 0.25;  --beam-w-${id}: 1.1; }
  30%  { --beam-x-${id}: 0.35;  --beam-w-${id}: 1.3; }
  40%  { --beam-x-${id}: 0.44;  --beam-w-${id}: 1.45; }
  50%  { --beam-x-${id}: 0.5;   --beam-w-${id}: 1.5; }
  60%  { --beam-x-${id}: 0.56;  --beam-w-${id}: 1.45; }
  70%  { --beam-x-${id}: 0.65;  --beam-w-${id}: 1.3; }
  80%  { --beam-x-${id}: 0.75;  --beam-w-${id}: 1.1; }
  90%  { --beam-x-${id}: 0.85;  --beam-w-${id}: 0.8; }
  100% { --beam-x-${id}: 0.94;  --beam-w-${id}: 0.5; }
}

@keyframes beam-edge-fade-${id} {
  0%    { --beam-edge-${id}: 0; }
  12.5% { --beam-edge-${id}: 0; }
  32.5% { --beam-edge-${id}: 1; }
  67.5% { --beam-edge-${id}: 1; }
  87.5% { --beam-edge-${id}: 0; }
  100%  { --beam-edge-${id}: 0; }
}

@keyframes beam-breathe-${id} {
  0%, 100% { --beam-h-${id}: 0.8; }
  25%      { --beam-h-${id}: 1.25; }
  55%      { --beam-h-${id}: 0.85; }
  80%      { --beam-h-${id}: 1.3; }
}

@keyframes beam-spike-${id} {
  0%   { --beam-spike-${id}: 0.8; }
  25%  { --beam-spike-${id}: 1.3; }
  50%  { --beam-spike-${id}: 0.9; }
  75%  { --beam-spike-${id}: 1.4; }
  100% { --beam-spike-${id}: 0.8; }
}

@keyframes beam-spike2-${id} {
  0%   { --beam-spike2-${id}: 1.2; }
  25%  { --beam-spike2-${id}: 0.7; }
  50%  { --beam-spike2-${id}: 1.4; }
  75%  { --beam-spike2-${id}: 0.8; }
  100% { --beam-spike2-${id}: 1.2; }
}

@keyframes beam-fade-in-${id} {
  to { --beam-opacity-${id}: 1; }
}

@keyframes beam-fade-out-${id} {
  from { --beam-opacity-${id}: 1; }
  to { --beam-opacity-${id}: 0; }
}
${hueShiftKeyframes}
`;
}
