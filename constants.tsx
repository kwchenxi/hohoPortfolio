
import React from 'react';

export const COLORS = {
  primary: '#000000',
  primaryContainer: '#F2F2F2',
  secondary: '#444444',
  secondaryContainer: '#E5E5E5',
  surface: '#FAFAFA',
  surfaceVariant: '#EEEEEE',
  outline: '#000000',
  error: '#FF0000'
};

export const ICONS = {
  Home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
  ),
  Projects: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>
  ),
  Highlights: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"/></svg>
  ),
  AI: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 5l-1.42 1.42L15.17 4l-2.42 2.42L11.33 5l2.42-2.42L12.33 1.17l1.42-1.42L15.17 1.17l1.42-1.42 1.42 1.42L16.58 2.58 19 5zm-9 14l-1.42 1.42L6.17 18l-2.42 2.42L2.33 19l2.42-2.42L3.33 15.17l1.42-1.42L6.17 15.17l1.42-1.42 1.42 1.42L7.58 16.58 10 19zm0-14l-1.42 1.42L6.17 4l-2.42 2.42L2.33 5l2.42-2.42L3.33 1.17l1.42-1.42L6.17 1.17l1.42-1.42 1.42 1.42L7.58 2.58 10 5zm9 14l-1.42 1.42L15.17 18l-2.42 2.42L11.33 19l2.42-2.42L12.33 15.17l1.42-1.42L13.75 15.17l1.42-1.42 1.42 1.42L16.58 16.58 19 19z"/></svg>
  ),
  Articles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
  ),
  About: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
  ),
  Search: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  ),
  Back: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
  ),
  Play: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M8 5v14l11-7z"/></svg>
  )
};
