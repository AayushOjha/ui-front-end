import React from 'react';
import PreviewSec from './PreviewSec';
import SettingSec from './SettingSec';
import './cssFiles/TestPage.css';

export default function TestPage() {
  return (
    <div className="container">
      <SettingSec />
      <PreviewSec />
    </div>
  );
}
