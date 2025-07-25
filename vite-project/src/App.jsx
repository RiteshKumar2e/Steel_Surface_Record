import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Bar, Line, Radar } from 'react-chartjs-2';
import './App.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, RadialLinearScale, Title, Tooltip, Legend, Filler);

const AmffCnnDashboard = () => {
  const [activeComparison, setActiveComparison] = useState('accuracy');
  const [archInfo, setArchInfo] = useState('Click on architecture blocks to learn more about each component');
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesRef.current.appendChild(particle);
      }
    }
  }, []);

  const animateCard = (e) => {
    e.currentTarget.classList.add('pulse');
    setTimeout(() => e.currentTarget.classList.remove('pulse'), 2000);
  };

  const showEpochDetails = (epoch) => {
    alert(`Showing details for Epoch ${epoch}`);
  };

  const showComparison = (type) => {
    setActiveComparison(type);
    const buttons = document.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  };

  const showArchInfo = (block) => {
    const info = {
      input: "Input layer with 128x128x3 RGB images.",
      conv1: "First convolutional block with 32 filters.",
      seam: "Spatial Attention Module for feature enhancement.",
      ceam: "Cross-scale Feature Fusion Module.",
      fusion: "Multi-scale feature fusion layer.",
      classifier: "Final classifier for 6 defect classes."
    };
    setArchInfo(info[block] || "No information available.");
  };

  const animateDefect = (e) => {
    e.currentTarget.classList.add('pulse');
    setTimeout(() => e.currentTarget.classList.remove('pulse'), 2000);
  };

  const showDetails = (type, category) => {
    alert(`Showing ${type} ${category} details`);
  };

  // Chart data configurations
  const accuracyData = {
    labels: ['AMFF-CNN', 'Base CNN'],
    datasets: [{
      label: 'Accuracy (%)',
      data: [99.65, 93.75],
      backgroundColor: ['#00f2fe', '#4facfe'],
      borderColor: ['#00d4ff', '#00aaff'],
      borderWidth: 1
    }]
  };

  const radarData = {
    labels: ['Precision', 'Recall', 'F1 Score', 'MSE', 'MAPE'],
    datasets: [{
      label: 'AMFF-CNN Metrics',
      data: [99.5, 99.4, 99.45, 0.02, 0.01],
      backgroundColor: 'rgba(79, 172, 254, 0.2)',
      borderColor: '#00f2fe',
      borderWidth: 2,
      pointBackgroundColor: '#00f2fe'
    }]
  };

  const archData = {
    labels: ['AMFF-CNN', 'Base CNN'],
    datasets: [{
      label: 'Parameters (Millions)',
      data: [2.1, 1.5],
      backgroundColor: ['#00f2fe', '#4facfe'],
      borderColor: ['#00d4ff', '#00aaff'],
      borderWidth: 1
    }]
  };

  const lossData = {
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
    datasets: [{
      label: 'AMFF-CNN Loss',
      data: [0.5, 0.4, 0.3, 0.2, 0.1],
      backgroundColor: 'rgba(79, 172, 254, 0.2)',
      borderColor: '#00f2fe',
      borderWidth: 2,
      fill: true
    }]
  };

  const trainingData = {
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
    datasets: [{
      label: 'Training Accuracy',
      data: [0.75, 0.85, 0.90, 0.95, 0.99],
      backgroundColor: 'rgba(79, 172, 254, 0.2)',
      borderColor: '#00f2fe',
      borderWidth: 2,
      fill: true
    }]
  };

  const validationData = {
    labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
    datasets: [{
      label: 'Validation Accuracy',
      data: [0.70, 0.80, 0.85, 0.90, 0.95],
      backgroundColor: 'rgba(79, 172, 254, 0.2)',
      borderColor: '#00f2fe',
      borderWidth: 2,
      fill: true
    }]
  };

  const inferenceData = {
    labels: ['Crazing', 'Inclusion', 'Patches', 'Pitted Surface', 'Rolled-in Scale', 'Scratches'],
    datasets: [{
      label: 'Inference Accuracy (%)',
      data: [99.8, 99.4, 99.6, 99.2, 99.7, 99.9],
      backgroundColor: ['#00f2fe', '#4facfe', '#00d4ff', '#00aaff', '#0077ff', '#0055ff'],
      borderColor: ['#00d4ff', '#00aaff', '#0088ff', '#0066ff', '#0044ff', '#0022ff'],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: 'white' }
      },
      x: {
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: 'white' }
      }
    }
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: { stepSize: 20, color: 'white' },
        grid: { color: 'rgba(255,255,255,0.2)' },
        pointLabels: { color: 'white' }
      }
    }
  };

  return (
    <div className="app">
      <div className="floating-particles" ref={particlesRef}></div>
      
      <div className="container">
        <div className="header">
          <h1>AMFF-CNN Research Dashboard</h1>
          <p>Advanced Multi-scale Feature Fusion for Steel Surface Defect Detection</p>
          <div className="subtitle">Attention-Enhanced Convolutional Neural Network Architecture</div>
        </div>

        <div className="stats-grid">
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">99.65%</div>
            <div className="stat-label">AMFF-CNN Peak Accuracy</div>
            <div className="stat-sublabel">Achieved at Epoch 100</div>
          </div>
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">93.75%</div>
            <div className="stat-label">Base CNN Accuracy</div>
            <div className="stat-sublabel">Standard Architecture</div>
          </div>
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">+5.9%</div>
            <div className="stat-label">Performance Gain</div>
            <div className="stat-sublabel">Significant Improvement</div>
          </div>
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">6</div>
            <div className="stat-label">Defect Categories</div>
            <div className="stat-sublabel">NEU Steel Dataset</div>
          </div>
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">99.3%</div>
            <div className="stat-label">Mean Average Precision</div>
            <div className="stat-sublabel">Multi-class Detection</div>
          </div>
          <div className="stat-card pulse" onClick={animateCard}>
            <div className="stat-value">12ms</div>
            <div className="stat-label">Inference Time</div>
            <div className="stat-sublabel">Per 128×128 Image</div>
          </div>
        </div>

        <div className="training-progress">
          <h2 style={{textAlign: 'center', marginBottom: '30px', background: 'linear-gradient(45deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Training Progression Analysis</h2>
          <div className="epoch-grid">
            {[
              {epoch: 10, accuracy: '78.2%', loss: 0.8543, status: 'Initial Learning', statusClass: 'status-poor'},
              {epoch: 20, accuracy: '85.4%', loss: 0.4721, status: 'Fair Progress', statusClass: 'status-fair'},
              {epoch: 30, accuracy: '90.1%', loss: 0.3156, status: 'Improving', statusClass: 'status-fair'},
              {epoch: 40, accuracy: '93.8%', loss: 0.2094, status: 'Good Performance', statusClass: 'status-good'},
              {epoch: 50, accuracy: '96.2%', loss: 0.1487, status: 'Better Results', statusClass: 'status-good'},
              {epoch: 60, accuracy: '97.5%', loss: 0.1129, status: 'Very Good', statusClass: 'status-good'},
              {epoch: 80, accuracy: '98.7%', loss: 0.0743, status: 'Excellent', statusClass: 'status-excellent'},
              {epoch: 100, accuracy: '99.65%', loss: 0.0421, status: 'Best Result', statusClass: 'status-excellent'}
            ].map((item, index) => (
              <div key={index} className="epoch-card" onClick={() => showEpochDetails(item.epoch)}>
                <div className="epoch-number">Epoch {item.epoch}</div>
                <div className="epoch-accuracy">{item.accuracy}</div>
                <div className="epoch-loss">Loss: {item.loss}</div>
                <div className={`epoch-status ${item.statusClass}`}>{item.status}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="interactive-section">
          <h2 style={{color: 'white', marginBottom: '20px'}}>Interactive Model Analysis</h2>
          <button className={`toggle-btn ${activeComparison === 'accuracy' ? 'active' : ''}`} onClick={() => showComparison('accuracy')}>Accuracy Comparison</button>
          <button className={`toggle-btn ${activeComparison === 'metrics' ? 'active' : ''}`} onClick={() => showComparison('metrics')}>Detailed Metrics</button>
          <button className={`toggle-btn ${activeComparison === 'training' ? 'active' : ''}`} onClick={() => showComparison('training')}>Training Curves</button>
          <button className={`toggle-btn ${activeComparison === 'loss' ? 'active' : ''}`} onClick={() => showComparison('loss')}>Loss Analysis</button>
          <button className={`toggle-btn ${activeComparison === 'confusion' ? 'active' : ''}`} onClick={() => showComparison('confusion')}>Confusion Matrix</button>
        </div>

        <div className="main-content">
          <div className="chart-container">
            <div className="chart-title">Model Accuracy Comparison</div>
            <Bar data={accuracyData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 100}}}} />
          </div>
          <div className="chart-container">
            <div className="chart-title">Performance Metrics Radar</div>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>

        <div className="technical-specs">
          <h2 style={{textAlign: 'center', marginBottom: '30px', background: 'linear-gradient(45deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Technical Specifications</h2>
          <div className="specs-grid">
            {[
              {label: 'Dataset', value: 'NEU Steel Surface Defect Database'},
              {label: 'Input Resolution', value: '128 × 128 × 3 RGB Images'},
              {label: 'Training Samples', value: '1,800 Images (300 per class)'},
              {label: 'Validation Split', value: '80% Training, 20% Validation'},
              {label: 'Optimizer', value: 'Adam (lr=0.001, β₁=0.9, β₂=0.999)'},
              {label: 'Batch Size', value: '32 samples per batch'},
              {label: 'SEAM Dilation Rates', value: '[1, 2, 3, 4] Multi-scale Feature Extraction'},
              {label: 'Model Parameters', value: '~2.1M trainable parameters'}
            ].map((spec, index) => (
              <div key={index} className="spec-item">
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="architecture-section">
          <h2 style={{textAlign: 'center', marginBottom: '30px', background: 'linear-gradient(45deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>AMFF-CNN Architecture</h2>
          <div className="architecture-diagram">
            <div className="arch-block" onClick={() => showArchInfo('input')}>Input Layer<br/>128×128×3</div>
            <div className="arch-block" onClick={() => showArchInfo('conv1')}>Conv2D Block<br/>32 filters</div>
            <div className="arch-block" onClick={() => showArchInfo('seam')}>SEAM Module<br/>Spatial Attention</div>
            <div className="arch-block" onClick={() => showArchInfo('ceam')}>CEAM Module<br/>Cross-scale Fusion</div>
            <div className="arch-block" onClick={() => showArchInfo('fusion')}>Feature Fusion<br/>Multi-scale</div>
            <div className="arch-block" onClick={() => showArchInfo('classifier')}>Classifier<br/>6 Classes</div>
          </div>
          <div className="arch-info">
            {archInfo}
          </div>
        </div>

        <div className="defect-types">
          {[
            {icon: '🔹', name: 'Crazing', desc: 'Fine surface cracks in steel coating', accuracy: '99.8%'},
            {icon: '🔸', name: 'Inclusion', desc: 'Foreign material embedded in steel', accuracy: '99.4%'},
            {icon: '🔶', name: 'Patches', desc: 'Irregular surface texture patches', accuracy: '99.6%'},
            {icon: '🔴', name: 'Pitted Surface', desc: 'Small holes and cavities', accuracy: '99.2%'},
            {icon: '🔵', name: 'Rolled-in Scale', desc: 'Oxide scale pressed into surface', accuracy: '99.7%'},
            {icon: '⚡', name: 'Scratches', desc: 'Linear mechanical damage', accuracy: '99.9%'}
          ].map((defect, index) => (
            <div key={index} className="defect-card" onClick={animateDefect}>
              <span className="defect-icon">{defect.icon}</span>
              <h3>{defect.name}</h3>
              <p>{defect.desc}</p>
              <div className="defect-accuracy">AMFF-CNN: {defect.accuracy}</div>
            </div>
          ))}
        </div>

        <div className="interactive-section">
          <h2 style={{color: 'white', marginBottom: '20px'}}>Model Architecture Overview</h2>
          <button className="toggle-btn" onClick={() => showDetails('architecture', 'amff')}>AMFF-CNN Architecture</button>
          <button className="toggle-btn" onClick={() => showDetails('architecture', 'base')}>Base CNN Architecture</button>
          <button className="toggle-btn" onClick={() => showDetails('architecture', 'comparison')}>Architecture Comparison</button>
        </div>

        <div className="main-content">
          <div className="chart-container">
            <div className="chart-title">AMFF-CNN vs Base CNN</div>
            <Bar data={archData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 3}}}} />
          </div>
          <div className="chart-container">
            <div className="chart-title">Loss Comparison</div>
            <Line data={lossData} options={chartOptions} />
          </div>
        </div>

        <div className="interactive-section">
          <h2 style={{color: 'white', marginBottom: '20px'}}>Model Training and Evaluation</h2>
          <button className="toggle-btn" onClick={() => showDetails('training', 'training')}>Training Curves</button>
          <button className="toggle-btn" onClick={() => showDetails('training', 'validation')}>Validation Curves</button>
          <button className="toggle-btn" onClick={() => showDetails('training', 'confusion')}>Confusion Matrix</button>
          <button className="toggle-btn" onClick={() => showDetails('training', 'detailed')}>Detailed Metrics</button>
        </div>

        <div className="main-content">
          <div className="chart-container">
            <div className="chart-title">Training Curves</div>
            <Line data={trainingData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 1}}}} />
          </div>
          <div className="chart-container">
            <div className="chart-title">Validation Curves</div>
            <Line data={validationData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 1}}}} />
          </div>
        </div>

        <div className="interactive-section">
          <h2 style={{color: 'white', marginBottom: '20px'}}>Model Inference and Results</h2>
          <button className="toggle-btn" onClick={() => showDetails('inference', 'results')}>Inference Results</button>
          <button className="toggle-btn" onClick={() => showDetails('inference', 'examples')}>Example Images</button>
          <button className="toggle-btn" onClick={() => showDetails('inference', 'metrics')}>Detailed Metrics</button>
        </div>

        <div className="main-content">
          <div className="chart-container">
            <div className="chart-title">Inference Results</div>
            <Bar data={inferenceData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 100}}}} />
          </div>
          <div className="chart-container">
            <div className="chart-title">Performance Metrics</div>
            <Bar data={inferenceData} options={{...chartOptions, scales: {...chartOptions.scales, y: {...chartOptions.scales.y, max: 100}}}} />
          </div>
        </div>

        <footer style={{textAlign: 'center', margin: '50px 0', color: 'white', opacity: 0.8}}>
          <p>&copy; 2023 AMFF-CNN Research Team. All rights reserved.</p>
          <p>Contact: <a href="mailto:amff-cnn@example.com">amff-cnn@example.com</a></p>
        </footer>
      </div>
    </div>
  );
};

export default AmffCnnDashboard;