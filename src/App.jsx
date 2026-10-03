import React, { useState } from 'react';
import FileManagement from '../../docs/design-system/design-system.';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('signup');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [fileData, setFileData] = useState({ file: null, category: '' });
  const [files, setFiles] = useState([
    { id: 1, name: 'Project_Specs.pdf', type: 'PDF', size: '2.4 MB', category: 'Documentation', uploaded_at: '2026-10-01' },
    { id: 2, name: 'Final_Design.png', type: 'PNG', size: '5.1 MB', category: 'Design', uploaded_at: '2026-10-02' }
  ]);

  const renderSignup = () => (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }} />
      <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }} />
      <button onClick={() => setCurrentScreen('upload')} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Sign Up</button>
    </div>
  );

  const renderUpload = () => (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Upload File</h2>
      <select value={fileData.category} onChange={(e) => setFileData({...fileData, category: e.target.value})} style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px' }}>
        <option value="">Select Category</option>
        <option value="Documentation">Documentation</option>
        <option value="Design">Design</option>
        <option value="Source Code">Source Code</option>
      </select>
      <div style={{ border: '2px dashed #ccc', padding: '40px', textAlign: 'center', margin: '20px 0' }}>
        <input type="file" onChange={(e) => setFileData({...fileData, file: e.target.files[0]})} />
      </div>
      <button onClick={() => setCurrentScreen('dashboard')} style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>Upload</button>
    </div>
  );

  const renderDashboard = () => (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Dashboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left', padding: '10px' }}>Filename</th>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left', padding: '10px' }}>File Type</th>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left', padding: '10px' }}>File Size</th>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left', padding: '10px' }}>Category</th>
            <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left', padding: '10px' }}>Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>{file.name}</td>
              <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>{file.type}</td>
              <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>{file.size}</td>
              <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>{file.category}</td>
              <td style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>{file.uploaded_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      {currentScreen === 'signup' && renderSignup()}
      {currentScreen === 'upload' && renderUpload()}
      {currentScreen === 'dashboard' && renderDashboard()}
    </div>
  );
}