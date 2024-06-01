"use client"

import NextTopLoader from 'nextjs-toploader';
import { useState, useEffect } from 'react';

export default function PageLoading() {
  return (
    <NextTopLoader 
      showSpinner={false} 
      shadow="0 0 10px var(--page-bar),0 0 5px var(--page-bar)"
      template={`
        <div class="bar" role="bar" style="background: var(--page-bar);">
          <div class="peg"></div>
        </div>
        <div class="spinner" role="spinner">
          <div class="spinner-icon" ></div>
        </div>
      `}
    />
  );
}